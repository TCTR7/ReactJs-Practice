import React from "react";
import { useTodoStore } from "../../stores/useTodoStore";

export default function TodoFilters() {
  const filter = useTodoStore((state) => state.filter);
  const setFilter = useTodoStore((state) => state.setFilter);
  const clearCompleted = useTodoStore((state) => state.clearCompleted);
  return (
    <div className="flex items-center justify-between mt-4 text-sm text-gray-600">
      <div className="flex items-center gap-4">
        <button
          onClick={() => setFilter("all")}
          className={`hover:cursor-pointer  rounded p-1 ${
            filter === "all" ? "font-bold" : ""
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className={`hover:cursor-pointer  rounded p-1 ${
            filter === "active" ? "font-bold" : ""
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`hover:cursor-pointer  rounded p-1 ${
            filter === "completed" ? "font-bold" : ""
          }`}
        >
          Completed
        </button>
      </div>
      <button
        onClick={clearCompleted}
        className="text-red-500 hover:text-red-700 hover:cursor-pointer rounded p-1"
      >
        Clear Completed
      </button>
    </div>
  );
}
