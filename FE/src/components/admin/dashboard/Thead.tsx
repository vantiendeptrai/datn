import React from "react";

type Props = {
  id: string;
  details: string;
  status: string;
  date: string;
  total: string;
};

const Thead = ({ id, details, status, date, total }: Props) => {
  return (
    <thead className="bg-gray-50 border-b-2 border-gray-200 ">
      <tr>
        <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
          {id}
        </th>
        <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
          {details}
        </th>
        <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
          {status}
        </th>
        <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
          {date}
        </th>
        <th className="w-24 p-3 text-sm font-semibold tracking-wide text-left">
          {total}
        </th>
      </tr>
    </thead>
  );
};

export default Thead;
