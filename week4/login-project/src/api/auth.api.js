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
  checkDuplicateID({ id }) {
    return publicApiInstance({
      url: API.AUTH.CHECK_DUPLICATE_ID,
      method: "get",
      params: { id },
    });
  },
  GET_USER_DETAIL({ id }) {
    return publicApiInstance({
      url: `${API.USER.USER_INFO}/${id}`,
      method: "get",
    });
  },
};

export default authApi;
