import { Navigate, Outlet, useLocation } from "react-router-dom";

import { Loading } from "../pages";
import { useLoginModal } from "../hooks";
import { useUserQuery } from "../api/auth";

export const PrivateRoute = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const location = useLocation();
  const loginModal = useLoginModal();
  const { data, isSuccess, isFetching, isLoading } = useUserQuery("");

  if (isLoading || isFetching) {
    return <Loading />;
  }

  return (isSuccess || data) && allowedRoles.includes(data?.role) ? (
    <Outlet />
  ) : isSuccess && data ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <>
      {setTimeout(() => {
        loginModal.onOpen();
      }, 100)}
      <Navigate to="/" state={{ from: location }} replace />
    </>
  );
};
