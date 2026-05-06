import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../data/products";

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) =>
        set((state) => {
          const existing = state.items.find((i) => i.id === product.id);

          if (existing) {
            // Check if adding one more exceeds available stock
            if (existing.quantity >= product.stock) return state;

            return {
              items: state.items.map((i) =>
                i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i,
              ),
            };
          }

          // Initial check for stock before adding first item
          if (product.stock <= 0) return state;

          return { items: [...state.items, { ...product, quantity: 1 }] };
        }),
      removeItem: (id) =>
        set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
      updateQuantity: (id, quantity) =>
        set((state) => {
          const item = state.items.find((i) => i.id === id);

          // Prevent setting quantity higher than available stock
          if (item && quantity > item.stock) {
            quantity = item.stock;
          }

          if (quantity <= 0) {
            return { items: state.items.filter((i) => i.id !== id) };
          }

          return {
            items: state.items.map((i) =>
              i.id === id ? { ...i, quantity } : i,
            ),
          };
        }),
      clearCart: () => set({ items: [] }),
    }),
    { name: "nova-cart" },
  ),
);
