import { atom, selector } from "recoil";

export const userId = atom({
  key: "idState",
  default: 0,
});

// id 선택하는 selector
export const idSelector = selector({
  key: "idSelector",
  get: ({ get }) => {
    const user = get(userId);
    return user.id;
  },
});

export default userId;
