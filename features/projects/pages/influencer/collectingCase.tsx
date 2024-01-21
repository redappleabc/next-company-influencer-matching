"use client";

import Button, { ButtonType } from "@/components/atoms/button";
import Checkbox from "@/components/atoms/checkbox";
import SearchBar from "@/components/organisms/searchbar";
import ApplicationPage from "../admin/applicationPage";
import { useState } from "react";

export default function CollectedCase() {
  const [active, setActive] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const onItemClick = ({ idx }: { idx: Number }) => {
    if (active === idx) {
      setActive(null);
    } else {
      setActive(idx);
    }
  };
  const data = [
    {
      companyName: "株式会社ABC",
      caseName: "カフェPR",
      caseType: "来店",
      place: "東京都",
      start: "2023/01/01",
      end: "2023/01/01",
    },
    {
      companyName: "株式会社ABC",
      caseName: "カフェPR",
      caseType: "来店",
      place: "東京都",
      start: "2023/01/01",
      end: "2023/01/01",
    },
    {
      companyName: "株式会社ABC",
      caseName: "カフェPR",
      caseType: "来店",
      place: "東京都",
      start: "2023/01/01",
      end: "2023/01/01",
    },
    {
      companyName: "株式会社ABC",
      caseName: "カフェPR",
      caseType: "来店",
      place: "東京都",
      start: "2023/01/01",
      end: "2023/01/01",
    },
  ];
  return (
    <div>
      {showModal && (
        <div className="bg-black bg-opacity-25 w-full h-full fixed left-0 overflow-auto">
          <div>
            <ApplicationPage
              isInfluencerMode
              onCancel={() => setShowModal(false)}
            />
          </div>
        </div>
      )}
      <div className="px-[30px] sp:px-[12px] pt-[110px] pb-[30px]">
        <div className="text-title sp:hidden">募集中案件一覧</div>
        <SearchBar
          extendChild={
            <div>
              <div className="mt-[30px] sp:mt-[10px] text-small text-[#3F8DEB] font-bold">
                条件を絞り込みできます。
              </div>
              <div className="flex sp:block mt-[8px] flex-wrap gap-x-10">
                <div className="flex">
                  <Checkbox
                    prefix="案件種別 ： "
                    title={"来店"}
                    checkBoxClassName="mr-[20px]"
                  />
                  <Checkbox title={"通販"} checkBoxClassName="mr-[20px]" />
                </div>
                <div className="flex">
                  <Checkbox
                    prefix="状態 ： "
                    title={"申請中"}
                    checkBoxClassName="mr-[20px]"
                  />
                  <Checkbox title={"承認"} checkBoxClassName="mr-[20px]" />
                  <Checkbox title={"否認"} />
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
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3] w-[30%]">
                会社名
              </td>
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3] ">
                案件名
              </td>
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3]">
                案件種別
              </td>
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3]">
                来店場所
              </td>
              <td className="text-center w-[100px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3]">
                募集開始
              </td>
              <td className="text-center w-[100px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3] ">
                募集終了
              </td>
              <td className="w-[150px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3] "></td>
            </tr>
          </thead>
          <tbody>
            {data.map((aData, idx) => (
              <tr key={idx}>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3] hover:cursor-pointer">
                  {aData.companyName}
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3] ">
                  <span
                    className="text-[#3F8DEB] underline hover:cursor-pointer underline-offset-3 sp:text-sp"
                    onClick={() => setShowModal(true)}
                  >
                    {aData.caseName}
                  </span>
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3] hover:cursor-pointer">
                  {aData.caseName}
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3]">
                  {aData.place}
                </td>
                <td className="text-center w-[100px] py-[25px]  border border-[#D3D3D3]">
                  {aData.start}
                </td>
                <td className="text-center w-[100px] py-[25px]  border border-[#D3D3D3] ">
                  {aData.end}
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3] text-center">
                  <Button buttonType={ButtonType.PRIMARY}>応募</Button>
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
                    {/* <span className="mb-[7px] sp:text-spsmall">{aData.c}</span> */}
                  </div>
                  <div className="flex">
                    <div className="w-[80px] mr-[36px] text-right text-[#A9A9A9] sp:text-spsmall">
                      状態
                    </div>
                    <span className="mb-[7px] sp:text-spsmall">
                      {/* {aData.status} */}
                    </span>
                  </div>
                  <div className="flex">
                    <div className="w-[80px] mr-[36px] text-right text-[#A9A9A9] sp:text-spsmall">
                      決算
                    </div>
                    <span className="mb-[7px] sp:text-spsmall">
                      {/* {aData.recruitMentStatus} */}
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
