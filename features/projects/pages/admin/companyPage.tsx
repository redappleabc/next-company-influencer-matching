import React from "react";
import Button, { ButtonType } from "@/components/atoms/button";
import Checkbox from "@/components/atoms/checkbox";
import Input from "@/components/atoms/input";
import Select from "@/components/atoms/select";

export interface CompanyProps {
  companyData?: object;
}

const CompanyPage: React.FC<CompanyProps> = ({ companyData }: CompanyProps) => {
  return (
    <div className="text-center bg-[white] px-[35px] sp:px-[12px] sp:text-small ">
      <div className="flex items-center py-[20px]  w-[full] border-b-[1px] border-[#DDDDDD] mt-[70px] sp:mt-[96px]">
        <span className="text-title sp:text-sptitle">株式会社ABC</span>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD] mt-[90px] sp:mt-[30px]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">企業名</span>
        </span>
        <span>株式会社ABC</span>
      </div>
      <div className="flex items-center py-[20px] w-[50%]  sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">企業名カナ</span>
        </span>
        <span>カブシキガイシャ エービーシー</span>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">代表者名</span>
        </span>
        <span>山田 太郎</span>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">代表者名カナ</span>
        </span>
        <span>ヤマダ タロウ</span>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">担当者名</span>
        </span>
        <span>山田 太郎</span>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">担当者名カナ</span>
        </span>
        <span>ヤマダ タロウ</span>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">WEBサイト</span>
        </span>
        <span>http</span>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">電話番号</span>
        </span>
        <span>090-9999-9999</span>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>メールアドレス</span>
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value="yamada@abc.co.jp"
        />
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">郵便番号</span>
        </span>
        <span>東京都台東区浅草橋5-2-3</span>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">決済</span>
        </span>
        <span>決済失敗</span>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">決済失敗</span>
        </span>
        <span>カード期限切れ</span>
      </div>
      <div className="flex items-center py-[20px] w-[50%]  sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">登録日</span>
        </span>
        <span>2023/01/01</span>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>状態</span>
        </span>
        <Select selectClassName="w-[138px] border-[#D3D3D3]">
          <option>稼動中</option>
          <option>停止中</option>
        </Select>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]  sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>月の募集数</span>
        </span>
        <Input inputClassName="w-[138px] border-[#D3D3D3]" value="1" />
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>同時募集数</span>
        </span>
        <Input inputClassName="w-[138px] border-[#D3D3D3]" value="1" />
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>プラン</span>
        </span>
        <Select
          selectClassName="w-[138px] border-[#D3D3D3]"
          value="yamada@abc.co.jp"
        />
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>無料アカウント</span>
        </span>
        <Checkbox />
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
        <Button buttonType={ButtonType.DEFAULT} buttonClassName="rounded-[5px]">
          戻る
        </Button>
      </div>
    </div>
  );
};
export default CompanyPage;
