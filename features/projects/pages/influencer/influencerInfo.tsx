"use client";
import React, { useState, useEffect } from "react";
import Button, { ButtonType } from "@/components/atoms/button";
import Checkbox from "@/components/atoms/checkbox";
import Input from "@/components/atoms/input";
import Select from "@/components/atoms/select";
import TextArea from "@/components/atoms/textarea";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { authUserState } from "@/recoil/atom/auth/authUserAtom";
import { useRouter } from "next/navigation";

export interface InfluencerInfoProps {
  applyMode?: boolean;
}
const prefectures = [
  "北海道",
  "青森県",
  "岩手県",
  "宮城県",
  "秋田県",
  "山形県",
  "福島県",
  "茨城県",
  "栃木県",
  "群馬県",
  "埼玉県",
  "千葉県",
  "東京都",
  "神奈川県",
  "新潟県",
  "富山県",
  "石川県",
  "福井県",
  "山梨県",
  "長野県",
  "岐阜県",
  "静岡県",
  "愛知県",
  "三重県",
  "滋賀県",
  "京都府",
  "大阪府",
  "兵庫県",
  "奈良県",
  "和歌山県",
  "鳥取県",
  "島根県",
  "岡山県",
  "広島県",
  "山口県",
  "徳島県",
  "香川県",
  "愛媛県",
  "高知県",
  "福岡県",
  "佐賀県",
  "長崎県",
  "熊本県",
  "大分県",
  "宮崎県",
  "鹿児島県",
  "沖縄県",
];
const followersOptions = [
  "～1,000",
  "1,001～3,000",
  "3,001～5,000",
  "5,001～10,000",
  "10,001～30,000",
  "30,001～50,000",
  "50,001～100,000",
  "100,001～300,000",
  "300,001～500,000",
  "500,001～1,000,000",
  "1,000,001～",
];
const InfluencerInfoPage: React.FC<InfluencerInfoProps> = ({
  applyMode,
}: InfluencerInfoProps) => {
  const authUser = useRecoilValue(authUserState);
  const [data, setData] = useState(null);
  const [genre, setGenre] = useState([]);
  const router = useRouter();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `/api/influencer/aInfluencer?id=${authUser.user?.targetId}`
      );
      setData(result.data);
      setGenre(JSON.parse(result.data.genre));
    };
    if (!applyMode && authUser) fetchData();
  }, []);
  const handleGenreChange = (val) => {
    let isAlreadyExits = false;
    genre.forEach((a) => {
      if (a === val) isAlreadyExits = true;
    });
    if (!isAlreadyExits) {
      setGenre([...genre, val]);
    } else {
      let filteredArray = genre.filter((element) => element !== val);
      setGenre(filteredArray);
    }
  };
  const handleSend = async (applyMode: boolean) => {
    const genres = JSON.stringify(genre);
    const body = {
      ...data,
      genre: genres,
    };
    let result;
    if (applyMode) result = await axios.post("api/influencer", body);
    else {
      result = await axios.put("api/influencer", body);
      if (result.data.type === "success") {
        router.back();
      }
    }
  };
  return (
    <div
      className={
        applyMode
          ? "text-center  px-[35px] sp:px-[12px] sp:text-small pt-[200px] "
          : "text-center bg-[white] px-[35px] sp:px-[12px] sp:text-small "
      }
    >
      {!applyMode && (
        <div className="flex items-center py-[20px]  w-[full] border-b-[1px] border-[#DDDDDD] mt-[70px] mb-[50px] sp:mt-[96px]">
          <span className="text-title sp:text-sptitle">
            インフルエンサー情報変更
          </span>
        </div>
      )}
      <div className="flex items-center py-[15px] w-[40%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>お名前</span>
        </span>
        <Input
          handleChange={(val) => setData({ ...data, influencerName: val })}
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value={data ? data.influencerName : ""}
        />
      </div>
      <div className="flex items-center py-[15px] w-[40%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>お名前カナ</span>
        </span>
        <Input
          handleChange={(val) => setData({ ...data, influencerNameGana: val })}
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value={data ? data.influencerNameGana : ""}
        />
      </div>
      <div className="flex items-center py-[15px] w-[40%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>性別</span>
        </span>
        <Select
          handleChange={(val) => setData({ ...data, gender: val })}
          value={data ? data.gender : "男性"}
          selectClassName="w-[138px] border-[#D3D3D3]"
        >
          <option value={"男性"}>男性</option>
          <option value={"女性"}>女性</option>
          <option value={"その他"}>その他</option>
        </Select>{" "}
      </div>
      <div className="flex items-center py-[15px] w-[40%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>ニックネーム</span>
        </span>
        <Input
          handleChange={(val) => setData({ ...data, nickName: val })}
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value={data ? data.nickName : ""}
        />
      </div>
      <div className="flex items-center py-[15px] w-[40%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>電話番号</span>
        </span>
        <Input
          handleChange={(val) => setData({ ...data, phoneNumber: val })}
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value={data ? data.phoneNumber : ""}
        />
      </div>
      <div className="flex items-center py-[15px] w-[40%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>メールアドレス</span>
        </span>
        <Input
          handleChange={(val) => setData({ ...data, emailAddress: val })}
          inputClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
          value={data ? data.emailAddress : ""}
        />
      </div>

      <div className="flex items-center py-[15px] w-[40%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>都道府県</span>
        </span>

        <Select
          value={data ? data.prefecture : prefectures[0]}
          handleChange={(val) => setData({ ...data, prefecture: val })}
          selectClassName="max-w-[250px] grow border-[#D3D3D3] w-[100%]"
        >
          {prefectures?.map((aPrefecture, key) => (
            <option key={key} value={aPrefecture}>
              {aPrefecture}
            </option>
          ))}
        </Select>
      </div>
      <div className="flex  py-[15px] w-[40%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span>ジャンル</span>
        </span>
        <div>
          <div className="flex py-[5px]">
            <Checkbox
              value={
                data ? JSON.parse(data.genre).includes("美容・コスメ系") : false
              }
              title="美容・コスメ系"
              handleChange={(val) => handleGenreChange("美容・コスメ系")}
            />
            <Checkbox
              value={
                data
                  ? JSON.parse(data.genre).includes("アパレル・ファッション系")
                  : false
              }
              checkBoxClassName="ml-[25px]"
              handleChange={(val) =>
                handleGenreChange("アパレル・ファッション系")
              }
              title="アパレル・ファッション系"
            />
          </div>
          <div className="flex py-[5px]">
            <Checkbox
              value={
                data
                  ? JSON.parse(data.genre).includes("スイーツ・グルメ系")
                  : false
              }
              handleChange={(val) => handleGenreChange("スイーツ・グルメ系")}
              title="スイーツ・グルメ系"
            />
            <Checkbox
              value={
                data
                  ? JSON.parse(data.genre).includes("旅行・レジャー系")
                  : false
              }
              handleChange={(val) => handleGenreChange("旅行・レジャー系")}
              checkBoxClassName="ml-[25px]"
              title="旅行・レジャー系"
            />
          </div>
          <div className="flex py-[5px]">
            <Checkbox
              value={
                data
                  ? JSON.parse(data.genre).includes(
                      "育児・ファミリー系（ママ、キッズ等）"
                    )
                  : false
              }
              title="育児・ファミリー系（ママ、キッズ等）"
              handleChange={(val) =>
                handleGenreChange("育児・ファミリー系（ママ、キッズ等）")
              }
            />
            <Checkbox
              value={data ? JSON.parse(data.genre).includes("教育系") : false}
              checkBoxClassName="ml-[25px]"
              handleChange={(val) => handleGenreChange("教育系")}
              title="教育系"
            />
          </div>
          <div className="flex py-[5px]">
            <Checkbox
              value={
                data
                  ? JSON.parse(data.genre).includes(
                      "スポーツ・フィットネス・ボディメイク系"
                    )
                  : false
              }
              handleChange={(val) =>
                handleGenreChange("スポーツ・フィットネス・ボディメイク系")
              }
              title="スポーツ・フィットネス・ボディメイク系"
            />
          </div>
          <div className="flex py-[5px]">
            <Checkbox
              value={
                data ? JSON.parse(data.genre).includes("ダイエット系") : false
              }
              title="ダイエット系"
              handleChange={(val) => handleGenreChange("ダイエット系")}
            />
            <Checkbox
              value={
                data ? JSON.parse(data.genre).includes("エンタメ系") : false
              }
              checkBoxClassName="ml-[25px]"
              title="エンタメ系"
              handleChange={(val) => handleGenreChange("エンタメ系")}
            />
            <Checkbox
              value={
                data ? JSON.parse(data.genre).includes("ビジネス系") : false
              }
              handleChange={(val) => handleGenreChange("ビジネス系")}
              checkBoxClassName="ml-[25px]"
              title="ビジネス系"
            />
          </div>
          <div className="flex py-[5px]">
            <Checkbox
              value={
                data
                  ? JSON.parse(data.genre).includes("アパレル・ファッション系")
                  : false
              }
              handleChange={(val) =>
                handleGenreChange("アパレル・ファッション系")
              }
              title="アパレル・ファッション系"
            />
            <Checkbox
              value={
                data ? JSON.parse(data.genre).includes("お金・投資系") : false
              }
              checkBoxClassName="ml-[25px]"
              handleChange={(val) => handleGenreChange("お金・投資系")}
              title="お金・投資系"
            />
          </div>
          <div className="flex py-[5px]">
            <Checkbox
              value={
                data
                  ? JSON.parse(data.genre).includes("漫画・イラスト系")
                  : false
              }
              title="漫画・イラスト系"
              handleChange={(val) => handleGenreChange("漫画・イラスト系")}
            />
            <Checkbox
              checkBoxClassName="ml-[25px]"
              title="アート系"
              value={data ? JSON.parse(data.genre).includes("アート系") : false}
              handleChange={(val) => handleGenreChange("アート系")}
            />
            <Checkbox
              value={
                data ? JSON.parse(data.genre).includes("ペット・動物系") : false
              }
              handleChange={(val) => handleGenreChange("ペット・動物系")}
              checkBoxClassName="ml-[25px]"
              title="ペット・動物系"
            />
          </div>
          <div className="flex py-[5px]">
            <Checkbox
              value={
                data
                  ? JSON.parse(data.genre).includes("記事執筆・ライティング系")
                  : false
              }
              title="記事執筆・ライティング系"
              handleChange={(val) =>
                handleGenreChange("記事執筆・ライティング系")
              }
            />
            <Checkbox
              value={
                data
                  ? JSON.parse(data.genre).includes("ライフスタイル系")
                  : false
              }
              handleChange={(val) => handleGenreChange("ライフスタイル系")}
              checkBoxClassName="ml-[25px]"
              title="ライフスタイル系"
            />
          </div>
          <div className="flex py-[5px]">
            <Checkbox
              value={
                data
                  ? JSON.parse(data.genre).includes(
                      "花・フラワーアレンジメント系"
                    )
                  : false
              }
              handleChange={(val) =>
                handleGenreChange("花・フラワーアレンジメント系")
              }
              title="花・フラワーアレンジメント系"
            />
            <Checkbox
              value={
                data ? JSON.parse(data.genre).includes("医師・医療系") : false
              }
              handleChange={(val) => handleGenreChange("医師・医療系")}
              checkBoxClassName="ml-[25px]"
              title="医師・医療系"
            />
          </div>
          <div className="flex py-[5px]">
            <Checkbox
              value={
                data ? JSON.parse(data.genre).includes("バーチャル系") : false
              }
              handleChange={(val) => handleGenreChange("バーチャル系")}
              title="バーチャル系"
            />
            <Checkbox
              value={
                data
                  ? JSON.parse(data.genre).includes(
                      "写真家・フォトグラファー系"
                    )
                  : false
              }
              checkBoxClassName="ml-[25px]"
              handleChange={(val) =>
                handleGenreChange("写真家・フォトグラファー系")
              }
              title="写真家・フォトグラファー系"
            />
          </div>
          <div className="flex py-[5px]">
            <Checkbox
              value={data ? JSON.parse(data.genre).includes("その他") : false}
              handleChange={(val) => handleGenreChange("その他")}
              title="その他"
            />
          </div>
        </div>
      </div>
      <div className="flex py-[15px] w-[40%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mt-[10px] mr-[67px]">
          <span>Instagram</span>
        </span>
        <div className="grow">
          <div className="flex items-center max-w-[350px] grow py-[5px]">
            <span className="w-[100px] text-left sp:hidden">アカウント</span>
            <Input
              handleChange={(val) =>
                setData({
                  ...data,
                  instagram: JSON.stringify({
                    ...JSON.parse(data?.instagram),
                    account: val,
                  }),
                })
              }
              inputClassName="ml-[30px] sp:ml-[0px] grow max-w-[250px]"
              value={data?.instagram ? JSON.parse(data?.instagram).account : ""}
            ></Input>
          </div>
          <div className="flex items-center grow py-[5px]">
            <span className="w-[100px] text-left sp:hidden">フォロワー数</span>
            <Select
              value={
                data?.instagram
                  ? JSON.parse(data.instagram).followers
                  : followersOptions[0]
              }
              handleChange={(val) =>
                setData({
                  ...data,
                  instagram: JSON.stringify({
                    ...JSON.parse(data.instagram),
                    followers: val,
                  }),
                })
              }
              selectClassName="ml-[30px] sp:ml-[0px] grow max-w-[150px]"
            >
              {followersOptions?.map((aOption, key) => (
                <option key={key} value={aOption}>
                  {aOption}
                </option>
              ))}
            </Select>
          </div>
        </div>
      </div>
      <div className="flex py-[15px] w-[40%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mt-[10px] mr-[67px]">
          <span className="w-[66px] text-right">x</span>
        </span>
        <div className="grow">
          <div className="flex items-center max-w-[350px] grow py-[5px]">
            <span className="w-[100px] text-left sp:hidden">アカウント</span>
            <Input
              value={data?.x ? JSON.parse(data?.x).account : ""}
              handleChange={(val) =>
                setData({
                  ...data,
                  x: JSON.stringify({ ...JSON.parse(data?.x), account: val }),
                })
              }
              inputClassName="ml-[30px] sp:ml-[0px] grow max-w-[250px]"
            ></Input>
          </div>
          <div className="flex items-center grow py-[5px]">
            <span className="w-[100px] text-left sp:hidden">フォロワー数</span>
            <Select
              value={
                data?.x ? JSON.parse(data.x).followers : followersOptions[0]
              }
              handleChange={(val) =>
                setData({
                  ...data,
                  x: JSON.stringify({
                    ...JSON.parse(data?.x),
                    followers: val,
                  }),
                })
              }
              selectClassName="ml-[30px] sp:ml-[0px] grow max-w-[150px]"
            >
              {followersOptions?.map((aOption, key) => (
                <option key={key} value={aOption}>
                  {aOption}
                </option>
              ))}
            </Select>
          </div>
        </div>
      </div>
      <div className="flex py-[15px] w-[40%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mt-[10px] mr-[67px]">
          <span className="w-[66px] text-right">facebook</span>
        </span>
        <div className="grow">
          <div className="flex items-center  grow py-[5px]">
            <span className="w-[100px] text-left sp:hidden">アカウント</span>
            <Input
              handleChange={(val) =>
                setData({
                  ...data,
                  facebook: JSON.stringify({
                    ...JSON.parse(data?.facebook),
                    account: val,
                  }),
                })
              }
              inputClassName="ml-[30px] sp:ml-[0px] grow max-w-[250px]"
              value={data?.facebook ? JSON.parse(data.facebook).account : ""}
            ></Input>
          </div>
          <div className="flex items-center  grow py-[5px]">
            <span className="w-[100px] text-left sp:hidden">フォロワー数</span>
            <Select
              value={
                data?.facebook
                  ? JSON.parse(data.facebook).followers
                  : followersOptions[0]
              }
              handleChange={(val) =>
                setData({
                  ...data,
                  facebook: JSON.stringify({
                    ...JSON.parse(data.facebook),
                    followers: val,
                  }),
                })
              }
              selectClassName="ml-[30px] sp:ml-[0px] grow max-w-[150px]"
            >
              {followersOptions?.map((aOption, key) => (
                <option key={key} value={aOption}>
                  {aOption}
                </option>
              ))}
            </Select>
          </div>
        </div>
      </div>
      <div className="flex py-[15px] w-[40%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mt-[10px] mr-[67px]">
          <span className="w-[66px] text-right">tiktok</span>
        </span>
        <div className="grow">
          <div className="flex items-center max-w-[350px] grow py-[5px]">
            <span className="w-[100px] text-left sp:hidden">アカウント</span>
            <Input
              handleChange={(val) =>
                setData({
                  ...data,
                  tiktok: JSON.stringify({
                    ...JSON.parse(data?.tiktok),
                    account: val,
                  }),
                })
              }
              inputClassName="ml-[30px] sp:ml-[0px] grow max-w-[250px]"
              value={data?.tiktok ? JSON.parse(data.tiktok).account : ""}
            ></Input>
          </div>
          <div className="flex items-center  grow py-[5px]">
            <span className="w-[100px] text-left sp:hidden">フォロワー数</span>
            <Select
              value={
                data?.tiktok
                  ? JSON.parse(data.tiktok).followers
                  : followersOptions[0]
              }
              handleChange={(val) =>
                setData({
                  ...data,
                  tiktok: JSON.stringify({
                    ...JSON.parse(data.tiktok),
                    followers: val,
                  }),
                })
              }
              selectClassName="ml-[30px] sp:ml-[0px] grow max-w-[150px]"
            >
              {followersOptions?.map((aOption, key) => (
                <option key={key} value={aOption}>
                  {aOption}
                </option>
              ))}
            </Select>
          </div>
        </div>
      </div>
      <div className="flex py-[15px] w-[40%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mt-[10px] mr-[67px]">
          <span className="w-[66px] text-right">youtube</span>
        </span>
        <div className="grow">
          <div className="flex items-center max-w-[350px] grow py-[5px]">
            <span className="w-[100px] text-left sp:hidden">アカウント</span>
            <Input
              handleChange={(val) =>
                setData({
                  ...data,
                  youtube: JSON.stringify({
                    ...JSON.parse(data?.youtube),
                    account: val,
                  }),
                })
              }
              inputClassName="ml-[30px] sp:ml-[0px] grow max-w-[250px]"
              value={data?.youtube ? JSON.parse(data.youtube).account : ""}
            ></Input>
          </div>
          <div className="flex items-center  grow py-[5px]">
            <span className="w-[100px] text-left sp:hidden">フォロワー数</span>
            <Select
              value={
                data?.youtube
                  ? JSON.parse(data.youtube).followers
                  : followersOptions[0]
              }
              handleChange={(val) =>
                setData({
                  ...data,
                  youtube: JSON.stringify({
                    ...JSON.parse(data.youtube),
                    followers: val,
                  }),
                })
              }
              selectClassName="ml-[30px] sp:ml-[0px] grow max-w-[150px]"
            >
              {followersOptions?.map((aOption, key) => (
                <option key={key} value={aOption}>
                  {aOption}
                </option>
              ))}
            </Select>
          </div>
        </div>
      </div>

      <div className="flex py-[15px] w-[40%] sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mt-[10px] mr-[67px]">
          <span>その他のSNS </span>
        </span>
        <TextArea
          value={data ? data.otherSNS : ""}
          handleChange={(val) => setData({ ...data, otherSNS: val })}
          textAreaClassName="max-w-[380px] grow"
        ></TextArea>
      </div>
      <div className="flex justify-center mt-[36px] mb-[160px] sp:mb-[60px]">
        {!applyMode && (
          <Button
            buttonType={ButtonType.PRIMARY}
            buttonClassName="mr-[30px]"
            handleClick={() => handleSend(false)}
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
        )}
        {applyMode && (
          <Button
            buttonType={ButtonType.PRIMARY}
            buttonClassName="ml-[40px]"
            handleClick={() => handleSend(true)}
          >
            <span className="flex items-center">
              <span>送信する</span>
            </span>
          </Button>
        )}
        {!applyMode && (
          <Button
            buttonType={ButtonType.DEFAULT}
            buttonClassName="rounded-[5px]"
          >
            戻る
          </Button>
        )}
      </div>
    </div>
  );
};
export default InfluencerInfoPage;
