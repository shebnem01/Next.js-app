import useBasket from "@/hooks/useBasket";
interface CartCounterProps {
  quantity: number,
  id: string
}
const CartCounter: React.FC<CartCounterProps> = ({ quantity, id }) => {

  const { increaseQuantity, decreaseQuantity } = useBasket();
  return (
    <div className='flex'>
      <button className='w-[20px] h-[20px] flex items-center justify-center bg-bg-gray-2 text-white text-lg' onClick={() => decreaseQuantity(id)}>-</button>
      <span className='w-[25px] h-[20px] flex items-center justify-center text-md'>{quantity}</span>
      <button className='w-[20px] h-[20px] flex items-center justify-center bg-bg-gray-2 text-white text-lg' onClick={() => increaseQuantity(id)}>+</button>
    </div>
  )
}

export default CartCounter