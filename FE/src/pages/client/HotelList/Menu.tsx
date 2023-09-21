import React from "react";

const Menu = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <ul className="flex uppercase text-[20px]">
          <li className=" px-[34px] py-[30px] hover:text-[red]">
            mường thanh luxury
          </li>
          <li className=" px-[34px] py-[30px] hover:text-[red]">
            Mường thanh luxury
          </li>
          <li className=" px-[34px] py-[30px] hover:text-[red]">
            Mường thanh luxury
          </li>
          <li className=" px-[34px] py-[30px] hover:text-[red]">
            Mường thanh luxury
          </li>
        </ul>
      </div>

      <img
        src="../../../../public/images/hotel_list/thuong-hieu-luxury_1688104164.jpg"
        alt=""
        className="w-[1440px] items-center mx-auto h-[564px]"
      />
    </div>
  );
};

export default Menu;
