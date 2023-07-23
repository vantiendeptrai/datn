import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Footer, LoginModal, NavBar, RegisterModal } from "../../components";
import { useTheme } from "../../hooks";
import { getCurrentUser } from "../../api";
import { useEffect, useState } from "react";

const BaseClient = () => {
  const { theme, handleChangeTheme } = useTheme();
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    async function fetchCurrentUser() {
      const data = await getCurrentUser();
      setCurrentUser(data);
    }

    fetchCurrentUser();
  }, []);

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
