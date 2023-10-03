import React from "react";

type userInfor = {
  name?: string;
  title?: string;
  information?: string;
  label?: string;
  email?: string;
  manage?: string;
  onClick?: () => void;
};

const UserInfor = ({
  name,
  title,
  email,
  information,
  label,
  manage,
  onClick,
}: userInfor) => {
  return (
    <div className="ml-3">
      <h1 className="font-bold text-4xl">{name}</h1>
      <p className="mt-2">{title}</p>

      <div className="flex justify-start gap-10 py-4 mt-1">
        <div className="max-w-[130px] w-[130px]">
          <p>{information}</p>
        </div>

        <div className="flex flex-col gap-2 max-w-[330px]">
          <p>{email}</p>
          <p>{manage}</p>
        </div>

        <div className="">
          <button
            className="hover:bg-slate-300 px-2 py-2 hover:rounded text-[#006ce4] font-bold text-[14px]"
            onClick={onClick}
          >
            {label}
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default UserInfor;
