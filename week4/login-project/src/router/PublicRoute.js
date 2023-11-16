import React from "react";
import { ROUTE } from "../constants/route.constant";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PublicRoute from "../hoc/PublicRoute";

const routesPublic = [
  {
    path: ROUTE.LOGIN,
    element: Login,
  },
  {
    path: ROUTE.SIGN_UP,
    element: SignUp,
  },
];

export const publicRoutes = routesPublic.map(({ path, element }) => ({
  path,
  element: React.createElement(PublicRoute, { Component: element }),
}));
