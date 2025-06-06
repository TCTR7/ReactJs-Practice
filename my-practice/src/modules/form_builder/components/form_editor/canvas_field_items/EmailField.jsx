import React from "react";

export default function EmailField({placeholder}) {
  return (
    <input
      type="email"
      placeholder={placeholder || "Enter your email..."}
      className="w-full p-2 border rounded hover:cursor-text focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
    />
  );
}
