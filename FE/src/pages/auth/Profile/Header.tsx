import React from "react";

const Header = () => {
  return (
    <div className=" bg-[#003b95]">
      <header className="text-[white] flex justify-between max-w-[1440px] mx-auto py-4">
        <div>
          <p className="font-bold text-[20px]">Booking.com</p>
        </div>

        <div className="flex">
          <img
            src="../../../../public/user.jpg"
            alt=""
            className="rounded-full max-w-[32px]"
          />
          <p className="p-[5px]">Nguyễn Đức Nam</p>
        </div>
      </header>
    </div>
  );
};

export default Header;
