import { create } from "zustand";

interface isFilterState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useFilterState = create<isFilterState>((set, get) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
