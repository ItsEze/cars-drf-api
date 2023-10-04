import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from './Root.jsx'
import ErrorPage from "./error-page";
import Home from './Home.jsx'
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Form from "./components/ui/Form.jsx";


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
      // {index: true, element: <Login />},
      // {index: true, element: <Form />}
      /* existing routes **add more children here. anything after '/' */
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <ErrorPage />,
    children: [
      // {index: true, element: <Form />}
    ]
  },
  {
    path: '/signup',
    element: <Signup />,
    errorElement: <ErrorPage />,
    children: [
      // {index: true, element: <Form />}
    ]
  },
  {
    path: '/form',
    element: <Form />,
    errorElement: <ErrorPage />,
    children: [

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <Root />
  </React.StrictMode>,
)
