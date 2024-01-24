"use client";
import React, { useEffect, useState } from "react";

export interface TextAreaProps {
  textAreaClassName?: string;
  placeholder?: string;
  reset?: boolean;
  resizable?: boolean;
  notRequired?: boolean;
  requirMsg?: string;
  value?: string;
  handleChange?: (val: string) => void;
  handleCtrlEnter?: (val: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  textAreaClassName,
  placeholder,
  handleChange,
  reset,
  resizable,
  notRequired,
  requirMsg,
  value,
  handleCtrlEnter,
}: TextAreaProps) => {
  const [error, setError] = useState("errorMsg");
  const [isValid, setIsValid] = useState(true);
  const validate = (val: string) => {
    if (!notRequired && val === "") {
      setError(requirMsg);
      handleChange(val);
      setIsValid(false);
      return;
    }
    handleChange(val);
    setIsValid(true);
  };
  useEffect(() => {
    document.getElementById("mainArea").value = "";
  }, [reset]);
  return (
    <div className={textAreaClassName}>
      <textarea
        id="mainArea"
        onKeyUp={(e) => {
          if (e.ctrlKey && e.key === "Enter") {
            handleCtrlEnter();
          }
        }}
        defaultValue={value}
        onChange={(e) => validate(e.target.value)}
        className={
          resizable
            ? "px-[12px] py-[7px] w-full border resize-none	 border-[#D3D3D3] " +
              textAreaClassName
            : "px-[12px] py-[7px] w-full border resize-none	 border-[#D3D3D3] " +
              textAreaClassName
        }
        placeholder={placeholder}
      ></textarea>
      <div
        className={
          isValid
            ? "text-left text-[#EE5736] text-[11px] opacity-0  duration-700"
            : "text-left text-[#EE5736] text-[11px] duration-700"
        }
      >
        {error}
      </div>
    </div>
  );
};

export default TextArea;
