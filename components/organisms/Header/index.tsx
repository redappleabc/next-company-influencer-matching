"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRecoilValue, useRecoilState } from "recoil";
import { authUserState } from "@/recoil/atom/auth/authUserAtom";
import { useRouter } from "next/navigation";
export interface Headerprops {
  mode: string;
}

const Header: React.FC<Headerprops> = ({ mode }: Headerprops) => {
  const [_, setAuthUser] = useRecoilState(authUserState);
  const [showMenu, setShowMenu] = useState(false);
  const authUser = useRecoilValue(authUserState);
  const router = useRouter();
  return mode === "auth" ? (
    <div className="h-[90px] bg-[white] flex justify-between items-center px-[25px] absolute top-0 w-full">
      <img src="/img/logo(red).svg" className="h-[51px] sp:w-[30%]" />
      <div className="flex">
        <Link href={"/ask"}>
          <button className="h-[37px] bg-[black] text-white py-[10px] px-[30px] sp:px-[10px] justify-center flex items-center rounded-[30px] mr-[30px] sp:mr-[10px]">
            <img
              src="/img/mail.svg"
              className="w-[20px] mr-[10px] sp:mr-[0px]"
            />
            <span className="sp:hidden">お問い合わせ</span>
          </button>
        </Link>
        <Link href={"/apply"}>
          <button className="h-[37px] bg-[#FF2929] text-white py-[10px] px-[30px] sp:px-[10px] justify-center flex items-center rounded-[30px] mr-[70px] sp:mr-[10px]">
            <img
              src="/img/brand.svg"
              className="w-[15px] mr-[10px] sp:mr-[0px]"
            />
            <span className="sp:hidden">お申し込み</span>
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <div className="flex h-[64px] w-full absolute sp:flex-col">
      <div className="bg-[#FF2929] h-[full] px-[15px] flex items-center sp:w-[100%] sp:py-[7px]">
        <img src="/img/logo.svg" className="sp:hidden" />
        <img src="/img/vector.svg" className="lg:hidden mx-auto" />
      </div>
      <div className="flex justify-between items-center w-full bg-[#494D53] sp:py-[14px]">
        <img
          src="/img/hamburger.svg"
          className="lg:hidden h-[14px] mx-[22px]"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
        <div className=" text-[white] h-[full] flex items-center px-[32px] text-header">
          {authUser.user?.name}
        </div>
        <img
          src="/img/logout.svg"
          className="lg:hidden h-[14px] mx-[22px]"
          onClick={() => {
            router.push("/logout");
            setAuthUser({ user: null });
            localStorage.removeItem("user");
          }}
        />
        <div
          className="text-[white] h-[full] flex items-center px-[32px] sp:hidden cursor-pointer"
          onClick={() => {
            setAuthUser({ user: null });
            localStorage.removeItem("user");
          }}
        >
          ログアウト
        </div>
      </div>
      {showMenu && (
        <div className="relative lg:hidden">
          <div className="bg-[#8F8F8F] text-[white] absolute">
            <div className="px-[20px]">
              <div
                className="p-[12px] text-[14px]"
                onClick={() => setShowMenu(false)}
              >
                <Link href={"/companyList"}>企業一覧</Link>
              </div>
              <div
                className="p-[12px] text-[14px]"
                onClick={() => setShowMenu(false)}
              >
                <Link href={"/influencerList"}>インフルエンサー一覧</Link>
              </div>
              <div
                className="p-[12px] text-[14px]"
                onClick={() => setShowMenu(false)}
              >
                <Link href={"/applicationList"}>申請案件一覧</Link>
              </div>
              <div
                className="p-[12px] text-[14px]"
                onClick={() => setShowMenu(false)}
              >
                <Link href={"/notification"}>お知らせ更新</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
