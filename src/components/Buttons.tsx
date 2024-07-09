import React from "react"

interface ButtonProps {
    label : string
}
export const PrimaryButton : React.FC<ButtonProps> = ({
    label
}) => {
  return (
    <div className={`w-full h-full flex justify-center items-center`}>
        {label}
    </div>
  )
}
