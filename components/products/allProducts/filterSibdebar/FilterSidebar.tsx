
import React from 'react'
import SidebarItem from './SidebarItem'
import Ratings from './Ratings'
import PriceFilter from './PriceFilter'
import Button from '@/components/common/button/Button'
import { RiCloseLargeLine } from "react-icons/ri";
interface FilterSidebarProps {
  resetFilter: () => void
  showFilterMenu: boolean
  toggleFilterMenu: () => void
}
const FilterSidebar: React.FC<FilterSidebarProps> = ({  toggleFilterMenu, resetFilter, showFilterMenu }) => {
  const categories = [
    "Men's wear",
    "Ladies wear",
    "Bags",
    "Shoes",
    "Smart watch",
  ]
  const brands = [
    "brand 1",
    "brand 2",
    "brand 4",
    "brand 5",
    "brand 6",
  ]
  return (

    <div className={`${showFilterMenu ? "fixed top-0 block left-0 w-full bg-white z-[100]" : "lg:block hidden"}   
      2xl:w-[17%] xl:w-[20%] sm:w-[40%] w-full shadow rounded-[10px] h-max border p-5 pe-3`}>
      <div className="flex justify-between py-3 lg:hidden">
        <div className='text-lg font-semibold'>Filter</div>
        <button className='w-[40px]' onClick={toggleFilterMenu}><RiCloseLargeLine size={22} /></button>
      </div>
      <div className="overflow-y-auto  md:h-[900px] h-[90vh] lg:mb-0 mb-10 custom-scroll">
        <SidebarItem title='Product Categories' items={categories} />
        <SidebarItem title='Fitler by brand' items={brands} />
        <PriceFilter title='Filter by price' />
        <Ratings title='Filter by rating' />
        <div className="lg:hidden block"><Button btnLabel='Reset' onSubmit={resetFilter} /></div>
      </div>
      <div className="lg:block hidden mt-1">
        <Button btnLabel='Reset' onSubmit={resetFilter} />
      </div>
    </div>
  )
}

export default FilterSidebar