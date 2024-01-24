"use client";

import Checkbox from "@/components/atoms/checkbox";
import SearchBar from "@/components/organisms/searchbar";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function ApplicationListPage() {
  const [active, setActive] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/case");
      if (result.data?.length) setData(result.data);
    };
    fetchData();
  }, []);
  const onItemClick = ({ idx }: { idx: Number }) => {
    if (active === idx) {
      setActive(null);
    } else {
      setActive(idx);
    }
  };
  return (
    <div>
      <div className="px-[30px] sp:px-[12px] pt-[110px] pb-[30px]">
        <div className="text-title sp:hidden">申請案件一覧</div>
        <SearchBar
          extendChild={
            <div>
              <div className="mt-[30px] sp:mt-[10px] text-small text-[#3F8DEB] font-bold">
                条件を絞り込みできます。
              </div>
              <div className="flex mt-[8px] flex-wrap">
                <Checkbox
                  prefix="状態 ： "
                  title={"申請中"}
                  checkBoxClassName="mr-[20px]"
                />
                <Checkbox title={"承認"} checkBoxClassName="mr-[20px]" />
                <Checkbox title={"否認"} />
              </div>
            </div>
          }
        />
        <div className="text-[14px] text-[#A9A9A9] mb-[10px] sp:text-spsmall">
          該当数：10件
        </div>
        <table className="w-[100%] text-[14px] sp:hidden">
          <thead>
            <tr>
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3] ">
                企業名
              </td>
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3] ">
                案件種別
              </td>
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3]">
                案件名
              </td>
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3]">
                状態
              </td>
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3]">
                募集期間
              </td>
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3] ">
                申請日時
              </td>
            </tr>
          </thead>
          <tbody>
            {data?.map((aData, idx) => (
              <tr key={idx}>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3] hover:cursor-pointer text-[#3F8DEB] underline underline-[#3F8DEB] underline-offset-[3px]">
                  <Link href={`/company/${aData.companyId}`}>
                    {aData.companyName}
                  </Link>
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3] ">
                  {aData.caseType}
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3] hover:cursor-pointer text-[#3F8DEB] underline underline-[#3F8DEB] underline-offset-[3px]">
                  <Link href={`/application/${aData.id}`}>
                    {aData.caseName}
                  </Link>
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3]">
                  {aData.status}
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3]">
                  {`${aData.collectionStart}~${aData.collectionEnd}`}
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3] ">
                  {aData.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="lg:hidden">
          {data?.map((aData, idx) => (
            <div
              key={idx}
              className=" bg-[#F8F9FA] border border-[#D3D3D3]"
              onClick={() => onItemClick({ idx })}
            >
              <div className="flex justify-between px-[30px] py-[20px] w-full">
                <div className="flex">
                  <span className="text-[#3F8DEB] underline hover:cursor-pointer underline-offset-3 sp:text-sp">
                    <Link href={`/application/${aData.id}`}>
                      {aData.caseName}
                    </Link>
                  </span>
                </div>

                <img
                  src={idx === active ? "/img/up.svg" : "/img/down.svg "}
                  className="inline h-[8px]"
                />
              </div>
              {idx === active && (
                <div className="py-[25px]">
                  <div className="flex py-[5px]">
                    <div className="w-[80px] mr-[36px] text-right text-[#A9A9A9] sp:text-spsmall">
                      企業名
                    </div>
                    <span className="mb-[7px] sp:text-spsmall text-[#3F8DEB] underline underline-[#3F8DEB] underline-offset-[3px]">
                      <Link href={`/company/${aData.companyId}`}>
                        {aData.companyName}
                      </Link>
                    </span>
                  </div>
                  <div className="flex py-[5px]">
                    <div className="w-[80px] mr-[36px] text-right text-[#A9A9A9] sp:text-spsmall">
                      案件種別
                    </div>
                    <span className="mb-[7px] sp:text-spsmall">
                      {aData.caseType}
                    </span>
                  </div>
                  <div className="flex py-[5px]">
                    <div className="w-[80px] mr-[36px] text-right text-[#A9A9A9] sp:text-spsmall">
                      状態
                    </div>
                    <span className="mb-[7px] sp:text-spsmall">
                      {aData.status}
                    </span>
                  </div>
                  <div className="flex py-[5px]">
                    <div className="w-[80px] mr-[36px] text-right text-[#A9A9A9] sp:text-spsmall">
                      募集期間
                    </div>
                    <span className="mb-[7px] sp:text-spsmall">
                      {`${aData.collectionStart}~${aData.collectionEnd}`}
                    </span>
                  </div>
                  <div className="flex py-[5px]">
                    <div className="w-[80px] mr-[36px] text-right text-[#A9A9A9] sp:text-spsmall">
                      申請日時
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
