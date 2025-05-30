// pages/FileUploadPage.jsx
import { useState } from "react";
import { useChunkUploader } from "../hooks/useChunkUploader";

export default function FileUploadPage() {
  const [file, setFile] = useState(null);
  const [dragOver, setDragOver] = useState(false);

  const {
    progress,
    isUploading,
    isPaused,
    error,
    chunkStatus,
    startUpload,
    pause,
    resume,
  } = useChunkUploader(file);

  const handleFileSelect = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const droppedFile = e.dataTransfer.files[0];
    setFile(droppedFile);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded space-y-6">
      <h2 className="text-2xl font-semibold">
        📤 Chunk File Upload (with Drag & Drop)
      </h2>

      <div
        className={`w-full h-40 border-2 border-dashed rounded flex items-center justify-center text-gray-500 transition ${
          dragOver ? "border-blue-500 bg-blue-50" : "border-gray-300"
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
      >
        {file ? (
          <p className="text-sm text-center">{file.name}</p>
        ) : (
          <p className="text-sm text-center">
            Drag & drop a file here or use the input below
          </p>
        )}
      </div>

      <input type="file" onChange={handleFileSelect} />

      <div className="flex gap-3">
        <button
          onClick={startUpload}
          disabled={!file || isUploading}
          className="px-4 py-2 bg-green-600 text-white rounded disabled:opacity-50"
        >
          Start
        </button>
        <button
          onClick={pause}
          disabled={!isUploading || isPaused}
          className="px-4 py-2 bg-yellow-500 text-white rounded"
        >
          Pause
        </button>
        <button
          onClick={resume}
          disabled={!file || !isPaused}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Resume
        </button>
      </div>

      <div className="w-full h-4 bg-gray-200 rounded overflow-hidden">
        <div
          className="bg-green-500 h-full transition-all"
          style={{ width: `${progress.toFixed(1)}%` }}
        />
      </div>
      <p className="text-sm text-gray-600">{progress.toFixed(1)}% uploaded</p>

      {error && <p className="text-red-600">❌ {error}</p>}

      {chunkStatus.length > 0 && (
        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold mb-2">📦 Chunk Status</h3>
          <ul className="max-h-60 overflow-y-auto space-y-1 text-sm">
            {chunkStatus.map(({ index, status }) => (
              <li key={index} className="flex justify-between">
                <span>Chunk {index + 1}</span>
                <span
                  className={`capitalize font-semibold ${
                    status === "success"
                      ? "text-green-600"
                      : status === "uploading"
                      ? "text-blue-600"
                      : status === "failed"
                      ? "text-red-600"
                      : "text-gray-500"
                  }`}
                >
                  {status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
