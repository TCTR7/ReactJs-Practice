import React from 'react'

export default function SelectField({ options }) {
  if (!options.length) {
    return <p className='text-gray-500'>No options available</p>
  }
  return (
    <select className='w-full p-2 border rounded hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'>
      <option value="" disabled selected>Select an option</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label || `Option ${index + 1}`}
        </option>
      ))}
    </select>
  )
}
