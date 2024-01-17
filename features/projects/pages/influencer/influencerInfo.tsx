import React from "react";
import Button, { ButtonType } from "@/components/atoms/button";
import Checkbox from "@/components/atoms/checkbox";
import Input from "@/components/atoms/input";
import Select from "@/components/atoms/select";
import TextArea from "@/components/atoms/textarea";

export interface InfluencerInfoProps {
  influencerData?: object;
}

const InfluencerInfoPage: React.FC<InfluencerInfoProps> = ({
  influencerData,
}: InfluencerInfoProps) => {
  return (
    <div className="text-center bg-[white] px-[35px] sp:px-[12px] sp:text-small ">
      <div className="flex items-center py-[20px]  w-[full] border-b-[1px] border-[#DDDDDD] mt-[70px] mb-[50px] sp:mt-[96px]">
        <span className="text-title sp:text-sptitle">
          インフルエンサー情報変更
        </span>
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>お名前カナ</span>
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value="ヤマダタロウ"
        />
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>ニックネーム</span>
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value="ユニティ エービーシー"
        />
      </div>
      <div className="flex items-center py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>電話番号</span>
        </span>
        <Input
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value="090−0900−9090"
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
          <span>都道府県</span>
        </span>

        <Select selectClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]">
          <option>東京都</option>
        </Select>
      </div>
      <div className="flex  py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>ジャンル</span>
        </span>
        <div>
          <div className="flex py-[5px]">
            <Checkbox title="美容・コスメ系" />
            <Checkbox
              checkBoxClassName="ml-[25px]"
              title="アパレル・ファッション系"
            />
          </div>
          <div className="flex py-[5px]">
            <Checkbox title="スイーツ・グルメ系" />
            <Checkbox checkBoxClassName="ml-[25px]" title="旅行・レジャー系" />
          </div>
          <div className="flex py-[5px]">
            <Checkbox title="育児・ファミリー系（ママ、キッズ等）" />
            <Checkbox checkBoxClassName="ml-[25px]" title="教育系" />
          </div>
          <div className="flex py-[5px]">
            <Checkbox title="スポーツ・フィットネス・ボディメイク系" />
          </div>
          <div className="flex py-[5px]">
            <Checkbox title="ダイエット系" />
            <Checkbox checkBoxClassName="ml-[25px]" title="エンタメ系" />
            <Checkbox checkBoxClassName="ml-[25px]" title="ビジネス系" />
          </div>
          <div className="flex py-[5px]">
            <Checkbox title="アパレル・ファッション系" />
            <Checkbox checkBoxClassName="ml-[25px]" title="お金・投資系" />
          </div>
          <div className="flex py-[5px]">
            <Checkbox title="漫画・イラスト系" />
            <Checkbox checkBoxClassName="ml-[25px]" title="アート系" />
            <Checkbox checkBoxClassName="ml-[25px]" title="ペット・動物系" />
          </div>
          <div className="flex py-[5px]">
            <Checkbox title="記事執筆・ライティング系" />
            <Checkbox checkBoxClassName="ml-[25px]" title="ライフスタイル系" />
          </div>
          <div className="flex py-[5px]">
            <Checkbox title="花・フラワーアレンジメント系" />
            <Checkbox checkBoxClassName="ml-[25px]" title="医師・医療系" />
          </div>
          <div className="flex py-[5px]">
            <Checkbox title="バーチャル系" />
            <Checkbox
              checkBoxClassName="ml-[25px]"
              title="写真家・フォトグラファー系"
            />
          </div>
          <div className="flex py-[5px]">
            <Checkbox title="その他" />
          </div>
        </div>
      </div>
      <div className="flex py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mt-[10px] mr-[67px]">
          <span>Instagram</span>
        </span>
        <div className="grow">
          <div className="flex items-center max-w-[350px] grow py-[5px]">
            <span className="w-[100px] text-left sp:hidden">アカウント</span>
            <Input
              inputClassName="ml-[30px] sp:ml-[0px] grow max-w-[250px]"
              value="https://instagram.com/XXXXX"
            ></Input>
          </div>
          <div className="flex items-center max-w-[240px] grow py-[5px]">
            <span className="w-[100px] text-left sp:hidden">フォロワー数</span>
            <Select selectClassName="ml-[30px] sp:ml-[0px] grow max-w-[150px]">
              <option value="1000人">1000人</option>
            </Select>
          </div>
        </div>
      </div>
      <div className="flex py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mt-[10px] mr-[67px]">
          <span>Instagram</span>
        </span>
        <div className="grow">
          <div className="flex items-center max-w-[350px] grow py-[5px]">
            <span className="w-[100px] text-left sp:hidden">アカウント</span>
            <Input
              inputClassName="ml-[30px] sp:ml-[0px] grow max-w-[250px]"
              value="https://instagram.com/XXXXX"
            ></Input>
          </div>
          <div className="flex items-center max-w-[240px] grow py-[5px]">
            <span className="w-[100px] text-left sp:hidden">フォロワー数</span>
            <Select selectClassName="ml-[30px] sp:ml-[0px] grow max-w-[150px]">
              <option value="1000人">1000人</option>
            </Select>
          </div>
        </div>
      </div>
      <div className="flex py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mt-[10px] mr-[67px]">
          <span>x</span>
        </span>
        <div className="grow">
          <div className="flex items-center max-w-[350px] grow py-[5px]">
            <span className="w-[100px] text-left sp:hidden">アカウント</span>
            <Input
              inputClassName="ml-[30px] sp:ml-[0px] grow max-w-[250px]"
              value="https://instagram.com/XXXXX"
            ></Input>
          </div>
          <div className="flex items-center max-w-[240px] grow py-[5px]">
            <span className="w-[100px] text-left sp:hidden">フォロワー数</span>
            <Select selectClassName="ml-[30px] sp:ml-[0px] grow max-w-[150px]">
              <option value="1000人">1000人</option>
            </Select>
          </div>
        </div>
      </div>
      <div className="flex py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mt-[10px] mr-[67px]">
          <span>facebook</span>
        </span>
        <div className="grow">
          <div className="flex items-center max-w-[350px] grow py-[5px]">
            <span className="w-[100px] text-left sp:hidden">アカウント</span>
            <Input
              inputClassName="ml-[30px] sp:ml-[0px] grow max-w-[250px]"
              value="https://instagram.com/XXXXX"
            ></Input>
          </div>
          <div className="flex items-center max-w-[240px] grow py-[5px]">
            <span className="w-[100px] text-left sp:hidden">フォロワー数</span>
            <Select selectClassName="ml-[30px] sp:ml-[0px] grow max-w-[150px]">
              <option value="1000人">1000人</option>
            </Select>
          </div>
        </div>
      </div>
      <div className="flex py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mt-[10px] mr-[67px]">
          <span>tiktok</span>
        </span>
        <div className="grow">
          <div className="flex items-center max-w-[350px] grow py-[5px]">
            <span className="w-[100px] text-left sp:hidden">アカウント</span>
            <Input
              inputClassName="ml-[30px] sp:ml-[0px] grow max-w-[250px]"
              value="https://instagram.com/XXXXX"
            ></Input>
          </div>
          <div className="flex items-center max-w-[240px] grow py-[5px]">
            <span className="w-[100px] text-left sp:hidden">フォロワー数</span>
            <Select selectClassName="ml-[30px] sp:ml-[0px] grow max-w-[150px]">
              <option value="1000人">1000人</option>
            </Select>
          </div>
        </div>
      </div>
      <div className="flex py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mt-[10px] mr-[67px]">
          <span>youtube</span>
        </span>
        <div className="grow">
          <div className="flex items-center max-w-[350px] grow py-[5px]">
            <span className="w-[100px] text-left sp:hidden">アカウント</span>
            <Input
              inputClassName="ml-[30px] sp:ml-[0px] grow max-w-[250px]"
              value="https://instagram.com/XXXXX"
            ></Input>
          </div>
          <div className="flex items-center max-w-[240px] grow py-[5px]">
            <span className="w-[100px] text-left sp:hidden">フォロワー数</span>
            <Select selectClassName="ml-[30px] sp:ml-[0px] grow max-w-[150px]">
              <option value="1000人">1000人</option>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex py-[15px] w-[50%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mt-[10px] mr-[67px]">
          <span>その他のSNS </span>
        </span>
        <TextArea textAreaClassName="max-w-[380px] grow"></TextArea>
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
export default InfluencerInfoPage;
