import { BiUserCheck } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { Information, InformationM, Tbody, Thead } from "../../../components";
import { useNavigate } from "react-router-dom";

const DashboardManage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div className="grid md:grid-cols-4 md:gap-3 sm:grid-cols-2 grid-cols-1">
        <Information
          name="Thông tin phòng"
          statis=" còn trống 100 phòng"
          icon={FiUsers}
          onClick={() => navigate("/admin")}
        />
        <Information
          name="Thông tin đặt phòng"
          statis="Có 100 người đặt phòng"
          icon={FiUsers}
          onClick={() => navigate("/admin")}
        />

        <Information
          name="có 1000 người dùng"
          statis="Người dùng"
          icon={FiUsers}
          onClick={() => navigate("/admin")}
        />

        <Information
          name="Doanh thu"
          statis="Doanh thu"
          icon={FiUsers}
          onClick={() => navigate("/admin")}
        />
      </div>

      <div className="mt-4 grid grid-cols- gap-4 md:mt-6 md:gap-6 2xl:mt-7 2xl:gap-7">
        <div className="p-5 h-screen bg-gray-100">
          <h1 className="text-xl mb-2">Booking information</h1>

          {/* table desktop */}
          <div className="overflow-auto rounded-lg shadow hidden md:block">
            <table className="w-full">
              <Thead
                id="Id"
                details="Details"
                status="Status"
                date="Date"
                total="Total"
              />

              <Tbody
                id="#1000"
                details="loại phòng 2 người nằm"
                status="unpaid"
                type="unpaid"
                total="200.000"
                date="13/08/2023"
              />

              <Tbody
                id="#1001"
                details="loại phòng 2 người nằm"
                status="unpaid"
                type="unpaid"
                total="200.000"
                date="13/08/2023"
              />

              <Tbody
                id="#1002"
                details="loại phòng 2 người nằm"
                status="paid"
                type="paid"
                total="200.000"
                date="13/08/2023"
              />
            </table>
          </div>

          {/* table mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden">
            <InformationM
              id="#1002"
              details="loại phòng 2 người nằm"
              status="paid"
              type="paid"
              total="200.000"
              date="13/08/2023"
            />

            <InformationM
              id="#1002"
              details="loại phòng 2 người nằm"
              status="paid"
              type="paid"
              total="200.000"
              date="13/08/2023"
            />

            <InformationM
              id="#1002"
              details="loại phòng 2 người nằm"
              status="paid"
              type="paid"
              total="200.000"
              date="13/08/2023"
            />

            <InformationM
              id="#1002"
              details="loại phòng 2 người nằm"
              status="paid"
              type="paid"
              total="200.000"
              date="13/08/2023"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardManage;
