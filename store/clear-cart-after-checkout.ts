import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ClearCart {
  cleanCart: boolean;
  clearCartAfterCheckout: () => void;
  CleaningTheCart: () => void;
}

export const useCartClean = create<ClearCart>()(
  persist(
    (set) => ({
      cleanCart: true,
      clearCartAfterCheckout: () => {
        set({ cleanCart: false }); // carrito no esta limpio, hay que limpiarlo
      },
      CleaningTheCart: () => {
        set({ cleanCart: true }); // carrito limpiado
      },
    }),

    {
      name: "cleanCart",
    }
  )
);
