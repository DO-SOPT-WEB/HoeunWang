import React from "react";
import { ROUTE } from "../constants/route.constant";
import MyPage from "../pages/MyPage";
import PrivateRoute from "../hoc/PrivateRoute";

const routesPrivate = [
  {
    path: `${ROUTE.MYPAGE}/:userId`,
    element: MyPage,
  },
];

export const privateRoutes = routesPrivate.map(({ path, element }) => ({
  path,
  element: React.createElement(PrivateRoute, { Component: element }),
}));
