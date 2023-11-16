import axios from "axios";
import { successHandler, errorHandler } from "./responseHandler";
import handleLocalstorage from "../../utils/handleLocalstorage";
import { USER_INFO } from "../../constants";

const privateApiInstance = axios.create({
  baseURL: "/",
});

privateApiInstance.defaults.timeout = 2500;
// privateApiInstance.defaults.withCredentials = true;

const setUserInfo = (config) => {
  const userInfo = handleLocalstorage.get(USER_INFO);
  // 요청을 보내기 전에 수행할 로직

  if (!userInfo) {
    return config;
  }
  return config;
};

privateApiInstance.interceptors.request.use(
  (config) => {
    const newConfig = setUserInfo(config);
    return newConfig;
  },
  (error) => {
    // 요청 에러가 발생했을 때 수행할 로직
    console.log(error); // 디버깅
    return error;
  }
);

privateApiInstance.interceptors.response.use(successHandler, errorHandler);

export default privateApiInstance;
