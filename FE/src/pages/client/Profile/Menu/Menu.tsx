import React from "react";
import { MenuItem } from "../../../../components";

export default function Menu() {
  return (
    <section className="bg-[#FCFCFC] px-[15px] pt-[20px] bg-[#FCFCFC]  nam:hidden dark:bg-[#1A1D1F]">
      <ul>
        <a href="">
          <MenuItem label="Thông tin cá nhân"></MenuItem>
        </a>
        <a href="">
          <MenuItem label="Khách sạn đã đặt"></MenuItem>
        </a>
        <a href="">
          <MenuItem label="Thông tin thanh toán"></MenuItem>
        </a>
        <a href="">
          <MenuItem label="Thông báo"></MenuItem>
        </a>
        <a href="">
          <MenuItem label="Khách sạn yêu thích"></MenuItem>
        </a>
      </ul>
    </section>
  );
}
