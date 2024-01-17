import React, { Children } from "react";
import { ReactNode } from "react";

export interface CheckboxProps {
  checkBoxClassName?: string;
  prefix?: string;
  title?: ReactNode;
}

const classNames = [
  "px-[20px] py-[10px] rounded-[5px] bg-[#3F8DEB] ",
  "bg-[#3F8DEB] ",
  "px-[15px] py-[7px] bg-[#A9A9A9] ",
];
const Checkbox: React.FC<CheckboxProps> = ({
  checkBoxClassName,
  prefix,
  title,
}: CheckboxProps) => {
  return (
    <span className={"flex sp:text-sp items-center " + checkBoxClassName}>
      {prefix && (
        <span className="mr-[11px] sp:text-sp text-[#A8A8A8]">{prefix}</span>
      )}
      <input
        type="checkbox"
        className="w-[18px]  sp:text-sp mr-[10px] h-[18px] border border-[#D3D3D3]"
      ></input>
      <span className="sp:text-sp">{title}</span>
    </span>
  );
};

export default Checkbox;