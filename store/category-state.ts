// crear estado de zustand para agregar 1 elemento al array o quitarlo si ya se encuentra

import { create } from "zustand";

export const useCategoryState = create((set, get) => ({
  categories: [],
  addOrRemoveCategory: (category: string) =>
    set((state: any) => {
      const index = state.categories.indexOf(category);
      let newCategories = [];
      if (index === -1) {
        // Si la categoría no está en el arreglo, la agregamos.
        newCategories = [...state.categories, category];
      } else {
        // Si la categoría ya está en el arreglo, la quitamos.
        newCategories = state.categories.filter((c: any) => c !== category);
      }
      return { categories: newCategories };
    }),

  clearCategories: () => set({ categories: [] }),

}));
