import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";

export default function SortableOption(props) {
  const { id, index, option, onUpdate, onRemove } = props;
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

  return (
    <div
      ref={setNodeRef}
      className={`my-2 bg-gray-200 rounded text-center border border-gray-300 transition duration-200 ${
        isDragging ? "opacity-50" : "hover:bg-gray-300 cursor-move"
      }`}
    >
      <div
        style={style}
        className="flex items-center w-full"
      >
        <div {...attributes} {...listeners} className="cursor-move mr-1 ">
          <GripVertical className="h-12 w-6 text-gray-500" />
        </div>
        <div className="grid grid-cols-8 hover:cursor-move ">
          <div className="col-span-6 grid grid-cols-7 gap-1 mr-1">
            <input
              type="text"
              value={option.label || ""}
              onChange={(e) => onUpdate(index, "label", e.target.value)}
              className="col-span-3 px-1 border-b whitespace-nowrap truncate focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 "
            />
            <input
              type="text"
              value={option.value || ""}
              onChange={(e) => onUpdate(index, "value", e.target.value)}
              className="col-span-4 px-1 border-b whitespace-nowrap truncate focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>
          <button
            className="col-span-2 text-white rounded bg-gray-400 py-2 px-1 hover:bg-gray-600 hover:cursor-pointer focus:outline-none transition duration-200"
            onClick={() => {
              console.log("Removing option at index:", index);
              if (isDragging) return; // Prevent removal while dragging
              onRemove(index);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
