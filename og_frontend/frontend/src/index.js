import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Advertisements from "./Advertisements";
import Root from "./Root";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Advertisements /> },
      { path: "/dashboard", element: <App /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
