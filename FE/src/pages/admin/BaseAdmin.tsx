import { Outlet } from "react-router-dom";

import { NavBar, Sidebar } from "../../components";
import { useTheme } from "../../hooks";

const BaseAdmin = () => {
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
          isLogin={false}
          theme={theme}
          handleChangeTheme={handleChangeTheme}
          admin
        />

        <div
          className="
          flex
          gap-3
          p-3"
        >
          <Sidebar />

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default BaseAdmin;
