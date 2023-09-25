'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
  return (
    <div className='relative post-Slider'>
      <div id='app'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="./assets/images/about_banner_background.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/images/about_banner_background.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/images/about_banner_background.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/images/about_banner_background.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/images/about_banner_background.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/images/about_banner_background.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/images/about_banner_background.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/images/about_banner_background.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/images/about_banner_background.jpg" />
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}
