import React from "react";

const Header = () => {
  return (
    <div>
      <header className="md:py-4 md:bg-slate-200 md:text-sm md:font-bold  overflow-hidden 2xl:hidden">
        <nav className="align-center">
          <ul className="flex gap-[70px] justify-center">
            <li className="hover:text-[#e6960f]">
              <a href="">TỔNG QUAN</a>
            </li>

            <li className="hover:text-[#e6960f]">
              <a href="">HẠNG PHÒNG</a>
            </li>

            <li className="hover:text-[#e6960f]">
              <a href="">VỊ TRÍ</a>
            </li>
            <li className="hover:text-[#e6960f]">
              <a href="">ƯU ĐÃI</a>
            </li>
            <li className="hover:text-[#e6960f]">
              <a href="">DỊCH VỤ</a>
            </li>
            <li className="hover:text-[#e6960f]">
              <a href="">HỎI ĐÁP</a>
            </li>

            <li className="hover:text-[#e6960f]">
              <a href="">ĐÁNH GIÁ</a>
            </li>
            <li className="hover:text-[#e6960f]   ">
              <a href="">QUY ĐỊNH</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
