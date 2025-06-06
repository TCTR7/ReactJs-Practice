import React from "react";

export default function RadioField({ options }) {
  if (!options.length) {
    return <p className="text-gray-500">No options available</p>;
  }
  return (
    <div className="space-y-1">
      {options.map((option, index) => (
        <label key={index} className="flex items-center space-x-2">
          <input
            type="radio"
            name="radio-field"
            value={option.value}
            className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
          />
          <span className="text-gray-700">
            {option.label || `Option ${index + 1}`}
          </span>
        </label>
      ))}
    </div>
  );
}
