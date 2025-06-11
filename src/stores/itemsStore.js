import { create } from "zustand";
import { initialItems } from "../lib/constants";
import { persist } from "zustand/middleware";

export const useItemStore = create(
  persist((set) => ({
    items: initialItems,
    RemoveAllItems: () => set({ items: [] }),
    ResetToInitial: () => set({ items: initialItems }),
    MarkAllAsComplete: () =>
      set((state) => {
        const newItems = state.items.map((item) => ({
          ...item,
          packed: true,
        }));
        return { items: newItems };
      }),
    MarkAllAsInComplete: () => {
      set((state) => {
        const newItems = state.items.map((item) => ({
          ...item,
          packed: false,
        }));
        return { items: newItems };
      });
    },
    AddItem: (newItemText) => {
      const newItem = {
        id: new Date().getTime(),
        name: newItemText,
        packed: false,
      };
      set((state) => ({ items: [...state.items, newItem] }));
    },
    DeleteItem: (id) => {
      set((state) => ({ items: state.items.filter((item) => item.id !== id) }));
    },
    ToggleItem: (id) => {
      set((state) => {
        const newItems = state.items.map((item) => {
          if (item.id === id) {
            return { ...item, packed: !item.packed };
          }
          return item;
        });
        return { items: newItems };
      });
    },
  })),
  {
    name: "items",
  }
);
