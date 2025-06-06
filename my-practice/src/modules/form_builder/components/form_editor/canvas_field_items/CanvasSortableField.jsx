import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import { useFormBuilderStore } from "../../../stores/useFormBuilderStore";
import TextField from "./TextField";
import RadioField from "./RadioField";
import CheckboxField from "./CheckboxField";
import NumberField from "./NumberField";
import SelectField from "./SelectField";
export default function CanvasSortableField({ field, id }) {
  console.log("CanvasSortableField field:", field);
  const { selectField, deleteField } = useFormBuilderStore();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: isDragging ? transition : undefined,
    opacity: isDragging ? 0.5 : 1,
  };

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
    <div
      ref={setNodeRef}
      className={`my-2 bg-gray-200 rounded text-center border border-gray-300 transition duration-200 ${
        isDragging ? "opacity-50" : "hover:bg-gray-300 cursor-move"
      }`}
    >
      <div
        style={style}
        className="p-1 bg-gray-100 rounded border border-gray-300"
      >
        <div className="flex items-center my-1">
          <div {...attributes} {...listeners} className="cursor-move mr-1 border-r pr-2">
            <GripVertical className="h-20 w-8 text-gray-500" />
          </div>
          <div className="flex-1 p-1">
            <div className="flex items-center justify-between mb-2">
              <label className="block font-semibold">{field.label}</label>
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
        </div>
      </div>
    </div>
  );
}
