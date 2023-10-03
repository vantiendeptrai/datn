import { UserInfor } from "../../../components";

const SecurityPage = () => {
  return (
    <div>
      <UserInfor
        name="An toàn và bảo mật"
        title="Thiết lập các cài đặt bảo mật và xác thực 2 yếu tố"
        information="Mật khẩu"
        label="Cài lại"
        manage="Đổi mật khẩu thường xuyên để giữ tài khoản của bạn được bảo mật."
      />
      <UserInfor
        information="Xác thực 2 yếu tố"
        label="Cài đặt"
        manage="Thêm số điện thoại để thiết lập xác thực 2 yếu tố."
      />
      <UserInfor
        information="Các phiên truy cập đang có hiệu lực"
        label="Manage"
        manage="Khi chọn 'Đăng xuất' , bạn sẽ đăng xuất khỏi tất cả các thiết bị trừ thiết bị này và có thể mất đến 10 phút."
      />
      <UserInfor
        information="Xóa tài khoản"
        label="Xóa tài khoản"
        manage="Xóa tài khoản Booking.com vĩnh viễn ádfsdfsadfsdf"
      />
    </div>
  );
};

export default SecurityPage;
