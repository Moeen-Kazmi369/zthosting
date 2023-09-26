"use client";
import Image from "next/image";
import Link from "next/link";
import { TiTick } from "react-icons/ti";
import React, { useState, useEffect } from "react";
import Countdown from "react-countdown";
const Banner_Section = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    // Update the countdown every second
    const interval = setInterval(() => {
      const now = new Date();
      const targetDate = new Date(2023, 0, 1); // Set the target date
      const diff = now - targetDate;
      // Calculate the days, hours, minutes, and seconds remaining
      const daysLeft = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesLeft = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.floor((diff % (1000 * 60)) / 1000);
      // Update the state
      setDays(daysLeft);
      setHours(hoursLeft);
      setMinutes(minutesLeft);
      setSeconds(secondsLeft);
    }, 1000);
    // Clear the interval when the countdown is complete
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="banner-section-outer">
        {/* <!-- BANNER SECTION --> */}
        <section className="banner-section">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="w-full md:w-[40%]">
                <div className="banner-section-content" data-aos="fade-up">
                  <h1 data-aos="fade-up">
                    Everything You Need to Create a Website
                  </h1>
                  <h4 className="font-bold">
                    Up to <span className="text-blue-900">75%</span> off Hosting
                  </h4>
                  <ul className="list-unstyled">
                    <li>
                      <div className="py-2 px-3 text-black flex border-black">
                        <TiTick className="bg-black text-white rounded-full mt-1 mr-1">
                          24/7 Customer Support
                        </TiTick>
                        Free Domain Registration with Annual Plans.
                      </div>
                    </li>
                    <li>
                      <div className="py-2 px-3 text-black flex border-black">
                        <TiTick className=" text-white bg-black rounded-full mt-1 mr-1">
                          24/7 Customer Support
                        </TiTick>
                        Free SSL Certificate, 1 mt-1-Click Installer.
                      </div>
                    </li>
                    <li>
                      <div className="py-2 px-3 text-black flex border-black">
                        <TiTick className=" text-white bg-black rounded-full mt-1 mr-1">
                          24/7 Customer Support
                        </TiTick>
                        Optimized to run WordPress and WooCommerce.
                      </div>
                    </li>
                  </ul>
                  <div>
                    <span className="">$</span>
                    <span className="font-bold text-5xl">2.99</span>
                    <span className="">/mo</span>
                  </div>
                  <p
                    className={` text-black
                    `}
                  >
                    + 3 Months Free
                  </p>
                  <div className="countdown flex py-3 my-6 space-x-1">
                    <div className="font-bold">
                      <span className="border-2 w-[20px] h-[25px] border-black rounded-lg px-2 py-3">
                        {days}
                      </span>
                    </div>
                    <span className="font-extrabold">:</span>
                    <div className="font-bold">
                      <span className="border-2 w-[20px] h-[25px] border-black rounded-lg px-2 py-3">
                        {hours}
                      </span>
                    </div>
                    <span className="font-extrabold">:</span>
                    <div className="font-bold">
                      <span className="border-2 w-[20px] h-[25px] border-black rounded-lg px-2 py-3">
                        {minutes}
                      </span>
                    </div>
                    <span className="font-extrabold">:</span>
                    <div className=" font-bold">
                      <span className="border-2 w-[20px] h-[25px] border-black rounded-lg px-2 py-3">
                        {seconds}
                      </span>
                    </div>
                  </div>
                  <div className="">
                    <Link
                      href="/login"
                      className={`px-12 py-3 text-white no-underline bg-black font-semibold hover:no-underline text-xl rounded-lg`}
                    >
                      Claim Now
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-[40%] hidden md:block">
                <div className="banner_image">
                  <figure className="mb-0">
                    <Image
                      height="500"
                      width="500"
                      src="/assets/images/banner_image.png"
                      alt=""
                      data-aos="fade-down"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Banner_Section;
