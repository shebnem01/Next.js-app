'use client';
import ProductCard from './ProductCard';
import { Product, User } from '@prisma/client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import Heading from '../common/heading/Heading';
import PageContainer from '../containers/PageContainer';

interface ProductsProps {
  products: Product[] | null | undefined;
  currentUser?: User | null
}
const SimilarProducts: React.FC<ProductsProps> = ({  products ,currentUser}) => {
  

  return (
    <div className='mb-4'>
     <Heading categoryName="You May Also Like" />
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
            430: {
              slidesPerView: 2.1,
              spaceBetween: 20,
            },
            576: {
              slidesPerView: 2.2,
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
          )).slice(0,6)}
        </Swiper>
      </PageContainer>
    </div>
  );
};

export default SimilarProducts;
