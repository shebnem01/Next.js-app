import Image from 'next/image'
import { BsFillTrash3Fill } from "react-icons/bs";
import { useAppDispatch } from '@/redux/hook';
import Link from 'next/link';
import { BasketProduct } from '@/types/types';
import CartCounter from './CartCounter';
import useBasket from '@/hooks/useBasket';
const CartTableItem = ({ basketItem }: { basketItem: BasketProduct }) => {

    const { deleteFromBasket } = useBasket();
    return (
        <li className='border-b py-3 flex  items-center justify-between relative'>
            <Link className='flex sm:gap-5  items-center' href={`/product/${basketItem.id}`}>
                <div className="relative sm:w-[90px] w-[60px] sm:h-[90px] h-[60px] bg-white border border-border-gray p-2 me-4">
                    <Image objectFit='contain' fill alt={basketItem.name} src={basketItem.image} />
                </div>
                <div className='lg:w-[200px] w-[100px]'>
                    <div className='font-medium lg:text-normal sm:text-sm text-xs sm:leading-5 sm:mb-2 mb-1'>{basketItem.name}</div>
                    <div className='text-xs text-text-dark'>Brand:{basketItem.brand}</div>
                </div>
            </Link>

            <CartCounter basketProduct={basketItem} />
            <div className='mx-5 lg:text-lg md:text-normal text-sm font-medium'>
                $ {basketItem.price * basketItem.quantity}
            </div>
            <button
                onClick={() => deleteFromBasket(basketItem.id)}
                className='flex justify-end me-3 text-primary-red sm:relative sm:text-2xl text-normal absolute top-0 right-0'>
                <BsFillTrash3Fill />
            </button>
        </li>
    )
}

export default CartTableItem