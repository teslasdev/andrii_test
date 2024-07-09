import { Field } from "formik";
import React, { useState } from "react";

interface InputProps {
  placeholder: string;
  iconLeft: string;
  type: string;
  iconRight: string;
  name : string
}
export const PrimaryInputs: React.FC<InputProps> = ({
  placeholder,
  iconLeft,
  iconRight,
  type,
  name
}) => {
  const [isHide , setHide] = useState(false)
  return (
    <div className="w-full relative flex items-center px-2 gap-2 h-[40px] rounded-[8px] border-[#D0D0D0] border">
      <span>
        <img src={iconLeft} alt="" className="w-[24px] h-[24px]" />
      </span>
      <Field
        name={name}
        type={isHide ? 'text' : type}
        className="border-none outline-none bg-transparent h-full w-full placeholder:text-[#828282] font-[400]"
        placeholder={placeholder}
      />
      {iconRight && (
        <span className="absolute right-2" onClick={() => setHide(!isHide)}>
          <img src={iconRight} alt="" className="w-[24px] h-[24px]" />
        </span>
      )}
    </div>
  );
};
