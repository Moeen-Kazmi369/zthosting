import Build_Website from "@/components/Home/Build_Website";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="sections_wrapper">
        <div className="sub-banner-section">
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
                        href="./web_hosting.html"
                        className="text-decoration-none view_plans_btn"
                      >
                        View Plans
                      </a>
                      <a
                        href="./about.html"
                        className="text-decoration-none learn_more_btn"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                  <div className="banner_image">
                    <figure className="mb-0">
                      <img
                        src="./assets/images/web_hosting_banner_image.png"
                        alt=""
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <!-- FOUR ICONS SECTION --> */}
        <div className="four_icons_section">
          <div className="container">
            <div className="row" data-aos="fade-up">
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="four_icons_box hover_effect">
                  <figure>
                    <img
                      src="./assets/images/four_icons_1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                  <p>Website Transfer</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="four_icons_box hover_effect">
                  <figure>
                    <img
                      src="./assets/images/four_icons_2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                  <p>Website Building</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="four_icons_box hover_effect">
                  <figure>
                    <img
                      src="./assets/images/four_icons_3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                  <p>LiteSpeed Webserver</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                <div className="four_icons_box hover_effect">
                  <figure>
                    <img
                      src="./assets/images/four_icons_4.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                  <p>100% Uptime SLA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- CHOOSE PLAN SECTION --> */}
        <section className="choose_plan_section" id="fav_plan">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="choose_plan_content">
                  <h2>Choose Your Favourite Plan</h2>
                  <p>
                    Our hosting solutions range from web hosting to blazing-fast
                    shared hosting.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="choose_plan_box_content" data-aos="fade-up">
                  <div className="choose_plan_upper_portion">
                    <figure className="mb-0">
                      <img
                        src="./assets/images/choose_plan_1.png"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                    <div className="choose_plan_upper_portion_content">
                      <h4>Basic Plan</h4>
                      <p className="pp">Lorem ipsum dolor consectur.</p>
                    </div>
                  </div>
                  <div className="choose_plan_lower_portion">
                    <div className="choose_plan_lower_portion_text_wrapper">
                      <span className="sale">50% OFF SALE</span>
                      <p className="pp start">Starting from</p>
                      <div className="price_span_wrapper">
                        <span className="price">$29.99 </span>
                        <span className="month">/month</span>
                      </div>
                      <div className="btn_wrapper">
                        <a
                          href="./web_hosting.html"
                          className="text-decoration-none get_started_btn"
                        >
                          Get Started
                        </a>
                      </div>
                      <p className="pp top_feature">Top feature Comparison</p>
                      <ul className="list-unstyled">
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <span>5 </span>Website
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <span>70 GB </span>SSD Storage
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <span>15 000 </span> Visits Monthly
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <span>2 Email </span>Account
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <span>200 GB </span>Bandwidth
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <span>2 </span>Databases
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="choose_plan_box_content" data-aos="fade-up">
                  <div className="choose_plan_upper_portion">
                    <figure className="mb-0">
                      <img
                        src="./assets/images/choose_plan_2.png"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                    <div className="choose_plan_upper_portion_content">
                      <h4>Professional Plan</h4>
                      <p className="pp">
                        Duis aute irure dolor in reprehender.
                      </p>
                    </div>
                  </div>
                  <div className="choose_plan_lower_portion">
                    <div className="choose_plan_lower_portion_text_wrapper">
                      <span className="sale">50% OFF SALE</span>
                      <p className="pp start">Starting from</p>
                      <div className="price_span_wrapper">
                        <span className="price">$49.99 </span>
                        <span className="month">/month</span>
                      </div>
                      <div className="btn_wrapper">
                        <a
                          href="./web_hosting.html"
                          className="text-decoration-none get_started_btn"
                        >
                          Get Started
                        </a>
                      </div>
                      <p className="pp top_feature">Top feature Comparison</p>
                      <ul className="list-unstyled">
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <span>10 </span>Website
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <span>100 GB </span>SSD Storage
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <span>20 000 </span> Visits Monthly
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <span>3 Email </span>Account
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <span>500 GB </span>Bandwidth
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <span>3 </span>Databases
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="choose_plan_box_content" data-aos="fade-up">
                  <div className="choose_plan_upper_portion">
                    <figure className="mb-0">
                      <img
                        src="./assets/images/choose_plan_3.png"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                    <div className="choose_plan_upper_portion_content">
                      <h4>Business Plan</h4>
                      <p className="pp">Lorem ipsum dolor consectur.</p>
                    </div>
                  </div>
                  <div className="choose_plan_lower_portion">
                    <div className="choose_plan_lower_portion_text_wrapper">
                      <span className="sale">50% OFF SALE</span>
                      <p className="pp start">Starting from</p>
                      <div className="price_span_wrapper">
                        <span className="price">$99.99 </span>
                        <span className="month">/month</span>
                      </div>
                      <div className="btn_wrapper">
                        <a
                          href="./web_hosting.html"
                          className="text-decoration-none get_started_btn"
                        >
                          Get Started
                        </a>
                      </div>
                      <p className="pp top_feature">Top feature Comparison</p>
                      <ul className="list-unstyled">
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <span>15 </span>Website
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <span>200 GB </span>SSD Storage
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <span>25 000 </span> Visits Monthly
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <span>5 Email </span>Account
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <span>750 GB </span>Bandwidth
                        </li>
                        <li>
                          <i className="fa-solid fa-check"></i>
                          <span>5 </span>Databases
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- INTRODUCE SHARED HOSTING SECTION --> */}
        <section className="intro_shared_hosting_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="position-relative">
                  <a
                    className="popup-vimeo"
                    href="https://previews.customer.envatousercontent.com/h264-video-previews/15270cbb-9c29-4524-a270-2d72099d3899/1308116.mp4"
                  >
                    <figure className="mb-0">
                      <img
                        className="img-fluid thumb cursor-pointer"
                        // style="cursor: pointer"
                        src="./assets/images/shared_hosting_video_img.png"
                        alt=""
                      />
                    </figure>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="shared_hosting_content" data-aos="fade-right">
                  <span>Introduce Shared Hosting</span>
                  <h2>What is Shared Hosting?</h2>
                  <p className="pp">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit sed
                    do eiusmod tempor incid idunt ut labore dolore magna aliqua.
                  </p>
                  <div className="btn_wrapper">
                    <a
                      href="./web_hosting.html#fav_plan"
                      className="text-decoration-none choose_plan_btn"
                    >
                      Choose Plan
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- SHARED HOSTING FEATURES SECTION --> */}
        <section className="shared_hosting_features_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="shared_hosting_features_content">
                  <h2>Shared Hosting Features</h2>
                  <p>
                    Intrinsicly actualize out-of-the-box niche markets for
                    backward-compatible web services.
                  </p>
                </div>
              </div>
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="shared_hosting_features_box hover_effect">
                  <figure>
                    <img
                      src="./assets/images/shared_hosting_features_1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                  <p>IP Transit / Connectivity</p>
                  <p className="pp">
                    Lorem ipsum dolor amet consectetur incididunt ut labore.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="shared_hosting_features_box hover_effect">
                  <figure>
                    <img
                      src="./assets/images/shared_hosting_features_2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                  <p>Monitoring</p>
                  <p className="pp">
                    Risus commodo viverra maecena edit accumsan lacus vel
                    facilisis.{" "}
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="shared_hosting_features_box hover_effect">
                  <figure>
                    <img
                      src="./assets/images/shared_hosting_features_3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                  <p>24x7 Support</p>
                  <p className="pp">
                    Duis aute irure dolor in reprehenderit dolore nulla
                    pariatur.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="shared_hosting_features_box hover_effect">
                  <figure>
                    <img
                      src="./assets/images/shared_hosting_features_4.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                  <p>SSL Certificates</p>
                  <p className="pp">
                    Lorem ipsum dolor amet consectetur incididunt ut labore.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="shared_hosting_features_box hover_effect">
                  <figure>
                    <img
                      src="./assets/images/shared_hosting_features_5.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                  <p>Personalized Email Service</p>
                  <p className="pp">
                    Risus commodo viverra maecena edit accumsan lacus vel
                    facilisis.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="shared_hosting_features_box hover_effect">
                  <figure>
                    <img
                      src="./assets/images/shared_hosting_features_6.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                  <p>Resource Protection</p>
                  <p className="pp">
                    Duis aute irure dolor in reprehenderit dolore nulla
                    pariatur.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- CONNECTIVITY SECTION --> */}
        <section className="connectivity_section web_hosting_connectivity_section">
          <div className="container">
            <div className="connectivity_box">
              <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                  <div className="connectivity_content" data-aos="fade-up">
                    <p className="global_data">Global Datacenters</p>
                    <h2>
                      Powerful Severs, High Speed Datacenter{" "}
                      <span> Connectivity</span>
                    </h2>
                    <figure className="connectivity_blue_line mb-0">
                      <img
                        src="./assets/images/connectivity_blue_line.png"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-4 col-3">
                        <div className="icon_wrapper">
                          <figure className="mb-0">
                            <img
                              src="./assets/images/connectivity_icon_1.png"
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-8 col-9">
                        <div className="icon_content_wrapper">
                          <h5>Global Datacenters</h5>
                          <p className="pp">
                            Lorem ipsum dolor sit amet consectetur adipis labore
                            dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-3 col-md-3 col-sm-4 col-3">
                        <div className="icon_wrapper">
                          <figure className="mb-0">
                            <img
                              src="./assets/images/connectivity_icon_2.png"
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                        </div>
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-8 col-9">
                        <div className="icon_content_wrapper">
                          <h5>Facility Security</h5>
                          <p className="pp mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipis cing
                            elit, sed eiusmod tempor incididunt labore dolore
                            magna aliqua.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                  <div className="connectivity_image">
                    <figure className="mb-0">
                      <img
                        src="./assets/images/connectivity_image.png"
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
        {/* <!-- FAQ'S SECTION -->         */}
        <section className="accordian-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="accordian_content">
                  <h2>Frequently Asked Questions</h2>
                  <p>
                    Do you have any Web Hosting questions? We have your answers!
                    Below you'll find answers to the most commonly asked Web
                    Hosting questions.
                  </p>
                </div>
              </div>
            </div>
            <div className="row" data-aos="fade-right">
              <div className="col-lg-1 col-md-1 col-sm-1 d-lg-block d-none"></div>
              <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12">
                <div className="accordian-section-inner position-relative">
                  <div className="accordian-inner">
                    <div id="accordion1">
                      <div className="accordion-card">
                        <div className="card-header" id="headingOne">
                          <a
                            href="#"
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <h6>What is web hosting?</h6>
                          </a>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse"
                          aria-labelledby="headingOne"
                        >
                          <div className="card-body">
                            <p className="pp text-left mb-0 p-0">
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt
                              mollit anim id est laborum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-card">
                        <div className="card-header" id="headingTwo">
                          <a
                            href="#"
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <h6>What is shared hosting?</h6>
                          </a>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                        >
                          <div className="card-body">
                            <p className="pp text-left mb-0 p-0">
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt
                              mollit anim id est laborum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-card">
                        <div className="card-header" id="headingThree">
                          <a
                            href="#"
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <h6>
                              What is the difference between web hosting &
                              shared hosting?
                            </h6>
                          </a>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                        >
                          <div className="card-body">
                            <p className="pp text-left mb-0 p-0">
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt
                              mollit anim id est laborum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-card">
                        <div className="card-header" id="headingFour">
                          <a
                            href="#"
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseFour"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            <h6>Do I need web hosting?</h6>
                          </a>
                        </div>
                        <div
                          id="collapseFour"
                          className="collapse"
                          aria-labelledby="headingFour"
                        >
                          <div className="card-body">
                            <p className="pp text-left mb-0 p-0">
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt
                              mollit anim id est laborum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-card">
                        <div className="card-header" id="headingFive">
                          <a
                            href="#"
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseFive"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            <h6>Is shared hosting right for me?</h6>
                          </a>
                        </div>
                        <div
                          id="collapseFive"
                          className="collapse"
                          aria-labelledby="headingFive"
                        >
                          <div className="card-body">
                            <p className="pp text-left mb-0 p-0">
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt
                              mollit anim id est laborum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-card">
                        <div className="card-header" id="headingSix">
                          <a
                            href="#"
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseSix"
                            aria-expanded="false"
                            aria-controls="collapseSix"
                          >
                            <h6>What web hosting package should I buy?</h6>
                          </a>
                        </div>
                        <div
                          id="collapseSix"
                          className="collapse"
                          aria-labelledby="headingSix"
                        >
                          <div className="card-body">
                            <p className="pp text-left mb-0 p-0">
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt
                              mollit anim id est laborum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-card">
                        <div className="card-header" id="headingSeven">
                          <a
                            href="#"
                            className="btn btn-link collapsed"
                            data-toggle="collapse"
                            data-target="#collapseSeven"
                            aria-expanded="false"
                            aria-controls="collapseSeven"
                          >
                            <h6>Is shared hosting reliable?</h6>
                          </a>
                        </div>
                        <div
                          id="collapseSeven"
                          className="collapse"
                          aria-labelledby="headingSeven"
                        >
                          <div className="card-body">
                            <p className="pp text-left mb-0 p-0">
                              Duis aute irure dolor in reprehenderit in
                              voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt
                              mollit anim id est laborum.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-1 col-md-1 col-sm-1 d-lg-block d-none"></div>
            </div>
          </div>
        </section>
        <Build_Website />
      </div>
    </>
  );
};

export default Page;
