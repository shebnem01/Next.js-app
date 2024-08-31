import { BasketProduct } from "@/types/types"
import Button from "../common/button/Button"

const CartTotalInfo = ({ basketList }: { basketList: BasketProduct[] }) => {
  const totalPrice=basketList.reduce((acc:number,item)=>{
    return acc+=item.quantity*item.price
  },0)
  return (
    <div className='xl:w-[30%] lg:w-[40%] md:w-[70%] border border-border-gray p-6'>
      <div className="flex justify-between items-center border-b border-border-gray pb-3">
        <div className="text-text-gray-3 text-sm">Total Order </div>
      
      </div>
      <ul className="mb-3">
        {basketList.map((item) => (
          <li key={item.id} className="flex justify-between items-center py-2 border-b border-border-gray">
            <div>
              <div className="text-sm font-medium">{item.name}</div>
              <div className="text-xs text-text-dark">{item.brand}</div>
            </div>
            <div className="text-xs font-medium">
              $ {item.price}
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mb-3">
        <div className="text-text-dark text-sm">Total payment:</div>
        <div className="text-md font-bold">${totalPrice}</div>
      </div>
      <Button onSubmit={() => { }} btnLabel="Checkout" />
    </div>
  )
}

export default CartTotalInfo