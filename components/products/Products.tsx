'use client';
import ProductCard from './ProductCard';
import { Product, User } from '@prisma/client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Heading from '../common/heading/Heading';
import PageContainer from '../containers/PageContainer';

interface ProductsProps {
  category: string
  products: Product[] | null | undefined
  currentUser:User |null
}
const Products: React.FC<ProductsProps> = ({ category, products,currentUser }) => {
 
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className='mb-4'>
      <Heading categoryName={category} />
      <PageContainer>
      <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          slidesPerView={1.7} 
          spaceBetween={20} 
          breakpoints={{
            420: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            490: {
              slidesPerView: 2.3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.4,
              spaceBetween: 20,
            },
            976: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1420: {
              slidesPerView: 5,
              spaceBetween: 20,
            },
            1800: {
              slidesPerView: 6,
              spaceBetween: 40,
            },
          }}
        >
          {products?.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard currentUser={currentUser} product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </PageContainer>
    </div>
  );
};

export default Products;
