import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import { Footer, LoginModal, NavBar, RegisterModal } from "../../components";

const BaseClient = () => {
  return (
    <>
      <div className="bg-backgroundLight dark:bg-backgroundDark">
        <Toaster />
        <NavBar />
        <LoginModal />
        <RegisterModal />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default BaseClient;
