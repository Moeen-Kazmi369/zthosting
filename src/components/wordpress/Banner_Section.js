import React from "react";
import Image from "next/image";
import Link from "next/link";
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
                  <h1 data-aos="fade-up">Best wordpress hosting</h1>
                  <p className="pp" data-aos="fade-right">
                    Welcome to ZtHosting, Pakistan’s leading web hosting company
                    offering high-quality Best WordPress Hosting services. Our
                    Managed WordPress Hosting plans contain various features to
                    help you get the most out of your website. With free domain
                    and SSL certificates, unlimited bandwidth, and SSD storage,
                    our Managed WordPress Hosting plans are designed to help
                    your website perform at its best. Read on to learn more
                    about our Managed WordPress Hosting plans.
                  </p>
                  <div className="btn_wrapper" data-aos="fade-up">
                    <Link
                      href="/web_hosting"
                      className="text-decoration-none bg-blue-900 rounded-full  text-white py-2 px-3 text-xl"
                    >
                      View Plans
                    </Link>
                    <Link
                      href="/about"
                      className="text-decoration-none ml-2 bg-blue-900 rounded-full  text-white py-2 px-3 text-xl"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 hidden md:block">
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
