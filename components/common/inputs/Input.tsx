'use client'
import {  FieldErrors, UseFormRegister } from 'react-hook-form';
interface InputProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  errors: FieldErrors;
  register: UseFormRegister<any>;
  required: boolean;
}

const Input: React.FC<InputProps> = ({ label, id, type, placeholder, register, errors, required }) => {

  const errorMessage = errors[id]?.message as string | undefined;

  return (
    <div className="mb-6">
      <label className="text-lg leading-[22px] mb-3 block capitalize">{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id, { required })}
        className={`outline-none w-full border border-border-gray bg-bg-gray text-text-gray h-10 px-4 ${
          errorMessage ? 'border-primary-red bg-white' : ''
        }`}
      />
      {errorMessage && <div className="text-secondary-red text-xs leading-4 mt-1">{errorMessage}</div>}
    </div>
  );
};

export default Input;
