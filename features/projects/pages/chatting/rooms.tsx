"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRecoilValue } from "recoil";
import { authUserState } from "@/recoil/atom/auth/authUserAtom";
import axios from "axios";
import { useParams } from "next/navigation";
const ChattingRooms: React.FC = () => {
  const { id } = useParams();

  const user = useRecoilValue(authUserState);
  const [data, setData] = useState([]);
  const [active, setActive] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `/api/chatting/room?id=${user.user.targetId}&type=${
          user.user.role === "企業" ? "company" : "influencer"
        }`
      );
      if (result.data.length) {
        setData(result.data);
        result.data.map((a, key) => {
          if (a.applyId == id) {
            setActive(key);
          }
        });
      }
    };
    fetchData();
  }, []);
  return (
    <div className="h-[720px] border-[1px] border-[#DDDDDD] w-[30%] sp:hidden overflow-y-auto">
      {data?.map((aData, key) => (
        <Link
          href={
            user.user.role === "企業"
              ? `/chatting/${aData.applyId}`
              : `/chattingInf/${aData.applyId}`
          }
        >
          <div key={key}>
            <div
              onClick={() => setActive(key)}
              className={
                key === active
                  ? "w-full border-b-[1px] border-[#DDDDDD] bg-[#CCCCCC] px-[36px] py-[30px] duration-500"
                  : "w-full border-b-[1px] border-[#DDDDDD] px-[36px] py-[30px] duration-500"
              }
            >
              {user.user.role === "企業"
                ? aData.influencerName
                : aData.companyName}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};
export default ChattingRooms;
