"use client";
import React from "react";

export interface SelectProps {
  selectClassName?: string;
  value?: string;
  children?: React.ReactNode;
  handleChange?: (val: string) => void;
}

const Select: React.FC<SelectProps> = ({
  selectClassName,
  value,
  children,
  handleChange,
}: SelectProps) => {
  return (
    <select
      className={
        "border border-[#AEAEAE] h-[35px] pl-[12px]  " + selectClassName
      }
      value={value}
      onChange={(e) => handleChange(e.target.value)}
    >
      {children}
    </select>
  );
};

export default Select;
