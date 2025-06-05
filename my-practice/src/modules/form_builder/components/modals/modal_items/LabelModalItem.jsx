export default function LabelModalItem({ value, onLabelModalItemChange }) {
  return (
    <div>
      <label className="block font-medium mb-1">Label</label>
      <input
        className="w-full border border-gray-300 rounded p-2"
        value={value}
        onChange={onLabelModalItemChange}
      />
    </div>
  );
}
