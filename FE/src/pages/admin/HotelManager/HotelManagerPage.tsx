import { Helmet } from "react-helmet";

const HotelManagerPage = () => {
  return (
    <>
      <Helmet>
        <title>Admin - Quản lý khách sạn</title>
      </Helmet>

      <div
        className="
        text-textLight
        dark:text-textDark"
      >
        Quản lý khách sạn
      </div>
    </>
  );
};

export default HotelManagerPage;
