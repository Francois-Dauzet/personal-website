import { create } from "zustand";

export const useStateStore = create((set) => ({
  currentPageName: null,
  currentPageRoute: null,
  setCurrentPageName: (name) => set({ currentPageName: name }),
  setCurrentPageRoute: (route) => set({ currentPageRoute: route }),
}));
