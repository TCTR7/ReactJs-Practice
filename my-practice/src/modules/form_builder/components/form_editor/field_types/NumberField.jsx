import React from "react";

export default function NumberField() {
  return (
    <input
      type="number"
      placeholder="Enter a number"
      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      disabled
    />
  );
}
