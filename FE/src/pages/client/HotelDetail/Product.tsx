import { MenuItem } from "../../../components";
import React from "react";
import {
  AiOutlineAreaChart,
  AiOutlineFileExcel,
  AiOutlineFilter,
  AiOutlineFire,
  AiOutlineLaptop,
  AiOutlineLinkedin,
  AiOutlinePieChart,
  AiOutlineSplitCells,
  AiOutlineTags,
  AiOutlineTrophy,
  AiOutlineUpCircle,
  AiOutlineUserDelete,
  AiOutlineVideoCamera,
} from "react-icons/ai";
import { PiBedBold } from "react-icons/pi";
import RoomClass from "../../../components/Details/RoomClass";

const Product = () => {
  return (
    <div>
      <RoomClass />

      {/* ưu đãi dành cho bạn */}

      <div className=" ml- mx-auto bg-[white] mb-5">
        <h1 className=" mx-auto my-5 text-[25px] font-bold ml-11">
          ƯU ĐÃI DÀNH CHO BẠN
        </h1>

        <div className="grid grid-cols-3 gap-x-20 max-w-7xl mx-auto overflow-hidden">
          <div className=" w-[380px] h-[390px] bg-[white] rounded-[8px] ">
            <div className="hover:max-w-[380px] hover:h-[253px] overflow-hidden hover:ease-in ">
              <img
                src="../../../../public/images/details/deluxe-king-1_1686637326.jpg"
                alt=""
                className=" hover:scale-125 ease-in duration-200"
              />
            </div>
            <h1 className="text-[15px] font-mono mt-3 hover:text-[blue]">
              [HƯƠNG RỪNG CÀ MAU | CÀ MAU] Nghỉ dưỡng 2N1Đ+ 01 bữa ăn chính +
              Voucher
            </h1>

            <span className="flex justify-between mt-2">
              <p className="text-[20px] text-[#de9a3b] px-1 font-medium">
                1,350,000 VNĐ
              </p>

              <span className="flex">
                <AiOutlineUserDelete className="mt-1 ml-2" />{" "}
                <p>100 người quan tâm</p>
              </span>
            </span>
          </div>
        </div>
      </div>

      {/* các dịch vụ của mường thanh */}
      <div className=" pt-[60px] mt-14 pb-[60px] bg-[#f4f4f5] overflow-hidden">
        <span>
          <h1 className="text-[25px] ml-11 font-bold mb-5">
            DỊCH VỤ VÀ TIỆN ÍCH CỦA MƯỜNG THANH LUXURY CÀ MAU
          </h1>
        </span>

        <ul className="flex gap-5 ml-16 mb-4 text-[22px]">
          <li>Nhà hàng & bar</li>
          <li>Phòng họp & Hội nghị</li>
          <li>Dịch vụ khách sạn</li>
          <li>Gói dịch vụ hội thảo</li>
        </ul>

        {/* phần thân phòng */}
        <div className="grid grid-cols-3 gap-x-20 max-w-7xl mx-auto">
          <div className=" w-[380px] h-auto bg-[white] rounded-[8px] hover:drop-shadow-2xl ">
            <div className="hover:max-w-[380px] hover:h-[253px] overflow-hidden hover:ease-in ">
              <img
                src="../../../../public/images/details/deluxe-king-1_1686637326.jpg"
                alt=""
                className=" hover:scale-125 ease-in duration-200"
              />
            </div>
            <h1 className="text-[20px] font-bold pl-5 mt-3">
              Phòng Deluxe King
            </h1>

            <h3 className="flex pt-1 pr-2 ml-5">
              <AiOutlineAreaChart className="mt-1 mr-1" />{" "}
              <p className="mr-10">giờ mở cửa</p> <p>6h30 - 7h30</p>
            </h3>

            <h3 className="flex pt-1 ml-5">
              <PiBedBold className="mt-1  mr-1" />
              <p className="mr-[58px]">Sức chức</p> <p>400 khách</p>
            </h3>

            <MenuItem
              type="details"
              label="Xem chi tiết"
              onClick={() => console.log("hi")}
            />
          </div>

          <div className=" w-[380px] h-auto bg-[white] rounded-[8px] hover:drop-shadow-2xl ">
            <div className="hover:max-w-[380px] hover:h-[253px] overflow-hidden hover:ease-in ">
              <img
                src="../../../../public/images/details/deluxe-king-1_1686637326.jpg"
                alt=""
                className=" hover:scale-125 ease-in duration-200"
              />
            </div>
            <h1 className="text-[20px] font-bold pl-5 mt-3">
              Phòng Deluxe King
            </h1>

            <h3 className="flex pt-1 pr-2 ml-5">
              <AiOutlineAreaChart className="mt-1 mr-1" />{" "}
              <p className="mr-10">giờ mở cửa</p> <p>6h30 - 7h30</p>
            </h3>

            <h3 className="flex pt-1 ml-5">
              <PiBedBold className="mt-1  mr-1" />
              <p className="mr-[58px]">Sức chức</p> <p>400 khách</p>
            </h3>

            <MenuItem
              type="details"
              label="Xem chi tiết"
              onClick={() => console.log("hi")}
            />
          </div>

          <div className=" w-[380px] h-auto bg-[white] rounded-[8px] hover:drop-shadow-2xl ">
            <div className="hover:max-w-[380px] hover:h-[253px] overflow-hidden hover:ease-in ">
              <img
                src="../../../../public/images/details/deluxe-king-1_1686637326.jpg"
                alt=""
                className=" hover:scale-125 ease-in duration-200"
              />
            </div>
            <h1 className="text-[20px] font-bold pl-5 mt-3">
              Phòng Deluxe King
            </h1>

            <h3 className="flex pt-1 pr-2 ml-5">
              <AiOutlineAreaChart className="mt-1 mr-1" />{" "}
              <p className="mr-10">giờ mở cửa</p> <p>6h30 - 7h30</p>
            </h3>

            <h3 className="flex pt-1 ml-5">
              <PiBedBold className="mt-1  mr-1" />
              <p className="mr-[58px]">Sức chức</p> <p>400 khách</p>
            </h3>

            <MenuItem
              type="details"
              label="Xem chi tiết"
              onClick={() => console.log("hi")}
            />
          </div>
        </div>

        <div>
          <div className="mb-6">
            <h1 className="max-w-7xl mx-auto mb-3 mt-6 font-bold">
              Các dịch vụ/tiện ích khác
            </h1>
            <div className="grid grid-cols-3 max-w-7xl mx-auto mb-3 mt-6">
              <div>
                <ul>
                  <li className="py-1 font-bold flex">
                    <PiBedBold className="mt-1 mr-2" />
                    <p>Số ĐKKD</p>
                  </li>
                  <li className="py-1 font-bold flex">
                    <AiOutlineFire className="mt-1 mr-2" />
                    <p>Chỗ đậu xe</p>
                  </li>
                  <li className="py-1 font-bold flex">
                    <AiOutlineFilter className="mt-1 mr-2" />
                    <p>An ninh</p>
                  </li>
                  <li className="py-1 font-bold flex">
                    <AiOutlineFileExcel className="mt-1 mr-2" />
                    <p>Chăm sóc sức khỏe</p>
                  </li>
                </ul>
              </div>

              <div>
                <ul>
                  <li className="py-1 font-bold flex">
                    <AiOutlineLaptop className="mt-1 mr-2" />
                    <p>Số ĐKKD</p>
                  </li>
                  <li className="py-1 font-bold flex">
                    <AiOutlineLinkedin className="mt-1 mr-2" />
                    <p>Chỗ đậu xe</p>
                  </li>
                  <li className="py-1 font-bold flex">
                    <AiOutlinePieChart className="mt-1 mr-2" />
                    <p>An ninh</p>
                  </li>
                  <li className="py-1 font-bold flex">
                    <AiOutlineSplitCells className="mt-1 mr-2" />
                    <p>Chăm sóc sức khỏe</p>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className="py-1 font-bold flex">
                    <AiOutlineTags className="mt-1 mr-2" />
                    <p>Số ĐKKD</p>
                  </li>
                  <li className="py-1 font-bold flex">
                    <AiOutlineTrophy className="mt-1 mr-2" />
                    <p>Chỗ đậu xe</p>
                  </li>
                  <li className="py-1 font-bold flex">
                    <AiOutlineUpCircle className="mt-1 mr-2" />
                    <p>An ninh</p>
                  </li>
                  <li className="py-1 font-bold flex">
                    <AiOutlineVideoCamera className="mt-1 mr-2" />
                    <p>Chăm sóc sức khỏe</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Câu hỏi thường gặp */}
      <div className="max-w-7x m-auto">
        <div className=" bg-[#acb4c0] py-8">
          <h1 className="text-[20px] font-bold ml-10 mb-2">
            Câu hỏi thường gặp
          </h1>
          <p className=" ml-10">chưa có câu hỏi thường gặp</p>
        </div>

        <div className=" bg-red-400 py-8">
          <h1 className="text-[20px] font-bold ml-10 mb-2">
            QUY ĐỊNH CỦA MƯỜNG THANH LUXURY CÀ MAU
          </h1>
        </div>

        <div className=" bg-[#acb4c0] py-8">
          <h1 className="text-[20px] font-bold ml-10 mb-2">
            ĐÁNH GIÁ CỦA KHÁCH HÀNG VỀ MƯỜNG THANH LUXURY CÀ MAU
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Product;
