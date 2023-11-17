import { API } from "../constants/api.constant";
import publicApiInstance from "./instance/publicApiInstance";

const authApi = {
  login({ submitData }) {
    return publicApiInstance({
      url: API.AUTH.LOGIN,
      method: "post",
      data: submitData,
    });
  },
  signUp({ submitData }) {
    return publicApiInstance({
      url: API.AUTH.SIGNUP,
      method: "post",
      data: submitData,
    });
  },
  checkDuplicateID({ username }) {
    return publicApiInstance({
      url: `${API.AUTH.CHECK_DUPLICATE_ID}?username=${username}`,
      method: "get",
    });
  },
  getUserDetail({ memberId }) {
    return publicApiInstance({
      url: `${API.USER.USER_INFO}/${memberId}`,
      method: "get",
    });
  },
};

export default authApi;
