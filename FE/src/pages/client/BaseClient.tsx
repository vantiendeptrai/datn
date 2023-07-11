import { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { NavBar } from "../../components";

const BaseClient = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

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

  const handleChangeTheme = (theme: string) => {
    setTheme(theme);
  };

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
        bg-backgroundLight
        dark:bg-backgroundDark"
      >
        <NavBar
          imageUser=""
          isLogin={false}
          theme={theme}
          handleChangeTheme={handleChangeTheme}
        />

        <Outlet />
      </div>
    </>
  );
};

export default BaseClient;
