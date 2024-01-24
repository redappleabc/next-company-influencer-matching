"use client";
import React, { useEffect, useState } from "react";
import Button, { ButtonType } from "@/components/atoms/button";
import TextArea from "@/components/atoms/textarea";
import io from "socket.io-client";
import { useRecoilValue } from "recoil";
import { authUserState } from "@/recoil/atom/auth/authUserAtom";
import { useParams } from "next/navigation";
import axios from "@/node_modules/axios/index";
window.socket = io("http://localhost:5000");

// import controller from "./socketController";

export default function ChattingPane() {
  const user = useRecoilValue(authUserState);
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);
  const [reset, setReset] = useState(false);
  const [msg, setMsg] = useState("");
  const { id } = useParams();
  useEffect(() => {
    window.socket.on("message", () => {
      setReload(!reload);
    });
    socket.emit("info", { roomId: id });
    const fetchData = async () => {
      const result = await axios.get(`/api/chatting?id=${id}`);
      if (result.data?.length) {
        setData(result.data);
      }
    };
    fetchData();
  }, [reload]);
  useEffect(() => {
    const pane = document.getElementById("pane");
    pane.scrollTop = pane.scrollHeight;
  }, [data]);
  const handleSendMsg = () => {
    if (msg === "") {
      return;
    }
    setMsg("");
    window.socket.emit("message", { roomId: id, userId: user.user.id, msg });
    setReset(!reset);
  };
  let day = "";
  return (
    <div>
      <div
        className="h-[590px] bg-[#F8F9FA] pt-[100px] overflow-y-auto scroll-smooth"
        id="pane"
      >
        {data.map((aData, idx) => {
          let showDay = aData.day !== day;
          if (showDay) day = aData.day;

          return [
            showDay && (
              <div className="w-full text-center  mb-[30px] ">
                <span className="text-[white] rounded-[15px] bg-[#DEDEDE] px-[12px] py-[5px]">
                  {aData.day}
                </span>
              </div>
            ),
            aData.userId === user.user.id ? (
              <div className="flex flex-col" key={idx}>
                <div className="w-full sp:mt-[30px] my-[20px]">
                  <div className="chat-me relative float-right mr-[65px] sp:mx-[10px] inline-block bg-[#DEDEDE] px-[20px] py-[15px] rounded-[15px] shadow-sm border-[1px] border-[#DDDDDD]">
                    {aData.msg.split("\n")?.map((a, key) => (
                      <div key={key}>{a}</div>
                    ))}
                    <div className="absolute bottom-[-30px] right-0 text-[#A8A8A8]">
                      {aData.time}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div key={idx}>
                <div className="chat-you relative ml-[65px] my-[30px] sp:mx-[10px] inline-block bg-[white] px-[20px] py-[15px] rounded-[15px] shadow-sm">
                  <div className="absolute top-[-30px]">{aData.name}</div>
                  {aData.msg.split("\n")?.map((a, key) => (
                    <div key={key}>{a}</div>
                  ))}
                  <div className="absolute bottom-[-30px] right-0 text-[#A8A8A8]">
                    {aData.time}
                  </div>
                </div>
              </div>
            ),
          ];
        })}
      </div>
      <div className="h-[130px] flex items-center justify-between border-t-[1px] border-[#DDDDDD]">
        <TextArea
          handleCtrlEnter={() => handleSendMsg()}
          reset={reset}
          placeholder="メッセージを入力"
          textAreaClassName="h-[120px] border-0 grow"
          handleChange={(val) => setMsg(val)}
        />
        <Button
          handleClick={handleSendMsg}
          buttonType={ButtonType.ROUNDED}
          buttonClassName="mx-[30px] w-[45px] h-[45px]"
        >
          <img src="/img/apply.svg" alt="apply" />
        </Button>
      </div>
    </div>
  );
}
