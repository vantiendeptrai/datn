import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { HiOutlineDesktopComputer } from "react-icons/hi";

import { MenuItem } from "../..";

type ChangeThemeProps = {
  theme: string | null;
  handleChangeTheme: (theme: string) => void;
};

const ChangeTheme = ({ theme, handleChangeTheme }: ChangeThemeProps) => {
  return (
    <>
      <div
        className="
          absolute
          right-14
          md:right-28
          top-16
          transition
          border
          rounded-xl
          dark:rounded-xl
          shadow-xl
          dark:shadow-xl
          border-divideLight
          dark:border-dividerDark
          bg-light
          dark:bg-dark
          shadow-backgroundLight
          dark:shadow-backgroundDark"
      >
        <div
          className="
            flex
            flex-col
            cursor-pointer"
        >
          <MenuItem
            label="Sáng"
            icon={BsFillSunFill}
            onClick={() => handleChangeTheme("light")}
            active={theme === "light"}
          />
          <MenuItem
            label="Tối"
            icon={BsFillMoonStarsFill}
            onClick={() => handleChangeTheme("dark")}
            active={theme === "dark"}
          />
          <MenuItem
            label="Hệ thông"
            icon={HiOutlineDesktopComputer}
            onClick={() => handleChangeTheme("system")}
            active={theme === "system"}
          />
        </div>
      </div>
    </>
  );
};

export default ChangeTheme;
