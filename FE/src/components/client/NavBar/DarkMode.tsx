import { useCallback } from "react";

import { HiOutlineDesktopComputer } from "react-icons/hi";
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
        cursor-pointer
        text-textLight2nd
        dark:text-textDark2nd
        hover:text-primary
        dark:hover:text-primary
        "
      >
        <HiOutlineDesktopComputer size={20} />
      </div>

      {darkMode.isOpen && (
        <ChangeTheme theme={theme} handleChangeTheme={handleChangeTheme} />
      )}
    </>
  );
};

export default DarkMode;
