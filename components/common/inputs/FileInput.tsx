import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form"

interface FileInputProps {
    label: string
    id: string
    errors: FieldErrors
    register: UseFormRegister<FieldValues>
    required?: boolean
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void
}

const FileInput: React.FC<FileInputProps> = ({ id, label, onChange, register, errors, required, }) => {
    return (
        <div>
            <label className={`border border-border-gray ${errors[id]?"border-primary-red":""}`} htmlFor={id}>{label}</label>
            <input className="d-none" {...register(id,{required})} id={id} type="file" onChange={onChange} />
            
        </div>
    )
}

export default FileInput