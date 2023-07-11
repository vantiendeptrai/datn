import { Route, Routes } from "react-router-dom";
import { BaseClient, HomePage, HotelDetailPage, HotelList } from "..";

const RouteClient = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseClient />}>
          <Route index element={<HomePage />} />
          <Route path="hotel-list" element={<HotelList />} />
          <Route path="hotel-detail/:id" element={<HotelDetailPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouteClient;
