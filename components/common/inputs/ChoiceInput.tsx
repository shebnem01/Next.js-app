
interface ChoiceInputProps {
    selected?: boolean
    label: string
    onClick: (value: string) => void
}
const ChoiceInput: React.FC<ChoiceInputProps> = ({ label, selected, onClick }) => {
    return (
        <div
            onClick={() => onClick(label)}
            className={`border w-[150px] m-3 ${selected ? "border-red-500" : "border-black"}`}>
            {label}
        </div>
    )
}
export default ChoiceInput 