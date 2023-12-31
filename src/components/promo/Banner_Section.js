import Image from 'next/image';
import React from 'react'

const Banner_Section = () => {
  return (
    <>
    {/* <!-- BANNER SECTION --> */}
    <section className="banner-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="banner-section-content" data-aos="fade-up">
                    <h1 data-aos="fade-up">Shared Web Hosting Done Right</h1>
                    <p className="pp" data-aos="fade-right">
                      When building a website, start here. Our shared service
                      delivers a powerful, proven platform.
                    </p>
                    <div className="btn_wrapper" data-aos="fade-up">
                      <a
                        href="./web_hosting"
                        className="text-decoration-none bg-blue-900 rounded-full  text-white py-2 px-3 text-xl"
                      >
                        View Plans
                      </a>
                      <a
                        href="./about"
                        className="text-decoration-none bg-blue-900 ml-2 rounded-full  text-white py-2 px-3 text-xl"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 md:block hidden">
                  <div className="banner_image">
                    <figure className="mb-0">
                      <Image
                      height={"500"}
                      width={"500"}
                        src="/assets/images/web_hosting_banner_image.png"
                        alt=""
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>
    </>
  )
}

export default Banner_Section;