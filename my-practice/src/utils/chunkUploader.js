export function chunkFile(file, chunkSize = 1024 * 1024) {
  const chunks = [];
  let offset = 0;
  let index = 0;

  while (offset < file.size) {
    const chunk = file.slice(offset, offset + chunkSize);
    chunks.push({ chunk, index, start: offset });
    offset += chunkSize;
    index++;
  }

  return chunks;
}

function createFormData(chunk, index, fileId) {
  const formData = new FormData();
  formData.append("chunk", chunk);
  formData.append("index", index);
  formData.append("fileId", fileId);
  return formData;
}

export async function uploadChunk({ chunkData, fileId, retryLimit = 3 }) {
  const { chunk, index } = chunkData;
  let attempts = 0;

  while (attempts < retryLimit) {
    try {
      const formData = createFormData(chunk, index, fileId);

      const res = await fetch("/api/upload-chunk", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error(`Chunk ${index} failed`);

      return true; // Success
    } catch (err) {
      console.error(`Error uploading chunk ${index}:`, err);
      attempts++;
      if (attempts >= retryLimit) {
        return false;
      }
    }
  }
}
