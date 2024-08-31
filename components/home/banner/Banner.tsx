
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import BannerItem from "./BannerItem"
import { homeSlider } from '@/constant/Constant';
const Banner = () => {
  return (
    <Swiper
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={20}

    >
      {homeSlider?.map((slider) => (
        <SwiperSlide key={slider.id}>
          <BannerItem title={slider.title} subTitle={slider.subtitle} image={slider.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Banner