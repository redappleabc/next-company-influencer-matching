"use client";
import Input from "@/components/atoms/input";
import Checkbox from "@/components/atoms/checkbox";
import Button from "@/components/atoms/button";
import { ButtonType } from "@/components/atoms/button";
import TextArea from "@/components/atoms/textarea";

export default function AskPage() {
  return (
    <div className="text-center">
      <div className="text-title mt-[200px] sp:mt-[150px]">お問い合わせ</div>
      <div className="flex py-[20px] w-[40%] sp:w-[90%] m-auto border-b-[1px] border-[#DDDDDD] sp:mt-[50px] mt-[90px]">
        <span className="w-[40%] flex justify-end  mt-[7px] mr-[67px]">
          <span>お名前</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>
        </span>
        <Input
          handleChange={(val) => console.log(val)}
          inputClassName="max-w-[250px] grow border-[#D3D3D3]"
        />
      </div>
      <div className="flex py-[20px] w-[40%] sp:w-[90%] m-auto border-b-[1px] border-[#DDDDDD]">
        <span className="w-[40%] flex justify-end mr-[67px]">
          <span>メールアドレス</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>
        </span>
        <Input
          handleChange={(val) => console.log(val)}
          inputClassName="max-w-[250px] grow border-[#D3D3D3]"
        />
      </div>
      <div className="flex py-[20px] w-[40%] sp:w-[90%] m-auto border-b-[1px] border-[#DDDDDD]">
        <span className="w-[40%] flex justify-end mr-[67px]">
          <span>メールアドレス確認</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px]">必須</span>
        </span>
        <Input
          handleChange={(val) => console.log(val)}
          inputClassName="max-w-[250px] grow border-[#D3D3D3]"
        />
      </div>
      <div className="flex py-[20px] w-[40%] sp:w-[90%] m-auto border-b-[1px] border-[#DDDDDD]">
        <span className="w-[40%] flex justify-end mr-[67px]">
          <span>お問い合わせ種別</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px] invisible">
            必須
          </span>
        </span>
        <Input
          handleChange={(val) => console.log(val)}
          inputClassName="max-w-[250px] grow border border-[#D3D3D3] h-[33px]"
        ></Input>
      </div>
      <div className="flex py-[20px] w-[40%] sp:w-[90%] m-auto border-b-[1px] border-[#DDDDDD]">
        <span className="w-[40%] flex justify-end  mt-[7px] mr-[67px]">
          <span>お問い合わせ内容</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px] invisible">
            必須
          </span>
        </span>
        {/* <Input inputClassName="max-w-[250px] grow border border-[#D3D3D3] h-[33px]"></Input> */}

        <TextArea
          handleChange={(val) => console.log(val)}
          textAreaClassName="max-w-[390px] grow h-[95px]"
        />
      </div>
      <div className="flex py-[20px] w-[40%] sp:w-[90%] m-auto">
        <span className="w-[40%] flex justify-end mr-[67px]">
          <span>利用中ID</span>
          <span className="ml-[10px] text-[#EE5736] text-[11px] invisible">
            必須
          </span>
        </span>
        <Input
          handleChange={(val) => console.log(val)}
          inputClassName="max-w-[250px] grow border border-[#D3D3D3] h-[33px]"
        ></Input>
      </div>
      <div className="mt-[6px]">
        ※本システムをご利用中の方はIDを入力してください
      </div>
      <div className="flex justify-center">
        <Checkbox
          prefix={""}
          checkBoxClassName="mt-[36px]"
          title={
            <span>
              <span className="underline decoration-[#353A40] underline-offset-[5px]">
                個人情報の取り扱い
              </span>
              に同意します
            </span>
          }
        />
      </div>
      <div className="text-center mt-[42px]">
        <Button buttonType={ButtonType.PRIMARY}>確認画面へ</Button>
      </div>
      <div className="mt-[154px] mb-[27px] flex justify-between w-[334px] m-auto text-[#AAAAAA]">
        <span className="underline underline-offset-[5px]">
          個人情報保護方針
        </span>
        <span className="underline underline-offset-[5px]">特定商取引法</span>
        <span className="underline underline-offset-[5px]">利用規約</span>
      </div>
    </div>
  );
}
