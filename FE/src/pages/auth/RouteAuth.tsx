import { Route, Routes } from "react-router-dom";

import { BaseAuth, LoginPage, RegisterPage } from "..";

const RouteAuth = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<BaseAuth />}>
          <Route index element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default RouteAuth;
