import { atom, selector } from "recoil";

export const userInfo = atom({
  key: "genderState",
  default: {
    id: 0,
    userId: "",
    nickname: "",
    password: "",
  },
});

// id 선택하는 selector
export const idSelector = selector({
  key: "idSelector",
  get: ({ get }) => {
    const user = get(userInfo);
    return user.id;
  },
});

// userId 선택하는 selector
export const userIdSelector = selector({
  key: "userIdSelector",
  get: ({ get }) => {
    const user = get(userInfo);
    return user.userId;
  },
});

// nickname 선택하는 selector
export const nicknameSelector = selector({
  key: "nicknameSelector",
  get: ({ get }) => {
    const user = get(userInfo);
    return user.nickname;
  },
});

// password 선택하는 selector
export const passwordSelector = selector({
  key: "passwordSelector",
  get: ({ get }) => {
    const user = get(userInfo);
    return user.password;
  },
});

export default userInfo;
