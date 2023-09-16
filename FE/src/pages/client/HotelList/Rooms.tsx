import React from "react";

const Rooms = () => {
  const changeText = (newText: any) => {
    document.querySelector("#choose")!.textContent = newText;
  };
  return (
    <div>
      <h1 className="text-[50px] text-center mt-10 uppercase">khởi hành</h1>
      <div className="relative flex justify-center items-center gap-5  bg-gray-100 mb-10">
        <button className="relative flex justify-center items-center bg-white border focus:outline-none shadow text-gray-600 rounded focus:ring ring-gray-200 group ">
          <p className="float-left w-[400px]" id="choose">
            Mời chọn khách sạn
          </p>

          <span className="border-l p-2 hover:bg-gray-100">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </span>

          <div className="text-left absolute group-focus:block hidden bg-white shadow-md min-w-full w-max top-full mt-1 rounded">
            <ul className="border rounded">
              <li
                className="border-none px-4 py-1 hover:bg-gray-500 border-b border-gray-500"
                id="value1"
                onClick={() => changeText("khách sạn mường thanh đà nẵng")}
              >
                khách sạn mường thanh đà nẵng
              </li>
              <li
                className="border-none px-4 py-1 hover:bg-gray-500 border-b border-gray-500"
                id="value2"
                onClick={() => changeText("khách sạn mường thanh hà nội")}
              >
                khách sạn mường thanh hà nội
              </li>
            </ul>
          </div>
        </button>
      </div>

      {/* //[] các phòng của khách sạn*/}
      <div className=" grid grid-cols-2 justify-center items-center max-w-[1440px] mx-auto">
        <div className="border">
          <a href="">
            <img
              src="../../../../public/images/hotel_list/thuong-hieu-luxury_1688104164.jpg"
              alt=""
            />
          </a>

          <span className="flex justify-between my-6 mx-4">
            <h1 className="text-[18px] uppercase font-medium hover:text-yellow-500">
              <a href="">MƯỜNG THANH LUXURY BUÔN MA THUỘT (ĐẮK LẮK)</a>
            </h1>
            <button className="text-[18px] font-medium py-1 px-5 bg-yellow-500 text-[white] hover:shadow-xl">
              <a href="">Đặt phòng</a>
            </button>
          </span>
        </div>

        <div className="border">
          <a href="">
            <img
              src="../../../../public/images/hotel_list/thuong-hieu-luxury_1688104164.jpg"
              alt=""
            />
          </a>

          <span className="flex justify-between my-6 mx-4">
            <h1 className="text-[18px] uppercase font-medium hover:text-yellow-500">
              <a href="">MƯỜNG THANH LUXURY BUÔN MA THUỘT (ĐẮK LẮK)</a>
            </h1>
            <button className="text-[18px] font-medium py-1 px-5 bg-yellow-500 text-[white] hover:shadow-xl">
              <a href="">Đặt phòng</a>
            </button>
          </span>
        </div>

        <div className="border  border-b-0">
          <a href="">
            <img
              src="../../../../public/images/hotel_list/thuong-hieu-luxury_1688104164.jpg"
              alt=""
            />
          </a>

          <span className="flex justify-between my-6 mx-4">
            <h1 className="text-[18px] uppercase font-medium hover:text-yellow-500">
              <a href="">MƯỜNG THANH LUXURY BUÔN MA THUỘT (ĐẮK LẮK)</a>
            </h1>
            <button className="text-[18px] font-medium py-1 px-5 bg-yellow-500 text-[white] hover:shadow-xl">
              <a href="">Đặt phòng</a>
            </button>
          </span>
        </div>

        <div className="border  border-b-0">
          <a href="">
            <img
              src="../../../../public/images/hotel_list/thuong-hieu-luxury_1688104164.jpg"
              alt=""
            />
          </a>

          <span className="flex justify-between my-6 mx-4">
            <h1 className="text-[18px] uppercase font-medium hover:text-yellow-500">
              <a href="">MƯỜNG THANH LUXURY BUÔN MA THUỘT (ĐẮK LẮK)</a>
            </h1>
            <button className="text-[18px] font-medium py-1 px-5 bg-yellow-500 text-[white] hover:shadow-xl">
              <a href="">Đặt phòng</a>
            </button>
          </span>
        </div>
      </div>

      <h1 className="flex items-center justify-center my-10 hover:text-yellow-500">
        XEM THÊM
      </h1>
    </div>
  );
};

export default Rooms;
