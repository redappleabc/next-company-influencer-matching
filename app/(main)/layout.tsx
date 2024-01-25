"use client";
import { useRecoilValue, useRecoilState } from "recoil";
import { authUserState } from "@/recoil/atom/auth/authUserAtom";
import { useRouter } from "next/navigation";

const Auth = ({ children }: { children: React.ReactNode }) => {
  const authUser = useRecoilValue(authUserState);
  const router = useRouter();
  const [_, setAuthUser] = useRecoilState(authUserState);
  const savedUser = localStorage.getItem("user");
  let parsedUser;
  if (savedUser) {
    try {
      parsedUser = JSON.parse(savedUser);
    } catch (e) {
      parsedUser = null;
    }
  }
  if (!parsedUser) router.push("logout");
  if (savedUser && !authUser.user) {
    if (savedUser) {
      setAuthUser({ user: parsedUser });
    }
  }
  return children;
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Auth>{children}</Auth>;
}
