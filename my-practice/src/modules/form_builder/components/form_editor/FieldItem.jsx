import React from "react";
import { useDraggable } from "@dnd-kit/core"

export default function FieldItem({ type }) {
  const { attributes, listeners, setNodeRef } = useDraggable({ id: type });
  console.log("FieldTypes rendered with type:", type);
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="my-3 p-2 bg-gray-200 rounded cursor-move text-center border border-gray-300 hover:bg-gray-300 transition duration-200"
    >
      {type.toUpperCase()}
    </div>
  );
}
