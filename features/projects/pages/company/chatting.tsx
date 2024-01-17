import React from "react";
import Button, { ButtonType } from "@/components/atoms/button";
import TextArea from "@/components/atoms/textarea";

export default function ChattingPage() {
  return (
    <div className="bg-[white] px-[35px] sp:px-[12px] sp:text-small ">
      <div className="flex items-center py-[20px]  w-[full] border-b-[1px] border-[#DDDDDD] mt-[70px] sp:mt-[96px]">
        <span className="text-title sp:text-sptitle">チャット</span>
      </div>
      <div className="sp:w-[100%] mt-[55px] px-[40px] sp:px-[10px] pb-[100px] flex">
        <div className="h-[720px] border-[1px] border-[#DDDDDD] w-[30%] sp:hidden">
          <div className="w-full border-b-[1px] border-[#DDDDDD] px-[36px] py-[30px]">
            太郎
          </div>
          <div className="w-full border-b-[1px] border-[#DDDDDD] px-[36px] py-[30px]">
            花子
          </div>
          <div className="w-full border-b-[1px] border-[#DDDDDD] px-[36px] py-[30px]">
            ユニたろ
          </div>
          <div className="w-full border-b-[1px] border-[#DDDDDD] px-[36px] py-[30px]">
            A
          </div>
          <div className="w-full border-b-[1px] border-[#DDDDDD] px-[36px] py-[30px] bg-[#E7F2FF]">
            ユニティ
          </div>
        </div>
        <div className="h-[720px] border-[1px] border-[#DDDDDD] w-[70%] box-border w-full">
          <div className="h-[590px] bg-[#F8F9FA] pt-[100px]">
            <div className="w-full text-center  mb-[30px] ">
              <span className="text-[white] rounded-[15px] bg-[#DEDEDE] px-[12px] py-[5px]">
                2023/01/01
              </span>
            </div>
            <div>
              <div className="relative ml-[65px] sp:mx-[10px] inline-block bg-[white] px-[20px] py-[15px] rounded-[15px] border-[1px] border-[#DDDDDD]">
                <div className="absolute top-[-30px]">ユニティ</div>
                <div>応募に関して質問です。</div>
                <div>動画でも大丈夫でしょうか？</div>
                <div className="absolute bottom-[-30px] right-0 text-[#A8A8A8]">
                  11:11
                </div>
              </div>
            </div>
            <div className="w-full sp:mt-[30px]">
              <div className="relative float-right mr-[65px] sp:mx-[10px] inline-block bg-[#DEDEDE] px-[20px] py-[15px] rounded-[15px] border-[1px] border-[#DDDDDD]">
                <div>申請ありがとうございます。</div>
                <div>はい、動画でも大丈夫です。</div>
                <div className="absolute bottom-[-30px] right-0 text-[#A8A8A8]">
                  11:11
                </div>
              </div>
            </div>
          </div>
          <div className="h-[130px] flex items-center justify-between border-t-[1px] border-[#DDDDDD]">
            <TextArea
              placeholder="メッセージを入力"
              textAreaClassName="h-[120px] border-0 grow"
            />
            <Button
              buttonType={ButtonType.ROUNDED}
              buttonClassName="mx-[30px] w-[45px] h-[45px]"
            >
              <img src="/img/apply.svg" alt="apply" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
