import React from "react";
import Button, { ButtonType } from "@/components/atoms/button";
import Input from "@/components/atoms/input";
import Select from "@/components/atoms/select";

export interface InfluencerProps {
  influencerData?: object;
}

const InfluencerPage: React.FC<InfluencerProps> = ({
  influencerData,
}: InfluencerProps) => {
  return (
    <div className="text-center bg-[white] px-[35px] sp:px-[12px] sp:text-small ">
      <div className="flex items-center py-[20px]  w-[full] border-b-[1px] border-[#DDDDDD] mt-[70px] sp:mt-[96px]">
        <span className="text-title sp:text-sptitle">ユニティー</span>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD] mt-[90px] sp:mt-[30px]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">お名前</span>
        </span>
        <span>山田太郎</span>
      </div>
      <div className="flex items-center py-[15px] w-[50%]  sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">性別</span>
        </span>
        <Select selectClassName="w-[138px] border-[#D3D3D3]">
          <option>女性</option>
          <option>男性</option>
          <option>その他</option>
        </Select>{" "}
      </div>
      <div className="flex items-center py-[20px] w-[50%]  sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">企業名カナ</span>
        </span>
        <span>ヤマダタロウ</span>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">ニックネーム</span>
        </span>
        <span>ユニティ</span>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">電話番号</span>
        </span>
        <span>090-9999-9999090-9999-9999</span>
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
          <span className="text-[#6F6F6F]">住所</span>
        </span>
        <span>東京都</span>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">ジャンル</span>
        </span>
        <span>美容・コスメ系,アパレル・ファッション系</span>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="hover:cursor-pointer text-[#3F8DEB] underline underline-[#3F8DEB] underline-offset-[3px]">
            Instagram
          </span>
        </span>
        <span>フォロワー数：1,001～3,000</span>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="hover:cursor-pointer text-[#3F8DEB] underline underline-[#3F8DEB] underline-offset-[3px]">
            X
          </span>
        </span>
        <span>フォロワー数：1,001～3,000</span>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="hover:cursor-pointer text-[#3F8DEB] underline underline-[#3F8DEB] underline-offset-[3px]">
            facebook
          </span>
        </span>
        <span>フォロワー数：1,001～3,000</span>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="hover:cursor-pointer text-[#3F8DEB] underline underline-[#3F8DEB] underline-offset-[3px]">
            tiktok
          </span>
        </span>
        <span>フォロワー数：1,001～3,000</span>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="hover:cursor-pointer text-[#3F8DEB] underline underline-[#3F8DEB] underline-offset-[3px]">
            YouTube
          </span>
        </span>
        <span>フォロワー数：1,001～3,000</span>
      </div>
      <div className="flex py-[20px] w-[50%]  sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">その他</span>
        </span>
        <div>
          <div>LINE公式アカウントのお友達1000人</div>
          <div>スナップチャットフォロワー1000人</div>
        </div>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>登録日</span>
        </span>
        <div>2023/01/01</div>
      </div>
      <div className="flex items-center py-[20px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>申請日時</span>
        </span>
        <div>2023/01/01 11:11</div>
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>状態</span>
        </span>
        <Select selectClassName="w-[138px] border-[#D3D3D3]">
          <option>承認待ち</option>
          <option>稼動中</option>
          <option>停止中</option>
        </Select>
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
export default InfluencerPage;
