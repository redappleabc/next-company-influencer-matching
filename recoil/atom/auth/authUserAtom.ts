import { atom } from "recoil";

interface AuthUserState {
  user: object | null;
}

export const authUserState = atom<AuthUserState>({
  key: "authUserState",
  default: {
    user: null,
  },
  dangerouslyAllowMutability: true,
});
