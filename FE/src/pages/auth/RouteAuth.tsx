import { Route, Routes } from "react-router-dom";

import { BaseAuth, ProfilePage } from "..";

const RouteClient = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseAuth />}>
          <Route index element={<ProfilePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouteClient;
