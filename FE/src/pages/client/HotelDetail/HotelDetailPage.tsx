import { Helmet } from "react-helmet";

const HotelDetailPage = () => {
  return (
    <>
      <Helmet>
        <title>Thông tin khách sạn</title>
      </Helmet>

      <div
        className="
        text-textLight
        dark:text-textDark"
      >
        Thông tin khách sạn
      </div>
    </>
  );
};

export default HotelDetailPage;
