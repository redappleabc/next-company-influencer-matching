import Button from "@/components/atoms/button";
import Input from "@/components/atoms/input";
import { ButtonType } from "@/components/atoms/button";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="bg-[#F5F5F5]  py-[300px] sp:py-[200px]">
      <div className="bg-[white] px-[20px] w-[614px] sp:w-[90%] rounded-[40px] block m-auto py-[70px] sp:py-[20px] shadow-lg">
        <img
          src="/img/logo(red).svg"
          className="blcok m-auto w-[265px] sp:hidden mb-[50px]"
        />
        <div className="flex justify-center w-full items-center mb-[20px] pr-[70px] sp:pr-[30px] sp:mt-[50px]">
          <span className="mr-[20px] w-[70px] text-right">ID</span>
          <Input inputClassName={"max-w-[250px] grow"} />
        </div>
        <div className="flex justify-center w-full items-center mb-[20px] pr-[70px] sp:pr-[30px] sp:mb-[30px]">
          <span className="mr-[20px] w-[70px] text-right">パスワード</span>
          <Input inputClassName={"max-w-[250px] grow"} />
        </div>
        <div className="text-center mb-[10px]">
          <Button buttonType={ButtonType.PRIMARY}>
            <Link href={"/companyList"}>ログイン</Link>
          </Button>
        </div>
        <div className="flex justify-center">
          <span className="text-[#3F8DEB]">
            <Link href={"/resetPassword"}>パスワード変更はこちら</Link>
          </span>
          <img src="/img/triangle-right.svg" className="w-[11px] ml-[5px]" />
        </div>
      </div>
    </div>
  );
}
