import { useFormBuilderStore } from "../../../stores/useFormBuilderStore";
import TextField from "./TextField";
import RadioField from "./RadioField";
import CheckboxField from "./CheckboxField";
import NumberField from "./NumberField";
import SelectField from "./SelectField";


export default function CanvasFieldItemContainer() {
  const fields = useFormBuilderStore((state) => state.fields);
  const selectField = useFormBuilderStore((state) => state.selectField);
  const deleteField = useFormBuilderStore((state) => state.deleteField);
  function getFieldElement(field) {
    switch (field.type) {
      case "text":
        return <TextField placeholder={field.placeholder} />;
      case "radio":
        return <RadioField />;
      case "checkbox":
        return <CheckboxField />;
      case "number":
        return <NumberField />;
      case "select":
        console.log("SelectField options:", field.options);
        return <SelectField options={field.options} />;
      default:
        return null;
    }
  }

  return (
    <div className="space-y-3 overflow-y-auto">
      {fields.map((field) => (
        <div
          key={field.id}
          className=" p-3 bg-gray-100 rounded border border-gray-300"
        >
          <div className="flex items-center justify-between mb-2">
            <label className="block mb-2 font-semibold">{field.label}</label>
            <div className="flex gap-2">
              <button
                className="text-gray-500 hover:text-gray-700 border rounded px-2 py-1 text-xs bg-blue-200 hover:bg-blue-800 hover:text-white hover:cursor-pointer transition duration-200"
                onClick={() => selectField(field.id)}
              >
                Edit Field
              </button>
              <button
                className="text-gray-500 hover:text-gray-700 border rounded px-2 py-1 text-xs border-red-400 hover:bg-red-700 hover:text-white hover:border-red-600 hover:cursor-pointer transition duration-200"
                onClick={() => deleteField(field.id)}
              >
                Delete Field
              </button>
            </div>
          </div>
          {getFieldElement(field)}
        </div>
      ))}
    </div>
  );
}
