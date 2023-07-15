import { Outlet } from "react-router-dom";

import { NavBar } from "../../components";
import { useTheme } from "../../hooks";

const BaseClient = () => {
  const { theme, handleChangeTheme } = useTheme();

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
