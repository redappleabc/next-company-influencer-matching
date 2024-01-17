'use client'
import React from "react";

export interface InputProps {
  inputClassName?: string;
  placeholder?: string;
  value?:string
}

const Input: React.FC<InputProps> = ({
  inputClassName,
  value,
  placeholder,
}: InputProps) => {
  return (
    <input
      className={"border border-[#AEAEAE] h-[35px] pl-[12px]  " + inputClassName}
      placeholder={placeholder}
      value={value}
      onChange={() => {}}
    ></input>
  );
};

export default Input;
