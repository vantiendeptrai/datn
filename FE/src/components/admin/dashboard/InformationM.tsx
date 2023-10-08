import React from "react";

type Props = {
  id: string;
  details: string;
  type?: "paid" | "unpaid";
  status: string;
  date: string;
  total: string;
};

const InformationM = ({ id, details, status, type, date, total }: Props) => {
  return (
    <div className="bg-white space-y-3 p-4 rounded-lg shadow">
      <div className="flex items-center space-x-2 text-sm">
        <div>
          <a href="#" className="text-blue-500 font-bold hover:underline">
            {id}
          </a>
        </div>
        <div className="text-gray-500">{date}</div>
        <div>
          <span
            className={`${
              type === "paid" &&
              "p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50"
            } ${
              type === "unpaid" &&
              "p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-yellow-200 rounded-lg bg-opacity-50"
            }`}
          >
            {status}
          </span>
        </div>
      </div>
      <div className="text-sm text-gray-700">{details}</div>
      <div className="text-sm font-medium text-black">{total}</div>
    </div>
  );
};

export default InformationM;
