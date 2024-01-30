import { atom } from "recoil";

interface AuthUserState {
  user: {
    id?: number;
    name?: string;
    role?: string;
    email?: string;
    targetId?: number;
    targetStatus?: string;
    isFree?: number;
  } | null;
}

export const authUserState = atom<AuthUserState>({
  key: "authUserState",
  default: {
    user: null,
  },
  dangerouslyAllowMutability: true,
});
