import { create } from "zustand";

interface ThemeStore {
  theme: string;
  handleChangeTheme: (theme: string) => void;
}

const useTheme = create<ThemeStore>((set) => ({
  theme: localStorage.getItem("theme") || "system",

  handleChangeTheme: (theme) => set({ theme: theme }),
}));

export default useTheme;
