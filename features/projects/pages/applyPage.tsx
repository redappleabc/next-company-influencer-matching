"use client";
import Input from "@/components/atoms/input";
import Button from "@/components/atoms/button";
import { ButtonType } from "@/components/atoms/button";
import RadioBtn from "@/components/atoms/radio";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ApplyPage() {
  const [type, setType] = useState("企業");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const onAppy = async () => {
    if (email === "") {
      setError("メールアドレスを入力する必要があります。");
      return;
    }
    const result = await axios.put("api/user", { email, type });
    if (result.data.type === "success") {
    }
  };
  return (
    <div className="bg-[#F5F5F5]  py-[300px] sp:py-[200px]">
      <div className="bg-[white] text-center px-[20px] w-[614px] sp:w-[90%] rounded-[40px] block m-auto py-[70px] sp:py-[20px] shadow-lg">
        <img
          src="/img/logo(red).svg"
          className="blcok m-auto w-[265px] sp:hidden mb-[50px]"
        />
        <div className="m-[50px] text-center">
          〇〇サービスをご覧いただきありがとうございます。
          <br />
          企業登録をご希望の方は以下から仮申請をしてください。
          <br />
          ご入力いただいたメールアドレス宛に申請フォームをお送りします。
          <br />
        </div>

        <div className="flex items-center justify-center py-[20px] w-[60%] sp:w-full m-auto">
          <div className="flex">
            <RadioBtn
              handleChange={(val) => setType(val)}
              options={["企業", "インフルエンサー"]}
            />
          </div>
        </div>
        <div className="flex justify-center w-full items-center mt-[30px] mb-[20px] pr-[70px] sp:pr-[30px] sp:mb-[30px]">
          <span className="mr-[20px] w-[100px] text-right">メールアドレス</span>
          <Input
            handleChange={(val) => setEmail(val)}
            inputClassName={"max-w-[250px] grow"}
          />
        </div>
        <div className="text-center mb-[10px]">
          <Button handleClick={onAppy} buttonType={ButtonType.PRIMARY}>
            送信する
          </Button>
        </div>
        {error !== "" && (
          <div className="text-center text-[#EE5736]">{error}</div>
        )}
      </div>
    </div>
  );
}
