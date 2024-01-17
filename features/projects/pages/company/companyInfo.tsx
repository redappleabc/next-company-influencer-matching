import React from "react";
import Button, { ButtonType } from "@/components/atoms/button";
import Checkbox from "@/components/atoms/checkbox";
import Input from "@/components/atoms/input";
import Select from "@/components/atoms/select";
import TextArea from "@/components/atoms/textarea";

export interface CompanyInfoProps {
  companyData?: object;
}

const CompanyInfoPage: React.FC<CompanyInfoProps> = ({
  companyData,
}: CompanyInfoProps) => {
  return (
    <div className="text-center bg-[white] px-[35px] sp:px-[12px] sp:text-small ">
      <div className="flex items-center py-[20px]  w-[full] border-b-[1px] border-[#DDDDDD] mt-[70px] mb-[50px] sp:mt-[96px]">
        <span className="text-title sp:text-sptitle">企業情報変更</span>
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>企業名</span>
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value="株式会社ABC"
        />
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>企業名カナ</span>
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value="カブシキガイシャ エービーシー"
        />
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>代表者名</span>
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value="山田 太郎"
        />
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>代表者名カナ</span>
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value="ヤマダ タロウ"
        />
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>担当者名</span>
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value="山田 太郎"
        />
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>担当者名カナ</span>
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value="ヤマダ タロウ"
        />
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>WEBサイト</span>
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value="https://yahoo.co.jp"
        />
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>電話番号</span>
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value="090-9999-9999"
        />
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>メールアドレス</span>
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value="yamada@abc.co.jp"
        />
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>郵便番号</span>
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value="111-0053"
        />
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>住所</span>
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value="東京都台東区浅草橋5-2-3"
        />
      </div>
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
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>登録日</span>
        </span>
        <div>
          <span>2023/01/01</span>
        </div>
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>状態</span>
        </span>
        <div>
          <span>稼働中</span>
        </div>
      </div>
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
        <Button buttonType={ButtonType.DEFAULT} buttonClassName="rounded-[5px]">
          戻る
        </Button>
      </div>
    </div>
  );
};
export default CompanyInfoPage;
