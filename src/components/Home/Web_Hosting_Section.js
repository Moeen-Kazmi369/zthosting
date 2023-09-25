import React from 'react'
import Image from 'next/image';
import {TiTick} from 'react-icons/ti'
const Web_Hosting_Section = () => {
  return (
    <>
     {/* <!-- WEB HOSTING SECTION --> */}
     <section className="web_hosting_section py-0">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between px-4 items-center">
            <div className="w-full sm:w-[45%] hidden md:block">
              <div className="web_hosting_image">
                <figure className="mb-0">
                  <Image height="500" width="500" src="/assets/images/web_hosting_image.png" alt="" data-aos="fade-left" />
                </figure>
              </div>
            </div>
            <div className="w-full md:w-[45%]">
              <div className="web_hosting_content" data-aos="fade-right">
                <p className="paragraph">Fastest Web Hosting</p>
                <h2 className='text-left md:text-center'>
                  We're Provide Secure Web Hosting Solutions
                </h2>
                <p className="text-left md:text-center">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incid idunt ut labore dolore magna aliqua.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <div className="py-2 px-3 text-black flex border-black">
                  <TiTick className="bg-black text-white rounded-full mt-2 mr-1">24/7 Customer Support</TiTick>
                  Free Domain Registration with Annual Plans.
                </div>
                  </li>
                  <li>
                    <div className="py-2 px-3 text-black flex border-black">
                  <TiTick className=" text-white bg-black rounded-full mt-2 mr-1">24/7 Customer Support</TiTick>
                  Free SSL Certificate, 1 mt-2-Click Installer.
                </div>
                  </li>
                  <li>
                    <div className="py-2 px-3 text-black flex border-black">
                  <TiTick className=" text-white bg-black rounded-full mt-2 mr-1">24/7 Customer Support</TiTick>
                  Optimized to run WordPress and WooCommerce.
                </div>
                  </li>
                  <li>
                    <div className="py-2 px-3 text-black flex border-black">
                  <TiTick className=" text-white bg-black rounded-full mt-2 mr-1">24/7 Customer Support</TiTick>
                  Free Migration.
                </div>
                  </li>
                </ul>
                <div className="btn_wrapper">
                  <a
                    href="./web_hosting"
                    className="text-decoration-none bg-blue-900  text-white py-2 px-3 rounded-full text-xl"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Web_Hosting_Section;