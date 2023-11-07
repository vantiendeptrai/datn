import { Route, Routes } from "react-router-dom";

import {
  AmenitiesManager,
  BaseAdmin,
  BookingManager,
  DashboardManage,
  HotelManager,
  Page404,
  RoomTypeManage,
  UserManager,
} from "..";

const RouteAdmin = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseAdmin />}>
          <Route index element={<DashboardManage />} />
          <Route path="/amenities-manager" element={<AmenitiesManager />} />
          <Route path="/booking-manager" element={<BookingManager />} />
          <Route path="/hotel-manager" element={<HotelManager />} />
          <Route path="/user-manager" element={<UserManager />} />
          <Route path="/roomType-manager" element={<RoomTypeManage />} />
        </Route>

        <Route path="/*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default RouteAdmin;
