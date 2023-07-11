import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RouteAdmin, RouteAuth, RouteClient } from "./pages";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<RouteClient />} />
          <Route path="/auth/*" element={<RouteAuth />} />
          <Route path="/admin/*" element={<RouteAdmin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
