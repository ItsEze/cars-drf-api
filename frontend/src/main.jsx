import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from './Root.jsx'
import './index.css'
import ErrorPage from "./error-page";
import Home from './Home.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      /* existing routes **add more children here. anything after '/' */
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
