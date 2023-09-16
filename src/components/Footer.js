'use client'
import React from 'react'
import { useGlobalState } from './GlobalStateProvider';

const Footer = () => {
  const{theme,setTheme}=useGlobalState();
  return (
    <>
     {/* <!-- FOOTER SECTION --> */}
     <section className="footer-section">
          <div className="container">
            <div className="middle-portion">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-md-block d-none">
                          <div className="column_one">
                            <h6>Our Services</h6>
                            <ul className="list-unstyled">
                              <li>
                                <a href="./index.html#awesome_plan">
                                  Awesome Plan
                                </a>
                              </li>
                              <li>
                                <a href="./domain.html#domain_popular">
                                  Popular Domain
                                </a>
                              </li>
                              <li>
                                <a href="./about.html#support">Our Support</a>
                              </li>
                              <li>
                                <a href="./about.html#empowered">
                                  Hosting Empowered
                                </a>
                              </li>
                              <li>
                                <a href="./web_hosting.html#fav_plan">
                                  Favourite Plan
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-md-block d-none">
                          <div className="column_two">
                            <h6>Community</h6>
                            <ul className="list-unstyled">
                              <li>
                                <a href="./domain.html#price_domain">
                                  Price Your Domain
                                </a>
                              </li>
                              <li>
                                <a href="./vps.html#vps_server">
                                  Server Management
                                </a>
                              </li>
                              <li>
                                <a href="./dedicated.html#dedicated_plan">
                                  Dedicated Hosting Plans
                                </a>
                              </li>
                              <li>
                                <a href="./about.html#milestone">Milestones</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                          <div className="column_one">
                            <h6>About Us</h6>
                            <ul className="list-unstyled">
                              <li>
                                <a href="./index.html">Home</a>
                              </li>
                              <li>
                                <a href="./about.html">About Us</a>
                              </li>
                              <li>
                                <a href="./domain.html">Domains</a>
                              </li>
                              <li>
                                <a href="./web_hosting.html">Web Hosting</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 d-sm-block d-none">
                          <div className="column_two">
                            <h6>Contact Us</h6>
                            <ul className="list-unstyled">
                              <li>
                                <a href="./vps.html">VPS Hosting</a>
                              </li>
                              <li>
                                <a href="./dedicated.html">Dedicated Hosting</a>
                              </li>
                              <li>
                                <a href="./contact.html">Contact</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-lg-block d-none">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8385307671974!2d144.951547820201!3d-37.81725092446938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4dd5a05d97%3A0x3e64f855a564844d!2s121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2s!4v1670304983263!5m2!1sen!2s"
                            width="256"
                            height="250"
                            // style="border:0; border-radius: 10px;"
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                          ></iframe>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 d-sm-block d-none">
                          <div className="mailing_column">
                            <h6 className="mailing_h6">Mailing Address</h6>
                            <ul className="list-unstyled">
                              <li className="mailing_address">
                                <i className="fa-solid fa-location-dot location"></i>
                                <span>
                                  121 King Street, Melbourne Victoria 3000
                                  Australia
                                </span>
                              </li>
                              <li className="mailing_address">
                                <i className="fa-solid fa-phone"></i>
                                <a href="tel:+61383766284">+61 3 8376 6284</a>
                              </li>
                              <li>
                                <i className="fa-sharp fa-solid fa-envelope"></i>
                                <a href="mailto:info@hostiko.com">
                                  info@hostiko.com
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-portion">
            <div className="container">
              <div className="row">
                <div className="col-xl-6 col-lg-7 col-md-9 col-sm-12 col-xs-12">
                  <ul className="list-unstyled mb-0 bottom-portion_left_side">
                    <li>
                      <figure className="footer_logo mb-0">
                        <img
                src={`${theme?"./assets/images/ZT_hosting_white_logo.png":"./assets/images/ZT_hosting_black_logo.png"}`}
                          alt=""
                          className="img-fluid w-[200px] h-[150px]"
                        />
                      </figure>
                    </li>
                    <li>
                      <figure className="footer_bar mb-0">
                        <img
                          src="./assets/images/footer_bar.png"
                          alt=""
                          className="img-fluid"
                        />
                      </figure>
                    </li>
                    <li>
                      <span>
                        Copyright 2023 Hostiko.com All Rights Reserved
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-3 col-lg-2 col-md-3 col-sm-12 col-xs-12 d-lg-block d-none"></div>
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12 d-md-block d-none">
                  <ul className="list-unstyled mb-0 social_icons">
                    <li>
                      <a href="#">
                        <i
                          className="fa-brands fa-facebook-f"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i
                          className="fa-brands fa-twitter"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i
                          className="fa-brands fa-linkedin-in"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Footer;