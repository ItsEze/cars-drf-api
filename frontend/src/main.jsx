import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from './Root.jsx'
import './index.css'
import ErrorPage from "./error-page";
import Home from './Home.jsx'
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";
import Form from "./components/ui/Form.jsx";


import {
  createBrowserRouter,
  // Form,
  RouterProvider,
} from "react-router-dom";
// import { login } from "./api/authApi.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      // { index: true, element: <Home /> },
      { index: true, element: <Signup /> },
      { index:true, element: <Login /> }
      /* existing routes **add more children here. anything after '/' */
    ],
  },
  // {
  //   path: '/login',
  //   element: <Login />,
  //   errorElement: <ErrorPage />,
  //   children: [
  //     {index: true, element: <Form />}
  //   ]
  // },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
