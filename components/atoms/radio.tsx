import { title } from "process";
import React, { useState } from "react";
import { ReactNode } from "react";

export interface RadioProps {
  radioClassName?: string;
  options?: string[];
  title?: string;
  handleChange?: (val: string) => void;
}

const classNames = [
  "px-[20px] py-[10px] rounded-[5px] bg-[#3F8DEB] ",
  "bg-[#3F8DEB] ",
  "px-[15px] py-[7px] bg-[#A9A9A9] ",
];
const RadioBtn: React.FC<RadioProps> = ({
  radioClassName,
  options,
  handleChange,
}: RadioProps) => {
  return (
    <div className="flex">
      {options?.map((aOption, idx) => (
        <div key={idx} className="flex items-center mr-[10px]">
          <input
            type="radio"
            defaultChecked={aOption === options[0]}
            className="w-[20px] h-[20px]"
            name={title}
            value={aOption}
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          />
           <span>{aOption}</span>
        </div>
      ))}
    </div>
  );
};

export default RadioBtn;
