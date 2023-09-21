import React from "react";

const Form = () => {
  return (
    <div>
      <div className=" flex justify-center items-center bg-red-300 h-[538px] mb-10">
        <form action="" className="flex flex-col">
          <span className="flex flex-col">
            <label htmlFor="" className="text-[18px] my-8">
              1. CHOOSE YOUR DESTINATION/HOTEL
            </label>
            <input type="text" className="w-[720px] h-[33px]" />
          </span>

          <span className="flex flex-col">
            <label htmlFor="" className="my-8">
              2. CHOOSE YOUR STAY
            </label>
            <p>
              <input
                type="date"
                placeholder="NGÀY ĐẾN"
                className="w-[350px] h-[39px] mr-5"
              />
              <input
                type="date"
                placeholder="NGÀY ĐI"
                className="w-[350px] h-[39px]"
              />
            </p>
          </span>

          <button className="bg-red-500 max-w-[100px] h-[40px] mt-10">
            Đặt Phòng
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
