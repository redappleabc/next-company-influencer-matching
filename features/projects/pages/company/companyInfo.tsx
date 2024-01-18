"use client";
import React, { useState } from "react";
import Button, { ButtonType } from "@/components/atoms/button";
import Input from "@/components/atoms/input";
import Checkbox from "@/components/atoms/checkbox";
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
  const [agree, setAgree] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState("");
  const router = useRouter();

  const handleApply = async () => {
    if (!agree) {
      setError("個人情報の取り扱いに同意する必要があります。");
      return;
    } else {
      setError("");
    }

    const res = await axios.post(`api/company`, data);
    if (res.data.type === "success") {
      router.push("/applyConfirm");
    }
  };

  return (
    <div
      className={
        "text-center px-[35px] sp:px-[12px] sp:text-small " + applyMode
          ? "pt-[200px]"
          : "bg-[white] "
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
          value="株式会社ABC"
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
          value="カブシキガイシャ エービーシー"
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
          value="山田 太郎"
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
          value="ヤマダ タロウ"
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
          value="山田 太郎"
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
          value="ヤマダ タロウ"
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
          value="https://yahoo.co.jp"
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
          value="090-9999-9999"
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
          value="yamada@abc.co.jp"
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
          value="111-0053"
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
          value="東京都台東区浅草橋5-2-3"
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
          value="東5-2-3"
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
            <span>2023/11 支払済み</span>
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
            <span>2023/01/01</span>
          </div>
        </div>
      )}
      {!applyMode && (
        <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
          <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
            <span>状態</span>
          </span>
          <div>
            <span>稼働中</span>
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
          <Button buttonType={ButtonType.PRIMARY} handleClick={handleApply}>
            <span className="flex items-center">
              <span>送信する</span>
            </span>
          </Button>
        </div>
      ) : (
        <div className="flex justify-center mt-[36px] mb-[160px] sp:mb-[60px]">
          <Button buttonType={ButtonType.PRIMARY} buttonClassName="mr-[30px]">
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
