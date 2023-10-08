import React from "react";
import { IconType } from "react-icons";

type Infor = {
  name?: string;
  statis?: string;
  icon?: IconType;
  onClick?: () => void;
};
// grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden
const Information = ({ name, statis, icon: Icon, onClick }: Infor) => {
  return (
    <div className=" rounded-sm border border-stroke py-6 px-7 shadow-default flex flex-col gap-3 shadow border-x-4 bg-yellow-500 ">
      <div className="bg-red-500 flex w-11 items-center justify-center rounded-full">
        {Icon && <Icon size={24} />}
      </div>

      <div>
        <h1 className="text-2xl font-bold">{statis}</h1>
      </div>
      <div className="flex justify-between">
        <h1>{name}</h1>
        <button className="text-[#10b981]" onClick={onClick}>
          Chi tiết
        </button>
      </div>
    </div>
  );
};

export default Information;
