import userId from "../../recoil/auth.atoms";

export const getUserInfo = () => userId;

export const isLogin = () => getUserInfo();
