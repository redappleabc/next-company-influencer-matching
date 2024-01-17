import { title } from "process";
import React from "react";
import { ReactNode } from "react";

export interface RadioProps {
  radioClassName?: string;
  options?: string[];
  title?: string;
}

const classNames = [
  "px-[20px] py-[10px] rounded-[5px] bg-[#3F8DEB] ",
  "bg-[#3F8DEB] ",
  "px-[15px] py-[7px] bg-[#A9A9A9] ",
];
const RadioBtn: React.FC<RadioProps> = ({
  radioClassName,
  options,
}: RadioProps) => {
  return (
    // <span className={"flex sp:text-sp items-center " + radioClassName}>
    //   {prefix && (
    //     <span className="mr-[11px] sp:text-sp text-[#A8A8A8]">{prefix}</span>
    //   )}
    //   <input
    //     type="radio"
    //     className="w-[18px]  sp:text-sp mr-[10px] h-[18px] border border-[#D3D3D3]"
    //   ></input>
    //   <span className="sp:text-sp">{title}</span>
    // </span>
    <div className="flex">
      {options?.map((aOption, idx) => (
        <div key={idx} className="flex items-center mr-[10px]">
          <input
            type="radio"
            className="w-[20px] h-[20px]"
            name={title}
            value={aOption}
          />
           <span>{aOption}</span>
        </div>
      ))}
    </div>
  );
};

export default RadioBtn;
