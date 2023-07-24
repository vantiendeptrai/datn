import { Outlet } from "react-router-dom";

import { RxDashboard } from "react-icons/rx";
import { LiaHotelSolid } from "react-icons/lia";
import { HiOutlineUsers } from "react-icons/hi";
import { TbBrandBooking } from "react-icons/tb";

import { NavBar, Sidebar } from "../../components";
import { useTheme } from "../../hooks";

const BaseAdmin = () => {
  const { theme, handleChangeTheme } = useTheme();

  const menu = [
    {
      label: "Dashboard",
      icon: RxDashboard,
      url: "/admin",
    },
    {
      label: "Quản lý khách sạn",
      icon: LiaHotelSolid,
      url: "/admin/hotel-manager",
    },
    {
      label: "Quản lý đặt phòng",
      icon: TbBrandBooking,
      url: "/admin/reservation-manager",
    },
    {
      label: "Quản lý người dùng",
      icon: HiOutlineUsers,
      url: "/admin/user-manager",
    },
  ];

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
          <Sidebar menu={menu} />

          <Outlet />
        </div>
      </div>
    </>
  );
};

export default BaseAdmin;
