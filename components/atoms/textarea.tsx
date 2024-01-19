import React from "react";

export interface TextAreaProps {
  textAreaClassName?: string;
  placeholder?: string;
  value?: string;
  resizable?: boolean;
  handleChange?: (val: string) => void;
}

const TextArea: React.FC<TextAreaProps> = ({
  textAreaClassName,
  placeholder,
  handleChange,
  value,
  resizable,
}: TextAreaProps) => {
  return (
    <textarea
      defaultValue={value}
      onChange={(e) => handleChange(e.target.value)}
      className={
        resizable
          ? "px-[12px] py-[7px] border resize-none	 border-[#D3D3D3] " +
            textAreaClassName
          : "px-[12px] py-[7px] border resize-none	 border-[#D3D3D3] " +
            textAreaClassName
      }
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
