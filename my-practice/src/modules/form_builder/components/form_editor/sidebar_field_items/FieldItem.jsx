import { useDraggable } from "@dnd-kit/core";
import { useFormBuilderStore } from "../../../stores/useFormBuilderStore";
import {
  LucideText,
  LucideList,
  LucideCheckSquare,
  LucideCircleDot,
  LucideCalendar,
} from "lucide-react";

const fieldIcons = {
  text: LucideText,
  select: LucideList,
  checkbox: LucideCheckSquare,
  radio: LucideCircleDot,
  date: LucideCalendar,
};

export default function FieldItem({ type }) {
  const { attributes, listeners, isDragging, setNodeRef } = useDraggable({
    id: type,
  });
  const addField = useFormBuilderStore((state) => state.addField);

  const Icon = fieldIcons[type] || LucideText;
  const label = type.charAt(0).toUpperCase() + type.slice(1);

  const handleClick = () => {
    if (isDragging) return; // Prevent adding while dragging
    addField(type);
  };

  return (
    <div
      ref={setNodeRef}
      className={`my-3 p-2 bg-gray-200 rounded text-center border border-gray-300 transition duration-200 ${
        isDragging ? "opacity-50" : "hover:bg-gray-300 cursor-move"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <div
          className="flex items-center gap-2 flex-1"
          {...listeners}
          {...attributes}
        >
          <Icon className="h-5 w-5 text-gray-600" />
          <span className="text-sm">{label}</span>
        </div>
        <button
          onClick={handleClick}
          className="text-sm text-blue-500 hover:text-blue-700 focus:outline-none hover:cursor-pointer rounded border p-1 bg-blue-100 hover:bg-blue-200 transition duration-200"
          aria-label={`Add ${label} field`}
        >
          Add
        </button>
      </div>
    </div>
  );
}
