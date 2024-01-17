import React from "react";
import Button, { ButtonType } from "@/components/atoms/button";
import TextArea from "@/components/atoms/textarea";

export default function TopPage() {
  return (
    <div className="bg-[white] px-[35px] sp:px-[12px] sp:text-small ">
      <div className="flex items-center py-[20px]  w-[full] border-b-[1px] border-[#DDDDDD] mt-[70px] sp:mt-[96px]">
        <span className="text-title sp:text-sptitle">管理画面TOP</span>
      </div>
      <div className="sp:w-[100%] mt-[55px] px-[30px]">
        <div className="border-b-[1px] border-[#DDDDDD] mx-[30px]">
          <span className="text-header text-[#EE5736] ">重要なお知らせ</span>
          <div className="py-[30px]">
            <div>
              まずは「お支払い」ページよりクレジットカードの登録・お支払いをお願いいたします。
            </div>
            <div>お支払い金額：月額11000円（税込）</div>
            <div>契約は最低半年間となります。</div>
            <div>
              解約をご希望の場合は、初回お支払日より150日（5ヶ月）経過後に「お支払い」ページから「解約申請」が可能になります。
            </div>
          </div>
        </div>
        <div className="mx-[30px] mt-[40px]">
          <span className="text-header ">運営からのお知らせ</span>
          <div className="py-[30px]">
            <div>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト{" "}
            </div>
            <div>
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
