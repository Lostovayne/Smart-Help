import { CartProduct } from "@/interfaces/product-cart";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface State {
  cart: CartProduct[];
  getTotalItems: () => number;
  addProductToCart: (product: CartProduct) => void;
  addOrRemoveQuantity: (id: number, quantity: number) => void;
  TotalPriceProducts: () => number;
  ClearCart: () => void;
}

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
      getTotalItems: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.quantity, 0);
      },
      addProductToCart: (product: CartProduct) => {
        const { cart } = get();
        const productInCart = cart.some((item) => item.id === product.id);

        if (!productInCart) {
          set({
            cart: [...cart, product],
          });
          return;
        }

        const updatedCart = cart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + product.quantity,
            };
          }
          return item;
        });

        set({ cart: updatedCart });
      },

      addOrRemoveQuantity: (id: number, quantity: number) => {
        const { cart } = get();

        const updatedCart = cart
          .map((item) => {
            if (item.id === id) {
              if (item.quantity + quantity > 20) {
                return item;
              }
              return {
                ...item,
                quantity: item.quantity + quantity,
              };
            }
            return item;
          })
          .filter((item) => item.quantity > 0);

        set({ cart: updatedCart });
      },

      TotalPriceProducts: () => {
        const { cart } = get();
        return cart.reduce((total, item) => total + item.price * item.quantity, 0)
      },

      ClearCart: () => {
        set({ cart: [] });
      }

    }),

    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
