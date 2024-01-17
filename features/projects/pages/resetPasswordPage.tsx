import Input from "@/components/atoms/input";
import Button from "@/components/atoms/button";
import { ButtonType } from "@/components/atoms/button";

export default function ResetPasswordPage() {
  return (
    <div className="bg-[#F5F5F5]  py-[300px] sp:py-[200px]">
      <div className="bg-[white] text-center px-[20px] w-[614px] sp:w-[90%] rounded-[40px] block m-auto py-[70px] sp:py-[20px] shadow-lg">
        <img
          src="/img/logo(red).svg"
          className="blcok m-auto w-[265px] sp:hidden mb-[50px]"
        />
        <span className="my-[30px]">
          パスワード変更するIDを入力してください
        </span>
        <div className="flex justify-center w-full items-center mt-[30px] mb-[20px] pr-[70px] sp:pr-[30px] sp:mb-[30px]">
          <span className="mr-[20px] w-[70px] text-right">ID</span>
          <Input inputClassName={"max-w-[250px] grow"} />
        </div>
        <div className="text-center mb-[10px]">
          <Button buttonType={ButtonType.PRIMARY}>メール送信</Button>
        </div>
      </div>
    </div>
  );
}
