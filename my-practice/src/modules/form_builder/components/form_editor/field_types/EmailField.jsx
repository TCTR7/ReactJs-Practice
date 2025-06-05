import React from "react";

export default function EmailField() {
  return (
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
      disabled
    />
  );
}
