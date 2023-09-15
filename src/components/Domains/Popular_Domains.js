import Link from 'next/link';
import React from 'react'

const Popular_Domains = () => {
  return (
    <>
          {/* <!-- POPULAR DOMAIN SECTION --> */}
      <section className="popular_domain_section" id="domain_popular">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="popular_domain_content">
                <h2>Search Most Popular Domain</h2>
                <p>
                  The perfect domain lets people know at a glance why you're
                  online (and why you're awesome).
                </p>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-up">
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="popular_domain_box hover_effect">
                <figure>
                  <img
                    src="./assets/images/popular_domain_1.png"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
                <p className="pp">Get the world's most popular domain</p>
                <p className="starting_from">Starting from</p>
                <div className="price_span_wrapper">
                  <span className="price">$3.99 </span>
                  <span className="month">/month</span>
                </div>
                <div className="btn_wrapper">
                  <Link
                    href="https://akdesigner.com/whmcs-templates/cart.php?a=add&domain=register"
                    className="text-decoration-none check_btn"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="popular_domain_box popular_domain_sale_box hover_effect">
                <span className="sale">50% OFF SALE</span>
                <figure>
                  <img
                    src="./assets/images/popular_domain_2.png"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
                <p className="pp">Get a domain that everyone knows</p>
                <p className="starting_from">Starting from</p>
                <div className="price_span_wrapper">
                  <span className="price">$9.99 </span>
                  <span className="month">/month</span>
                </div>
                <div className="btn_wrapper">
                  <Link
                    href="https://akdesigner.com/whmcs-templates/cart.php?a=add&domain=register"
                    className="text-decoration-none check_btn"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="popular_domain_box hover_effect">
                <figure>
                  <img
                    src="./assets/images/popular_domain_3.png"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
                <p className="pp">Do good with a .org domain</p>
                <p className="starting_from">Starting from</p>
                <div className="price_span_wrapper">
                  <span className="price">$14.75 </span>
                  <span className="month">/month</span>
                </div>
                <div className="btn_wrapper">
                  <Link
                    href="https://akdesigner.com/whmcs-templates/cart.php?a=add&domain=register"
                    className="text-decoration-none check_btn"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
              <div className="popular_domain_box hover_effect">
                <figure>
                  <img
                    src="./assets/images/popular_domain_4.png"
                    alt=""
                    className="img-fluid"
                  />
                </figure>
                <p className="pp">Satisfy the world's buyers with .shop</p>
                <p className="starting_from">Starting from</p>
                <div className="price_span_wrapper">
                  <span className="price">$19.99 </span>
                  <span className="month">/month</span>
                </div>
                <div className="btn_wrapper">
                  <Link
                    href="https://akdesigner.com/whmcs-templates/cart.php?a=add&domain=register"
                    className="text-decoration-none check_btn"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Popular_Domains;