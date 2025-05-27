import { create } from "zustand";
import { persist } from "zustand/middleware";
// This file defines a Zustand store for managing a shopping cart.
// It allows adding, removing, and clearing items in the cart.

// The CartItem interface defines the structure of an item in the cart.
// Each item has an ID, name, price, image URL, and quantity.
export interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string | null;
  quantity: number;
}
// The CartStore interface defines the structure of the cart store.
// It includes an array of CartItem objects and methods for manipulating the cart.
interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}
// The useCartStore is a Zustand store that manages the state of the shopping cart.
// It uses the persist middleware to save the cart state in localStorage.
export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      // This function adds an item to the cart. If the item already exists, it increases the quantity.
      // If the item does not exist, it adds the item to the cart.
      addItem: (item) =>
        set((state) => {
          // Check if the item already exists in the cart
          // by comparing the item ID.
          const existing = state.items.find((i) => i.id === item.id);
          // If the item exists, we update its quantity.
          // This is important for maintaining the correct quantity of items in the cart.
          if (existing) {
            // If the item exists, increase its quantity by the quantity of the new item.
            // This ensures that the cart reflects the correct quantity of the item.
            return {
              items: state.items.map((i) =>
                i.id === item.id
                  ? { ...i, quantity: i.quantity + item.quantity }
                  : i
              ),
            };
          }
          // If the item does not exist, add it to the cart with its quantity.
          // This allows the cart to handle new items correctly.
          return { items: [...state.items, item] };
        }),
      // This function removes an item from the cart by decreasing its quantity.
      // If the quantity reaches zero, the item is removed from the cart.
      removeItem: (id) =>
        set((state) => {
          return {
            items: state.items.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            ).filter((item) => item.quantity > 0),
          };
        }),

      // This function clears the entire cart by resetting the items array to an empty array.
      clearCart: () =>
        set(() => {
          return { items: [] };
        }),
    }),
    // Persist the cart state in localStorage under the key "cart".
    // This allows the cart to retain its state across page reloads.
    { name: "cart" }
  )
);