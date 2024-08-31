
interface ProductCounterProps{
quantity:number 
decreaseQuantity :()=>void
increaseQuantity :()=>void
}
const ProductCounter:React.FC<ProductCounterProps> = ({quantity,decreaseQuantity ,increaseQuantity}) => {
  

  return (
    <div className='flex'>
        <button className='sm:w-[40px] w-[30px] sm:h-[40px] h-[30px] flex items-center justify-center bg-bg-gray-2 text-white text-lg' onClick={decreaseQuantity}>-</button>
        <span className='sm:w-[40px] w-[30px] sm:h-[40px] h-[30px] flex items-center justify-center text-lg'>{quantity}</span>
        <button className='sm:w-[40px] w-[30px] sm:h-[40px] h-[30px] flex items-center justify-center bg-bg-gray-2 text-white text-lg' onClick={increaseQuantity }>+</button>
    </div>
  )
}

export default ProductCounter