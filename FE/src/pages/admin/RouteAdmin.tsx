import { Route, Routes } from "react-router-dom";

import {
  BaseAdmin,
  DashboardPage,
  HotelManagerPage,
  ReservationManagerPage,
  UserManagerPage,
} from "..";

const RouteAdmin = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseAdmin />}>
          <Route index element={<DashboardPage />} />
          <Route path="hotel-manager" element={<HotelManagerPage />} />
          <Route
            path="reservation-manager"
            element={<ReservationManagerPage />}
          />
          <Route path="user-manager" element={<UserManagerPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouteAdmin;
