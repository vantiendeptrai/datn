import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

import { CiLogin, CiLogout } from "react-icons/ci";
import { SiGnuprivacyguard } from "react-icons/si";
import { AiOutlineUser, AiOutlineHistory } from "react-icons/ai";

import { Avatar, MenuItem } from "../..";
import {
  useDarkMode,
  useLoginModal,
  useRegisterModal,
  useSidebarMenu,
  useUserMenu,
} from "../../../hooks";

type UserMenuProps = {
  isLogin: boolean;
  imageUser: string | undefined;
};

const UserMenu = ({ isLogin, imageUser }: UserMenuProps) => {
  const darkMode = useDarkMode();
  const userMenu = useUserMenu();
  const sideBarMenu = useSidebarMenu();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const navigate = useNavigate();

  const toggleOpen = useCallback(() => {
    userMenu.isOpen ? userMenu.onClose() : userMenu.onOpen(),
      darkMode.onClose(),
      sideBarMenu.onClose();
  }, [darkMode, userMenu, sideBarMenu]);

  return (
    <>
      <div
        className="
        relative"
      >
        <div
          onClick={toggleOpen}
          className="
          cursor-pointer"
        >
          <Avatar imageUser={imageUser} />
        </div>

        {userMenu.isOpen && (
          <div
            className="
            absolute
            z-10
            w-[200px]
            right-0
            top-10
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
            {isLogin ? (
              <>
                <MenuItem
                  label="Thông tin cá nhân"
                  icon={AiOutlineUser}
                  onClick={() => navigate("/profile")}
                />
                <MenuItem
                  label="Lịch sử đặt phòng"
                  icon={AiOutlineHistory}
                  onClick={() => navigate("/profile/reservation")}
                />

                <hr className="border-divideLight dark:border-divideDark" />

                <MenuItem label="Đăng xuất" icon={CiLogout} />
              </>
            ) : (
              <>
                <MenuItem
                  label="Đăng nhập"
                  icon={CiLogin}
                  onClick={loginModal.onOpen}
                />
                <MenuItem
                  label="Đăng ký"
                  icon={SiGnuprivacyguard}
                  onClick={registerModal.onOpen}
                />
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default UserMenu;
