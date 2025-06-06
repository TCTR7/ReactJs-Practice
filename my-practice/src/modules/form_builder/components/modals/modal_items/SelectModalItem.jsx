import SelectOptionsDragDropAbleContainer from "../SelectOptionsDragDropAbleContainer";

export default function SelectModalItem({ options, onSelectModalItemChange }) {
  function addOption() {
    const newOption = { label: "Select Option", value: `option_${Date.now()}` };
    const updatedOptions = [...(options || []), newOption];
    onSelectModalItemChange(updatedOptions);
  }

  return (
    <div>
      <label className="block font-medium mb-2">
        Options (one line - one option)
      </label>
      <button
        className="text-sm bg-blue-500 text-white px-2 py-1 rounded mb-2 hover:bg-blue-600 hover:cursor-pointer transition duration-200"
        onClick={addOption}
      >
        Add Option
      </button>
      <div className="grid grid-cols-3 gap-2 mb-2 items-center text-center border-b pb-2">
        <span className="font-medium">Option Label</span>
        <span className="font-medium">Option Value</span>
        <span className="font-medium">Actions</span>
      </div>
      <SelectOptionsDragDropAbleContainer
          options={options}
          onChangeHandler={onSelectModalItemChange}
        />
    </div>
  );
}
