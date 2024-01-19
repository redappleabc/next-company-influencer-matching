"use client";
import React, { useEffect, useState } from "react";
import Button, { ButtonType } from "@/components/atoms/button";
import Input from "@/components/atoms/input";
import Checkbox from "@/components/atoms/checkbox";
import { useRecoilValue } from "recoil";
import { authUserState } from "@/recoil/atom/auth/authUserAtom";
import axios from "axios";
import { useRouter } from "next/navigation";

export interface CompanyInfoProps {
  companyData?: object;
  applyMode?: boolean;
}

const CompanyInfoPage: React.FC<CompanyInfoProps> = ({
  companyData,
  applyMode,
}: CompanyInfoProps) => {
  const authUser = useRecoilValue(authUserState);

  const [agree, setAgree] = useState(false);
  const [data, setData] = useState({
    companyName: "",
    companyNameGana: "",
    representativeName: "",
    representativeNameGana: "",
    responsibleName: "",
    responsibleNameGana: "",
    webSite: "",
    phoneNumber: "",
    emailAddress: "",
    postalCode: "",
    address: "",
  });
  const [error, setError] = useState("");
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `/api/company/aCompany?id=${authUser.user?.targetId}`
      );

      setData(result.data);
    };
    if (!applyMode) fetchData();
  }, []);
  const handleApply = async (isApply) => {
    const msgs = {
      companyName: "企業名を入力してください",
      companyNameGana: "企業名カナを入力してください",
      representativeName: "代表者名を入力してください",
      representativeNameGana: "代表者名カナを入力してください",
      responsibleName: "担当者名を入力してください",
      responsibleNameGana: "担当者名カナを入力してください",
      webSite: "WEBサイトのURLを入力してください",
      phoneNumber: "電話番号を入力してください ",
      emailAddress: "電話番号形式ではありません  ",
      postalCode: "郵便番号を入力してください",
      address: "住所を入力してください",
    };
    const keys = Object.keys(msgs);
    let isValid = true;
    keys.forEach((aKey) => {
      if (data[aKey] === "") {
        if (!isValid) return;
        setError(msgs[aKey]);
        isValid = false;
      }
    });
    if (!agree && isValid) {
      setError("個人情報の取り扱いに同意する必要があります。");
      return;
    }
    let phonePattern = /^0\d{2}-\d{4}-\d{4}$/;
    if (!phonePattern.test(data.phoneNumber.trim())) {
      setError("電話番号形式ではありません");
      isValid = false;
    }
    let mailPattern = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z0-9]+[0-9]{4}$/;
    if (!mailPattern.test(data.emailAddress.trim())) {
      setError("メールアドレス形式ではありません");
      isValid = false;
    }
    if (!isValid) return;
    if (isApply) {
      const res = await axios.post(`api/company`, data);
      if (res.data.type === "success") {
        router.push("/applyConfirm");
      }
    }
    if (!isApply) {
      const res = await axios.put(`api/company`, data);
      setError("");
      console.log(data);
    }
  };

  return (
    <div
      className={
        applyMode
          ? "text-center px-[35px] sp:px-[12px] sp:text-small pt-[200px]"
          : "text-center px-[35px] sp:px-[12px] sp:text-small bg-[white]"
      }
    >
      {!applyMode && (
        <div className="flex items-center py-[20px]  w-[full] border-b-[1px] border-[#DDDDDD] mt-[70px] mb-[50px] sp:mt-[96px]">
          <span className="text-title sp:text-sptitle">企業情報変更</span>
        </div>
      )}
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>企業名</span>
          {<span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>}
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value={data?.companyName}
          handleChange={(val) => {
            setData({ ...data, companyName: val });
          }}
        />
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>企業名カナ</span>
          {<span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>}
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value={data?.companyNameGana}
          handleChange={(val) => {
            setData({ ...data, companyNameGana: val });
          }}
        />
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>代表者名</span>
          {<span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>}
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value={data?.representativeName}
          handleChange={(val) => {
            setData({ ...data, representativeName: val });
          }}
        />
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>代表者名カナ</span>
          {<span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>}
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value={data?.representativeNameGana}
          handleChange={(val) => {
            setData({ ...data, representativeNameGana: val });
          }}
        />
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>担当者名</span>
          {<span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>}
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value={data?.responsibleName}
          handleChange={(val) => {
            setData({ ...data, responsibleName: val });
          }}
        />
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>担当者名カナ</span>
          {<span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>}
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value={data?.responsibleNameGana}
          handleChange={(val) => {
            setData({ ...data, responsibleNameGana: val });
          }}
        />
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>WEBサイト</span>
          {<span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>}
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value={data?.webSite}
          handleChange={(val) => {
            setData({ ...data, webSite: val });
          }}
        />
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>電話番号</span>
          {<span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>}
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value={data?.phoneNumber}
          handleChange={(val) => {
            setData({ ...data, phoneNumber: val });
          }}
        />
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>メールアドレス</span>
          {<span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>}
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value={data?.emailAddress}
          handleChange={(val) => {
            setData({ ...data, emailAddress: val });
          }}
        />
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>郵便番号</span>
          {<span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>}
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value={data?.postalCode}
          handleChange={(val) => {
            setData({ ...data, postalCode: val });
          }}
        />
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>住所</span>
          {<span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>}
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value={data?.address}
          handleChange={(val) => {
            setData({ ...data, address: val });
          }}
        />
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>建物</span>
          {
            <span className="ml-[10px] text-[#EE5736] text-[11px] invisible">
              必須
            </span>
          }
        </span>
        <Input
          notRequired
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value={data?.building}
          handleChange={(val) => {
            setData({ ...data, building: val });
          }}
        />
      </div>
      {!applyMode && (
        <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
          <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
            <span>決済</span>
          </span>
          <div className="sp:text-center">
            <span>{data?.payment}</span>
            <Button
              buttonType={ButtonType.DANGER}
              buttonClassName="ml-[40px] sp:ml-[0px]"
            >
              決済情報変更
            </Button>
          </div>
        </div>
      )}
      {!applyMode && (
        <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
          <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
            <span>登録日</span>
          </span>
          <div>
            <span>{data?.date}</span>
          </div>
        </div>
      )}
      {!applyMode && (
        <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
          <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
            <span>状態</span>
          </span>
          <div>
            <span>{data?.status}</span>
          </div>
        </div>
      )}
      <div className="flex justify-center">
        <Checkbox
          prefix={""}
          value={agree}
          checkBoxClassName="mt-[36px]"
          title={
            <span>
              <span className="underline decoration-[#353A40] underline-offset-[5px]">
                個人情報の取り扱い
              </span>
              に同意します
            </span>
          }
          handleChange={(isChecked) => {
            setAgree(isChecked);
          }}
        />
      </div>
      {error !== "" && (
        <div className="text-center m-[10px] text-[#EE5736]">{error}</div>
      )}

      {applyMode ? (
        <div className="flex justify-center mt-[36px] mb-[160px] sp:mb-[60px]">
          <Button
            buttonType={ButtonType.PRIMARY}
            handleClick={() => handleApply(true)}
          >
            <span className="flex items-center">
              <span>送信する</span>
            </span>
          </Button>
        </div>
      ) : (
        <div className="flex justify-center mt-[36px] mb-[160px] sp:mb-[60px]">
          <Button
            buttonType={ButtonType.PRIMARY}
            buttonClassName="mr-[30px]"
            handleClick={() => handleApply(false)}
          >
            <span className="flex items-center">
              <span>更新</span>
              <img
                className="w-[14px] ml-[5px]"
                src="/img/refresh.svg"
                alt="refresh"
              />
            </span>
          </Button>
          <Button buttonType={ButtonType.PRIMARY} buttonClassName="mr-[30px]">
            <span className="flex items-center">
              <span>解約</span>
            </span>
          </Button>
          <Button
            buttonType={ButtonType.DEFAULT}
            buttonClassName="rounded-[5px]"
          >
            戻る
          </Button>
        </div>
      )}
    </div>
  );
};
export default CompanyInfoPage;
