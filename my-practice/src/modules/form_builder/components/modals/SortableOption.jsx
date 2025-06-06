import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function SortableOption(props) {
  const { id, index, option, onUpdate, onRemove } = props;
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: isDragging ? transition : undefined,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="grid grid-cols-3 gap-2 mb-2 border-b hover:cursor-move rounded bg-gray-300"
    >
      <input
        type="text"
        value={option.label || ""}
        onChange={(e) => onUpdate(index, "label", e.target.value)}
        placeholder={`Option ${index + 1}`}
        className="p-2 border-r my-1 focus:outline-none focus:ring-2 hover:cursor-move focus:ring-blue-500 transition duration-200 "
      />
      <input
        type="text"
        value={option.value || ""}
        onChange={(e) => onUpdate(index, "value", e.target.value)}
        placeholder={`Value ${index + 1}`}
        className="p-2 border-r my-1 mr-3  hover:cursor-move focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 mr-2"
      />
      <button
        className="text-white my-1 mr-3 rounded bg-gray-400 py-2 px-1 hover:bg-gray-600 hover:cursor-pointer focus:outline-none transition duration-200"
        onClick={() => onRemove(index)}
      >
        Remove
      </button>
    </div>
  );
}
