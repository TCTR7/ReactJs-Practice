import React, { useRef } from "react";
import { useFormBuilderStore } from "../../stores/useFormBuilderStore";

export default function FormToolBar() {
  const { fields, setField } = useFormBuilderStore();
  const fileInputRef = useRef(null);

  function habdleExportJson() {
    const json = JSON.stringify(fields, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "form_fields.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function handleImportJson(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target.result);
        if (Array.isArray(parsed)) {
          setField(parsed);
        } else {
          alert("This file does not contain valid JSON data for form fields.");
        }
      } catch (err) {
        alert("Error parsing JSON file: " + err.message);
      }
    };
    reader.readAsText(file);
  }
  return (
    <div className="flex gap-4 mb-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 hover:cursor-pointer"
        onClick={habdleExportJson}
      >
        Export Json
      </button>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 hover:cursor-pointer"
        onClick={() => fileInputRef.current.click()}
      >
        Import Json
      </button>
      <input
        type="file"
        accept="application/json"
        ref={fileInputRef}
        className="hidden"
        onChange={handleImportJson}
      />
    </div>
  );
}
