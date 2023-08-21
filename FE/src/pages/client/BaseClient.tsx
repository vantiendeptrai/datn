import { Outlet } from "react-router-dom";

import { Footer, NavBar } from "../../components";

const BaseClient = () => {
  return (
    <>
      <div
        className="
        bg-backgroundLight
        dark:bg-backgroundDark"
      >
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default BaseClient;
