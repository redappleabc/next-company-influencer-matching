"use client";

import Checkbox from "@/components/atoms/checkbox";
import SearchBar from "@/components/organisms/searchbar";
import Link from "next/link";
import { useState } from "react";

export default function AppliedList() {
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
      caseType: "来店",
      caseName: "カフェPR",
      status: "申請中",
      recruitMentStatus: "募集中",
      start: "2023/01/01",
      end: "2023/01/01",
    },
    {
      caseType: "来店",
      caseName: "カフェPR",
      status: "申請中",
      recruitMentStatus: "募集中",
      start: "2023/01/01",
      end: "2023/01/01",
    },
    {
      caseType: "来店",
      caseName: "カフェPR",
      status: "申請中",
      recruitMentStatus: "募集中",
      start: "2023/01/01",
      end: "2023/01/01",
    },
  ];
  return (
    <div>
      <div className="px-[30px] sp:px-[12px] pt-[110px] pb-[30px]">
        <div className="text-title sp:hidden">登録案件一覧</div>
        <SearchBar
          extendChild={
            <div>
              <div className="mt-[30px] sp:mt-[10px] text-small text-[#3F8DEB] font-bold">
                条件を絞り込みできます。
              </div>
              <div className="flex sp:block mt-[8px] flex-wrap gap-x-10">
                <div className="flex">
                  <Checkbox
                    prefix="申請状態 ： "
                    title={"申請前"}
                    checkBoxClassName="mr-[20px]"
                  />
                  <Checkbox title={"申請中"} checkBoxClassName="mr-[20px]" />
                  <Checkbox title={"承認"} checkBoxClassName="mr-[20px]" />
                  <Checkbox title={"否認"} />
                </div>
                <div className="flex">
                  <Checkbox
                    prefix="募集状態 ： "
                    title={"募集中"}
                    checkBoxClassName="mr-[20px]"
                  />
                  <Checkbox title={"募集終了"} checkBoxClassName="mr-[20px]" />
                  <Checkbox title={"停止"} checkBoxClassName="mr-[20px]" />
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
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3] ">
                案件種別
              </td>
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3] ">
                案件名
              </td>
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3]">
                申請状態
              </td>
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3]">
                募集状態
              </td>
              <td className="text-center w-[100px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3]">
                募集開始
              </td>
              <td className="text-center w-[100px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3] ">
                募集終了
              </td>
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3] ">
                詳細
              </td>
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3] ">
                編集
              </td>
            </tr>
          </thead>
          <tbody>
            {data.map((aData, idx) => (
              <tr key={idx}>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3] hover:cursor-pointer">
                  {aData.caseType}
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3] ">
                  {aData.caseName}
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3] hover:cursor-pointer">
                  {aData.status}
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3]">
                  {aData.recruitMentStatus}
                </td>
                <td className="text-center w-[100px] py-[25px]  border border-[#D3D3D3]">
                  {aData.start}
                </td>
                <td className="text-center w-[100px] py-[25px]  border border-[#D3D3D3] ">
                  {aData.end}
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3]">
                  <Link href={"/caseDetail"}>
                    <img
                      src="/img/detail.svg"
                      alt="detail"
                      className="m-auto"
                    />
                  </Link>
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3] ">
                  <Link href={"/newCase"}>
                    <img src="/img/edit.svg" alt="edit" className="m-auto" />
                  </Link>
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
                    {aData.caseType}
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
                      {aData.caseName}
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
                      {aData.recruitMentStatus}
                    </span>
                  </div>
                  <div className="flex">
                    <div className="w-[80px] mr-[36px] text-right text-[#A9A9A9] sp:text-spsmall">
                      登録日
                    </div>
                    <span className="mb-[7px] sp:text-spsmall">
                      {aData.start}
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
