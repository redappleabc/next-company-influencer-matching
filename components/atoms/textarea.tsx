import React from "react";

export interface TextAreaProps {
  textAreaClassName?: string;
  placeholder?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  textAreaClassName,
  placeholder,
}: TextAreaProps) => {
  return (
    <textarea
      className={
        "px-[12px] py-[7px] border resize-none	 border-[#D3D3D3] " +
        textAreaClassName
      }
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
