import React from "react";

interface InputProps {
  placeholder: string;
  iconLeft: string;
  type: string;
  iconRight: string;
}
export const PrimaryInputs: React.FC<InputProps> = ({
  placeholder,
  iconLeft,
  iconRight,
  type,
}) => {
  return (
    <div className="w-full relative flex items-center px-2 gap-2 h-[40px] rounded-[8px] border-[#D0D0D0] border">
      <span>
        <img src={iconLeft} alt="" className="w-[24px] h-[24px]" />
      </span>
      <input
        type={type}
        className="border-none outline-none bg-transparent h-full placeholder:text-[#828282] font-[400]"
        placeholder={placeholder}
      />
      {iconRight && (
        <span className="absolute right-2">
          <img src={iconRight} alt="" className="w-[24px] h-[24px]" />
        </span>
      )}
    </div>
  );
};
