
import { RiCloseLargeLine } from "react-icons/ri";
import Button from "../common/button/Button";
interface ModaLProps {
  title: string
  bodyElement?: React.ReactElement
  footerElement?: React.ReactElement
  isOpen: boolean
  onSubmit: () => void
  onClose: () => void
}
const GeneralModal: React.FC<ModaLProps> = ({ title, isOpen, bodyElement, footerElement, onSubmit,onClose }) => {

  return (
    <div className={`${isOpen ? "block" : "hidden"}`}>
      <div className="fixed top-0 left-0 w-full h-full bg-blur-black z-[1]" onClick={onClose}></div>
      <div className="w-[434px] h-screen bg-white z-[2] absolute right-0 top-0 flex flex-col justify-center p-8 ">
        <button className="absolute right-8 top-8" onClick={onClose}><RiCloseLargeLine size={32} /></button>
        <div className="text-primary-red font-medium text-[32px] leading-9 text-center mb -8">{title}</div>
        {bodyElement}
        <Button
         onSubmit={onSubmit} outline={false} btnLabel={title} />
        {footerElement}
      </div>
    </div>
  )
}

export default GeneralModal