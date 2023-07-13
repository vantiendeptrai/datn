import { Helmet } from "react-helmet";

const InformationPage = () => {
  return (
    <>
      <Helmet>
        <title>Thông tin người dùng</title>
      </Helmet>

      <div
        className="
        text-textLight
        dark:text-textDark"
      >
        Thông tin người dùng
      </div>
    </>
  );
};

export default InformationPage;
