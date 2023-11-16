import { useRoutes } from "react-router-dom";
import { ROUTE } from "../constants/route.constant";
import Main from "../pages/Main";
import SignUp from "../pages/SignUp";
import MyPage from "../pages/MyPage";

export default function Router() {
  const element = [
    {
      path: ROUTE.HOME,
      element: <Main />,
    },
    {
      path: ROUTE.SIGN_UP,
      element: <SignUp />,
    },
    {
      path: `${ROUTE.MYPAGE}/:userId`,
      element: <MyPage />,
    },
  ];
  return useRoutes(element);
}
