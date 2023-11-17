export const API_PREFIX = "/api";
export const ROOT_API_URL = process.env.REACT_APP_SERVER_API + API_PREFIX;

export const API = {
  AUTH: {
    LOGIN: "/v1/members/sign-in",
    SIGNUP: "/v1/members",
    CHECK_DUPLICATE_ID: "/v1/members/check",
  },
  USER: {
    USER_INFO: "/v1/members",
  },
};
