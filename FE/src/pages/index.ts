// Admin
import BaseAdmin from "./admin/BaseAdmin";
import RouteAdmin from "./admin/RouteAdmin";
import DashboardPage from "./admin/Dashboard/DashboardPage";
import HotelManagerPage from "./admin/HotelManager/HotelManagerPage";
import ReservationManagerPage from "./admin/ReservationManager/ReservationManagerPage";
import UserManagerPage from "./admin/UserManager/UserManagerPage";

// Auth
import BaseAuth from "./auth/BaseAuth";
import RouteAuth from "./auth/RouteAuth";
import LoginPage from "./auth/Login/LoginPage";
import RegisterPage from "./auth/Register/RegisterPage";

// Client
import BaseClient from "./client/BaseClient";
import RouteClient from "./client/RouteClient";
import HomePage from "./client/Home/HomePage";
import HotelList from "./client/HotelList/HotelList";
import HotelDetailPage from "./client/HotelDetail/HotelDetailPage";
import ProfilePage from "./client/Profile/ProfilePage";

export {
  // Admin
  BaseAdmin,
  RouteAdmin,
  DashboardPage,
  HotelManagerPage,
  ReservationManagerPage,
  UserManagerPage,

  // Auth
  BaseAuth,
  RouteAuth,
  LoginPage,
  RegisterPage,

  // Client
  BaseClient,
  RouteClient,
  HomePage,
  HotelList,
  HotelDetailPage,
  ProfilePage,
};
