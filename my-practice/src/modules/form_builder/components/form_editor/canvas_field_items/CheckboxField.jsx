import React from "react";

export default function CheckboxField({ label }) {
  return (
    <label className="flex">
      <input
        type="checkbox"
        className="mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
      />
    </label>
  );
}
