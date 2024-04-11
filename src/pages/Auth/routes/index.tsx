import { Login, Register } from "@/features/authentication/components";
import { checkUnAuth, logoutAction } from "@/utils/_helper";
import { RouteObject } from "react-router-dom";
import Auth from "../Auth";

export const authRoutes: RouteObject = {
  path: "/auth",
  element: <Auth />,
  // loader:checkUnAuth,
  children: [
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "logout",
      action: logoutAction
    }
  ]

}