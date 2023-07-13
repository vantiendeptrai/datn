import { Route, Routes } from "react-router-dom";

import { BaseProfile, InformationPage, ReservationPage } from "..";

const RouteProfile = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseProfile />}>
          <Route index element={<InformationPage />} />
          <Route path="reservation" element={<ReservationPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouteProfile;
