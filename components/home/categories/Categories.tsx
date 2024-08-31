'use client'
import { categories } from "@/constant/Constant"
import CategoryItem from "./CategoryItem"
import PageContainer from "@/components/containers/PageContainer"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


const Categories = () => {
  return (
    <PageContainer>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        slidesPerView={1.6} 
        spaceBetween={10} 
        breakpoints={{
          470: {
            slidesPerView: 2,
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
            slidesPerView: 3.4,
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
         
        }}
      >
        {categories?.map((cat, _i) => (
          <SwiperSlide key={_i}>
            <CategoryItem key={_i} img={cat.img} category={cat.category} />
          </SwiperSlide>
        ))}

      </Swiper>

    </PageContainer>
  )
}

export default Categories