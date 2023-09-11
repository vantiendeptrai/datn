// Client
import RouteClient from "./client/RouteClient";
import BaseClient from "./client/BaseClient";
import HomePage from "./client/Home/HomePage";
import HotelDetailPage from "./client/HotelDetail/HotelDetailPage";
import HotelListPage from "./client/HotelList/HotelListPage";
import PaymentPage from "./client/Payment/PaymentPage";

// Auth
import RouteAuth from "./auth/RouteAuth";
import BaseAuth from "./auth/BaseAuth";
import ProfilePage from "./auth/Profile/ProfilePage";

// Admin
import RouteAdmin from "./admin/RouteAdmin";
import BaseAdmin from "./admin/BaseAdmin";
import AmenitiesManager from "./admin/Amenities/AmenitiesManager";
import BookingManager from "./admin/Booking/BookingManager";
import DashboardManage from "./admin/Dashboard/DashboardManage";
import HotelManager from "./admin/Hotel/HotelManager";
import RoomTypeManage from "./admin/RoomType/RoomTypeManage";
import UserManager from "./admin/User/UserManager";
import ProfileBookingManage from "./admin/ProfileBooking/ProfileBookingManage";

export {
  // Client
  RouteClient,
  BaseClient,
  HomePage,
  HotelDetailPage,
  HotelListPage,
  PaymentPage,

  // Auth
  RouteAuth,
  BaseAuth,
  ProfilePage,

  // Admin
  RouteAdmin,
  BaseAdmin,
  AmenitiesManager,
  BookingManager,
  DashboardManage,
  HotelManager,
  RoomTypeManage,
  UserManager,
  ProfileBookingManage,
};
