import Image from "next/image"
import SortMenu from "./SortMenu"

interface FilterNavProps{
    resultItems:number,
    sortbyPrice:(sort:string)=>void
}
const FilterNav:React.FC<FilterNavProps> = ({ resultItems ,sortbyPrice}) => {
    return (
        <div className='lg:flex hidden justify-between items-center shadow p-4 w-full mb-4'>
            <div>Result {resultItems} items</div>
            {/* <div className='flex gap-4'>
                <button><Image src='/list.svg' width={22} height={22} alt='list icon' /></button>
                <button><Image src='/grid.svg' width={22} height={22} alt='list icon' /></button>
            </div> */}
            <SortMenu sortbyPrice={sortbyPrice} />
        </div>
    )
}

export default FilterNav