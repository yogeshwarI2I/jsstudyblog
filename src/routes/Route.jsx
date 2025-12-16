import {createBrowserRouter} from "react-router-dom";
import LoginForm from "../component/login-form/LoginForm";
import Layout from "../pages/layouts/Layout";
import Home from "../pages/home/Home";
import Profile from "../pages/profile/Profile";
import Settings from "../pages/settings/Settings";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);
