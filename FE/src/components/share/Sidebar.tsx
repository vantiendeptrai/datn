import { IconType } from "react-icons";
import { useLocation, useNavigate } from "react-router-dom";

import { MenuItem } from "..";

type SidebarProps = {
  menu: { label: string; icon: IconType; url: string }[];
};

const Sidebar = ({ menu }: SidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <div
        className="
        hidden
        md:block
        md:w-1/4
        lg:w-1/4
        xl:w-1/5"
      >
        <div
          className="
          flex
          flex-col
          rounded-xl
          cursor-pointer
          bg-light
          dark:bg-dark
          h-full
          min-h-screen"
        >
          {menu.map((item) => (
            <MenuItem
              key={item.url}
              label={item.label}
              icon={item.icon}
              active={item.url === location.pathname}
              onClick={() => navigate(item.url)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
