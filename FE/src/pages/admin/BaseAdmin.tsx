import { Outlet } from "react-router-dom";

import { Footer, NavBar } from "../../components";
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

        <div>
          <Outlet />
        </div>

        <Footer admin />
      </div>
    </>
  );
};

export default BaseAdmin;
