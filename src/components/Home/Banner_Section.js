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
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="banner-section-content" data-aos="fade-up">
                    <h1 data-aos="fade-up">
                      Powerful, <span>Flexible</span> Dedicated Hosting
                    </h1>
                    <p className="pp" data-aos="fade-right">
                      For plenty of power and room to grow, go Dedicated and get
                      the whole box to yourself.
                    </p>
                    <div className="btn_wrapper" data-aos="fade-up">
                      <Link
                        href="/web_hosting"
                        className="text-decoration-none"
                      >
                        View Plans
                      </Link>
                      <Link
                        href="/about"
                        className="text-decoration-none"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 hidden md:block">
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