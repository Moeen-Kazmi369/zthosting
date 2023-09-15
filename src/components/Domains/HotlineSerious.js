import Link from 'next/link';
import React from 'react'

const HotlineSerious = () => {
  return (
    <>
          {/* <!-- HOTLINE SERIOUSLY SECTION --> */}
          <section className="hotline_seriously_section">
        <div className="container">
          <div className="hotline_seriously_box">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="hotline_seriously_content" data-aos="fade-up">
                  <figure>
                    <img
                      src="./assets/images/hotline_seriously_left_image.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                  <h2>We love to help. Seriously.</h2>
                  <p className="pp">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt utie labore dolore magna enim
                    aliqua. Quis ipsum suspendisse ultrices gravida.
                  </p>
                  <div className="btn_wrapper">
                    <Link
                      href="./contact.html"
                      className="text-decoration-none gethelp_btn"
                    >
                      Get Help
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="hotline_seriously_image">
                  <figure className="mb-0">
                    <img
                      src="./assets/images/hotline_seriously_image.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HotlineSerious;