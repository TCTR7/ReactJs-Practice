// useTodoStore.js
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useTodoStore = create(
  persist(
    (set, get) => ({
      todos: [],
      filter: "all",
      addTodo: (text) => {
        const newTodo = {
          id: Date.now(),
          text,
          completed: false,
        };
        set({ todos: [...get().todos, newTodo] });
      },
      toggleTodo: (id) => {
        set({
          todos: get().todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          ),
        });
      },
      removeTodo: (id) => {
        set({ todos: get().todos.filter((todo) => todo.id !== id) });
      },
      setFilter: (filter) => {
        set({ filter });
      },
      clearCompleted: () => {
        set({ todos: get().todos.filter((todo) => !todo.completed) });
      },
    }),
    {
      name: "todo-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        todos: state.todos,
        filter: state.filter,
      }),
    }
  )
);
