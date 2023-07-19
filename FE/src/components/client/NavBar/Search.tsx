import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { LiaHotelSolid } from "react-icons/lia";
import { HiOutlineUsers } from "react-icons/hi";
import { TbBrandBooking } from "react-icons/tb";

import { useDarkMode, useSidebarMenu, useUserMenu } from "../../../hooks";
import { MenuItem } from "../..";
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

type SearchProps = {
  admin?: boolean;
};

const Search = ({ admin }: SearchProps) => {
  const navigate = useNavigate();

  const darkMode = useDarkMode();
  const userMenu = useUserMenu();
  const sideBarMenu = useSidebarMenu();

  const toggleOpen = useCallback(() => {
    sideBarMenu.isOpen ? sideBarMenu.onClose() : sideBarMenu.onOpen(),
      darkMode.onClose(),
      userMenu.onClose();
  }, [sideBarMenu, darkMode, userMenu]);

  return (
    <>
      {admin ? (
        <>
          <div
            onClick={toggleOpen}
            className="
            block
            md:hidden
            cursor-pointer
            text-textLight
            dark:text-textDark"
          >
            <AiOutlineMenu size={25} />
          </div>

          {sideBarMenu.isOpen && (
            <div
              className="
              absolute
              z-10
              w-[200px]
              left-2
              top-14
              transition
              border
              rounded-xl
              dark:rounded-xl
              dark:shadow-xl
              border-divideLight
              dark:border-divideDark
              bg-light
              dark:bg-dark"
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
          )}
        </>
      ) : (
        <div
          className="
          w-full
          md:w-1/2
          py-2
          rounded-full
          cursor-pointer
          border-[1px]
          border-divideLight
          dark:border-divideDark
          text-textLight
          dark:text-textDark"
        >
          <div
            className="
            flex
            flex-row
            items-center
            justify-between"
          >
            <div
              className="
              text-sm 
              font-semibold 
              px-6"
            >
              Vị trí
            </div>

            <div
              className="
              hidden
              md:block
              text-sm
              font-semibold
              px-6
              flex-1
              text-center
              border-x-[1px]
              border-divideLight
              dark:border-divideDark"
            >
              Thời gian
            </div>

            <div
              className="
              text-sm
              font-semibold
              pl-6
              pr-2
              flex
              flex-row
              items-center
              gap-3"
            >
              <div
                className="
                hidden
                md:block"
              >
                Khách
              </div>

              <div
                className="
                p-2
                rounded-full
                bg-backgroundLight
                dark:bg-backgroundDark"
              >
                <AiOutlineSearch size={20} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
