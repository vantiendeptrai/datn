import { Helmet } from "react-helmet";

const DashboardPage = () => {
  return (
    <>
      <Helmet>
        <title>Admin - Dashboard</title>
      </Helmet>

      <div
        className="
        text-textLight
        dark:text-textDark"
      >
        DashboardPage
      </div>
    </>
  );
};

export default DashboardPage;
