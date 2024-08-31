import { FieldValues, UseFormRegister } from "react-hook-form"

interface CheckInputProps {
    label: string
    id: string
    register: UseFormRegister<FieldValues>
}
const CheckInput: React.FC<CheckInputProps> = ({ label, id, register }) => {
    return (
        <div className="flex gap-2">
            <label htmlFor={id}>{label}</label>
            <input id={id} type="checkbox" {...register(id)} />
        </div>
    )
}

export default CheckInput