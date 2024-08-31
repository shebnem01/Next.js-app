"use client";
import { Product } from '@prisma/client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface ProductsProps {
  products?: Product[];
  onProductClick: () => void; 
}

const SearchModal: React.FC<ProductsProps> = ({ products, onProductClick }) => {
  const router = useRouter();

  const handleProductClick = (productId: string) => {
    onProductClick(); 
    router.push(`/product/${productId}`);
  };

  return (
    <div className='bg-bg-light absolute left-0 top-[53px] z-[50] w-full h-max max-h-[300px] overflow-y-scroll custom-scroll shadow'>
      <ul className='xl:px-[70px] md:px-10 px-3'>
        {products?.map((product) => (
          <li key={product?.id}>
            <div onClick={() => handleProductClick(product.id)} className='cursor-pointer flex py-5 gap-5 border-b border-border-gray'>
              <div className="bg-white border border-border-gray p-4 relative md:w-[90px] w-[70px] md:h-[90px] h-[70px]">
                <Image objectFit='contain' fill src={product?.image} alt='search product' />
              </div>
              <div>
                <div className='lg:text-normal md:text-sm text-xs font-medium mb-1 capitalize'>{product?.name}</div>
                <div className='text-text-dark lg:text-sm md:text-xs text-[10px]'>{product?.brand}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchModal;
