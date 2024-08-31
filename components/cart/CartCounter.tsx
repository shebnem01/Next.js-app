import useBasket from "@/hooks/useBasket";
import { BasketProduct } from '@/types/types';

const CartCounter = ({basketProduct}:{basketProduct:BasketProduct}) => {
  
  const { increaseQuantity, decreaseQuantity}=useBasket();
  return (
    <div className='flex'>
        <button className='w-[20px] h-[20px] flex items-center justify-center bg-bg-gray-2 text-white text-lg'onClick={()=>decreaseQuantity(basketProduct.id)}>-</button>
        <span className='w-[25px] h-[20px] flex items-center justify-center text-md'>{basketProduct.quantity}</span>
        <button className='w-[20px] h-[20px] flex items-center justify-center bg-bg-gray-2 text-white text-lg' onClick={()=>increaseQuantity(basketProduct.id)}>+</button>
    </div>
  )
}

export default CartCounter