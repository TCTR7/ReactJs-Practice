// TodoList.jsx
import React, { useState, useEffect } from "react";
import { useTodoStore } from "../../stores/useTodoStore";
import useDebounce from "../../hooks/useDebounce";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const todos = useTodoStore((state) => state.todos);
  const filter = useTodoStore((state) => state.filter);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const debounceFilter = useDebounce(filter, 500);

  useEffect(() => {
    if (debounceFilter === "active") {
      setFilteredTodos(todos.filter((todo) => !todo.completed));
    } else if (debounceFilter === "completed") {
      setFilteredTodos(todos.filter((todo) => todo.completed));
    } else {
      setFilteredTodos(todos);
    }
  }, [todos, debounceFilter]);

  return (
    <ul className="space-y-2">
      {filteredTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
