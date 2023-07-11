import { useCallback } from "react";

import { Avatar, DarkMode, MenuItem } from "../..";
import { useDarkMode, useUserMenu } from "../../../hooks";

type UserMenuProps = {
  isLogin: boolean;
  imageUser: string | null;
};

const UserMenu = ({ isLogin, imageUser }: UserMenuProps) => {
  const darkMode = useDarkMode();
  const userMenu = useUserMenu();

  const toggleOpen = useCallback(() => {
    userMenu.isOpen ? userMenu.onClose() : userMenu.onOpen(),
      darkMode.onClose();
  }, [darkMode, userMenu]);

  return (
    <>
      <div className="relative">
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
            w-[200px]
            right-0
            top-10
            transition
            border
            rounded-xl
            dark:rounded-xl
            shadow-xl
            dark:shadow-xl
            border-divideLight
            dark:border-dividerDark
            bg-light
            dark:bg-dark
            shadow-backgroundLight
            dark:shadow-backgroundDark"
          >
            {isLogin ? (
              <>
                <MenuItem label="Thông tin cá nhân" />
                <MenuItem label="Lịch sử đặt phòng" />
                <hr />
                <MenuItem label="Đăng xuất" />
              </>
            ) : (
              <>
                <MenuItem label="Đăng nhập" />
                <MenuItem label="Đăng ký" />
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default UserMenu;
