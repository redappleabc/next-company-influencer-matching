"use client";
import React from "react";

export interface SelectProps {
  selectClassName?: string;
  value?: string;
  children?: React.ReactNode;
}

const Select: React.FC<SelectProps> = ({
  selectClassName,
  value,
  children,
}: SelectProps) => {
  return (
    <select
      className={
        "border border-[#AEAEAE] h-[35px] pl-[12px]  " + selectClassName
      }
      value={value}
      onChange={() => {}}
    >
      {children}
    </select>
  );
};

export default Select;
