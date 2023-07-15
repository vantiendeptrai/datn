// Base
import BaseAdmin from "./admin/BaseAdmin";
import BaseAuth from "./auth/BaseAuth";
import BaseClient from "./client/BaseClient";

// Route
import RouteAdmin from "./admin/RouteAdmin";
import RouteAuth from "./auth/RouteAuth";
import RouteClient from "./client/RouteClient";

// Admin
import DashboardPage from "./admin/Dashboard/DashboardPage";
import HotelManagerPage from "./admin/HotelManager/HotelManagerPage";
import ReservationManagerPage from "./admin/ReservationManager/ReservationManagerPage";
import UserManagerPage from "./admin/UserManager/UserManagerPage";

// Auth
import LoginPage from "./auth/Login/LoginPage";
import RegisterPage from "./auth/Register/RegisterPage";

// Client
import HomePage from "./client/Home/HomePage";
import HotelList from "./client/HotelList/HotelList";
import HotelDetailPage from "./client/HotelDetail/HotelDetailPage";
import ProfilePage from "./client/Profile/Information/InformationPage";
import InformationPage from "./client/Profile/Information/InformationPage";
import ReservationPage from "./client/Profile/Reservation/ReservationPage";

export {
  // Base
  BaseAdmin,
  BaseAuth,
  BaseClient,

  // Route
  RouteAdmin,
  RouteAuth,
  RouteClient,

  // Admin
  DashboardPage,
  HotelManagerPage,
  ReservationManagerPage,
  UserManagerPage,

  // Auth
  LoginPage,
  RegisterPage,

  // Client
  HomePage,
  HotelList,
  HotelDetailPage,
  ProfilePage,
  InformationPage,
  ReservationPage,
};
