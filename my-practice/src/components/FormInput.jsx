import React from 'react'

export default function FormInput(props) {
  const { register, errors, label, name, type = "text", placeholder } = props;
  return (
    <div>
      <label htmlFor={name} className="block font-medium">
        {label}
        </label>
        <input
            id={name}
            type={type}
            {...register(name)}
            placeholder={placeholder}
            className="input"
        />
      <p className="text-red-500 text-sm">{errors[name]?.message}</p>
    </div>
  )
}
