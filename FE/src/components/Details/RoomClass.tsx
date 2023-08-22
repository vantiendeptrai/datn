import React from "react";
import { AiOutlineAreaChart } from "react-icons/ai";
import { PiBedBold } from "react-icons/pi";
import { MenuItem } from "..";

type Props = {
  button?: React.ReactElement;
};

const RoomClass = (props: Props) => {
  return (
    <div>
      <div className=" pt-[60px] mt-14 pb-[60px] bg-[#f4f4f5] overflow-hidden">
        <span className="flex max-w-7xl mx-auto mb-[20px]">
          <h1 className="text-[33px] font-bold">Các Hạng phòng</h1>
          <h3 className="text-[16px] mt-6 bg-[#e7ae1f] rounded-md px-3 ml-4 text-[white]">
            Giá phòng từ ngày 19-08-2023 ~ 21-08-2023
          </h3>
        </span>
        {/* phần thân phòng */}
        <div className="grid grid-cols-3 gap-x-20 max-w-7xl mx-auto">
          <div className=" w-[380px] h-[390px] bg-[white] rounded-[8px] hover:drop-shadow-2xl ">
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
            <span className="flex ml-5">
              <h3 className="flex pt-1 pr-2">
                <AiOutlineAreaChart className="mt-1 mr-1" /> <p>33m</p>
              </h3>

              <h3 className="flex pt-1">
                <PiBedBold className="mt-1  mr-1" />
                <p>1 giường kinh size</p>
              </h3>
            </span>

            <span className="flex justify-between mt-2">
              <span className=" flex ml-5 mt-1">
                <p className="mt-1 ">Chỉ từ </p>
                <p className="text-[20px] text-[#de9a3b] px-1 font-medium">
                  1,350,000 VNĐ
                </p>
                <p className="mt-1">/đêm</p>
              </span>

              <MenuItem
                type="detail"
                label="Đặt ngay"
                onClick={() => console.log("hi")}
              />
            </span>
          </div>

          {/*  */}

          <div>
            <div className=" w-[380px] h-[390px] bg-[white] rounded-[8px] hover:drop-shadow-2xl ">
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
              <span className="flex ml-5">
                <h3 className="flex pt-1 pr-2">
                  <AiOutlineAreaChart className="mt-1  mr-1" /> <p>33m</p>
                </h3>

                <h3 className="flex pt-1">
                  <PiBedBold className="mt-1  mr-1" /> <p>1 giường kinh size</p>
                </h3>
              </span>

              <span className="flex justify-between mt-2">
                <span className=" flex ml-5 mt-1">
                  <p className="mt-1 ">Chỉ từ </p>
                  <p className="text-[20px] text-[#de9a3b] px-1 font-medium">
                    1,350,000 VNĐ
                  </p>
                  <p className="mt-1">/đêm</p>
                </span>

                <MenuItem
                  type="detail"
                  label="Đặt ngay"
                  onClick={() => console.log("hi")}
                />
              </span>
            </div>
          </div>

          {/*  */}

          <div>
            <div className=" w-[380px] h-[390px] bg-[white] rounded-[8px] hover:drop-shadow-2xl ">
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
              <span className="flex ml-5">
                <h3 className="flex pt-1 pr-2">
                  <AiOutlineAreaChart className="mt-1  mr-1" /> <p>33m</p>
                </h3>

                <h3 className="flex pt-1">
                  <PiBedBold className="mt-1  mr-1" /> <p>1 giường kinh size</p>
                </h3>
              </span>

              <span className="flex justify-between mt-2">
                <span className=" flex ml-5 mt-1">
                  <p className="mt-1 ">Chỉ từ </p>
                  <p className="text-[20px] text-[#de9a3b] px-1 font-medium">
                    1,350,000 VNĐ
                  </p>
                  <p className="mt-1">/đêm</p>
                </span>

                <MenuItem
                  type="detail"
                  label="Đặt ngay"
                  onClick={() => console.log("hi")}
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomClass;
