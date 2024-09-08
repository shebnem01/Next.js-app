'use client'
import { BasketProduct } from "@/types/types";
import CartTableItem from "./CartTableItem";

const CartTable = ({basketList}:{basketList:BasketProduct[]}) => {
  return (
   <div className="xl:w-[70%] lg:w-[60%]">
     <ul className="sm:p-3">
        {basketList?.map((basketItem)=>(
          <CartTableItem key={basketItem.id} basketItem={basketItem}/>
        ))}
    </ul>
   </div>
  )
}

export default CartTable