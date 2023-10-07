import React from "react";

type Props = {
  id: string;
  details: string;
  type?: "paid" | "unpaid";
  status: string;
  date: string;
  total: string;
};

const Tbody = ({ id, details, status, type, date, total }: Props) => {
  return (
    <tbody className="divide-y divide-gray-100">
      <tr className="bg-white">
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
          <a href="#" className="font-bold text-blue-500 hover:underline">
            {id}
          </a>
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
          {details}
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
          <span
            className={`${
              type === "paid" &&
              "p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50"
            } ${
              type === "unpaid" &&
              "p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50"
            }`}
          >
            {status}
          </span>
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{date}</td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{total}</td>
      </tr>
      {/* <tr className="bg-gray-50">
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
          <a href="#" className="font-bold text-blue-500 hover:underline">
            10002
          </a>
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
          Kring New Fit office chair, mesh + PU, black
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
          <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-yellow-200 rounded-lg bg-opacity-50">
            Shipped
          </span>
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
          16/10/2021
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">$200.00</td>
      </tr> */}
    </tbody>
  );
};

export default Tbody;
