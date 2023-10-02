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

      <div className="flex justify-between gap-10 my-4">
        <div className="">
          <p>{information}</p>
        </div>

        <div className="flex flex-col gap-2">
          <p>{email}</p>
          <p>{manage}</p>
        </div>

        <div>
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
