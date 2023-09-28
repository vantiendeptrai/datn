import { Route, Routes } from "react-router-dom";

import {
  BaseAuth,
  BillingInformationPage,
  NotificationsPage,
  PrivacyPage,
  ProfilePage,
  SecurityPage,
} from "..";

const RouteClient = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseAuth />}>
          <Route index element={<ProfilePage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route
            path="/billing-information"
            element={<BillingInformationPage />}
          />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/notifications" element={<NotificationsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouteClient;
