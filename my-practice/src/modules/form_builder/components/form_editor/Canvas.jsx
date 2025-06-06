import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { useFormBuilderStore } from "../../stores/useFormBuilderStore";
import CanvasFieldItemContainer from "./canvas_field_items/CanvasFieldItemContainer";

export default function Canvas() {
  const fields = useFormBuilderStore((state) => state.fields);
  const { isOver, setNodeRef } = useDroppable({ id: "canvas" });

  return (
    <div
      ref={setNodeRef}
      className={`flex-1 flex flex-col p-4 min-h-[300px] border-l  transition-all duration-200 ${
        isOver ? "bg-green-50 border-green-400" : "bg-white"
      }`}
    >
      <h2 className="font-bold mb-4 text-base sm:text-xl md:text-2xl lg:text-3xl duration-500">
        Form Canvas
      </h2>
      {fields.length === 0 && (
        <p className="text-gray-400">Pull file into here</p>
      )}
      <CanvasFieldItemContainer />
    </div>
  );
}
