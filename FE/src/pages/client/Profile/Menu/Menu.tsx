import { MenuItem } from "../../../../components";

export default function Menu() {
  return (
    <section className="mt-[15px] bg-[#FCFCFC] px-[15px] pt-[20px] bg-[#FCFCFC]  nam:hidden dark:bg-[#1A1D1F]">
      <ul>
        <li
          className=" flex
        justify-start
        items-center
        px-4
        py-4
        gap-3
        transition
        font-semibold
        cursor-pointer
        rounded-xl
        w-full
        hover:bg-primary hover:opacity-80 
        
        dark:hover:bg-primary dark:text-textLight2nd
        "
        >
          <a href="">Thông tin cá nhân</a>
        </li>
        <li
          className=" flex
        justify-start
        items-center
        px-4
        py-4
        gap-3
        transition
        font-semibold
        cursor-pointer
        rounded-xl
        w-full
        hover:bg-primary hover:opacity-80 
        
        dark:hover:bg-primary dark:text-textLight2nd
        "
        >
          <a href="">khách sạn đã đặt</a>
        </li>
        <li
          className=" flex
        justify-start
        items-center
        px-4
        py-4
        gap-3
        transition
        font-semibold
        cursor-pointer
        rounded-xl
        w-full
        hover:bg-primary hover:opacity-80 
        
        dark:hover:bg-primary dark:text-textLight2nd
        "
        >
          <a href="">Khách sạn yêu thích</a>
        </li>
        <li
          className=" flex
        justify-start
        items-center
        px-4
        py-3
        gap-3
        transition
        font-semibold
        cursor-pointer
        rounded-xl
        w-full
        hover:bg-primary hover:opacity-80 
        
        dark:hover:bg-primary dark:text-textLight2nd
        "
        >
          <a href="">Thông tin thanh toán</a>
        </li>
      </ul>
    </section>
  );
}
