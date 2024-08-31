'use client'
import { GoChevronDown } from "react-icons/go";
import { useState } from "react";;
interface SortMenuProps{
    sortbyPrice:(sort:string)=>void
}
const SortMenu:React.FC<SortMenuProps> = ({sortbyPrice}) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className="relative cursor-pointer">
            <div className="flex gap-1 items-center" onClick={() => setShowMenu(!showMenu)}>
                Default sorting  <GoChevronDown/>
            </div>
            {showMenu && (
                <ul className="absolute top-10 right-0 bg-white w-[150px] shadow-md z-[140]">
                    <li  onClick={()=>sortbyPrice('')} className="py-2 px-4 border-b border-border-gray text-sm" >
                    Default sorting
                    </li>
                    <li onClick={()=>sortbyPrice('high')} className="py-2 px-4 border-b border-border-gray text-sm" >
                        Price high to low
                    </li>
                    <li  onClick={()=>sortbyPrice('low')} className="py-2 px-4 border-b border-border-gray text-sm" >
                        Price low to high
                    </li>
                </ul>
            )}
        </div>
    )
}

export default SortMenu