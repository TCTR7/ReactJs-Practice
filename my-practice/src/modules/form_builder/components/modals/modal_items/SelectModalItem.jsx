export default function SelectModalItem({ value, onSelectModalItemChange }) {
  return (
    <div>
      <label className="block font-medium mb-1">
        Options (one line - one option)
      </label>
      <textarea
        className="w-full border p-2 rounded min-h-[100px]"
        value={(value || []).join("\n")}
        onChange={onSelectModalItemChange}
      />
    </div>
  );
}
