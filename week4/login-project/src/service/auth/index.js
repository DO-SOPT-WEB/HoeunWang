import userInfo from "../../recoil/auth.atoms";

export const getUserInfo = () => userInfo;

export const isLogin = () => getUserInfo();
