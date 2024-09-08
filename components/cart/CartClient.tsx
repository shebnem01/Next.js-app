'use client'
import CartTable from './CartTable'
import CartTotalInfo from './CartTotalInfo'
import { BsFillTrash3Fill } from 'react-icons/bs'
import EmptyCart from './EmptyCart'
import PageContainer from '../containers/PageContainer'
import useBasket from '@/hooks/useBasket'

const CartClient = () => {
    const { clearBasket, basketList } = useBasket();
    if (basketList?.length == 0) return <EmptyCart title='Your cart is empty ' />

    return (
        <div>
            <div className='border-t border-b border-border-gray py-5 my-6'>
                <PageContainer>
                    <div className=" flex justify-between items-center">
                        <div className='lg:text-3xl sm:text-2xl text-lg font-medium leading-9 flex items-center gap-2'>Cart
                            <span className='sm:text-sm text-xs  text-text-dark'>
                                ({basketList?.length} product)
                            </span></div>
                        <button
                            className='text-primary-red flex items-center gap-1 font-medium sm:text-normal text-sm'
                            onClick={() => clearBasket()}>
                            Delete all
                            <BsFillTrash3Fill/>
                            </button>
                    </div>
                </PageContainer>
            </div>
            <PageContainer>
                <div className="lg:flex">
                    <CartTable basketList={basketList} />
                    <CartTotalInfo basketList={basketList} />
                </div>
            </PageContainer>
        </div>
    )
}

export default CartClient