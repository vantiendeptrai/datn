import { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";

import { Avatar, MenuItem } from "..";

type UserMenuProps = {
  imageUser: string;
};

const UserMenu = ({ imageUser }: UserMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const isLogin = false;

  return (
    <>
      <div
        className="
        relative
        z-10"
      >
        <div
          onClick={onToggle}
          className="
          hidden
          md:block
          cursor-pointer"
        >
          <Avatar imageUser={imageUser} />
        </div>

        <div
          onClick={onToggle}
          className="
          block
          md:hidden
          cursor-pointer"
        >
          <AiOutlineMenu size={25} />
        </div>

        {isOpen && (
          <div
            className="
            absolute
            -right-5
            md:right-0
            top-11
            md:top-14
            text-sm
            md:w-3/4
            shadow-md
            rounded-xl
            min-w-[15rem]
            overflow-hidden
            bg-light
            dark:bg-dark"
          >
            {isLogin ? (
              <div
                className="
                flex
                flex-col
                cursor-pointer"
              >
                <MenuItem
                  label="Thông tin cá nhân"
                  onClick={() => alert("Thông tin cá nhân")}
                />
                <MenuItem
                  label="Thông tin đặt phòng"
                  onClick={() => alert("Thông tin cá nhân")}
                />

                <hr
                  className="
                  border
                  border-divideLight
                  dark:border-divideDark"
                />

                <MenuItem
                  label="Đăng xuất"
                  onClick={() => alert("Đăng xuất")}
                />
              </div>
            ) : (
              <div
                className="
                flex
                flex-col
                cursor-pointer"
              >
                <MenuItem
                  label="Đăng nhập"
                  onClick={() => alert("Đăng nhập")}
                />
                <MenuItem label="Đăng ký" onClick={() => alert("Đăng ký")} />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default UserMenu;
