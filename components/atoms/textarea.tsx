"use client";
import React, { useState } from "react";

export interface TextAreaProps {
  textAreaClassName?: string;
  placeholder?: string;
  value?: string;
  resizable?: boolean;
  notRequired?: boolean;
  requirMsg?: string;
  handleChange?: (val: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  textAreaClassName,
  placeholder,
  handleChange,
  value,
  resizable,
  notRequired,
  requirMsg,
}: TextAreaProps) => {
  const [error, setError] = useState("errorMsg");
  const [isValid, setIsValid] = useState(true);
  const validate = (val: string) => {
    if (!notRequired && val === "") {
      setError(requirMsg);
      setIsValid(false);
      return;
    }
    setIsValid(true);
    handleChange(val);
  };
  return (
    <div className={textAreaClassName}>
      <textarea
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
