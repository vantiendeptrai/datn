import { Helmet } from "react-helmet";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Trang chủ</title>
      </Helmet>

      <div
        className="
        text-textLight
        dark:text-textDark"
      >
        Trang chủ
      </div>
    </>
  );
};

export default HomePage;