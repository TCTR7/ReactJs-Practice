//Problems with Zustand and React
// Zustand's selectors and re-render
// Zustand recommends using optimal selectors to reduce re-renders:
// Selectors should return simple values ​​or stable references.
// Avoid returning new objects/arrays on each render, as they make Zustand think the state has changed.
// Use memoization techniques like useMemo or useCallback to ensure stable references.
// Zustand's shallow comparison
// Zustand uses shallow comparison for objects and arrays by default.
// This means that if you return a new object or array, Zustand will treat it as a state change and trigger re-renders.
// To avoid this, ensure that your selectors return the same reference for unchanged objects/arrays.

import { useTodoStore } from "../../stores/useTodoStore";

export default function TodoItem({ todo }) {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  return (
    <li className="flex items-center justify-between p-2 border-b hover:bg-gray-50">
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          onChange={() => toggleTodo(todo.id)}
          className="cursor-pointer"
          checked={todo.completed}
          aria-label={`Toggle completion for ${todo.text}`}
        />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => removeTodo(todo.id)}
        className="text-red-500 hover:text-red-700 hover:cursor-pointer hover:bg-red-100 rounded p-1 border border-solid"
        aria-label={`Remove task ${todo.text}`}
      >
        Delete
      </button>
    </li>
  );
}
