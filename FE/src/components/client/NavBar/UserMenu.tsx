import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";

import { Avatar, MenuItem } from "../..";
import { useUserQuery } from "../../../api/auth";
import { useLoginModal, useRegisterModal } from "../../../hooks";

const UserMenu = () => {
  const navigate = useNavigate();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);
  const { data, isSuccess } = useUserQuery(null);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative z-10">
        <div onClick={onToggle} className="hidden md:block cursor-pointer">
          <Avatar imageUser={data?.user.image} />
        </div>

        <div onClick={onToggle} className="block md:hidden cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>

        {isOpen && (
          <div className="absolute -right-5 md:right-0 top-11 md:top-14 text-sm md:w-3/4 shadow-md rounded-xl min-w-[15rem] overflow-hidden bg-light dark:bg-dark">
            {isSuccess ? (
              <div className="flex flex-col cursor-pointer">
                <MenuItem
                  label="Thông tin cá nhân"
                  onClick={() => navigate("/auth")}
                />
                <MenuItem
                  label="Thông tin đặt phòng"
                  onClick={() => alert("Thông tin cá nhân")}
                />

                <hr className="border border-divideLight dark:border-divideDark" />

                <MenuItem
                  label="Đăng xuất"
                  onClick={() => alert("Đăng xuất")}
                />
              </div>
            ) : (
              <div className="flex flex-col cursor-pointer">
                <MenuItem label="Đăng nhập" onClick={loginModal.onOpen} />
                <MenuItem label="Đăng ký" onClick={registerModal.onOpen} />
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default UserMenu;
