import React from "react";
import Button, { ButtonType } from "@/components/atoms/button";
import Input from "@/components/atoms/input";
import TextArea from "@/components/atoms/textarea";
import Link from "next/link";

export interface ApplicatinProps {
  influencerData?: object;
  isInfluencerMode?: boolean;
  onCancel?: () => void;
}

const ApplicationPage: React.FC<ApplicatinProps> = ({
  influencerData,
  isInfluencerMode,
  onCancel,
}: ApplicatinProps) => {
  const widthClass = isInfluencerMode ? "" : "w-[50%]";
  const topClass = isInfluencerMode ? " pt-[50px]" : "";
  return (
    <div
      className={
        isInfluencerMode
          ? "text-center bg-[white] px-[35px] sp:px-[12px] sp:text-small w-[40%] sp:w-[90%] m-auto relative"
          : "text-center bg-[white] px-[35px] sp:px-[12px] sp:text-small "
      }
    >
      {!isInfluencerMode && (
        <div className="flex items-center py-[20px]  w-[full] border-b-[1px] border-[#DDDDDD] mt-[70px] sp:mt-[96px]">
          <span className="text-title sp:text-sptitle">案件名</span>
        </div>
      )}
      {isInfluencerMode && (
        <button
          className="absolute bg-[#5E5E5E] text-[white] px-[15px] py-[10px] top-0 right-0 cursor-pointer"
          onClick={(e) => {
            if (onCancel) onCancel();
          }}
        >
          x
        </button>
      )}
      <div
        className={
          "flex items-center py-[20px] sp:w-full m-auto border-b-[1px] border-[#DDDDDD] mt-[90px] sp:mt-[30px] sp:px-[18px] " +
          widthClass +
          topClass
        }
      >
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">企業名</span>
        </span>
        {!isInfluencerMode && (
          <Link href={"/company"}>
            <span className="text-[#3F8DEB] underline underline-[#3F8DEB] underline-offset-[3px]">
              株式会社ABC
            </span>
          </Link>
        )}
        {isInfluencerMode && <span>株式会社ABC</span>}
      </div>
      <div
        className={
          "flex items-center py-[15px]   sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px] " +
          widthClass
        }
      >
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">案件種別</span>
        </span>
        <span>来店</span>
      </div>
      <div
        className={
          "flex items-center py-[20px]   sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px] " +
          widthClass
        }
      >
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">案件名</span>
        </span>
        <span>カフェPR</span>
      </div>
      <div
        className={
          "flex items-center py-[20px]   sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px] " +
          widthClass
        }
      >
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">案件内容</span>
        </span>
        <div className="text-left">
          <div>東京都新宿区にあるカフェのPRをお願いします。</div>
          <div>当カフェは今年11月にオープンしたばかりの</div>
          <div>きれいなカフェです。</div>
        </div>
      </div>

      <div
        className={
          "flex items-center py-[20px]   sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px] " +
          widthClass
        }
      >
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">希望のハッシュタグ</span>
        </span>
        <span>#東京カフェ,#新宿カフェ</span>
      </div>
      <div
        className={
          "flex items-center py-[20px]   sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px] " +
          widthClass
        }
      >
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">希望のSNS</span>
        </span>
        <span></span>
      </div>
      <div
        className={
          "flex items-center py-[20px]   sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px] " +
          widthClass
        }
      >
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">来店場所 </span>
        </span>
        <span>東京都</span>
      </div>
      <div
        className={
          "flex items-center py-[20px]   sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px] " +
          widthClass
        }
      >
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">募集期間 </span>
        </span>
        <span>フォロワー数：1,001～3,000</span>
      </div>
      <div
        className={
          "flex items-center py-[20px]   sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px] " +
          widthClass
        }
      >
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">案件終了日時 </span>
        </span>
        <span>フォロワー数：1,001～3,000</span>
      </div>
      <div
        className={
          "flex items-center py-[20px]   sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px] " +
          widthClass
        }
      >
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">募集人数 </span>
        </span>
        <span>フォロワー数：1,001～3,000</span>
      </div>
      <div
        className={
          "flex  py-[20px]  sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px] " +
          widthClass
        }
      >
        <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
          <span className="text-[#6F6F6F]">補足・注意事項 </span>
        </span>
        <div className="text-left">
          <div>来店は11月20日～末日でお願いします。</div>
          <div>来店後、1週間以内に投稿をお願いします。</div>
        </div>
      </div>
      {!isInfluencerMode && (
        <div className="flex  py-[20px]  sp:w-full m-auto border-b-[1px] border-[#DDDDDD]   sp:px-[18px]">
          <span className="w-[35%] sp:w-[100px] flex justify-end sp:justify-start  mr-[67px]">
            <span className="text-[#6F6F6F]">否認理由 </span>
          </span>
          <TextArea
            textAreaClassName="max-w-[300px] h-[95px] grow border-[#D3D3D3] "
            placeholder="テキストテキストテキスト"
          />
        </div>
      )}
      {!isInfluencerMode && (
        <div className="py-[20px]  sp:w-full m-auto sp:px-[18px]">
          <div className="flex justify-center float-right">
            <span className="text-[#3F8DEB]">
              <Link href={"/"}>前回の申請内容を確認する</Link>
            </span>
            <img src="/img/triangle-right.svg" className="w-[11px] ml-[5px]" />
          </div>
        </div>
      )}

      {!isInfluencerMode && (
        <div className="flex justify-center mt-[36px] mb-[160px] sp:mb-[60px]">
          <Button buttonType={ButtonType.PRIMARY} buttonClassName="mr-[30px]">
            <span className="flex items-center">
              <span>承認</span>
              <img
                className="w-[14px] ml-[5px]"
                src="/img/approve.svg"
                alt="approve"
              />
            </span>
          </Button>
          <Button buttonType={ButtonType.DANGER} buttonClassName="mr-[30px]">
            <span className="flex items-center">
              <span>否認</span>
              <img
                className="w-[14px] ml-[5px]"
                src="/img/cross.svg"
                alt="cross"
              />
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
      {isInfluencerMode && (
        <Button buttonType={ButtonType.PRIMARY} buttonClassName="m-[30px]">
          <span className="flex items-center">
            <span>応募</span>
          </span>
        </Button>
      )}
    </div>
  );
};
export default ApplicationPage;
