import React from 'react'

export default function SelectField() {
  return (
    <select className='w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200'>
      <option value="" disabled selected>Select an option</option>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
      <option value="option4">Option 4</option>
      <option value="option5">Option 5</option>
    </select>
  )
}
