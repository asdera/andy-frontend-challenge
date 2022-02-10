import React, { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Loading from "./components/Loading/Loading";

const Homepage = React.lazy(() => import("./components/Homepage/Homepage"));
const Login = React.lazy(() => import("./components/Login/Login"));
const Events = React.lazy(() => import("./components/Events/Events"));

function Router(): ReactElement | null {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<Events />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
}

export default Router;
