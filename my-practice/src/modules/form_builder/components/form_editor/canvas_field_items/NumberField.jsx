import React from "react";

export default function NumberField({placeholder}) {
  return (
    <input
      type="number"
      placeholder={placeholder || "Enter a number..."}
      className="w-full p-2 border rounded hover:cursor-text focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
    />
  );
}
