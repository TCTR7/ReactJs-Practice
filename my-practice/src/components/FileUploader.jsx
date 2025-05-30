// 📂 components/uploader/FileUploader.jsx
import React, { useState } from "react";
import { useChunkUploader } from "./useChunkUploader";

export default function FileUploader() {
  const [file, setFile] = useState(null);
  const { progress, totalProgress, uploadChunks, uploading } =
    useChunkUploader();

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (selected) setFile(selected);
  };

  const handleUpload = () => {
    if (file) uploadChunks(file);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">📤 Chunk File Upload</h2>

      <input type="file" onChange={handleFileChange} className="mb-4" />

      <button
        onClick={handleUpload}
        disabled={!file || uploading}
        className="bg-indigo-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        Upload
      </button>

      {uploading && (
        <div className="mt-4 space-y-2">
          <p className="font-medium">Tổng tiến trình: {totalProgress}%</p>
          <progress
            value={totalProgress}
            max="100"
            className="w-full"
          ></progress>

          <div className="space-y-1 text-sm mt-2">
            {progress.map((p, idx) => (
              <div key={idx}>
                Chunk {idx + 1}: {p}%
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
