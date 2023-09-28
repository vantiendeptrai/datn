import { useNavigate } from "react-router-dom";

import { IoNotificationsOutline } from "react-icons/io5";
import { MdPayment, MdOutlinePrivacyTip } from "react-icons/md";
import { AiOutlineUserAdd, AiOutlineLock } from "react-icons/ai";

import { MenuItem } from "..";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="hidden md:block">
        <div className="border rounded-xl overflow-hidden border-divideLight dark:border-divideDark bg-light dark:bg-dark min-w-[250px]">
          <MenuItem
            label="Thông tin cá nhân"
            onClick={() => navigate("/auth")}
            icon={AiOutlineUserAdd}
          />
          <MenuItem
            label="An toàn và bảo mật"
            onClick={() => navigate("/auth/security")}
            icon={AiOutlineLock}
          />
          <MenuItem
            label="Thông tin thanh toán"
            onClick={() => navigate("/auth/billing-information")}
            icon={MdPayment}
          />
          <MenuItem
            label="Quyền riêng tư"
            onClick={() => navigate("/auth/privacy")}
            icon={MdOutlinePrivacyTip}
          />
          <MenuItem
            label="Thông báo email"
            onClick={() => navigate("/auth/notifications")}
            icon={IoNotificationsOutline}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
