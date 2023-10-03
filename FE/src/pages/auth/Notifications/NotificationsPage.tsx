import { UserInfor } from "../../../components";

const NotificationsPage = () => {
  return (
    <UserInfor
      name="Thông báo email"
      title="Chọn những gì sẽ được thông báo đến bạn và tắt các thông báo không cần thiết."
      information="Tùy chọn email"
      label="Manage"
      email="ducnamnguyen03@gmail.com"
      manage="Chúng tôi sẽ gửi đường link xác thực đến địa chỉ email mới. Vui lòng kiểm tra hộp thư của bạn."
    />
  );
};

export default NotificationsPage;
