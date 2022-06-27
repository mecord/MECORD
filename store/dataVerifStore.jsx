import create from "zustand";
import { persist } from "zustand/middleware";

export const useDataVerif = create(
  persist((set) => ({
    dataVerif: "",
    setDataVerif: (dataVerif) => set({ dataVerif }),
  }))
);
