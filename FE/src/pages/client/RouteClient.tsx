import { Route, Routes } from "react-router-dom";

import {
  BaseClient,
  BookingPage,
  ComplaintResolutionPolicy,
  GeneralRules,
  GeneralTerms,
  HomePage,
  HotelDetailPage,
  HotelListPage,
  Page404,
  PaymentPage,
  PrivacyPolicy,
} from "..";

const RouteClient = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseClient />}>
          <Route index element={<HomePage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/hotel-list" element={<HotelListPage />} />
          <Route path="/hotel-detail/:id" element={<HotelDetailPage />} />
          <Route path="/booking/payment" element={<PaymentPage />} />
          <Route
            path="/complaint-resolution-policy"
            element={<ComplaintResolutionPolicy />}
          />
          <Route path="/general-rules" element={<GeneralRules />} />
          <Route path="/general-terms" element={<GeneralTerms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>

        <Route path="/*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default RouteClient;
