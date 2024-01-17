import React from "react";
import Button, { ButtonType } from "@/components/atoms/button";
import RadioBtn from "@/components/atoms/radio";
import Checkbox from "@/components/atoms/checkbox";
import Input from "@/components/atoms/input";
import TextArea from "@/components/atoms/textarea";

export interface CompanyProps {
  caseData?: object;
}

const CasePage: React.FC<CompanyProps> = ({ caseData }: CompanyProps) => {
  return (
    <div className="text-center bg-[white] px-[35px] sp:px-[12px] sp:text-small ">
      <div className="flex items-center py-[20px]  w-[full] border-b-[1px] border-[#DDDDDD] mt-[70px] sp:mt-[96px]">
        <span className="text-title sp:text-sptitle">募集案件登録・編集</span>
      </div>
      <div className="flex items-center py-[20px] w-[60%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD] mt-[90px] sp:mt-[30px]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">案件種別</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>
        </span>
        <div className="flex">
          <RadioBtn title="来店" options={["来 店", "通販"]} />
        </div>
      </div>
      <div className="flex items-center py-[20px] w-[60%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>案件名</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          placeholder="案件名を入力してください"
        />
      </div>
      <div className="flex items-center py-[20px] w-[60%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>案件内容</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>
        </span>
        <TextArea
          textAreaClassName="max-w-[300px] h-[95px] grow border-[#D3D3D3] "
          placeholder="案件名を入力してください"
        />
      </div>
      <div className="flex items-center py-[20px] w-[60%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>希望のハッシュタグ</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px] invisible">
            必須
          </span>
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          placeholder="案件名を入力してください"
        />
      </div>
      <div className="flex items-center py-[20px] w-[60%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>希望のSNS</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px] invisible">
            必須
          </span>
        </span>
        <div className="flex flex-wrap">
          <Checkbox
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
            title={<img className="w-[35px]" src="/img/sns/x.svg" alt="x" />}
            checkBoxClassName="mr-[20px]"
          />
          <Checkbox
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
            title={
              <img
                className="w-[35px]"
                src="/img/sns/facebook.svg"
                alt="youtube"
              />
            }
            checkBoxClassName="mr-[20px]"
          />
          <Checkbox title={"etc."} checkBoxClassName="mr-[20px]" />
        </div>
      </div>
      <div className="flex items-center py-[20px] w-[60%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>来店場所</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px] invisible">
            必須
          </span>
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          placeholder="案件名を入力してください"
        />
      </div>
      <div className="flex items-center py-[20px] w-[60%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>募集開始</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px] invisible">
            必須
          </span>
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          placeholder="案件名を入力してください"
        />
      </div>
      <div className="flex items-center py-[20px] w-[60%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>募集終了</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          placeholder="案件名を入力してください"
        />
      </div>
      <div className="flex items-center py-[20px] w-[60%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>案件終了</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          placeholder="案件名を入力してください"
        />
      </div>
      <div className="flex items-center py-[20px] w-[60%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>募集人数</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px] invisible">
            必須
          </span>
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          placeholder="案件名を入力してください"
        />
      </div>
      <div className="flex items-center py-[20px] w-[60%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>補足・注意事項</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>
        </span>
        <TextArea
          textAreaClassName="max-w-[300px] h-[95px] grow border-[#D3D3D3] "
          placeholder="注意事項を入力してください"
        />
      </div>
      <div className="flex justify-center mt-[36px] mb-[160px] sp:mb-[60px]">
        <Button buttonType={ButtonType.PRIMARY} buttonClassName="mr-[30px]">
          <span className="flex items-center">
            <span>申請</span>
            <img
              className="w-[14px] ml-[5px]"
              src="/img/apply.svg"
              alt="refresh"
            />
          </span>
        </Button>
        <Button buttonType={ButtonType.DANGER} buttonClassName="mr-[30px]">
          <span className="flex items-center">
            <span>保存</span>
            <img
              className="w-[14px] ml-[5px]"
              src="/img/download.svg"
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
export default CasePage;
