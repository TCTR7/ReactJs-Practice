export default function TextModalItem({ value, onTextModalItemChange }) {
  return (
    <div>
      <label htmlFor="placeholder-input" className="block font-medium mb-1">
        Placeholder
      </label>
      <input
        id="placeholder-input"
        className="w-full border border-gray-300 rounded p-2"
        value={value}
        onChange={onTextModalItemChange}
      />
    </div>
  );
}
