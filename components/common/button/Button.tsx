import React from 'react'
interface ButtonProps {
  btnLabel?: string
  onSubmit?: () => void
  outline?: boolean
  basketAdded?: boolean
  small?: boolean
  type?: 'submit' | 'reset' | 'button';
  children?: React.ReactNode 
  disabled?:boolean,
}
const Button: React.FC<ButtonProps> = ({
  btnLabel,
  outline,
  onSubmit,
  basketAdded,
  small,
  disabled,
  type = 'button',
  children
}) => {
  return (
    <button disabled={disabled}
      type={type}
      onClick={onSubmit}
      className={`
        ${small ? "text-sm sm:h-[40px] h-[34px]" : " md:text-lg text-xs sm:h-[50px] h-[34px]"}
        ${outline ? "border" : "text-text-light "} 
        ${basketAdded ? "bg-green" : "bg-primary-red"}
        w-full hover:bg-primary-dark
      `}
    >
      {btnLabel}
      {children} 
    </button>
  );
};

export default Button;