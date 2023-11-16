import { useRoutes } from "react-router-dom";
import Main from "../pages/Main";
import { publicRoutes } from "./PublicRoute";
import { privateRoutes } from "./PrivateRoute";

export default function Router() {
  const element = [
    {
      element: <Main />,
      children: [...publicRoutes, ...privateRoutes],
    },
  ];
  return useRoutes(element);
}
