import React from 'react'
import Image from 'next/image';
const Web_Hosting_Section = () => {
  return (
    <>
     {/* <!-- WEB HOSTING SECTION --> */}
     <section className="web_hosting_section">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between px-4 items-center">
            <div className="w-full sm:w-[45%] hidden md:block">
              <div className="web_hosting_image">
                <figure className="mb-0">
                  <Image height="500" width="500" src="/assets/images/web_hosting_image.png" alt="" data-aos="fade-left" />
                </figure>
              </div>
            </div>
            <div className="w-full sm:w-[45%]">
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
                    Free Domain Registration with Annual Plans.
                  </li>
                  <li>
                    Free SSL Certificate, 1-Click Installer.
                  </li>
                  <li>
                    Optimized to run WordPress and WooCommerce.
                  </li>
                  <li>
                    Free Migration.
                  </li>
                </ul>
                <div className="btn_wrapper">
                  <a
                    href="./web_hosting.html"
                    className="text-decoration-none get_started_btn"
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