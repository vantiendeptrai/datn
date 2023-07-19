import { useCallback } from "react";

import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

import { ChangeTheme } from "../..";
import { useDarkMode, useUserMenu } from "../../../hooks";

type DarkModeProps = {
  theme: string | null;
  admin?: boolean;
  handleChangeTheme: (theme: string) => void;
};

const DarkMode = ({ admin, theme, handleChangeTheme }: DarkModeProps) => {
  const darkMode = useDarkMode();
  const userMenu = useUserMenu();

  const toggleOpen = useCallback(() => {
    darkMode.isOpen ? darkMode.onClose() : darkMode.onOpen(),
      userMenu.onClose();
  }, [darkMode, userMenu]);

  return (
    <>
      <div
        onClick={toggleOpen}
        className={`
        cursor-pointer
        text-primary
        ${admin ? "" : "hidden md:block"}
       `}
      >
        {theme === "dark" ? (
          <BsFillMoonStarsFill size={20} />
        ) : theme === "light" ? (
          <BsFillSunFill size={20} />
        ) : (
          <HiOutlineDesktopComputer size={20} />
        )}
      </div>

      {darkMode.isOpen && (
        <ChangeTheme theme={theme} handleChangeTheme={handleChangeTheme} />
      )}
    </>
  );
};

export default DarkMode;
