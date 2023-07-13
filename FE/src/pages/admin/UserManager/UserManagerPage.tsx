import { Helmet } from "react-helmet";

const UserManagerPage = () => {
  return (
    <>
      <Helmet>
        <title>Admin - Quản lý người dùng</title>
      </Helmet>

      <div
        className="
        text-textLight
        dark:text-textDark"
      >
        Quản lý người dùng
      </div>
    </>
  );
};

export default UserManagerPage;
