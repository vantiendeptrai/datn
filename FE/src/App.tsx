import { BrowserRouter, Route, Routes } from "react-router-dom";

import { PrivateRoute } from "./utils";
import { Page403, RouteAdmin, RouteAuth, RouteClient } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<RouteClient />} />
          <Route element={<PrivateRoute allowedRoles={["User", "Admin"]} />}>
            <Route path="/auth/*" element={<RouteAuth />} />
          </Route>
          <Route element={<PrivateRoute allowedRoles={["Admin"]} />}>
            <Route path="/admin/*" element={<RouteAdmin />} />
          </Route>
          <Route path="/unauthorized" element={<Page403 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
