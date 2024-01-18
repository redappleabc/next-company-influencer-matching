"use client";
import React, { Children } from "react";
import { ReactNode } from "react";

export interface ButtonProps {
  buttonClassName?: string;
  buttonType: ButtonType;
  children: ReactNode;
  submit?: boolean;
  handleClick?: () => void;
}
export enum ButtonType {
  PRIMARY,
  PRIMARYDEFAULT,
  DANGER,
  DEFAULT,
  ROUNDED,
  OUTLINED,
}
const classNames = [
  "px-[20px] py-[10px] rounded-[5px] text-[white] bg-[#3F8DEB] ",
  "px-[20px] py-[10px] rounded-[5px] text-[white] bg-[#A9A9A9] ",
  "px-[20px] py-[10px] rounded-[5px] text-[white] bg-[#EE5736] ",
  "px-[15px] py-[7px] bg-[#A9A9A9] text-[white] ",
  "p-[15px] py-[7px] bg-[#3F8DEB] text-[white] rounded-[50%] ",
  "px-[20px] py-[10px] rounded-[5px] bg-[white] rounded-[5px] border-[1.5px] text-[#3F8DEB] border-[#3F8DEB] ",
];
const Button: React.FC<ButtonProps> = ({
  buttonClassName = "",
  buttonType = ButtonType.PRIMARY,
  children,
  handleClick,
  submit,
}: ButtonProps) => {
  return (
    <button
      type={submit ? "submit" : "button"}
      onClick={handleClick}
      className={classNames[buttonType] + buttonClassName}
    >
      {children}
    </button>
  );
};

export default Button;
