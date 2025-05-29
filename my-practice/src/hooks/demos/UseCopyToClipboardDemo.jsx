import React from "react";
import { useCopyToClipboard } from "../useCopyToClipboard"; // Adjust the import path as necessary

export default function UseCopyToClipboardDemo() {
  const { copied, copy } = useCopyToClipboard();
  const textToCopy = "This is a sample text to copy!";
  return (
    <div className="bg-white p-6 shadow-md rounded-lg border border-slate-300">
      <h2 className="text-xl font-bold mb-2 whitespace-nowrap truncate">
        🗃️ useCopyToClipboardDemo
      </h2>
      <div className="flex flex-col items-center justify-center border p-3 rounded mb-4 ">
        <span className="text-sm text-slate-700">{textToCopy}</span>
        <button
          onClick={() => copy(textToCopy)}
          className="mt-4 w-full mx-auto bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-200"
        >
          {" "}
          {copied ? "✅ Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
}
