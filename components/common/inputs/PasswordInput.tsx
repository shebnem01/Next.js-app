'use client'
import { useState } from 'react';
import { FieldValues, FieldErrors, UseFormRegister } from 'react-hook-form';
import { TfiEye } from "react-icons/tfi";
import { RxEyeClosed } from "react-icons/rx";
interface InputProps {
    label: string
    id: string
    type: string
    placeholder: string
    errors: FieldErrors
    register: UseFormRegister<any>
    required: boolean
}
const PasswordInput: React.FC<InputProps> = ({ label, id, type, placeholder, register, errors, required }) => {
    const [showPassword, setShowPassword] = useState(false);
    const togglePassword = () => {
        setShowPassword(sprevShowPassword => !sprevShowPassword)
    }
    const errorMessage = errors[id]?.message as string | undefined;
    return (
        <div className="mb-6">
            <label className="text-lg leading-[22px] mb-3 block capitalize">{label}</label>
            <div className="relative">
                <input
                    id={id}
                    type={`${showPassword ? 'text' : type}`}
                    placeholder={placeholder}
                    {...register(id, { required })}
                    className={`outline-none w-full border border-border-gray bg-bg-gray text-text-gray h-10 px-4 ${errors[id] ? 'border-primary-red bg-white' : ''}`}
                />
                <button className='absolute right-3 top-1/2 -translate-y-1/2' onClick={togglePassword}>
                    {showPassword ? (
                        <TfiEye />
                    ) : (
                        <RxEyeClosed />
                    )}   </button>
            </div>
            {errors[id] && <div className="text-secondary-red text-xs leading-4 mt-1">{errorMessage}</div>}
        </div>
    );
};

export default PasswordInput