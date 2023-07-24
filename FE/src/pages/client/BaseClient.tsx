import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Footer, LoginModal, NavBar, RegisterModal } from "../../components";
import { useTheme } from "../../hooks";

type BaseClientProps = {
  imageUser: string | undefined;
  isLogin: boolean;
};

const BaseClient = ({ imageUser, isLogin }: BaseClientProps) => {
  const { theme, handleChangeTheme } = useTheme();

  return (
    <>
      <div
        className="
        bg-backgroundLight
        dark:bg-backgroundDark"
      >
        <NavBar
          imageUser={imageUser}
          isLogin={isLogin}
          theme={theme}
          handleChangeTheme={handleChangeTheme}
        />

        <Toaster />
        <LoginModal />
        <RegisterModal />

        <Outlet />

        <Footer />
      </div>
    </>
  );
};

export default BaseClient;
