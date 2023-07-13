import { Helmet } from "react-helmet";

const ReservationManagerPage = () => {
  return (
    <>
      <Helmet>
        <title>Admin - Quản lý đặt phòng</title>
      </Helmet>

      <div
        className="
        text-textLight
        dark:text-textDark"
      >
        Quản lý đặt phòng
      </div>
    </>
  );
};

export default ReservationManagerPage;
