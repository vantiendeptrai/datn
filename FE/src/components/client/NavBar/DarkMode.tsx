import { useCallback } from "react";

import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

import { ChangeTheme } from "../..";
import { useDarkMode, useUserMenu } from "../../../hooks";

type DarkModeProps = {
  theme: string | null;
  handleChangeTheme: (theme: string) => void;
};

const DarkMode = ({ theme, handleChangeTheme }: DarkModeProps) => {
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
        className="
        hidden
        md:block
        cursor-pointer
        text-primary
        "
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
