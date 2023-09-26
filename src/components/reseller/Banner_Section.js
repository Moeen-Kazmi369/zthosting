import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
const Banner_Section = () => {
  return (
    <>
     <div className="banner-section-outer">
          {/* <!-- BANNER SECTION --> */}
          <section className="banner-section">
            <div className="container">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="w-full md:w-[60%]">
                  <div className="banner-section-content" data-aos="fade-up">
                    <h3 className='text-sm font-bold'>Reseller Program</h3>
                    <h1 data-aos="fade-up" className='font-bold'>
                    Your business, our products.
                    </h1>
                    <p className="pp" data-aos="fade-right">
                    Everything you need to sell domains, hosting, email, website builders and more, right from your own website.
                    </p>
                    <div className="btn_wrapper" data-aos="fade-up">
                      <Link
                        href="/web_hosting"
                        className="text-decoration-none bg-blue-900 rounded-full  text-white py-2 px-3 text-xl"
                      >
                        View Plans
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="md:w-[40%] hidden md:block">
                  <div className="banner_image">
                    <figure className="mb-0">
                      <Image height="500" width="500" src="/assets/images/banner_image.png" alt="" data-aos="fade-down" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
    </>
  )
}

export default Banner_Section;