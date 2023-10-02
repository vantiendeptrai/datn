import { Outlet } from "react-router-dom";

import { Footer, LoginModal, NavBar, RegisterModal } from "../../components";

const BaseClient = () => {
  return (
    <>
      <div className="bg-backgroundLight dark:bg-backgroundDark">
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
