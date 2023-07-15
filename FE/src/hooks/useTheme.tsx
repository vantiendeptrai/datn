import { create } from "zustand";

interface ThemeStore {
  theme: string;
  handleChangeTheme: (theme: string) => void;
}

const useTheme = create<ThemeStore>((set) => {
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handleDarkModeChange = (e: MediaQueryListEvent) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  const onWindowTheme = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  darkQuery.addEventListener("change", handleDarkModeChange);

  const handleChangeTheme = (theme: string) => {
    switch (theme) {
      case "dark":
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
        break;
      default:
        localStorage.removeItem("theme");
        onWindowTheme();
        break;
    }

    set({ theme });
  };

  onWindowTheme();

  return {
    theme: localStorage.getItem("theme") || "system",
    handleChangeTheme,
  };
});

export default useTheme;
