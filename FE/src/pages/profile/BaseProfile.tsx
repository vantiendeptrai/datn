import { useCallback, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { NavBar, Sidebar } from "../../components";

import { useTheme } from "../../hooks";

const BaseProfile = () => {
  const { theme, handleChangeTheme } = useTheme();

  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  darkQuery.addEventListener("change", (e) => {
    if (!("theme" in localStorage)) {
      if (e.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  });

  const onWindowTheme = useCallback(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkQuery]);

  useEffect(() => {
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
  }, [theme, onWindowTheme]);

  return (
    <>
      <div
        className="
        h-screen
        bg-backgroundLight
        dark:bg-backgroundDark"
      >
        <NavBar
          imageUser=""
          isLogin={true}
          theme={theme}
          handleChangeTheme={handleChangeTheme}
        />

        <div className="flex gap-3">
          <Sidebar />

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default BaseProfile;
