"use client";
import { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { authUserState } from "@/recoil/atom/auth/authUserAtom";
import { useRouter } from "next/navigation";

const Auth = ({ children }: { children: React.ReactNode }) => {
  const authUser = useRecoilValue(authUserState);
  const router = useRouter();
  const [_, setAuthUser] = useRecoilState(authUserState);
  const savedUser = localStorage.getItem("user");
  if (savedUser && !authUser.user) {
    setAuthUser({ user: JSON.parse(savedUser) });
  }
  useEffect(() => {
    if (!authUser.user) router.push("/logout");
  }, [authUser]);
  return children;
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Auth>{children}</Auth>;
}
