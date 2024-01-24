"use client";

import Button, { ButtonType } from "@/components/atoms/button";
import Checkbox from "@/components/atoms/checkbox";
import SearchBar from "@/components/organisms/searchbar";
import ApplicationPage from "../admin/applicationPage";
import { useRecoilValue } from "recoil";
import { useState, useEffect } from "react";
import Modal from "../../utils/modal";
import { authUserState } from "@/recoil/atom/auth/authUserAtom";
import axios from "axios";
export default function CollectedCase() {
  const user = useRecoilValue(authUserState);

  const [active, setActive] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState([]);
  const [appliedCase, setAppliedCase] = useState([]);
  const [caseId, setCaseId] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [reload, setReload] = useState(false);
  const [confirmMsg, setConfirmMsg] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("/api/case/influencer");
      if (result.data.length !== 0) {
        setCaseId(result.data[0]?.id);
        if (result.data?.length) setData(result.data);
      }
    };
    const fetchApplied = async () => {
      const result = await axios.get(`/api/apply?id=${user.user.targetId}`);
      if (result.data?.length) setAppliedCase(result.data);
    };
    if (user) {
      fetchApplied();
      fetchData();
    }
  }, [reload]);
  const alreadyAppliedOrNot = (caseId: number) => {
    const already = appliedCase.some((a) => a.caseId === caseId);
    return already;
  };
  const onItemClick = ({ idx }: { idx: Number }) => {
    if (active === idx) {
      setActive(null);
    } else {
      setActive(idx);
    }
  };
  const handleApply = async (caseId: string) => {
    const { targetStatus } = user.user;
    if (targetStatus !== "稼動中") {
      setConfirmMsg("稼働中ではないので申請できません。");
      setShowConfirm(true);
      return;
    }
    const result = await axios.post("/api/apply", {
      caseId,
      influencerId: user.user.targetId,
    });
    if (result.data.type === "success") {
      setReload(!reload);
      setConfirmMsg("操作が成功しました。");
      setShowConfirm(true);
    }
  };
  return (
    <div>
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
      <div
        className={
          showModal
            ? "bg-black bg-opacity-25 w-full h-full fixed left-0 overflow-auto duration-500"
            : "bg-black bg-opacity-25 w-full h-full fixed left-0 overflow-auto opacity-0 pointer-events-none duration-500"
        }
      >
        {caseId && (
          <div>
            <ApplicationPage
              influencerMode
              modalMode
              caseID={caseId}
              onCancel={() => setShowModal(false)}
            />
          </div>
        )}
      </div>
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
            {data?.map((aData, idx) => (
              <tr key={idx}>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3] hover:cursor-pointer">
                  {aData.companyName}
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3] ">
                  <span
                    className="text-[#3F8DEB] underline hover:cursor-pointer underline-offset-3 sp:text-sp"
                    onClick={() => {
                      setCaseId(aData.id);
                      setShowModal(true);
                    }}
                  >
                    {aData.caseName}
                  </span>
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3] hover:cursor-pointer">
                  {aData.caseType}
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3]">
                  {aData.casePlace}
                </td>
                <td className="text-center w-[100px] py-[25px]  border border-[#D3D3D3]">
                  {aData.collectionStart
                    ? aData.collectionStart.split("T")[0] +
                      "/" +
                      aData.collectionStart.split("T")[1]
                    : ""}
                </td>
                <td className="text-center w-[100px] py-[25px]  border border-[#D3D3D3] ">
                  {aData.collectionEnd
                    ? aData.collectionEnd.split("T")[0] +
                      "/" +
                      aData.collectionEnd.split("T")[1]
                    : ""}
                </td>
                <td className="px-[35px] py-[25px]  border border-[#D3D3D3] text-center">
                  {!alreadyAppliedOrNot(aData.id) ? (
                    <Button
                      buttonType={ButtonType.PRIMARY}
                      handleClick={() => handleApply(aData.id)}
                    >
                      応募
                    </Button>
                  ) : (
                    <div className="text-white bg-[#236997] p-[10px] rounded-lg shadow-sm">
                      申請済み
                    </div>
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
                  <span
                    className="text-[#3F8DEB] underline hover:cursor-pointer underline-offset-3 sp:text-sp"
                    onClick={() => {
                      setCaseId(aData.id);
                      setShowModal(true);
                    }}
                  >
                    {aData.caseName}
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
                      会社名
                    </div>
                    <span className="mb-[7px] sp:text-spsmall">
                      {aData.companyName}
                    </span>
                  </div>
                  <div className="flex">
                    <div className="w-[80px] mr-[36px] text-right text-[#A9A9A9] sp:text-spsmall">
                      案件種別
                    </div>
                    <span className="mb-[7px] sp:text-spsmall">
                      {aData.caseType}
                    </span>
                  </div>
                  <div className="flex">
                    <div className="w-[80px] mr-[36px] text-right text-[#A9A9A9] sp:text-spsmall">
                      来店場所
                    </div>
                    <span className="mb-[7px] sp:text-spsmall">
                      {aData.casePlace}
                    </span>
                  </div>
                  <div className="flex">
                    <div className="w-[80px] mr-[36px] text-right text-[#A9A9A9] sp:text-spsmall">
                      募集開始
                    </div>
                    <span className="mb-[7px] sp:text-spsmall">
                      {aData.collectionStart
                        ? aData.collectionStart.split("T")[0] +
                          "/" +
                          aData.collectionStart.split("T")[1]
                        : ""}
                    </span>
                  </div>
                  <div className="flex">
                    <div className="w-[80px] mr-[36px] text-right text-[#A9A9A9] sp:text-spsmall">
                      募集終了
                    </div>
                    <span className="mb-[7px] sp:text-spsmall">
                      {aData.collectionEnd
                        ? aData.collectionEnd.split("T")[0] +
                          "/" +
                          aData.collectionEnd.split("T")[1]
                        : ""}
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
