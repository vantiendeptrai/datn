import { Helmet } from "react-helmet";

const HotelList = () => {
  return (
    <>
      <Helmet>
        <title>Danh sách khách sạn</title>
      </Helmet>

      <div
        className="
        text-textLight
        dark:text-textDark"
      >
        Danh sách khách sạn
      </div>
    </>
  );
};

export default HotelList;
