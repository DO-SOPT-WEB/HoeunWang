import { isLogin } from "../service/auth";

export default function PrivateRoute({ Component }) {
  return isLogin() ? <Component /> : <h3>로그인한 유저만 접근할 수 있어요.</h3>;
}
