'use client'
import Link from "next/link";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import {FaArrowCircleLeft} from 'react-icons/fa';
import {FaArrowCircleRight} from 'react-icons/fa'
import { useState } from "react";
const Plans_Section = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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
      oldPrice: 11.99,
      discount: "SAVE 75%",
      price: 2.99,
      offer: "+3 months FREE",
      btn: "Add to cart",
      type: null,
      under_btn: "$6.99/mo when you renew",
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
      oldPrice: 13.99,
      discount: "SAVE 71%",
      price: 3.99,
      offer: "+3 months FREE",
      type: "Most Popular",
      btn: "Add to cart",
      under_btn: "$8.99/mo when you renew",
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
      oldPrice: 24.99,
      discount: "SAVE 64%",
      price: 8.99,
      offer: "+3 months FREE",
      btn: "Add to cart",
      under_btn: "$19.99/mo when you renew",
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
      .text-yellow-500{
        color:yellow;
      }
      .text-green-500{
        color:green;
      }
      .text-red-500{
        color:red;
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
            <ul className="nav nav-tabs mt-4 mb-4">
              <li>
                <Link className="active" data-toggle="tab" href="#windows">
                  Windows Server
                </Link>
              </li>
              <li>
                <Link data-toggle="tab" href="#linux">
                  Linux Server
                </Link>
              </li>
            </ul>
            <div className="tab-content py-20" data-aos="fade-up">
              <div id="windows" className="tab-pane fade in active show relative">
      <FaArrowCircleLeft className="absolute top-1/2 left-2 z-50" onClick={handlePrev}/>        
                <div className="flex justify-center items-center">
                  {/* {plans.map((item, i) => {
                    return ( */}
                    <div className={`${currentIndex === 0 ? 'block' : 'hidden'}`}>
                      <div
                        className={`${
                          plans[0].type ? "-mt-3 shadow-2xl z-10" : null
                        } border border-black rounded-md py-3 hover:z-30 hover:shadow-2xl hover:-translate-y-4 transform duration-700 px-4`}
                      >
                        <h4 className="font-bold">{plans[0].title}</h4>
                        <p className="text-center text-sm">
                          {plans[0].description}
                        </p>
                        <div className="flex flex-row justify-center space-x-1 items-center">
                          <p className="line-through">${plans[0].oldPrice}</p>
                          <p
                            className={`rounded-full px-3 py-2 ${
                              plans[0].type
                                ? "text-purple-900 bg-purple-400"
                                : "text-blue-700 bg-blue-200"
                            } font-semibold`}
                          >
                            {plans[0].discount}
                          </p>
                        </div>
                        <div>
                          <span className="">$</span>
                          <span className="font-bold text-5xl">
                            {plans[0].price}{" "}
                          </span>
                          <span className="">/mo</span>
                        </div>
                        <p
                          className={`font-semibold ${
                            plans[0].type ? "text-purple-900" : "text-blue-700"
                          } text-center`}
                        >
                          {plans[0].offer}
                        </p>
                        <div className="btn_wrapper">
                          <Link
                            href="./web_hosting.html"
                            className={`px-4 py-2 text-white no-underline ${
                              plans[0].type ? "bg-purple-900" : "bg-blue-700"
                            } font-semibold text-xl rounded-2xl`}
                          >
                            {plans[0].btn}
                          </Link>
                        </div>
                        <p className="text-center text-sm my-3">
                          {plans[0].under_btn}
                        </p>
                        <hr className="text-black mx-2"></hr>
                        <h3 className="text-xl font-semibold text-left py-2">
                          Top Features
                        </h3>
                        {plans[0].top_features &&
                          plans[0].top_features.map((e, i) => {
                            return (
                              <div key={i} className="hidden md:flex space-x-1 my-1">
                                {e.available ? (
                                  <div 
                                  className={`text-${e.icon_Color}`}
                                  >
                                    <AiOutlineCheck
                                  />
                                  </div>
                                ) : (
                                  <div 
                                  className={`text-${e.icon_Color}`}
                                  >
                                    <AiOutlineClose
                                  />
                                  </div>
                                )}
                                <h4 className="font-semibold text-sm">{e.bold_text}</h4>
                                <p className="text-sm">{e.text}</p>
                              </div>
                            );
                          })}
                      </div>
                      </div>
                      <div className={`${currentIndex === 1 ? 'block' : 'hidden'}`}>
                      <div
                        className={`${
                          plans[1].type ? "-mt-3 shadow-2xl z-10" : null
                        } border border-black rounded-md py-3 hover:z-30 hover:shadow-2xl hover:-translate-y-4 transform duration-700 px-4`}
                      >
                        <h4 className="font-bold">{plans[1].title}</h4>
                        <p className="text-center text-sm">
                          {plans[1].description}
                        </p>
                        <div className="flex flex-row justify-center space-x-1 items-center">
                          <p className="line-through">${plans[1].oldPrice}</p>
                          <p
                            className={`rounded-full px-3 py-2 ${
                              plans[1].type
                                ? "text-purple-900 bg-purple-400"
                                : "text-blue-700 bg-blue-200"
                            } font-semibold`}
                          >
                            {plans[1].discount}
                          </p>
                        </div>
                        <div>
                          <span className="">$</span>
                          <span className="font-bold text-5xl">
                            {plans[1].price}{" "}
                          </span>
                          <span className="">/mo</span>
                        </div>
                        <p
                          className={`font-semibold ${
                            plans[1].type ? "text-purple-900" : "text-blue-700"
                          } text-center`}
                        >
                          {plans[1].offer}
                        </p>
                        <div className="btn_wrapper">
                          <Link
                            href="./web_hosting.html"
                            className={`px-4 py-2 text-white no-underline ${
                              plans[1].type ? "bg-purple-900" : "bg-blue-700"
                            } font-semibold text-xl rounded-2xl`}
                          >
                            {plans[1].btn}
                          </Link>
                        </div>
                        <p className="text-center text-sm my-3">
                          {plans[1].under_btn}
                        </p>
                        <hr className="text-black mx-2"></hr>
                        <h3 className="text-xl font-semibold text-left py-2">
                          Top Features
                        </h3>
                        {plans[1].top_features &&
                          plans[1].top_features.map((e, i) => {
                            return (
                              <div key={i} className="hidden md:flex space-x-1 my-1">
                                {e.available ? (
                                  <div 
                                  className={`text-${e.icon_Color}`}
                                  >
                                    <AiOutlineCheck
                                  />
                                  </div>
                                ) : (
                                  <div 
                                  className={`text-${e.icon_Color}`}
                                  >
                                    <AiOutlineClose
                                  />
                                  </div>
                                )}
                                <h4 className="font-semibold text-sm">{e.bold_text}</h4>
                                <p className="text-sm">{e.text}</p>
                              </div>
                            );
                          })}
                      </div>
                      </div>
                      <div className={`${currentIndex === 2 ? 'block' : 'hidden'}`}>
                      <div
                        className={`${
                          plans[2].type ? "-mt-3 shadow-2xl z-10" : null
                        } border border-black rounded-md py-3 hover:z-30 hover:shadow-2xl hover:-translate-y-4 transform duration-700 px-4`}
                      >
                        <h4 className="font-bold">{plans[2].title}</h4>
                        <p className="text-center text-sm">
                          {plans[2].description}
                        </p>
                        <div className="flex flex-row justify-center space-x-1 items-center">
                          <p className="line-through">${plans[2].oldPrice}</p>
                          <p
                            className={`rounded-full px-3 py-2 ${
                              plans[2].type
                                ? "text-purple-900 bg-purple-400"
                                : "text-blue-700 bg-blue-200"
                            } font-semibold`}
                          >
                            {plans[2].discount}
                          </p>
                        </div>
                        <div>
                          <span className="">$</span>
                          <span className="font-bold text-5xl">
                            {plans[2].price}{" "}
                          </span>
                          <span className="">/mo</span>
                        </div>
                        <p
                          className={`font-semibold ${
                            plans[2].type ? "text-purple-900" : "text-blue-700"
                          } text-center`}
                        >
                          {plans[2].offer}
                        </p>
                        <div className="btn_wrapper">
                          <Link
                            href="./web_hosting.html"
                            className={`px-4 py-2 text-white no-underline ${
                              plans[2].type ? "bg-purple-900" : "bg-blue-700"
                            } font-semibold text-xl rounded-2xl`}
                          >
                            {plans[2].btn}
                          </Link>
                        </div>
                        <p className="text-center text-sm my-3">
                          {plans[2].under_btn}
                        </p>
                        <hr className="text-black mx-2"></hr>
                        <h3 className="text-xl font-semibold text-left py-2">
                          Top Features
                        </h3>
                        {plans[2].top_features &&
                          plans[2].top_features.map((e, i) => {
                            return (
                              <div key={i} className="hidden md:flex space-x-1 my-1">
                                {e.available ? (
                                  <div 
                                  className={`text-${e.icon_Color}`}
                                  >
                                    <AiOutlineCheck
                                  />
                                  </div>
                                ) : (
                                  <div 
                                  className={`text-${e.icon_Color}`}
                                  >
                                    <AiOutlineClose
                                  />
                                  </div>
                                )}
                                <h4 className="font-semibold text-sm">{e.bold_text}</h4>
                                <p className="text-sm">{e.text}</p>
                              </div>
                            );
                          })}
                      </div>
                      </div>
                    {/* );
                  })} */}
                </div>
      <FaArrowCircleRight className="absolute right-2 top-1/2 z-50" onClick={handleNext}/>
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