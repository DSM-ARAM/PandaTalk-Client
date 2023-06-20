import { atom } from "recoil";

type GroupType = {
  group: string;
  class: string;
  status: boolean;
};

export const isGroupListAtom = atom<GroupType>({
  key: "isGroupList",
  default: {
    group: "",
    class: "",
    status: false,
  },
});
