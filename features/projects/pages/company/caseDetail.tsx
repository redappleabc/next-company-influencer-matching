"use client";

import Checkbox from "@/components/atoms/checkbox";
import SearchBar from "@/components/organisms/searchbar";
import Button, { ButtonType } from "@/components/atoms/button";
import Link from "next/link";
import { useState } from "react";

export default function CaseDetailPage() {
  const [active, setActive] = useState(null);

  const onItemClick = ({ idx }: { idx: Number }) => {
    if (active === idx) {
      setActive(null);
    } else {
      setActive(idx);
    }
  };
  const data = [
    {
      nickName: "ユニティー",
      sns: "カフェPR",
      status: "承認 ",
      date: "2023/01/01",
      ended: "",
    },
    {
      nickName: "ユニティー",
      sns: "カフェPR",
      status: "承認 ",
      date: "2023/01/01",
      ended: "",
    },
    {
      nickName: "ユニティー",
      sns: "カフェPR",
      status: "承認 ",
      date: "2023/01/01",
      ended: "",
    },
    {
      nickName: "ユニティー",
      sns: "カフェPR",
      status: "承認 ",
      date: "2023/01/01",
      ended: "",
    },
  ];
  return (
    <div>
      <div className="px-[30px] sp:px-[12px] pt-[110px] pb-[30px]">
        <div className="text-title sp:hidden">募集案件詳細</div>
        <SearchBar
          title={
            <div className="flex flex-wrap items-center gap-x-[20px]">
              <span className="text-[#3F8DEB] underline hover:cursor-pointer underline-offset-3">
                案件詳細
              </span>
              <span>状態：募集中</span>
              <span className="flex flex-wrap">
                <span>募集期間：2023/11/01 11:11 ～</span>
                <span> 2023/11/10 11:11</span>
              </span>
              <Button
                buttonType={ButtonType.DANGER}
                buttonClassName="rounded-[0px] px-[15px] py-[7px]"
              >
                募集終了
              </Button>
              <Button
                buttonType={ButtonType.DEFAULT}
                buttonClassName="rounded-[0px]"
              >
                停止
              </Button>
            </div>
          }
          extendChild={
            <div>
              <div className="mt-[30px] sp:mt-[10px] text-small text-[#3F8DEB] font-bold">
                条件を絞り込みできます。
              </div>
              <div className="flex sp:block mt-[8px] flex-wrap gap-x-10">
                <div className="flex flex-wrap">
                  <Checkbox
                    prefix="状態 ： "
                    title={"承認待ち"}
                    checkBoxClassName="mr-[20px]"
                  />
                  <Checkbox title={"承認"} checkBoxClassName="mr-[20px]" />
                  <Checkbox title={"否認"} checkBoxClassName="mr-[20px]" />
                  <Checkbox title={"完了"} />
                </div>
              </div>
            </div>
          }
        />
        <div className="text-[14px] text-[#A9A9A9] mb-[10px] sp:text-spsmall">
          該当数：10件
        </div>
        <table className="w-full text-[14px] sp:hidden">
          <thead>
            <tr>
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3] w-[25%]">
                ニックネーム
              </td>
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3] ">
                SNSの種類
              </td>
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3]">
                状態
              </td>
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3]">
                申請日
              </td>
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3]">
                チャット
              </td>
              <td className="py-[25px] bg-[#F8F9FA] border border-[#D3D3D3] w-[70px]"></td>
            </tr>
          </thead>
          <tbody>
            {data.map((aData, idx) => (
              <tr key={idx}>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3] hover:cursor-pointer">
                  <Link href={"/influencerDetail"}>
                    <span className="text-[#3F8DEB] underline underline-[#3F8DEB] underline-offset-[3px]">
                      {aData.nickName}
                    </span>
                  </Link>
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3] ">
                  <div className="flex flex-wrap items-center gap-[15px]">
                    <img
                      className="w-[35px]"
                      src="/img/sns/Instagram.svg"
                      alt="instagram"
                    />
                    <img
                      className="w-[35px]"
                      src="/img/sns/tiktok.svg"
                      alt="tiktok"
                    />
                    <img className="w-[35px]" src="/img/sns/x.svg" alt="x" />
                    <img
                      className="w-[35px]"
                      src="/img/sns/youtube.svg"
                      alt="youtube"
                    />
                    <img
                      className="w-[35px]"
                      src="/img/sns/facebook.svg"
                      alt="facebook"
                    />
                    <span className="text-[#C0C0C0]">etc.</span>
                  </div>
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3] hover:cursor-pointer">
                  {aData.status}
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3]">
                  {aData.date}
                </td>
                <td className="w-[150px] py-[25px]  border border-[#D3D3D3]">
                  <Link href={"/chatting"}>
                    <img
                      className="w-[35px] m-auto"
                      src="/img/chatting.svg"
                      alt="chatting"
                    />
                  </Link>
                </td>
                <td className="w-[100px] py-[25px]  border text-center border-[#D3D3D3] ">
                  <Button buttonType={ButtonType.PRIMARY}>完了</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="lg:hidden">
          {data.map((aData, idx) => (
            <div
              key={idx}
              className=" bg-[#F8F9FA] border border-[#D3D3D3]"
              onClick={() => onItemClick({ idx })}
            >
              <div className="flex justify-between px-[30px] py-[20px] w-full">
                <div className="flex">
                  <span className="text-[#3F8DEB] underline hover:cursor-pointer underline-offset-3 sp:text-sp">
                    {aData.nickName}
                  </span>
                </div>

                <img
                  src={idx === active ? "/img/up.svg" : "/img/down.svg "}
                  className="inline h-[8px]"
                />
              </div>
              {idx === active && (
                <div className="p-[25px]">
                  <div className="flex">
                    <div className="w-[80px] mr-[36px] text-right text-[#A9A9A9] sp:text-spsmall">
                      担当者名
                    </div>
                    <span className="mb-[7px] sp:text-spsmall">
                      {aData.nickName}
                    </span>
                  </div>
                  <div className="flex">
                    <div className="w-[80px] mr-[36px] text-right text-[#A9A9A9] sp:text-spsmall">
                      状態
                    </div>
                    <span className="mb-[7px] sp:text-spsmall">
                      {aData.status}
                    </span>
                  </div>
                  <div className="flex">
                    <div className="w-[80px] mr-[36px] text-right text-[#A9A9A9] sp:text-spsmall">
                      決算
                    </div>
                    <span className="mb-[7px] sp:text-spsmall">
                      {aData.status}
                    </span>
                  </div>
                  <div className="flex">
                    <div className="w-[80px] mr-[36px] text-right text-[#A9A9A9] sp:text-spsmall">
                      登録日
                    </div>
                    <span className="mb-[7px] sp:text-spsmall">
                      {aData.date}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex mt-[30px] justify-center">
          {/* <div className="border border-[#D3D3D3] w-[34px] py-[5px] text-center">
            &lt;
          </div>
          <div className="bg-[#A9A9A9] text-[white] w-[34px] py-[5px]  text-center">
            1
          </div>
          <div className="border border-[#D3D3D3] w-[34px] py-[5px]  text-center">
            2
          </div>
          <div className="border border-[#D3D3D3] w-[34px] py-[5px]  text-center">
            &gt;
          </div> */}
        </div>
      </div>
    </div>
  );
}
