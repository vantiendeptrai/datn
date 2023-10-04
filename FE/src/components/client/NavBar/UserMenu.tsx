import toast from "react-hot-toast";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";

import { Avatar, MenuItem } from "../..";
import { useLogoutMutation, useUserQuery } from "../../../api/auth";
import { useLoginModal, useRegisterModal } from "../../../hooks";

const UserMenu = () => {
  const navigate = useNavigate();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);
  const { data, isSuccess } = useUserQuery("");
  const [logoutUser] = useLogoutMutation();

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const logoutAccount = () => {
    logoutUser(null)
      .unwrap()
      .then((response) => {
        toast.success(response.message);

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="relative z-10">
        <div onClick={onToggle} className="hidden md:block cursor-pointer">
          <Avatar key={data} imageUser={data?.data.image} />
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
                {data?.role === "Admin" && (
                  <MenuItem label="Admin" onClick={() => navigate("/admin")} />
                )}

                <hr className="border border-divideLight dark:border-divideDark" />

                <MenuItem label="Đăng xuất" onClick={logoutAccount} />
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
