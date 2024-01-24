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
      <div
        className={
          showMenu
            ? "relative lg:hidden duration-500"
            : "relative lg:hidden opacity-0 duration-500"
        }
      >
        <div className="bg-[#8F8F8F] text-[white] absolute pointer-events-none">
          <div className="px-[20px]">
            {mode === "admin" && [
              <div
                className="p-[12px] text-[14px]"
                onClick={() => setShowMenu(false)}
              >
                <Link href={"/companyList"}>企業一覧</Link>
              </div>,
              <div
                className="p-[12px] text-[14px]"
                onClick={() => setShowMenu(false)}
              >
                <Link href={"/influencerList"}>インフルエンサー一覧</Link>
              </div>,
              <div
                className="p-[12px] text-[14px]"
                onClick={() => setShowMenu(false)}
              >
                <Link href={"/applicationList"}>申請案件一覧</Link>
              </div>,
              <div
                className="p-[12px] text-[14px]"
                onClick={() => setShowMenu(false)}
              >
                <Link href={"/notification"}>お知らせ更新</Link>
              </div>,
            ]}
            {mode === "company" && [
              <div
                className="p-[12px] text-[14px]"
                onClick={() => setShowMenu(false)}
              >
                <Link href={"/top"}>TOP</Link>
              </div>,
              <div
                className="p-[12px] text-[14px]"
                onClick={() => setShowMenu(false)}
              >
                <Link href={"/appliedList"}>登録案件一覧</Link>
              </div>,
              <div
                className="p-[12px] text-[14px]"
                onClick={() => setShowMenu(false)}
              >
                <Link href={"/case"}>案件の新規登録</Link>
              </div>,
              <div
                className="p-[12px] text-[14px]"
                onClick={() => setShowMenu(false)}
              >
                <Link href={"/companyInfo"}>企業情報変更</Link>
              </div>,
              <div
                className="p-[12px] text-[14px]"
                onClick={() => setShowMenu(false)}
              >
                <Link href={"/pdfdownload"}>マニュアル</Link>
              </div>,
              <div
                className="p-[12px] text-[14px]"
                onClick={() => setShowMenu(false)}
              >
                <Link href={"/ask"}>運営へのお問い合わせ</Link>
              </div>,
            ]}
            {mode === "influencer" && [
              <div
                className="p-[12px] text-[14px]"
                onClick={() => setShowMenu(false)}
              >
                <Link href={"/top/influencer"}>TOP</Link>
              </div>,
              <div
                className="p-[12px] text-[14px]"
                onClick={() => setShowMenu(false)}
              >
                <Link href={"/appliedCase"}>応募案件一覧</Link>
              </div>,
              <div
                className="p-[12px] text-[14px]"
                onClick={() => setShowMenu(false)}
              >
                <Link href={"/collectingCase"}>募集中案件一覧</Link>
              </div>,
              <div
                className="p-[12px] text-[14px]"
                onClick={() => setShowMenu(false)}
              >
                {/* <Link href={"/chatting"}>チャット </Link> */}チャット
              </div>,
              <div
                className="p-[12px] text-[14px]"
                onClick={() => setShowMenu(false)}
              >
                <Link href={"/influencerInfo"}>インフルエンサー情報変更</Link>
              </div>,
              <div
                className="p-[12px] text-[14px]"
                onClick={() => setShowMenu(false)}
              >
                <Link href={"/ask"}>マニュアル</Link>
              </div>,
              <div
                className="p-[12px] text-[14px]"
                onClick={() => setShowMenu(false)}
              >
                <Link href={"/ask"}>運営へのお問い合わせ</Link>
              </div>,
            ]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
