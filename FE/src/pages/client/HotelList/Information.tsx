import React from "react";

const Information = () => {
  return (
    <div>
      <div className=" flex justify-center items-center flex-col ">
        <div className="grid grid-cols-2 pt-20 border-x-2 max-w-[1443px]">
          <div className="text-center mt-32">
            <h1 className="text-[30px] ">TẬN TÂM</h1>
            <p className="px-28">
              Tình cảm chân thành là nét níu chân du khách mỗi lần ghé đến Mường
              Thanh. Dù ở sảnh nhận phòng hay dùng bữa trong nhà hàng, du khách
              đều nhận được sự chăm sóc tận tâm đến từ trái tim của mỗi người
              Mường Thanh.
            </p>
          </div>

          <div>
            <img
              src="../../../../public/images/hotel_list/thuong-hieu-luxury_1688104164.jpg"
              alt=""
              className="h-[459px]"
            />
          </div>

          <div>
            <img
              src="../../../../public/images/hotel_list/thuong-hieu-luxury_1688104164.jpg"
              alt=""
              className="h-[459px]"
            />
          </div>

          <div className="text-center mt-32">
            <h1 className="text-[30px] ">SANG TRỌNG</h1>
            <p className="px-28">
              Tình cảm chân thành là nét níu chân du khách mỗi lần ghé đến Mường
              Thanh. Dù ở sảnh nhận phòng hay dùng bữa trong nhà hàng, du khách
              đều nhận được sự chăm sóc tận tâm đến từ trái tim của mỗi người
              Mường Thanh.
            </p>
          </div>
        </div>

        <div className="max-w-[1442px] text-center flex flex-col uppercase text-[20px] border-x-2">
          <span className="flex justify-center items-center mt-20">
            <h1 className="pr-2 text-[40px]">Đậm </h1>
            <p> Nét VĂN HÓA</p>
          </span>

          <span>
            <p className="text-[16px] px-20 mb-10">
              MƯỜNG THANH LUXURY LÀ THƯƠNG HIỆU CAO CẤP, THEO ĐUỔI PHONG CÁCH
              KHÁCH SẠN THUẦN VIỆT, LẤY GIÁ TRỊ CON NGƯỜI VIỆT CHÂN THÀNH, MẾN
              KHÁCH LAN TỎA VÀ CHINH PHỤC DU KHÁCH. TẠI MƯỜNG THANH LUXURY,
              CHÚNG TÔI MỜI BẠN CÙNG KHỞI HÀNH CHUYẾN ĐI TÌM VỀ KHÔNG GIAN THANH
              THẢN CHỨA ĐỰNG NHỮNG NÉT VĂN HÓA MANG ĐẬM TINH THẦN BẢN SẮC VIỆT
              VỚI HOA BAN, VÁY THỔ CẨM, ẨM THỰC NỨC TIẾNG TÂY BẮC...
            </p>
          </span>

          <img
            src="../../../../public/images/hotel_list/thuong-hieu-luxury_1688104164.jpg"
            alt=""
            className="w-[960px] items-center mx-auto h-[617px]"
          />

          <button className=" uppercase mx-auto mt-5 py-1 px-4 bg-yellow-400 hover:shadow-xl text-white text-[16px]">
            xem thêm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Information;
