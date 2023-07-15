import { Outlet } from "react-router-dom";

const BaseAuth = () => {
  return (
    <>
      <div
        className="
        h-screen
        bg-backgroundLight
        dark:bg-backgroundDark"
      >
        <Outlet />
      </div>
    </>
  );
};

export default BaseAuth;
