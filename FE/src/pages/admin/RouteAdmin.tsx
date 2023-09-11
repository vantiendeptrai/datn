import { Route, Routes } from "react-router-dom";

import {
  AmenitiesManager,
  BaseAdmin,
  BookingManager,
  DashboardManage,
  HotelManager,
  RoomTypeManage,
  UserManager,
  ProfileBookingManage,

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
          <Route path="/profilebooking-manager" element={<ProfileBookingManage />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouteAdmin;
