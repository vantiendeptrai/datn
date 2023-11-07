// Admin
import RouteAdmin from "./admin/RouteAdmin";
import BaseAdmin from "./admin/BaseAdmin";
import AmenitiesManager from "./admin/Amenities/AmenitiesManager";
import BookingManager from "./admin/Booking/BookingManager";
import DashboardManage from "./admin/Dashboard/DashboardManage";
import HotelManager from "./admin/Hotel/HotelManager";
import RoomTypeManage from "./admin/RoomType/RoomTypeManage";
import UserManager from "./admin/User/UserManager";

// Auth
import RouteAuth from "./auth/RouteAuth";
import BaseAuth from "./auth/BaseAuth";
import BillingInformationPage from "./auth/BillingInformation/BillingInformationPage";
import NotificationsPage from "./auth/Notifications/NotificationsPage";
import PrivacyPage from "./auth/Privacy/PrivacyPage";
import ProfilePage from "./auth/Profile/ProfilePage";
import SecurityPage from "./auth/Security/SecurityPage";

// Client
import RouteClient from "./client/RouteClient";
import BaseClient from "./client/BaseClient";
import BookingPage from "./client/Booking/BookingPage";
import HomePage from "./client/Home/HomePage";
import HotelDetailPage from "./client/HotelDetail/HotelDetailPage";
import HotelListPage from "./client/HotelList/HotelListPage";
import PaymentPage from "./client/Payment/PaymentPage";
import ComplaintResolutionPolicy from "./client/Policy/ComplaintResolutionPolicy";
import GeneralRules from "./client/Policy/GeneralRules";
import GeneralTerms from "./client/Policy/GeneralTerms";
import PrivacyPolicy from "./client/Policy/PrivacyPolicy";

// Error
import Loading from "./error/Loading";
import Page403 from "./error/Page403";
import Page404 from "./error/Page404";
import Page500 from "./error/Page500";

export {
  // Admin
  RouteAdmin,
  BaseAdmin,
  AmenitiesManager,
  BookingManager,
  DashboardManage,
  HotelManager,
  RoomTypeManage,
  UserManager,

  // Auth
  RouteAuth,
  BaseAuth,
  BillingInformationPage,
  NotificationsPage,
  PrivacyPage,
  ProfilePage,
  SecurityPage,

  // Client
  RouteClient,
  BaseClient,
  BookingPage,
  HomePage,
  HotelDetailPage,
  HotelListPage,
  PaymentPage,
  ComplaintResolutionPolicy,
  GeneralRules,
  GeneralTerms,
  PrivacyPolicy,

  // Error
  Loading,
  Page403,
  Page404,
  Page500,
};
