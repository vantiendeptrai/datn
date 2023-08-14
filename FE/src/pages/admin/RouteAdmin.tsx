import { Route, Routes } from "react-router-dom";

import { BaseAdmin, DashboardManage, HotelManager, UserManager } from "..";

const RouteAdmin = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseAdmin />}>
          <Route index element={<DashboardManage />} />
          <Route path="/hotel-manager" element={<HotelManager />} />
          <Route path="/user-manager" element={<UserManager />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouteAdmin;
