'use client'
import React from "react";
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';


const Customer = () => {
  const Customer=[
    {
      img:"https://source.unsplash.com/150x150/?girl",
      about:"Tailblockss provides best Tailwind CSS Components and Blocks to create an unique websites within minutes.",
      name:"Jessica Starc",
      role:"Developer"
    },
    {
      img:"https://source.unsplash.com/150x150/?boy",
      about:"Tailblockss provides best Tailwind CSS Components and Blocks to create an unique websites within minutes.",
      name:"Envoy",
      role:"Designer"
    },
    {
      img:"https://source.unsplash.com/150x150/?girl",
      about:"Tailblockss provides best Tailwind CSS Components and Blocks to create an unique websites within minutes.",
      name:"Alina",
      role:"HR Manager "
    }
  ]
  return (
    <>
      {/* <!-- CUSTOMER SECTION --> */}
      <section className="customer_section py-10">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="customer_heading_content">
                <h2>Our Happy Customers</h2>
                <p>
                  Don’t take our word for it. here’s what others have to say
                </p>
              </div>
            </div>
          </div>
          <div className="justify-center py-20 md:flex hidden">
            <div className="flex flex-col justify-center  my-10 w-[90%] space-y-28 lg:space-y-24 max-w-7xl">
              <div className="flex flex-col justify-center items-center lg:flex-row space-y-28 lg:space-y-0  lg:space-x-10">
                {
                  Customer && Customer.map((e,i)=>{
                    return(
                      <>
                      <div key={i} className="bg-slate-200 shadow-lg flex flex-col justify-center items-center py-4 h-56 md:w-[80%] lg:w-fit">
                  <div className="-mt-20 ">
                    <img
                      src={e.img}
                      className="rounded-full "
                      alt=""
                    />
                  </div>
                  <p className="text-center text-sm p-5">
                    {e.about}
                  </p>
                  <div className="flex flex-col lg:flex-row justify-center text-center lg:space-x-3">
                    <h1 className="text-orange-500 text-lg font-semibold">
                      {e.name}
                    </h1>
                    <p className="text-black text-sm lg:mt-[5px]">
                      {e.role}
                    </p>
                  </div>
                </div>
                      </>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className='relative post-Slider md:hidden'>
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
        initialSlide={1}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
         {Customer &&
                  Customer.map((e, i) => {
                    return (
                      <SwiperSlide className="w-[100vw]">
                        <div key={i} className="bg-slate-200 shadow-lg flex flex-col justify-center items-center py-4 h-56 md:w-[80%] lg:w-fit">
                  <div className="-mt-20 ">
                    <img
                      src={e.img}
                      className="rounded-full "
                      alt=""
                    />
                  </div>
                  <p className="text-center text-sm p-5">
                    {e.about}
                  </p>
                  <div className="flex flex-col lg:flex-row justify-center text-center lg:space-x-3">
                    <h1 className="text-orange-500 text-lg font-semibold">
                      {e.name}
                    </h1>
                    <p className="text-black text-sm lg:mt-[5px]">
                      {e.role}
                    </p>
                  </div>
                </div>
                      </SwiperSlide>
                    );
                  })}
      </Swiper>
      </div>
    </div>
        </div>
      </section>
    </>
  );
};

export default Customer;
