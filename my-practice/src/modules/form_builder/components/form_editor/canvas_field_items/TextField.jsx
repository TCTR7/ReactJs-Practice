import React from "react";

export default function TextField({ placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder || "Enter text here..."}
      className="w-full p-2 border rounded hover:cursor-text focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
    />
  );
}
