import ChattingRooms from "@/features/projects/pages/chatting/rooms";
import React from "react";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[white] px-[35px] sp:px-[12px] sp:text-small ">
      <div className="flex items-center py-[20px]  w-[full] border-b-[1px] border-[#DDDDDD] mt-[70px] sp:mt-[96px]">
        <span className="text-title sp:text-sptitle">チャット</span>
      </div>
      <div className="sp:w-[100%] mt-[55px] px-[40px] sp:px-[10px] pb-[100px] flex">
        <div className="w-[30%] sp:w-[0] sp:hidden">
          <ChattingRooms />
        </div>
        <div className="h-[720px] border-[1px] border-[#DDDDDD] w-[70%] box-border w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
