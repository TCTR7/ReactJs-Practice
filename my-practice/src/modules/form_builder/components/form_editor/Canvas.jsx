import React from "react";
import { useDroppable } from "@dnd-kit/core";
import { useFormBuilderStore } from "../../stores/useFormBuilderStore";
import RadioField from "./field_types/RadioField";
import CheckboxField from "./field_types/CheckboxField";
import TextField from "./field_types/TextField";
import NumberField from "./field_types/NumberField";
import SelectField from "./field_types/SelectField";

export default function Canvas() {
  const fields = useFormBuilderStore((state) => state.fields);
  const { isOver, setNodeRef } = useDroppable({ id: "canvas" });
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
        return <SelectField />;
      default:
        return null;
    }
  }
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
    </div>
  );
}
