'use client'
import useBasket from "@/hooks/useBasket";
import Link from "next/link";
import { SlHandbag } from "react-icons/sl";
const Cart = () => {
  const {basketList}=useBasket();
  return (
    <Link href='/cart' className="relative p-2">
        <SlHandbag color="#fff" size={22} />
        <div className="absolute top-0 right-0 bg-white text-primary-red shadow 
         rounded-full w-4 h-4 flex items-center justify-center text-xs">{basketList.length}</div>

    </Link>
  )
}

export default Cart