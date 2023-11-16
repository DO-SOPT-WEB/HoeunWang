import { USER_INFO } from "../../constants";
import handleLocalstorage from "../../utils/handleLocalstorage";

export const deleteUserInfo = () => handleLocalstorage.remove(USER_INFO);

export const getUserInfo = () => handleLocalstorage.get(USER_INFO);

export const isLogin = () => getUserInfo();
