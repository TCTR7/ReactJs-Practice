export default function CheckBoxModalItem({
  checked,
  onCheckboxModalItemChange,
}) {
  return (
    <div>
      <label className="inline-flex items-center gap-2">
        <input
          type="checkbox"
          checked={checked}
          onChange={onCheckboxModalItemChange}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
        />
        Required
      </label>
    </div>
  );
}
