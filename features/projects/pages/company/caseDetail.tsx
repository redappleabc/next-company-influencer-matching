"use client";

import Checkbox from "@/components/atoms/checkbox";
import SearchBar from "@/components/organisms/searchbar";
import Button, { ButtonType } from "@/components/atoms/button";
import Link from "next/link";
import ApplicationPage from "../admin/applicationPage";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import InfluencerPage from "../admin/influencerPage";
import Modal from "../../utils/modal";
import { useRouter } from "next/navigation";

export interface caseData {
  caseProps: Object;
}

export default function CaseDetailPage({ caseProps }: caseData) {
  const router = useRouter();
  const [active, setActive] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showInfluencer, setShowInfluencer] = useState(false);
  const [caseData, setCaseData] = useState(null);
  const [collectionStatusTemp, setCollectionStatusTemp] = useState("");
  const [startable, setStartable] = useState(false);
  const [influencerData, setInfluencerData] = useState(null);
  const [influencerId, setInfluencerId] = useState(null);
  const [currentApply, setCurrentApply] = useState(null);
  const [data, setData] = useState([]);
  const [reload, setReload] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmMsg, setConfirmMsg] = useState("");
  useEffect(() => {
    setCaseData(caseProps);
    setCollectionStatusTemp(caseData?.collectionStatus);
    const fetchData = async () => {
      const result = await axios.get(`/api/apply/company?id=${id}`);
      if (result.data?.length) {
        setData(result.data);
        setInfluencerData(result.data[0].influencerId);
      }
    };
    fetchData();
    // if (caseData?.collectionStart) {
    //   const startTime = new Date(caseData?.collectionStart);
    //   const today = new Date();
    //   if (
    //     startTime < today &&
    //     caseData?.status === "承認" &&
    //     caseData?.collectionStatus === "募集前"
    //   ) {
    //     handleCollectionStateChange("募集中");
    //   } else {
    //     setStartable(true);
    //   }
    // }
  }, [caseProps, reload]);
  useEffect(() => {
    console.log("rund");
    console.log(influencerId);

    const fetchInifluencerData = async () => {
      const result = await axios.get(
        `/api/influencer/aInfluencer?id=${influencerId}`
      );
      console.log(result.data);

      if (result) setInfluencerData(result.data);
    };
    if (influencerId) fetchInifluencerData();
  }, [influencerId, reload]);
  const { id } = useParams();
  const onItemClick = ({ idx }: { idx: Number }) => {
    if (active === idx) {
      setActive(null);
    } else {
      setActive(idx);
    }
  };
  const handleApprove = async (val: string, cur: number) => {
    const id = cur ? cur : currentApply;
    const result = await axios.put(`/api/apply`, {
      status: val,
      id,
    });
    if (result.data.type === "success") {
      setConfirmMsg("操作が成功しました。");
      setShowInfluencer(false);
      setShowConfirm(true);
      setReload(!reload);
    } else {
      setConfirmMsg("操作が成功しました。");
      setShowConfirm(true);
    }
  };
  const handleCollectionStateChange = async (
    state: string,
    resume?: boolean
  ) => {
    if (state === "募集中") {
      if (caseData.status !== "承認") {
        setConfirmMsg("承認されていないため、募集を開始できません。");
        setShowConfirm(true);
        return;
      }
    }
    const update = state;
    const body = resume
      ? {
          update,
          approveMode: false,
          resumeMode: true,
        }
      : {
          update,
          approveMode: false,
        };
    const result = await axios.put(`/api/case/aCase/?id=${id}`, body);
    if (result.data.type === "success") {
      setCollectionStatusTemp(state);
    }
  };
  const handleToChat = (id) => {
    const createChatRoom = async () => {
      await axios.post(`/api/chatting/room?id=${id}`);
      router.push(`/chatting/${id}`, "_blank");
    };
    createChatRoom();
  };
  return (
    <div>
      <div
        className={
          showModal
            ? "bg-black bg-opacity-25 w-full h-full fixed left-0 overflow-auto duration-500"
            : "bg-black bg-opacity-25 w-full h-full fixed left-0 overflow-auto opacity-0 pointer-events-none duration-500"
        }
      >
        <div>
          <ApplicationPage
            modalMode
            companyMode
            onCancel={() => setShowModal(false)}
          />
        </div>
      </div>
      <div
        className={
          showInfluencer
            ? "bg-black bg-opacity-25 w-full h-full fixed left-0 overflow-auto duration-500"
            : "bg-black bg-opacity-25 w-full h-full fixed left-0 overflow-auto opacity-0 pointer-events-none duration-500"
        }
      >
        <div>
          <InfluencerPage
            handleApprove={handleApprove}
            modalMode
            influencerData={influencerData}
            onCancel={() => setShowInfluencer(false)}
          />
        </div>
      </div>
      <div
        className={
          showConfirm
            ? "bg-black bg-opacity-25 w-full h-full fixed left-0 overflow-auto duration-500"
            : "bg-black bg-opacity-25 w-full h-full fixed left-0 overflow-auto opacity-0 pointer-events-none duration-500"
        }
      >
        <Modal
          body={confirmMsg}
          onOk={() => setShowConfirm(false)}
          onCancel={() => setShowConfirm(false)}
        />
      </div>
      <div className="px-[30px] sp:px-[12px] pt-[110px] pb-[30px]">
        <div className="text-title sp:hidden">募集案件詳細</div>
        <SearchBar
          title={
            <div className="flex flex-wrap items-center gap-x-[20px]">
              <span
                className="text-[#3F8DEB] underline hover:cursor-pointer underline-offset-3"
                onClick={() => setShowModal(true)}
              >
                案件詳細
              </span>
              <span className="w-[100px]">{`状態: ${collectionStatusTemp}`}</span>
              <span className="flex flex-wrap">
                <span>{`募集期間：${
                  caseData?.collectionStart
                    ? caseData?.collectionStart.split("T")[0] +
                      "/" +
                      caseData?.collectionStart.split("T")[1]
                    : ""
                } ～`}</span>
                <span>
                  {caseData?.collectionEnd
                    ? caseData?.collectionEnd.split("T")[0] +
                      "/" +
                      caseData?.collectionEnd.split("T")[1]
                    : ""}
                </span>
              </span>

              {collectionStatusTemp === "募集前" && (
                <Button
                  buttonType={ButtonType.PRIMARY}
                  buttonClassName="rounded-[0px] px-[15px] py-[7px]"
                  handleClick={() => {
                    handleCollectionStateChange("募集中");
                  }}
                >
                  募集開始
                </Button>
              )}
              {(collectionStatusTemp === "募集中" ||
                collectionStatusTemp === "停止中") && (
                <Button
                  buttonType={ButtonType.DANGER}
                  buttonClassName="rounded-[0px] px-[15px] py-[7px]"
                  handleClick={() => {
                    handleCollectionStateChange("募集終了");
                  }}
                >
                  募集終了
                </Button>
              )}
              {collectionStatusTemp === "募集中" && (
                <Button
                  buttonType={ButtonType.DEFAULT}
                  buttonClassName="rounded-[0px]"
                  handleClick={() => {
                    handleCollectionStateChange("停止中");
                  }}
                >
                  停止
                </Button>
              )}
              {collectionStatusTemp === "停止中" && (
                <Button
                  buttonType={ButtonType.DEFAULT}
                  buttonClassName="rounded-[0px]"
                  handleClick={() => {
                    handleCollectionStateChange("募集中", true);
                  }}
                >
                  再開
                </Button>
              )}
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
              <td className="py-[25px] bg-[#F8F9FA] border border-[#D3D3D3] w-[100px]"></td>
            </tr>
          </thead>
          <tbody>
            {data?.map((aData, idx) => (
              <tr key={idx}>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3] hover:cursor-pointer">
                  <span
                    onClick={() => {
                      setCurrentApply(aData.id);
                      setInfluencerId(aData.influencerId);
                      setShowInfluencer(true);
                    }}
                    className="text-[#3F8DEB] underline underline-[#3F8DEB] underline-offset-[3px]"
                  >
                    {aData.nickName}
                  </span>
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3] ">
                  <div className="flex flex-wrap items-center gap-[15px]">
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
                        alt="facebook"
                      />
                    )}
                    {aData.otherSNS && (
                      <span className="text-[#C0C0C0]">etc.</span>
                    )}
                  </div>
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3] hover:cursor-pointer">
                  {aData.status}
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3]">
                  {aData.date}
                </td>
                <td className="w-[150px] py-[25px]  border border-[#D3D3D3]">
                  <img
                    className="w-[35px] m-auto cursor-pointer"
                    src="/img/chatting.svg"
                    alt="chatting"
                    onClick={() => handleToChat(aData.id)}
                  />
                </td>
                <td className="w-[100px] py-[25px]  border text-center border-[#D3D3D3] ">
                  {aData.status === "完了" ? (
                    <div className="text-white bg-[#236997] p-[10px] m-[5px] rounded-lg shadow-sm">
                      完了した
                    </div>
                  ) : (
                    <Button
                      handleClick={() => handleApprove("完了", aData.id)}
                      buttonType={ButtonType.PRIMARY}
                    >
                      完了
                    </Button>
                  )}
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
