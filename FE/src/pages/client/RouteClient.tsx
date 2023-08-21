import { Route, Routes } from "react-router-dom";

import {
  BaseClient,
  HomePage,
  HotelDetailPage,
  HotelListPage,
  PaymentPage,
} from "..";

const RouteClient = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseClient />}>
          <Route index element={<HomePage />} />
          <Route path="/hotel-list" element={<HotelListPage />} />
          <Route path="/hotel-detail/:id" element={<HotelDetailPage />} />
          <Route path="/payment" element={<PaymentPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouteClient;
