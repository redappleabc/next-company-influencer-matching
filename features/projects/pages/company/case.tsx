"use client";
import React, { useEffect, useState } from "react";
import Button, { ButtonType } from "@/components/atoms/button";
import RadioBtn from "@/components/atoms/radio";
import Checkbox from "@/components/atoms/checkbox";
import Input from "@/components/atoms/input";
import TextArea from "@/components/atoms/textarea";
import axios from "axios";
import { getUser } from "../../utils/getUser";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export interface CompanyProps {
  applyMode?: boolean;
}

const CasePage: React.FC<CompanyProps> = ({ applyMode }: CompanyProps) => {
  const [data, setData] = useState({
    caseType: "来 店",
    caseName: "",
    caseContent: "",
    wantedHashTag: "",
    wantedSNS: "",
    casePlace: "",
    caseEnd: "",
    collectionEnd: "",
    collectionStart: "",
    collectionCnt: "",
    addition: "",
  });

  const router = useRouter();
  const user = getUser();
  const [wantedSNS, setWantedSNS] = useState([]);
  const [error, setError] = useState("");
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/case/aCase?id=${id}`);
      console.log(result.data);
      setData(result.data);
      setWantedSNS(JSON.parse(result.data.wantedSNS));
    };
    if (!applyMode) fetchData();
  }, []);
  const handleSNSChange = (val: string) => {
    let isAlreadyExits = false;
    wantedSNS.forEach((aSNS) => {
      if (aSNS === val) isAlreadyExits = true;
    });
    if (!isAlreadyExits) {
      setWantedSNS([...wantedSNS, val]);
    } else {
      let filteredArray = wantedSNS.filter((element) => element !== val);
      setWantedSNS(filteredArray);
    }
  };
  const handleRequest = async (isEditMode: boolean) => {
    const body = {
      ...data,
      wantedSNS: JSON.stringify(wantedSNS),
      companyId: user.user?.targetId,
    };
    const msgs = {
      caseType: "案件種別を選択してください",
      caseName: "案件概要を入力してください",
      caseContent: "案件内容を入力してください",
      collectionEnd: "募集終了を入力してください ",
      caseEnd: "案件終了を入力してください",
    };
    const keys = Object.keys(msgs);
    let isValid = true;
    keys.forEach((aKey) => {
      if (body[aKey] === "") {
        if (!isValid) return;
        setError(msgs[aKey]);
        isValid = false;
      }
    });
    let pattern = /^\d{4}\/\d{2}\/\d{2} \d{2}:\d{2}$/;
    if (isValid) {
      if (!pattern.test(data.collectionStart.trim())) {
        setError("募集開始が日付、時間形式ではありません");
        isValid = false;
        return;
      }
      if (!pattern.test(data.collectionEnd.trim())) {
        setError("募集終了が日付、時間形式ではありません");
        isValid = false;
        return;
      }

      if (!pattern.test(data.caseEnd.trim())) {
        setError("案件終了が日付、時間形式ではありません");
        isValid = false;
        return;
      }
    }
    if (isValid) {
      if (isEditMode) {
        const result = await axios.put("/api/case", body);
        setError("");
        router.back();
      } else {
        const result = await axios.post("/api/case", body);
        setError("");
        router.replace("/appliedList");
      }
    }
  };
  return (
    <div className="text-center bg-[white] px-[35px] sp:px-[12px] sp:text-small ">
      <div className="flex items-center py-[20px]  w-[full] border-b-[1px] border-[#DDDDDD] mt-[70px] sp:mt-[96px]">
        <span className="text-title sp:text-sptitle">募集案件登録・編集</span>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD] mt-[90px] sp:mt-[30px]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">案件種別</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>
        </span>
        <div className="flex">
          <RadioBtn
            title="来店"
            defaultValue={data.caseType}
            handleChange={(val) => setData({ ...data, caseType: val })}
            options={["来 店", "通販"]}
          />
        </div>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>案件名</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>
        </span>
        <Input
          value={data.caseName}
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          placeholder="案件名を入力してください"
          handleChange={(val) => setData({ ...data, caseName: val })}
        />
      </div>
      <div className="flex py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] mt-[5px] flex justify-end sp:justify-start  mr-[67px]">
          <span>案件内容</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>
        </span>
        <TextArea
          value={data.caseContent}
          handleChange={(val) => setData({ ...data, caseContent: val })}
          textAreaClassName="max-w-[300px] h-[95px] grow border-[#D3D3D3] "
          placeholder="カフェPR"
        />
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>希望のハッシュタグ</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px] invisible">
            必須
          </span>
        </span>
        <Input
          notRequired
          value={data.wantedHashTag}
          handleChange={(val) => setData({ ...data, wantedHashTag: val })}
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
        />
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>希望のSNS</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px] invisible">
            必須
          </span>
        </span>
        <div className="flex flex-wrap">
          <Checkbox
            value={wantedSNS.includes("instagram")}
            handleChange={(val) => handleSNSChange("instagram")}
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
            value={wantedSNS.includes("tiktok")}
            handleChange={(val) => handleSNSChange("tiktok")}
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
            handleChange={(val) => handleSNSChange("x")}
            value={wantedSNS.includes("x")}
            title={<img className="w-[35px]" src="/img/sns/x.svg" alt="x" />}
            checkBoxClassName="mr-[20px]"
          />
          <Checkbox
            value={wantedSNS.includes("youtube")}
            handleChange={(val) => handleSNSChange("youtube")}
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
            value={wantedSNS.includes("facebook")}
            handleChange={(val) => handleSNSChange("facebook")}
            title={
              <img
                className="w-[35px]"
                src="/img/sns/facebook.svg"
                alt="youtube"
              />
            }
            checkBoxClassName="mr-[20px]"
          />
          <Checkbox
            value={wantedSNS.includes("etc.")}
            handleChange={(val) => handleSNSChange("etc.")}
            title={"etc."}
            checkBoxClassName="mr-[20px]"
          />
        </div>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>来店場所</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px] invisible">
            必須
          </span>
        </span>
        <Input
          value={data.casePlace}
          notRequired
          handleChange={(val) => setData({ ...data, casePlace: val })}
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
        />
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>募集開始</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px] invisible">
            必須
          </span>
        </span>
        <Input
          value={data.collectionStart}
          notRequired
          handleChange={(val) => setData({ ...data, collectionStart: val })}
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          placeholder="yyyy/mm/dd hh:mm"
        />
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>募集終了</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>
        </span>
        <Input
          value={data.collectionEnd}
          handleChange={(val) => setData({ ...data, collectionEnd: val })}
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          placeholder="yyyy/mm/dd hh:mm"
        />
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>案件終了</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>
        </span>
        <Input
          value={data.caseEnd}
          handleChange={(val) => setData({ ...data, caseEnd: val })}
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          placeholder="yyyy/mm/dd hh:mm"
        />
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>募集人数</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px] invisible">
            必須
          </span>
        </span>
        <Input
          value={data.collectionCnt}
          notRequired
          handleChange={(val) => setData({ ...data, collectionCnt: val })}
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
        />
      </div>
      <div className="flex py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] mt-[5px] flex justify-end sp:justify-start  mr-[67px]">
          <span>補足・注意事項</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px] invisible">
            必須
          </span>
        </span>
        <TextArea
          value={data.addition}
          handleChange={(val) => setData({ ...data, addition: val })}
          textAreaClassName="max-w-[300px] h-[95px] grow border-[#D3D3D3] "
          placeholder="注意事項を入力してください"
        />
      </div>
      {error !== "" && (
        <div className="text-center m-[10px] text-[#EE5736]">{error}</div>
      )}
      <div className="flex justify-center mt-[36px] mb-[160px] sp:mb-[60px]">
        {applyMode && (
          <Button
            buttonType={ButtonType.PRIMARY}
            buttonClassName="mr-[30px]"
            handleClick={() => handleRequest(false)}
          >
            <span className="flex items-center">
              <span>申請</span>
              <img
                className="w-[14px] ml-[5px]"
                src="/img/apply.svg"
                alt="refresh"
              />
            </span>
          </Button>
        )}
        {!applyMode && (
          <Button
            buttonType={ButtonType.DANGER}
            buttonClassName="mr-[30px]"
            handleClick={() => handleRequest(true)}
          >
            <span className="flex items-center">
              <span>保存</span>
              <img
                className="w-[14px] ml-[5px]"
                src="/img/download.svg"
                alt="refresh"
              />
            </span>
          </Button>
        )}
        <Link href={"/appliedList"}>
          <Button
            buttonType={ButtonType.PRIMARYDEFAULT}
            buttonClassName="rounded-[5px]"
          >
            戻る
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default CasePage;
