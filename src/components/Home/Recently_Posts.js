"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
const Recently_Posts = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchAllPosts();
      setdata(res.props.data);
    };
    fetchData();
  }, []);
  return (
    <div>
      <style jsx>
        {`
          .swiper {
            width: 100%;
            padding-top: 50px;
            padding-bottom: 50px;
          }

          .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 300px;
            height: 300px;
          }
        `}
      </style>
      <div className="flex items-center justify-center text-center py-8">
        <div className="flex flex-col p-2 m-2 ">
          <div className="text-[3rem] text-center">Featured Posts</div>
          <div className="text-[1rem] text-center my-4 mx-2">
            "Diving into the Code Ocean: Stories from a Hunter Coder's Desk"
          </div>
          <div className="relative w-[100vw]">
            <div id="app" className="w-[100vw]">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper w-[100vw]"
              >
                {data &&
                  data.map((e, i) => {
                    return (
                      <SwiperSlide className="w-[100vw]">
                        <Link href={`/blogs/${e.slug}`}>
                          <div
                            key={e.id}
                            className="flex flex-col"
                          >
                            {" "}
                            <img
                              src={
                                e["_embedded"]["wp:featuredmedia"][0][
                                  "source_url"
                                ]
                              }
                              alt="No image"
                              className="w-[80%] md:w-full"
                            />
                            <div className="flex text-gray-500 text-sm m-2">
                              <div className="m-1 font-bold">Vlog,</div>
                              <div className="m-1">31 March, 2023</div>
                            </div>
                            <div className="font-bold text-black text-xl m-2">
                              {e.title.rendered.length > 30
                                ? e.title.rendered.substring(0, 30) + "..."
                                : e.title.rendered}
                            </div>
                            <div
                              className="text-sm text-gray-500 mt-4 m-2"
                              dangerouslySetInnerHTML={{
                                __html:
                                  e.excerpt.rendered.length > 65
                                    ? e.excerpt.rendered.substring(0, 65) +
                                      "..."
                                    : e.excerpt.rendered,
                              }}
                            ></div>
                            <div className="flex cursor-pointer">
                              <div className="m-2">
                                {" "}
                                <img
                                  src="https://source.unsplash.com/50x50/?girl"
                                  alt=""
                                  className=" rounded-full"
                                />{" "}
                              </div>
                              <div className="grid m-1">
                                <div className="font-bold text-sm hover:text-gray-600 mt-2">
                                  Max
                                </div>
                                <div className=" text-sm hover:text-gray-600">
                                  Professor, California
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export async function fetchAllPosts(context) {
  // console.log(context)
  const res = await fetch(
    `https://zthosting.com/wp-json/wp/v2/posts?_embed&per_page=5&_fields=title,date,slug,id,excerpt,_links&order=asc`
  );
  const data = await res.json();
  //  console.log(data.length);
  // Pass data to the page via props
  return { props: { data } };
}
export default Recently_Posts;
