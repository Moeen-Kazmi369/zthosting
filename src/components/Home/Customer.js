import React from 'react'

const Customer = () => {
  return (
    <>
     {/* <!-- CUSTOMER SECTION --> */}
     <section className="customer_section py-10">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="customer_heading_content">
                  <h2>Our Happy Customers</h2>
                  <p>
                    Don’t take our word for it. here’s what others have to say
                  </p>
                </div>
              </div>
            </div>
            <div className="row position-relative">
              <div className="owl-carousel owl-theme">
                <div className="item">
                  <div className="customer_box">
                    <div className="customer_content">
                      <figure className="quote_mark">
                        <img
                          src="./assets/images/testimonial_quote.png"
                          className="img-fluid"
                          alt=""
                        />
                      </figure>
                      <p className="pp">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                      </p>
                      <figure className="customer_image">
                        <img
                          src="./assets/images/testimonial_image_2.png"
                          className="img-fluid"
                          alt=""
                        />
                      </figure>
                      <p className="mb-0 customer_name">Rizwan Joseph</p>
                      <span>Co-Founder</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="customer_box">
                    <div className="customer_content">
                      <figure className="quote_mark">
                        <img
                          src="./assets/images/testimonial_quote.png"
                          className="img-fluid"
                          alt=""
                        />
                      </figure>
                      <p className="pp">
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <figure className="customer_image">
                        <img
                          src="./assets/images/testimonial_image_3.png"
                          className="img-fluid"
                          alt=""
                        />
                      </figure>
                      <p className="mb-0 customer_name">Olivia Charlotte</p>
                      <span>Mananger</span>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="customer_box">
                    <div className="customer_content">
                      <figure className="quote_mark">
                        <img
                          src="./assets/images/testimonial_quote.png"
                          alt=""
                          className="img-fluid"
                        />
                      </figure>
                      <p className="pp">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.{" "}
                      </p>
                      <figure className="customer_image">
                        <img
                          src="./assets/images/testimonial_image_1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </figure>
                      <p className="mb-0 customer_name">George Michel</p>
                      <span>Director</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>

    )
}

export default Customer;