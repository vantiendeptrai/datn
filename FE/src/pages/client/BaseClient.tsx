import { Outlet } from "react-router-dom";

import { NavBar } from "../../components";
import { useTheme } from "../../hooks";

const BaseClient = () => {
  const { theme, handleChangeTheme } = useTheme();

  return (
    <>
      <div
        className="
        bg-backgroundLight
        dark:bg-backgroundDark"
      >
        <NavBar
          imageUser=""
          isLogin={true}
          theme={theme}
          handleChangeTheme={handleChangeTheme}
        />

        <Outlet />
      </div>
    </>
  );
};

export default BaseClient;
