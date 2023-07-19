import { RxDashboard } from "react-icons/rx";
import { LiaHotelSolid } from "react-icons/lia";
import { HiOutlineUsers } from "react-icons/hi";
import { TbBrandBooking } from "react-icons/tb";

import { MenuItem } from "..";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

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
          bg-light dark:bg-dark"
        >
          <MenuItem
            label="Dashboard"
            icon={RxDashboard}
            onClick={() => navigate("/admin")}
          />
          <MenuItem
            label="Quản lý khách sạn"
            icon={LiaHotelSolid}
            onClick={() => navigate("/admin/hotel-manager")}
          />
          <MenuItem
            label="Quản lý đặt phòng"
            icon={TbBrandBooking}
            onClick={() => navigate("/admin/reservation-manager")}
          />
          <MenuItem
            label="Quản lý người dùng"
            icon={HiOutlineUsers}
            onClick={() => navigate("/admin/user-manager")}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
