// hooks/useChunkUploader.js
import { useState, useRef, useCallback } from "react";

const CHUNK_SIZE = 1024 * 1024; // 1MB
const MAX_CONCURRENT = 3;
const RETRY_LIMIT = 3;

export function useChunkUploader(file) {
  const [progress, setProgress] = useState(0);
  const [isUploading, setUploading] = useState(false);
  const [isPaused, setPaused] = useState(false);
  const [error, setError] = useState(null);
  const [chunkStatus, setChunkStatus] = useState([]);

  const controllerRef = useRef({});

  const uploadChunk = async (chunk, index, attempt = 1) => {
    setChunkStatus((prev) =>
      prev.map((s, i) => (i === index ? { ...s, status: "uploading" } : s))
    );

    try {
      const formData = new FormData();
      formData.append("chunk", chunk);
      formData.append("index", index);
      formData.append("filename", file.name);

      await fetch("/upload", { method: "POST", body: formData });

      setChunkStatus((prev) =>
        prev.map((s, i) => (i === index ? { ...s, status: "success" } : s))
      );
      return true;
    } catch (err) {
      if (attempt < RETRY_LIMIT) {
        return uploadChunk(chunk, index, attempt + 1);
      } else {
        setChunkStatus((prev) =>
          prev.map((s, i) => (i === index ? { ...s, status: "failed" } : s))
        );
        throw err;
      }
    }
  };

  const startUpload = useCallback(async () => {
    if (!file) return;
    setUploading(true);
    setPaused(false);
    setError(null);

    const totalChunks = Math.ceil(file.size / CHUNK_SIZE);
    setChunkStatus(
      Array.from({ length: totalChunks }, (_, i) => ({
        index: i,
        status: "pending",
      }))
    );

    const uploaded = Array(totalChunks).fill(false);
    let active = 0;
    let currentIndex = 0;

    return new Promise((resolve) => {
      const processNext = () => {
        if (isPaused) return;

        while (active < MAX_CONCURRENT && currentIndex < totalChunks) {
          const start = currentIndex * CHUNK_SIZE;
          const end = Math.min(file.size, start + CHUNK_SIZE);
          const chunk = file.slice(start, end);
          const index = currentIndex++;

          active++;
          controllerRef.current[index] = uploadChunk(chunk, index)
            .then(() => {
              uploaded[index] = true;
              setProgress((prev) => prev + 100 / totalChunks);
            })
            .catch(() => {
              setError(`Chunk ${index + 1} failed`);
            })
            .finally(() => {
              active--;
              if (uploaded.every(Boolean)) {
                setUploading(false);
                resolve();
              } else {
                processNext();
              }
            });
        }
      };
      processNext();
    });
  }, [file, isPaused]);

  const pause = () => {
    setPaused(true);
  };

  const resume = () => {
    if (file) {
      startUpload();
    }
  };

  return {
    progress,
    isUploading,
    isPaused,
    error,
    chunkStatus,
    startUpload,
    pause,
    resume,
  };
}
