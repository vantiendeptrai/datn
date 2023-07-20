import { AiOutlineBarChart, AiOutlinePieChart } from "react-icons/ai";
import { HiOutlineUserAdd, HiOutlineUserGroup } from "react-icons/hi";

import { DashboardCard } from "../../../components";

const DashboardPage = () => {
  return (
    <>
      <div
        className="
        flex
        flex-col
        gap-5
        w-full"
      >
        <h2
          className="
          text-3xl
          font-medium
          text-textLight
          dark:text-textDark"
        >
          Dashboard
        </h2>

        <div
          className="
          flex
          flex-wrap"
        >
          <DashboardCard
            label="Người dùng mới"
            percent={10}
            total={100}
            icon={HiOutlineUserAdd}
            increase
          />
          <DashboardCard
            label="Đơn đặt phòng"
            percent={10}
            total={100}
            icon={AiOutlineBarChart}
            decrease
          />
          <DashboardCard
            label="Tổng người dùng"
            percent={10}
            total={100}
            icon={HiOutlineUserGroup}
            increase
          />
          <DashboardCard
            label="Tổng đặt phòng"
            percent={10}
            total={100}
            icon={AiOutlinePieChart}
            increase
          />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
