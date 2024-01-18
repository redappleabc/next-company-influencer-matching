"use client";
import Button from "@/components/atoms/button";
import Input from "@/components/atoms/input";
import { ButtonType } from "@/components/atoms/button";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { log } from "console";

export default function LoginPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleLogin = async () => {
    // const result = await axios.post(`/api/auth`, {});
    // console.log("clikc", result.data);
    if (password === "" && id === "") {
      setError("ID・PWを入力してください。");
      return;
    }
    if (id === "") {
      setError("IDを入力してください。");
      return;
    }
    if (password === "") {
      setError("パスワードを入力してください。");
      return;
    }
    const result = await axios.post(`/api/auth`, { id, password });
    if (result.data.type === "error") {
      setError(result.data.msg);
    } else {
      console.log(result);
      setError("");
    }
  };
  return (
    <div className="bg-[#F5F5F5]  py-[300px] sp:py-[200px]">
      <div className="bg-[white] px-[20px] w-[614px] sp:w-[90%] rounded-[40px] block m-auto py-[70px] sp:py-[20px] shadow-lg">
        <img
          src="/img/logo(red).svg"
          className="blcok m-auto w-[265px] sp:hidden mb-[50px]"
        />
        <div className="flex justify-center w-full items-center mb-[20px] pr-[70px] sp:pr-[30px] sp:mt-[50px]">
          <span className="mr-[20px] w-[70px] text-right">ID</span>
          <Input
            handleChange={(val) => setId(val)}
            inputClassName={"max-w-[250px] grow"}
          />
        </div>
        <div className="flex justify-center w-full items-center mb-[20px] pr-[70px] sp:pr-[30px] sp:mb-[30px]">
          <span className="mr-[20px] w-[70px] text-right">パスワード</span>
          <Input
            password
            handleChange={(val) => setPassword(val)}
            inputClassName={"max-w-[250px] grow"}
          />
        </div>
        <div className="text-center mb-[10px]">
          <Button buttonType={ButtonType.PRIMARY} handleClick={handleLogin}>
            ログイン
          </Button>
        </div>
        {error !== "" && (
          <div className="text-center text-[#EE5736]">{error}</div>
        )}
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
