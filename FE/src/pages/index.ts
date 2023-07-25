// Base
import BaseAdmin from "./admin/BaseAdmin";
import BaseClient from "./client/BaseClient";
import BaseProfile from "./client/Profile/BaseProfile";

// Route
import RouteAdmin from "./admin/RouteAdmin";
import RouteClient from "./client/RouteClient";

// Admin
import DashboardPage from "./admin/Dashboard/DashboardPage";
import HotelManagerPage from "./admin/HotelManager/HotelManagerPage";
import ReservationManagerPage from "./admin/ReservationManager/ReservationManagerPage";
import UserManagerPage from "./admin/UserManager/UserManagerPage";

// Client
import HomePage from "./client/Home/HomePage";
import HotelDetailPage from "./client/HotelDetail/HotelDetailPage";
import HotelListPage from "./client/HotelList/HotelListPage";
import FavoritePage from "./client/Profile/Favorite/FavoritePage";
import InformationPage from "./client/Profile/Information/InformationPage";
import PaymentPage from "./client/Profile/Payment/PaymentPage";
import ReservationPage from "./client/Profile/Reservation/ReservationPage";

export {
  // Base
  BaseAdmin,
  BaseClient,
  BaseProfile,

  // Route
  RouteAdmin,
  RouteClient,

  // Admin
  DashboardPage,
  HotelManagerPage,
  ReservationManagerPage,
  UserManagerPage,

  // Client
  HomePage,
  HotelListPage,
  HotelDetailPage,
  FavoritePage,
  InformationPage,
  PaymentPage,
  ReservationPage,
};
