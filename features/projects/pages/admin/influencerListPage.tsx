"use client";

import Checkbox from "@/components/atoms/checkbox";
import SearchBar from "@/components/organisms/searchbar";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function InfluencerListPage() {
  const [active, setActive] = useState(null);
  const [data, setData] = useState([]);
  const onItemClick = ({ idx }: { idx: Number }) => {
    if (active === idx) {
      setActive(null);
    } else {
      setActive(idx);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/influencer");
        if (result.data?.length) setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <div className="px-[30px] sp:px-[12px] pt-[110px] pb-[30px]">
        <div className="text-title sp:hidden">インフルエンサー一覧</div>
        <SearchBar
          extendChild={
            <div>
              <div className="mt-[30px] sp:mt-[10px] text-small text-[#3F8DEB] font-bold">
                条件を絞り込みできます。
              </div>
              <div className="flex sp:block mt-[8px] gap-x-9 flex-wrap">
                <div className="flex my-[8px]">
                  <Checkbox
                    prefix="状態 ： "
                    title={"承認待ち"}
                    checkBoxClassName="mr-[20px]"
                  />
                  <Checkbox title={"稼動中"} checkBoxClassName="mr-[20px]" />
                  <Checkbox title={"停止中"} />
                </div>
                <div className="flex my-[8px]">
                  <Checkbox
                    // prefix="決算 : "
                    prefix="SNS ： "
                    title={
                      <img
                        className="w-[35px]"
                        src="/img/sns/Instagram.svg"
                        alt="instagram"
                      />
                    }
                    checkBoxClassName="mr-[20px]"
                  />
                  <Checkbox
                    title={
                      <img
                        className="w-[35px]"
                        src="/img/sns/tiktok.svg"
                        alt="tiktok"
                      />
                    }
                    checkBoxClassName="mr-[20px]"
                  />
                  <Checkbox
                    title={
                      <img className="w-[35px]" src="/img/sns/x.svg" alt="x" />
                    }
                    checkBoxClassName="mr-[20px]"
                  />
                  <Checkbox
                    title={
                      <img
                        className="w-[35px]"
                        src="/img/sns/youtube.svg"
                        alt="youtube"
                      />
                    }
                    checkBoxClassName="mr-[20px]"
                  />
                  <Checkbox
                    title={
                      <img
                        className="w-[35px]"
                        src="/img/sns/facebook.svg"
                        alt="youtube"
                      />
                    }
                    checkBoxClassName="mr-[20px]"
                  />
                  <Checkbox title={"etc."} checkBoxClassName="mr-[20px]" />
                </div>
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
                ニックネーム
              </td>
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3] ">
                お名前
              </td>
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3]">
                SNSの種類
              </td>
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3]">
                状態
              </td>
              <td className="px-[35px] py-[25px] bg-[#F8F9FA] border border-[#D3D3D3]">
                登録・申請日
              </td>
            </tr>
          </thead>
          <tbody>
            {data?.map((aData, idx) => (
              <tr key={idx}>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3] hover:cursor-pointer text-[#3F8DEB] underline underline-[#3F8DEB] underline-offset-[3px]">
                  <Link href={`/influencer/${aData.id}`}>{aData.nickName}</Link>
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3] ">
                  {aData.influencerName}
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3]">
                  <div className="flex items-center gap-[15px]">
                    {aData.instagram && (
                      <img
                        className="w-[35px]"
                        src="/img/sns/Instagram.svg"
                        alt="instagram"
                      />
                    )}
                    {aData.tiktok && (
                      <img
                        className="w-[35px]"
                        src="/img/sns/tiktok.svg"
                        alt="tiktok"
                      />
                    )}
                    {aData.x && (
                      <img className="w-[35px]" src="/img/sns/x.svg" alt="x" />
                    )}
                    {aData.youtube && (
                      <img
                        className="w-[35px]"
                        src="/img/sns/youtube.svg"
                        alt="youtube"
                      />
                    )}
                    {aData.facebook && (
                      <img
                        className="w-[35px]"
                        src="/img/sns/facebook.svg"
                        alt="youtube"
                      />
                    )}
                    {aData.otherSNS !== "" && (
                      <span className="text-[#C0C0C0]">etc.</span>
                    )}
                  </div>
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3]">
                  {aData.status}
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3]">
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
                      {aData.name}
                    </span>
                  </div>
                  <div className="flex">
                    <div className="w-[80px] mr-[36px] text-right text-[#A9A9A9] sp:text-spsmall">
                      決算
                    </div>
                    <span className="mb-[7px] sp:text-spsmall">
                      <div className="flex gap-[15px]">
                        <img
                          className="w-[35px]"
                          src="/img/sns/Instagram.svg"
                          alt="instagram"
                        />
                      </div>
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
