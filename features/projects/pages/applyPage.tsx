"use client";
import Input from "@/components/atoms/input";
import Button from "@/components/atoms/button";
import { ButtonType } from "@/components/atoms/button";

export default function ApplyPage() {
  return (
    <div className="bg-[#F5F5F5]  py-[300px] sp:py-[200px]">
      <div className="bg-[white] text-center px-[20px] w-[614px] sp:w-[90%] rounded-[40px] block m-auto py-[70px] sp:py-[20px] shadow-lg">
        <img
          src="/img/logo(red).svg"
          className="blcok m-auto w-[265px] sp:hidden mb-[50px]"
        />
        <div className="m-[50px] text-left text-center">
          〇〇サービスをご覧いただきありがとうございます。
          <br />
          企業登録をご希望の方は以下から仮申請をしてください。
          <br />
          ご入力いただいたメールアドレス宛に申請フォームをお送りします。
          <br />
        </div>
        <div className="flex justify-center w-full items-center mt-[30px] mb-[20px] pr-[70px] sp:pr-[30px] sp:mb-[30px]">
          <span className="mr-[20px] w-[100px] text-right">メールアドレス</span>
          <Input inputClassName={"max-w-[250px] grow"} />
        </div>
        <div className="text-center mb-[10px]">
          <Button buttonType={ButtonType.PRIMARY}>送信する</Button>
        </div>
      </div>
    </div>
  );
}
