'use client'
import { Product, Review, User } from "@prisma/client"
import Image from "next/image"
import Rating from '@mui/material/Rating';
import { useRouter } from "next/navigation";
import Button from "../common/button/Button";
import { PiHeartLight, PiHeartFill } from "react-icons/pi";
import useWishlist from "@/hooks/useWishlist";
interface ProductsProps {
  product:any;
  currentUser?: User | null
}

const ProductCard: React.FC<ProductsProps> = ({ product, currentUser }) => {

  const router = useRouter();
  const {wishList,wishlistFunc} = useWishlist();


  const isProductInWishlist = wishList?.some((item: any) => item.id == product.id);
  const totalReview = product.reviews.length > 0
    ? product.reviews.reduce((acc: number, item: Review) => acc + item.rating, 0) / product.reviews.length
    : 0;
  const roundedReview = totalReview?.toFixed(1);
  const handleAddWishlist = () => {

    if (!currentUser) {
      router.push('/login')
      return
    }
    wishlistFunc(product);
  }
  return (
    <div className="relative">
      <div className={`${product.inStock ? "" : "bg-blur-black-2 absolute top-0 left-0 w-full h-full z-[40]"}`}></div>
      <div className={`p-3 sm:p-[22px] w-max relative ${product.inStock && 'border border-border-gray'}`}>
        {!product.inStock ? (
          <div className="-right-1 top-0 absolute sm:w-[160px] w-[100px] sm:h-[45px] h-[30px] z-[50]">
            <Image   sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw" fill src='/stock.svg' alt='img stock' className="sm:w-[160px] w-[100px] sm:h-[45px] h-[30px]" />
          </div>
        ) : (
          <button className="absolute right-1 top-1 rounded-full bg-blur-black flex ic justify-center p-1 z-[10]" onClick={handleAddWishlist}>
            {isProductInWishlist ?
              <PiHeartFill color="red" size={21} />
              :
              <PiHeartLight color="red" size={24} />
            }
          </button>
        )}
        <div  className="relative sm:w-[226px] w-[164px] sm:h-[235px] h-[160px] flex justify-center items-center sm:px-9 px-6 mb-4">
        <Image objectFit="cover" src={product.image} alt={product.name} fill   sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </div>
        <div className="flex gap-1 items-center text-xs text-text-dark">
          {roundedReview && (
            <div className="flex items-center gap-1">
              <Rating className="custom-rating" name="read-only" value={totalReview} readOnly />
              <span className="text-xs mt-1">({roundedReview})</span>
            </div>
          )}
        </div>
        <div className="flex justify-between items-center mb-1">
          <div className="sm:text-normal text-xs font-medium sm:leading-[22px] leading-4 max-h-[25px] overflow-hidden max-w-[100px]">
            {product.name}..
          </div>
          <div className="text-xs">
            ${product.price}
          </div>
        </div>
        <div className="sm:text-xs text-[10px] text-text-gray-2 mb-4">{product.brand}</div>
        <Button small onSubmit={() => router.push(`/product/${product.id}`)} btnLabel="View Product" />

      </div>
    </div>
  )
}

export default ProductCard
