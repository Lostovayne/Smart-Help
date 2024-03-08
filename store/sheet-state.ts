import { create } from "zustand";

interface StateMobileSheet {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useSheetState = create<StateMobileSheet>((set, get) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
