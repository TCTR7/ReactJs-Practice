import React, { useState } from "react";
import { useLocalStorage } from "../useLocalStorage";

export default function UseLocalStorageDemo() {
  const [name, setName] = useLocalStorage("username", "");
  const [temp, setTemp] = useState(name);
  const handleSave = () => {
    setName(temp);
  };
  return (
    <div className="bg-white p-6 shadow-md rounded-lg border border-slate-300">
      <h2 className="text-xl font-bold mb-2 whitespace-nowrap truncate">🗃️ useLocalStorage</h2>
      <p className="text-sm text-slate-600 mb-4">
        Save user's value to LocalStorage
      </p>
      <input
        type="text"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
        placeholder="Enter your name"
        className="input"
      />
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-4 hover:bg-blue-600 hover:cursor-pointer transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Save
      </button>
      <p className="mt-4 text-sm text-slate-600">Stored Name: {name}</p>
    </div>
  );
}
