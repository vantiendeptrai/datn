import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  BaseClient,
  FavoritePage,
  HomePage,
  HotelDetailPage,
  HotelListPage,
  InformationPage,
  ReservationPage,
  PaymentPage,
  BaseProfile,
} from "..";
import { IUser } from "../../interface";
import { getCurrentUser } from "../../api";

const RouteClient = () => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);

  useEffect(() => {
    async function fetchCurrentUser() {
      const data = await getCurrentUser();
      setCurrentUser(data);
    }

    fetchCurrentUser();
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <BaseClient
              imageUser={currentUser?.image}
              isLogin={currentUser !== null}
            />
          }
        >
          <Route index element={<HomePage />} />
          <Route path="hotel-list" element={<HotelListPage />} />
          <Route path="hotel-detail/:id" element={<HotelDetailPage />} />
          <Route path="profile" element={<BaseProfile />}>
            <Route index element={<InformationPage />} />
            <Route path="reservation" element={<ReservationPage />} />
            <Route path="favorite" element={<FavoritePage />} />
            <Route path="payment" element={<PaymentPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default RouteClient;
