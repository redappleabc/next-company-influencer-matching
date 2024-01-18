"use client";
import React, { useState } from "react";

export interface InputProps {
  inputClassName?: string;
  placeholder?: string;
  password?: boolean;
  value?: string;
  handleChange: (val: string) => void;
}

const Input: React.FC<InputProps> = ({
  inputClassName,
  value,
  password,
  placeholder,
  handleChange,
}: InputProps) => {
  const [valid, setValid] = useState(false);
  const [changed, setChanged] = useState(false);
  return [
    <input
      key={"input"}
      type={password ? "password" : "text"}
      defaultValue={value}
      className={
        "border border-[#AEAEAE] h-[35px] pl-[12px]  " + inputClassName
      }
      placeholder={placeholder}
      onChange={(e) => {
        setChanged(true);
        setValid(e.target.value !== "");
        handleChange(e.target.value);
      }}
    ></input>,
    changed && (
      <div
        key={"badge"}
        className={
          valid
            ? "w-[10px] h-[10px] ml-[10px] rounded-[50%] bg-[#39ee36]"
            : "w-[10px] h-[10px] ml-[10px] rounded-[50%] bg-[#EE5736]"
        }
      ></div>
    ),
  ];
};

export default Input;
