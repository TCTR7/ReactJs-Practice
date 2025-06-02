import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useCartStore = create(
  devtools((set, get) => ({
    items: [],
    addItem: (item) => {
      const exists = get().items.find((i) => i.id === item.id);
      if (exists) {
        set({
          items: get().items.map((i) => {
            if (i.id === item.id) {
              return { ...i, quantity: i.quantity + 1 };
            } else {
              return i;
            }
          }),
        });
      } else {
        set({
          items: [...get().items, { ...item, quantity: 1 }],
        });
      }
    },
    removeItem: (id) => {
      const existsItem = get().items.find((item) => item.id === id);
      if (existsItem) {
        if (existsItem.quantity > 1) {
          set({
            items: get().items.map((i) =>
              i.id === id ? { ...i, quantity: i.quantity - 1 } : i
            ),
          });
          return;
        } else {
          set({
            items: get().items.filter((i) => i.id !== id),
          });
        }
      }
    },
    clearCart: () => {
      set({ items: [] });
    },
    totalPrice: () => {
      return get().items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  }))
);
