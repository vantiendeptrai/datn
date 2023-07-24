import { Outlet } from "react-router-dom";

import { AiOutlineUser } from "react-icons/ai";
import { MdFavoriteBorder, MdPayment } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";

import { Sidebar } from "../../../components";

const BaseProfile = () => {
  const menu = [
    {
      label: "Thông tin cá nhân",
      icon: AiOutlineUser,
      url: "/profile",
    },
    {
      label: "Lịch sử đặt phòng",
      icon: TbBrandBooking,
      url: "/profile/reservation",
    },
    {
      label: "Khách sạn yêu thích",
      icon: MdFavoriteBorder,
      url: "/profile/favorite",
    },
    {
      label: "Thông tin thanh toán",
      icon: MdPayment,
      url: "/profile/payment",
    },
  ];

  return (
    <>
      <div
        className="
        flex
        gap-5
        p-5"
      >
        <Sidebar menu={menu} />

        <Outlet />
      </div>
    </>
  );
};

export default BaseProfile;
