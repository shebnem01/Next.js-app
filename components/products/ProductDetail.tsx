'use client'
import { Product, Review, User } from '@prisma/client'
import Image from 'next/image'
import Rating from '@mui/material/Rating';
import { useRouter } from "next/navigation";
import ProductCounter from './ProductCounter';
import Description from './Description';
import { useCallback, useState } from 'react';
import ReviewModal from '../modal/ReviewModal';
import Reviews from './Reviews';
import PageContainer from '../containers/PageContainer';
import Button from '../common/button/Button';
import { PiHeartLight, PiHeartFill } from "react-icons/pi";
import useBasket from '@/hooks/useBasket';
import useWishlist from '@/hooks/useWishlist';
interface ProductWithQuantity extends Product {
    quantity: number;
}
interface ProductDetailProps {
    product: Product & { reviews: (Review & { user: User })[] };
    currentUser: User | null
}
const ProductDetail: React.FC<ProductDetailProps> = ({ product, currentUser }) => {
    const router = useRouter();
    const [showTab, setShowTab] = useState('description');
    const [basketProduct, setBasketProduct] = useState<ProductWithQuantity>(
        {
            ...product,
            quantity: 1,
        }
    )
    const {basketList,addToBasket} = useBasket();
    const {wishList,wishlistFunc} = useWishlist();
    const increaseQuantity = useCallback(() => {
        {
            setBasketProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
        };
    }, [basketProduct])

    const decreaseQuantity = useCallback(() => {
        setBasketProduct((prev) => {
            if (prev.quantity > 1) return { ...prev, quantity: prev.quantity - 1 };
            return prev;
        });
    }, [basketProduct])

    const handleShow = (value: string) => {
        setShowTab(value)
    }
    const handleAddWishlist = () => {
        if (!currentUser) {
            router.push('/login')
            return
        }
        wishlistFunc(product);
    }
    const totalReview = product.reviews.length > 0 ?
        product.reviews.reduce((acc: number, item: Review) => acc + item.rating, 0) / product.reviews.length : 0;
    const roundedReview = totalReview?.toFixed(1);
    const isProductInWishlist = wishList.some((item: any) => item.id === product.id);
    const productIsBasket = basketList.findIndex((item) => item.id == product.id);

    return (
        <>
            <PageContainer>
                <div className='sm:flex my-10 gap-6'>
                    <div className="border lg:w-[430px] sm:w-[50%] w-full sm:h-[400px] h-[250px] lg:h-[500px] border-border-gray py-6
                          px-10 flex items-center justify-center relative">
                        <Image  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 430px" alt={product.name} fill src={product.image}/>
                    </div>

                    <div className='lg:w-[600px] sm:w-[50%] w-full'>
                        <div className='flex justify-between items-center border-t border-b border-border-gray gap-3 py-3'>
                            <div>
                                <div className='uppercase font-medium md:text-lg sm:text-normal text-sm  mb-1'>{product.name}</div>
                                <div className="flex items-center text-xs">
                                    <Rating name="read-only" value={totalReview} readOnly />
                                    ({roundedReview})
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <div className=" font-medium sm:text-lg">${product.price}</div>
                                <button onClick={handleAddWishlist}>
                                    {isProductInWishlist ?
                                        <PiHeartFill color="red" size={24} />
                                        :
                                        <PiHeartLight color="red" size={24} />
                                    }
                                </button>
                            </div>
                        </div>
                        <div className="flex md:flex-row flex-col items-center justify-between md:mt-[62px] mt-5 gap-2 md:gap-[70px]">

                            {productIsBasket > -1 ? (
                                <div className='w-[369px]'>
                                    <Button basketAdded={true} btnLabel='Product added' />
                                </div>
                            ) : (
                                <>
                                    <ProductCounter decreaseQuantity={decreaseQuantity} increaseQuantity={increaseQuantity} quantity={basketProduct.quantity} />
                                    <Button btnLabel='Add to basket' onSubmit={() =>addToBasket(basketProduct)} />
                                </>
                            )}
                        </div>
                    </div>
                </div>

            </PageContainer>
            <div className='bg-bg-light sm:p-5 p-2'>
                <PageContainer>
                    <div className="flex justify-center pb-6 mb-6 border-b border-border-gray">
                        <div onClick={() => handleShow("description")}
                            className={`${showTab === 'description' ? 'border-primary-red' : 'border-border-gray'}
                           text-normal sm:text-[22px] leading-[26px] font-medium p-1 sm:p-3 cursor-pointer  border-b-2`}>Description</div>
                        <div onClick={() => handleShow("reviews")}
                            className={`${showTab === 'reviews' ? 'border-primary-red' : 'border-border-gray'}
                       text-normal sm:text-[22px] leading-[26px] font-medium p-1 sm:p-3 cursor-pointer border-b-2 border-border-gray`}>Reviews({product.reviews.length})</div>
                    </div>
                    {showTab === 'description' && <Description description={product.description} />}
                    {showTab === 'reviews' && <Reviews currentUser={currentUser} reviews={product.reviews} />}
                </PageContainer>
            </div>

            <ReviewModal currentUser={currentUser} product={product} />
        </>
    )
}

export default ProductDetail