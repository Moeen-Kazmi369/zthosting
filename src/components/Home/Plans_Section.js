import React from 'react'

const Plans_Section = () => {
  return (
    <>
      {/* <!-- PLANS SECTION --> */}
      <section className="plans_section" id="awesome_plan">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="plans_content">
                  <h2>Choose Awesome Plan for your Needs</h2>
                </div>
              </div>
            </div>
            <div className="tabs-box tabs-options text-center">
              <ul className="nav nav-tabs mt-4 mb-4">
                <li>
                  <a className="active" data-toggle="tab" href="#windows">
                    Windows Server
                  </a>
                </li>
                <li>
                  <a data-toggle="tab" href="#linux">
                    Linux Server
                  </a>
                </li>
              </ul>
              <div className="tab-content" data-aos="fade-up">
                <div id="windows" className="tab-pane fade in active show">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                      <div className="plans_box_content">
                        <div className="plans_upper_portion">
                          <figure className="mb-0">
                            <img
                              src="./assets/images/plan_1.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                        </div>
                        <div className="plans_lower_portion">
                          <div className="plans_lower_portion_text_wrapper">
                            <h4>Web Hosting</h4>
                            <p className="pp">
                              Lorem ipsum dolor amet consectur incididunt ut
                              labore.
                            </p>
                            <ul className="list-unstyled">
                              <li>
                                <i className="fa-solid fa-check"></i>
                                <span>Unlimited </span>Websites
                              </li>
                              <li>
                                <i className="fa-solid fa-check"></i>
                                <span>One-click </span>WordPress Installs
                              </li>
                              <li>
                                <i className="fa-solid fa-check"></i>
                                <span>Unmetered </span> Bandwidth
                              </li>
                              <li>
                                <i className="fa-solid fa-check"></i>
                                <span>Free </span> SSL Certificate
                              </li>
                            </ul>
                            <span className="sale">50% OFF SALE</span>
                            <p className="pp start">Starting from</p>
                            <div className="price_span_wrapper">
                              <span className="price">$29.99 </span>
                              <span className="month">/month</span>
                            </div>
                            <div className="btn_wrapper">
                              <a
                                href="./web_hosting.html"
                                className="text-decoration-none view_plans_btn"
                              >
                                View Plans
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                      <div className="plans_box_content">
                        <div className="plans_upper_portion">
                          <figure className="mb-0">
                            <img
                              src="./assets/images/plan_2.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                        </div>
                        <div className="plans_lower_portion">
                          <div className="plans_lower_portion_text_wrapper">
                            <h4>Dedicated Server</h4>
                            <p className="pp">
                              Quis ipsum suspendisse ultrices gravi accumsan
                              lacus vel facilisis.
                            </p>
                            <ul className="list-unstyled">
                              <li>
                                <i className="fa-solid fa-check"></i>
                                <span>Unlimited </span>Websites
                              </li>
                              <li>
                                <i className="fa-solid fa-check"></i>
                                <span>One-click </span>WordPress Installs
                              </li>
                              <li>
                                <i className="fa-solid fa-check"></i>
                                <span>Unmetered </span> Bandwidth
                              </li>
                              <li>
                                <i className="fa-solid fa-check"></i>
                                <span>Free </span> SSL Certificate
                              </li>
                            </ul>
                            <span className="sale">50% OFF SALE</span>
                            <p className="pp start">Starting from</p>
                            <div className="price_span_wrapper">
                              <span className="price">$49.99 </span>
                              <span className="month">/month</span>
                            </div>
                            <div className="btn_wrapper">
                              <a
                                href="./dedicated.html"
                                className="text-decoration-none view_plans_btn"
                              >
                                View Plans
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                      <div className="plans_box_content">
                        <div className="plans_upper_portion">
                          <figure className="mb-0">
                            <img
                              src="./assets/images/plan_3.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                        </div>
                        <div className="plans_lower_portion">
                          <div className="plans_lower_portion_text_wrapper">
                            <h4>VPS Hosting</h4>
                            <p className="pp">
                              Duis aute irure dolor in reprehenderit fugiat
                              nulla pariatur.
                            </p>
                            <ul className="list-unstyled">
                              <li>
                                <i className="fa-solid fa-check"></i>
                                <span>Unlimited </span>Websites
                              </li>
                              <li>
                                <i className="fa-solid fa-check"></i>
                                <span>One-click </span>WordPress Installs
                              </li>
                              <li>
                                <i className="fa-solid fa-check"></i>
                                <span>Unmetered </span> Bandwidth
                              </li>
                              <li>
                                <i className="fa-solid fa-check"></i>
                                <span>Free </span> SSL Certificate
                              </li>
                            </ul>
                            <span className="sale">50% OFF SALE</span>
                            <p className="pp start">Starting from</p>
                            <div className="price_span_wrapper">
                              <span className="price">$99.99 </span>
                              <span className="month">/month</span>
                            </div>
                            <div className="btn_wrapper">
                              <a
                                href="./vps.html"
                                className="text-decoration-none view_plans_btn"
                              >
                                View Plans
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="linux" className="tab-pane fade">
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                      <div className="plans_box_content">
                        <div className="plans_upper_portion">
                          <figure className="mb-0">
                            <img
                              src="./assets/images/plan_1.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                        </div>
                        <div className="plans_lower_portion">
                          <div className="plans_lower_portion_text_wrapper">
                            <h4>Web Hosting</h4>
                            <p className="pp">
                              Lorem ipsum dolor amet consectur incididunt ut
                              labore.
                            </p>
                            <ul className="list-unstyled">
                              <li>
                                <i className="fa-solid fa-check"></i>
                                <span>Unlimited </span>Websites
                              </li>
                              <li>
                                <i className="fa-solid fa-check"></i>
                                <span>One-click </span>WordPress Installs
                              </li>
                              <li>
                                <i className="fa-solid fa-check"></i>
                                <span>Unmetered </span> Bandwidth
                              </li>
                              <li>
                                <i className="fa-solid fa-check"></i>
                                <span>Free </span> SSL Certificate
                              </li>
                            </ul>
                            <span className="sale">50% OFF SALE</span>
                            <p className="pp start">Starting from</p>
                            <div className="price_span_wrapper">
                              <span className="price">$39.99 </span>
                              <span className="month">/month</span>
                            </div>
                            <div className="btn_wrapper">
                              <a
                                href="./web_hosting.html"
                                className="text-decoration-none view_plans_btn"
                              >
                                View Plans
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                      <div className="plans_box_content">
                        <div className="plans_upper_portion">
                          <figure className="mb-0">
                            <img
                              src="./assets/images/plan_2.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                        </div>
                        <div className="plans_lower_portion">
                          <div className="plans_lower_portion_text_wrapper">
                            <h4>Dedicated Server</h4>
                            <p className="pp">
                              Quis ipsum suspendisse ultrices gravi accumsan
                              lacus vel facilisis.
                            </p>
                            <ul className="list-unstyled">
                              <li>
                                <i className="fa-solid fa-check"></i>
                                <span>Unlimited </span>Websites
                              </li>
                              <li>
                                <i className="fa-solid fa-check"></i>
                                <span>One-click </span>WordPress Installs
                              </li>
                              <li>
                                <i className="fa-solid fa-check"></i>
                                <span>Unmetered </span> Bandwidth
                              </li>
                              <li>
                                <i className="fa-solid fa-check"></i>
                                <span>Free </span> SSL Certificate
                              </li>
                            </ul>
                            <span className="sale">50% OFF SALE</span>
                            <p className="pp start">Starting from</p>
                            <div className="price_span_wrapper">
                              <span className="price">$59.99 </span>
                              <span className="month">/month</span>
                            </div>
                            <div className="btn_wrapper">
                              <a
                                href="./dedicated.html"
                                className="text-decoration-none view_plans_btn"
                              >
                                View Plans
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                      <div className="plans_box_content">
                        <div className="plans_upper_portion">
                          <figure className="mb-0">
                            <img
                              src="./assets/images/plan_3.jpg"
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                        </div>
                        <div className="plans_lower_portion">
                          <div className="plans_lower_portion_text_wrapper">
                            <h4>VPS Hosting</h4>
                            <p className="pp">
                              Duis aute irure dolor in reprehenderit fugiat
                              nulla pariatur.
                            </p>
                            <ul className="list-unstyled">
                              <li>
                                <i className="fa-solid fa-check"></i>
                                <span>Unlimited </span>Websites
                              </li>
                              <li>
                                <i className="fa-solid fa-check"></i>
                                <span>One-click </span>WordPress Installs
                              </li>
                              <li>
                                <i className="fa-solid fa-check"></i>
                                <span>Unmetered </span> Bandwidth
                              </li>
                              <li>
                                <i className="fa-solid fa-check"></i>
                                <span>Free </span> SSL Certificate
                              </li>
                            </ul>
                            <span className="sale">50% OFF SALE</span>
                            <p className="pp start">Starting from</p>
                            <div className="price_span_wrapper">
                              <span className="price">$79.99 </span>
                              <span className="month">/month</span>
                            </div>
                            <div className="btn_wrapper">
                              <a
                                href="./vps.html"
                                className="text-decoration-none view_plans_btn"
                              >
                                View Plans
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="plans_list_wrapper" data-aos="fade-up">
              <ul className="list-unstyled mb-0">
                <li>
                  <i className="fa-solid fa-check"></i>24/7 Customer Support
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>1-click Install
                </li>
                <li>
                  <i className="fa-solid fa-check"></i>99.9% Uptime Guarantee
                </li>
              </ul>
            </div>
          </div>
        </section>
    </>
  )
}

export default Plans_Section;