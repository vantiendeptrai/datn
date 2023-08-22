import React from "react";

const Footer = () => {
  return (
    <div className="mb-6 overflow-hidden">
      <hr />
      <div className="grid grid-cols-3 max-w-7xl mx-auto mb-3 mt-6">
        <div>
          <ul>
            <li className="py-2 font-bold">Nhận thông tin ưu đãi</li>
            <li className="mt-2">
              <input
                className="px-[20px] py-[5px] bg-[#edf0ee]"
                type="text"
                placeholder="EMAIL nhận bản tin khuyến mãi"
              />
              <button className="px-[20px] py-[5px] bg-[#f0bf2b]">
                đăng ký
              </button>
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="py-2 font-bold"> BẠN CẦN GIÚP ĐỠ?</li>
            <li className="py-2">Quản lý các đặt phòng</li>
            <li className="py-2">Bạn muốn đặt chỗ?</li>
            <li className="py-2">1900 1833</li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="py-2 font-bold">ĐIỀU KHOẢN & QUY ĐỊNH</li>
            <li className="py-2">Quy định chung</li>
            <li className="py-2 font-bold">Quy định về thanh toán</li>
            <li className="py-2">Quy định về thanh toán</li>
          </ul>
        </div>
      </div>

      <hr className="" />
      <div className="grid grid-cols-3 max-w-7xl mx-auto mb-3 mt-6">
        <div>
          <ul>
            <li className="py-2 font-bold">Số ĐKKD</li>
            <li className="py-2">0106011932</li>
            <li className="py-2">Đăng ký lần đầu ngày 15/10/2012</li>
            <li className="py-2">
              Đăng ký thay đổi lần thứ 15 ngày 16/8/2022.
            </li>
            <li>
              <img
                src="../../../../public/images/details/logo-da-thong-bao-website-voi-bo-cong-thuong.png"
                alt=""
                className="max-w-[150px]"
              />
            </li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="py-2 font-bold"> Nơi cấp:</li>
            <li className="py-2">Sở Kế hoạch và Đầu tư Tỉnh Điện Biên</li>
            <li className="py-2">Sở Kế hoạch và Đầu tư Tỉnh Điện Biên</li>
            <li className="py-2">
              Khách sạn, căn hộ kinh doanh dịch vụ lưu trú ngắn ngày; khu du
              lịch sinh thái, khu vui chơi giải trí, sân golf
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li className="py-2 font-bold">Trụ sở:</li>
            <li className="py-2">
              Số nhà 25, Tổ dân phố 21, Phường Him Lam, Thành phố Điện Biên Phủ,
              Tỉnh Điện Biên, Việt Nam
            </li>
            <li className="py-2 font-bold">Email:</li>
            <li className="py-2">info@muongthanh.vn</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
