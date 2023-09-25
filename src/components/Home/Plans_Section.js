"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper/modules";
const Plans_Section = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const[currency,setCurrency]=useState("$");

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % 3);
  };

  const handlePrev = () => {
    setCurrentIndex((3 + currentIndex - 1) % 3);
  };
  const plans = [
    {
      title: "Premium",
      description: "Everything you need to create your website",
      oldPrice: currency==="$"?11.99:Math.round(11.99*295),
      discount: "SAVE 75%",
      price: currency==="$"?2.99:Math.round(2.99*295),
      offer: "+3 months FREE",
      btn: "Add to cart",
      type: null,
      under_btn: `${currency}${currency==="$"?6.99:Math.round(6.99*295)}/mo when you renew`,
      top_features: [
        {
          available: true,
          icon_Color: "green-500",
          bold_text: "Free",
          text: "Domain ($9.99 value)",
        },
        {
          available: true,
          icon_Color: "green-500",
          bold_text: "Free Automatic",
          text: "Website Migration",
        },
        {
          available: true,
          icon_Color: "green-500",
          bold_text: "24/7",
          text: "Customer Support",
        },
        {
          available: true,
          icon_Color: "green-500",
          bold_text: "Free",
          text: "Email",
        },
        {
          available: true,
          icon_Color: "green-500",
          bold_text: "Unlimited",
          text: "Bandwidth",
        },
        {
          available: true,
          icon_Color: "green-500",
          bold_text: "Unlimited",
          text: "Free SSL",
        },
        {
          available: true,
          icon_Color: "yellow-500",
          bold_text: "Weekly",
          text: "Backups",
        },
        {
          available: true,
          icon_Color: "yellow-500",
          bold_text: "Basic",
          text: "WooCommerce Optimization",
        },
        {
          available: true,
          icon_Color: "yellow-500",
          bold_text: "Standard",
          text: "Performance",
        },
        {
          available: true,
          icon_Color: "yellow-500",
          bold_text: "100 GB",
          text: "SSD Storage",
        },
        {
          available: true,
          icon_Color: "yellow-500",
          bold_text: "400000",
          text: "Inodes",
        },
        {
          available: true,
          icon_Color: "yellow-500",
          bold_text: "3",
          text: "Websites",
        },
        {
          available: true,
          icon_Color: "yellow-500",
          bold_text: "~25000",
          text: "Visits Monthly",
        },
        {
          available: true,
          icon_Color: "yellow-500",
          bold_text: "40",
          text: "PHP Workers",
        },
        {
          available: false,
          icon_Color: "red-500",
          bold_text: "Free",
          text: "CDN",
        },
        {
          available: false,
          icon_Color: "red-500",
          bold_text: "WordPress",
          text: "Staging Tool",
        },
        {
          available: false,
          icon_Color: "red-500",
          bold_text: "Object Cache",
          text: "for WordPress",
        },
        {
          available: false,
          icon_Color: "red-500",
          bold_text: "On-Demand",
          text: "Backup",
        },
        {
          available: false,
          icon_Color: "red-500",
          bold_text: "Priority",
          text: "Support",
        },
        {
          available: false,
          icon_Color: "red-500",
          bold_text: "Dedicated",
          text: "IP Address",
        },
      ],
    },
    {
      title: "Business",
      description: "Level-up with more power and enhanced features",
      oldPrice: currency==="$"?13.99:Math.round(13.99*295),
      discount: "SAVE 71%",
      price: currency==="$"?3.99:Math.round(3.99*295),
      offer: "+3 months FREE",
      type: "Most Popular",
      btn: "Add to cart",
      under_btn: `${currency}${currency==="$"?8.99:Math.round(8.99*295)}/mo when you renew`,
      top_features: [
        {
          available: true,
          icon_Color: "green-500",
          bold_text: "Free",
          text: "Domain ($9.99 value)",
        },
        {
          available: true,
          icon_Color: "green-500",
          bold_text: "Free Automatic",
          text: "Website Migration",
        },
        {
          available: true,
          icon_Color: "green-500",
          bold_text: "24/7",
          text: "Customer Support",
        },
        {
          available: true,
          icon_Color: "green-500",
          bold_text: "Free",
          text: "Email",
        },
        {
          available: true,
          icon_Color: "green-500",
          bold_text: "Unlimited",
          text: "Bandwidth",
        },
        {
          available: true,
          icon_Color: "green-500",
          bold_text: "Unlimited",
          text: "Free SSL",
        },
        {
          available: true,
          icon_Color: "yellow-500",
          bold_text: "Weekly",
          text: "Backups",
        },
        {
          available: true,
          icon_Color: "yellow-500",
          bold_text: "Basic",
          text: "WooCommerce Optimization",
        },
        {
          available: true,
          icon_Color: "yellow-500",
          bold_text: "Standard",
          text: "Performance",
        },
        {
          available: true,
          icon_Color: "yellow-500",
          bold_text: "100 GB",
          text: "SSD Storage",
        },
        {
          available: true,
          icon_Color: "yellow-500",
          bold_text: "400000",
          text: "Inodes",
        },
        {
          available: true,
          icon_Color: "yellow-500",
          bold_text: "3",
          text: "Websites",
        },
        {
          available: true,
          icon_Color: "yellow-500",
          bold_text: "~25000",
          text: "Visits Monthly",
        },
        {
          available: true,
          icon_Color: "yellow-500",
          bold_text: "40",
          text: "PHP Workers",
        },
        {
          available: false,
          icon_Color: "red-500",
          bold_text: "Free",
          text: "CDN",
        },
        {
          available: false,
          icon_Color: "red-500",
          bold_text: "WordPress",
          text: "Staging Tool",
        },
        {
          available: false,
          icon_Color: "red-500",
          bold_text: "Object Cache",
          text: "for WordPress",
        },
        {
          available: false,
          icon_Color: "red-500",
          bold_text: "On-Demand",
          text: "Backup",
        },
        {
          available: false,
          icon_Color: "red-500",
          bold_text: "Priority",
          text: "Support",
        },
        {
          available: false,
          icon_Color: "red-500",
          bold_text: "Dedicated",
          text: "IP Address",
        },
      ],
    },
    {
      title: "Cloud Startup",
      type: null,
      description: "Enjoy optimized performance & dedicated resources",
      oldPrice: currency==="$"?24.99:Math.round(24.99*295),
      discount: "SAVE 64%",
      price: currency==="$"?8.99:Math.round(8.99*295),
      offer: "+3 months FREE",
      btn: "Add to cart",
      under_btn: `${currency}${currency==="$"?19.99:Math.round(19.99*295)}/mo when you renew`,
      top_features: [
        {
          available: true,
          icon_Color: "green-500",
          bold_text: "Free",
          text: "Domain ($9.99 value)",
        },
        {
          available: true,
          icon_Color: "green-500",
          bold_text: "Free Automatic",
          text: "Website Migration",
        },
        {
          available: true,
          icon_Color: "green-500",
          bold_text: "24/7",
          text: "Customer Support",
        },
        {
          available: true,
          icon_Color: "green-500",
          bold_text: "Free",
          text: "Email",
        },
        {
          available: true,
          icon_Color: "green-500",
          bold_text: "Unlimited",
          text: "Bandwidth",
        },
        {
          available: true,
          icon_Color: "green-500",
          bold_text: "Unlimited",
          text: "Free SSL",
        },
        {
          available: true,
          icon_Color: "yellow-500",
          bold_text: "Weekly",
          text: "Backups",
        },
        {
          available: true,
          icon_Color: "yellow-500",
          bold_text: "Basic",
          text: "WooCommerce Optimization",
        },
        {
          available: true,
          icon_Color: "yellow-500",
          bold_text: "Standard",
          text: "Performance",
        },
        {
          available: true,
          icon_Color: "yellow-500",
          bold_text: "100 GB",
          text: "SSD Storage",
        },
        {
          available: true,
          icon_Color: "yellow-500",
          bold_text: "400000",
          text: "Inodes",
        },
        {
          available: true,
          icon_Color: "yellow-500",
          bold_text: "3",
          text: "Websites",
        },
        {
          available: true,
          icon_Color: "yellow-500",
          bold_text: "~25000",
          text: "Visits Monthly",
        },
        {
          available: true,
          icon_Color: "yellow-500",
          bold_text: "40",
          text: "PHP Workers",
        },
        {
          available: false,
          icon_Color: "red-500",
          bold_text: "Free",
          text: "CDN",
        },
        {
          available: false,
          icon_Color: "red-500",
          bold_text: "WordPress",
          text: "Staging Tool",
        },
        {
          available: false,
          icon_Color: "red-500",
          bold_text: "Object Cache",
          text: "for WordPress",
        },
        {
          available: false,
          icon_Color: "red-500",
          bold_text: "On-Demand",
          text: "Backup",
        },
        {
          available: false,
          icon_Color: "red-500",
          bold_text: "Priority",
          text: "Support",
        },
        {
          available: false,
          icon_Color: "red-500",
          bold_text: "Dedicated",
          text: "IP Address",
        },
      ],
    },
  ];
  return (
    <>
      <style jsx>
        {`
          .text-yellow-500 {
            color: yellow;
          }
          .text-green-500 {
            color: green;
          }
          .text-red-500 {
            color: red;
          }
        `}
      </style>
      {/* <!-- PLANS SECTION --> */}
      <section className="plans_section" id="awesome_plan">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="plans_content">
                <h2>Choose Awesome Plan for your Needs</h2>
              </div>
            </div>
          </div>
          <div className="tabs-box tabs-options text-center">
          <div className="btn_wrapper" data-aos="fade-up">
                      <button 
                      onClick={()=>setCurrency("$")}
                      className="bg-white text-black text-lg font-normal px-3 py-2 rounded-full focus:outline-none">
                        In USDT
                      </button>
                      <button
                      onClick={()=>setCurrency("RS")}
                      className="bg-white text-black text-lg font-normal px-3 py-2 rounded-full focus:outline-none">
                        In PKR
                      </button>
                    </div>
            <div className="tab-content py-20" data-aos="fade-up">
              <div
                id="windows"
                className="tab-pane fade in active show relative"
              >
                <div className="hidden md:flex justify-center items-center">
                  {plans.map((item, i) => {
                    return (
                      <div className="w-[300px]">
                        <div
                          className={` ${item.type?"-mt-6":null} border border-black rounded-md py-3 hover:z-30 hover:shadow-2xl hover:-translate-y-4 transform duration-700 px-4`}
                        >
                          <h4 className="font-bold">{item.title}</h4>
                          <p className="text-center text-sm">
                            {item.description}
                          </p>
                          <div className="flex flex-row justify-center space-x-1 items-center">
                            <p className="line-through">{currency}{item.oldPrice}</p>
                            <p
                              className={`rounded-full px-3 py-2 ${
                                item.type
                                  ? "text-purple-900 bg-purple-400"
                                  : "text-blue-700 bg-blue-200"
                              } font-semibold`}
                            >
                              {item.discount}
                            </p>
                          </div>
                          <div>
                            <span className="">{currency}</span>
                            <span className="font-bold text-5xl">
                              {item.price}{" "}
                            </span>
                            <span className="">/mo</span>
                          </div>
                          <p
                            className={`font-semibold ${
                              item.type ? "text-purple-900" : "text-blue-700"
                            } text-center`}
                          >
                            {item.offer}
                          </p>
                          <div className="btn_wrapper">
                            <Link
                              href="./web_hosting.html"
                              className={`px-4 py-2 text-white no-underline ${
                                item.type ? "bg-purple-900" : "bg-blue-700"
                              } font-semibold text-xl rounded-2xl`}
                            >
                              {item.btn}
                            </Link>
                          </div>
                          <p className="text-center text-sm my-3">
                            {item.under_btn}
                          </p>
                          <hr className="text-black mx-2"></hr>
                          <h3 className="text-xl font-semibold text-left py-2">
                            Top Features
                          </h3>
                          {item.top_features &&
                            item.top_features.map((e, i) => {
                              return (
                                <div key={i} className="flex text-left space-x-1 my-2">
                                  {e.available ? (
                                    <div className={`text-${e.icon_Color}`}>
                                      <AiOutlineCheck />
                                    </div>
                                  ) : (
                                    <div className={`text-${e.icon_Color}`}>
                                      <AiOutlineClose />
                                    </div>
                                  )}
                                  <div className="font-semibold text-sm">
                                    {e.bold_text}
                                  <span className="text-sm font-normal ml-1">{e.text}</span>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="relative pricing-Slider md:hidden">
                  <div id="app">
                    <Swiper
                      effect={"cards"}
                      grabCursor={true}
                      modules={[EffectCards]}
                      className="mySwiper"
                    >
                      {plans.map((item, i) => {
                    return (
                      <SwiperSlide>
                        <div
                          className={` border border-black rounded-md py-3 hover:z-30 hover:shadow-2xl hover:-translate-y-4 transform duration-700 px-4`}
                        >
                          <h4 className="font-bold">{item.title}</h4>
                          <p className="text-center text-sm">
                            {item.description}
                          </p>
                          <div className="flex flex-row justify-center space-x-1 items-center">
                            <p className="line-through">{currency}{item.oldPrice}</p>
                            <p
                              className={`rounded-full px-3 py-2 ${
                                item.type
                                  ? "text-purple-900 bg-purple-400"
                                  : "text-blue-700 bg-blue-200"
                              } font-semibold`}
                            >
                              {item.discount}
                            </p>
                          </div>
                          <div>
                            <span className="">{currency}</span>
                            <span className="font-bold text-5xl">
                              {item.price}{" "}
                            </span>
                            <span className="">/mo</span>
                          </div>
                          <p
                            className={`font-semibold ${
                              item.type ? "text-purple-900" : "text-blue-700"
                            } text-center`}
                          >
                            {item.offer}
                          </p>
                          <div className="btn_wrapper">
                            <Link
                              href="./web_hosting.html"
                              className={`px-4 py-2 text-white no-underline ${
                                item.type ? "bg-purple-900" : "bg-blue-700"
                              } font-semibold text-xl rounded-2xl`}
                            >
                              {item.btn}
                            </Link>
                          </div>
                          <p className="text-center text-sm my-3">
                            {item.under_btn}
                          </p>
                          <hr className="text-black mx-2"></hr>
                          <h3 className="text-xl font-semibold text-left py-2">
                            Top Features
                          </h3>
                          {item.top_features &&
                            item.top_features.map((e, i) => {
                              return (
                                <div key={i} className="flex text-left space-x-1 my-2">
                                  {e.available ? (
                                    <div className={`text-${e.icon_Color}`}>
                                      <AiOutlineCheck />
                                    </div>
                                  ) : (
                                    <div className={`text-${e.icon_Color}`}>
                                      <AiOutlineClose />
                                    </div>
                                  )}
                                  <div className="font-semibold text-sm">
                                    {e.bold_text}
                                  <span className="text-sm ml-2 font-normal">{e.text}</span>
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </SwiperSlide>
                    );
                  })} 
                    </Swiper>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="plans_list_wrapper" data-aos="fade-up">
            <ul className="list-unstyled mb-0">
              <li>
                <i className="fa-solid fa-check"></i>24/7 Customer Support
              </li>
              <li>
                <i className="fa-solid fa-check"></i>1-click Install
              </li>
              <li>
                <i className="fa-solid fa-check"></i>99.9% Uptime Guarantee
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Plans_Section;
