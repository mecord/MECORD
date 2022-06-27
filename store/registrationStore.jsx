import create from "zustand";
import { persist } from "zustand/middleware";

export const useRegist = create(
  persist((set) => ({
    regist: "",
    setRegist: (regist) => set({ regist }),
  }))
);
