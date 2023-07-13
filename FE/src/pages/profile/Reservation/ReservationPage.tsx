import { Helmet } from "react-helmet";

const ReservationPage = () => {
  return (
    <>
      <Helmet>
        <title>Lịch sử đặt phòng</title>
      </Helmet>

      <div
        className="
        text-textLight
        dark:text-textDark"
      >
        Lịch sử đặt phòng
      </div>
    </>
  );
};

export default ReservationPage;
