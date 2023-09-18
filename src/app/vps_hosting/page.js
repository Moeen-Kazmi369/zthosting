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
                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                  <div className="banner-section-content" data-aos="fade-up">
                    <h1 data-aos="fade-up">
                      Reliable VPS Hosting Built for Enterprise
                    </h1>
                    <p className="pp" data-aos="fade-right">
                      VPS Hosting provides dedicated resources so you know your
                      website will perform as expected.
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
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                  <div className="banner_image">
                    <figure className="mb-0 vps_banner_image">
                      <img src="./assets/images/vps_banner_image.png" alt="" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* <!-- VPS SLIDER SECTION --> */}
        <div className="vps_slider_section">
          <div className="container">
            <div className="vps_slider_back">
              <p className="mb-0 pp side_back_ptag">
                <span>Need a little boost?</span> You can add additional RAM,
                CPUs, Storage Space or Dedicated IPs, as you’re checking out.
              </p>
              <div className="vps_slider_box">
                <div className="row">
                  <div className="col-lg-9 col-md-6 col-sm-12 col-xs-12">
                    <div className="vps_left_side">
                      <div className="sliderbox">
                        <div
                          id="slider"
                          className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"
                          aria-disabled="false"
                        >
                          <div className="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min"></div>
                          <a
                            className="ui-slider-handle ui-state-default ui-corner-all"
                            href="#"
                          ></a>
                        </div>
                      </div>
                      <div id="ram_val" className="box">
                        <div className="box_image_content">
                          <figure className="mb-0">
                            <img
                              src="./assets/images/vps_slider_1.png"
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                        </div>
                        <div className="box_wrapper">
                          <p className="pp">Momory</p>
                          <p className="value mb-0">2 GB</p>
                        </div>
                      </div>
                      <div id="cpu_val" className="box box_2">
                        <div className="box_image_content">
                          <figure className="mb-0">
                            <img
                              src="./assets/images/vps_slider_2.png"
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                        </div>
                        <div className="box_wrapper">
                          <p className="pp">CPU</p>
                          <p className="value mb-0">1 Core (s)</p>
                        </div>
                      </div>
                      <div id="hdd_val" className="box">
                        <div className="box_image_content">
                          <figure className="mb-0">
                            <img
                              src="./assets/images/vps_slider_3.png"
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                        </div>
                        <div className="box_wrapper">
                          <p className="pp">Storage</p>
                          <p className="value mb-0">30 GB</p>
                        </div>
                      </div>
                      <div id="bandwidth_val" className="box box_4">
                        <div className="box_image_content">
                          <figure className="mb-0">
                            <img
                              src="./assets/images/vps_slider_4.png"
                              alt=""
                              className="img-fluid"
                            />
                          </figure>
                        </div>
                        <div className="box_wrapper">
                          <p className="pp">Bandwidth</p>
                          <p className="value mb-0">3 TB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
                    <div className="vps_right_side">
                      <p className="pp">Starting from</p>
                      <div className="price_span_wrapper">
                        <span id="price" className="price">
                          $30.99{" "}
                        </span>
                        <span className="month">/month</span>
                      </div>
                      <p className="pp pay_month">
                        1 month free if you pay for a year!
                      </p>
                      <div className="btn_wrapper">
                        <a
                          href="http://ww25.your-domain.com/?cmd=cart&action=add&id=$50&subid1=20230215-0110-546e-ab31-6f3a20f82fbd"
                          className="text-decoration-none ordernow_btn"
                        >
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- VPS PLANS SECTION --> */}
        <section className="vps_plans_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="vps_plans_content">
                  <h4>The benefits of Hostiko’s VPS plans:</h4>
                </div>
              </div>
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="box hover_effect">
                  <div className="box_image_content">
                    <figure className="mb-0">
                      <img
                        src="./assets/images/vps_plans_1.png"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="box_wrapper">
                    <p className="mb-0">Operating System</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="box hover_effect">
                  <div className="box_image_content">
                    <figure className="mb-0">
                      <img
                        src="./assets/images/vps_plans_2.png"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="box_wrapper">
                    <p className="mb-0">Advanced Functionality</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="box hover_effect">
                  <div className="box_image_content">
                    <figure className="mb-0">
                      <img
                        src="./assets/images/vps_plans_3.png"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="box_wrapper">
                    <p className="mb-0">Flexible Software</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="box hover_effect">
                  <div className="box_image_content">
                    <figure className="mb-0">
                      <img
                        src="./assets/images/vps_plans_4.png"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="box_wrapper">
                    <p className="mb-0">Easy cPanel Control Panel</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="box hover_effect">
                  <div className="box_image_content">
                    <figure className="mb-0">
                      <img
                        src="./assets/images/vps_plans_5.png"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="box_wrapper">
                    <p className="mb-0">Full Root Access</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="box hover_effect">
                  <div className="box_image_content">
                    <figure className="mb-0">
                      <img
                        src="./assets/images/vps_plans_6.png"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="box_wrapper">
                    <p className="mb-0">Weekly Backups</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- VPS MANAGEMENT SECTION --> */}
        <section className="vps_management_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="vps_management_content">
                  <h2>Choose Your VPS Management Level</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="vps_management_box" data-aos="fade-up">
                  <h4>Unmanaged VPS</h4>
                  <p className="pp">Self-Configure Your Custom Server</p>
                  <div className="box_image_content">
                    <figure className="mb-0">
                      <img
                        src="./assets/images/vps_management_1.png"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="box_wrapper">
                    <ul className="list-unstyled">
                      <li>
                        <i className="fa-solid fa-check"></i>
                        <span>Self-Configure </span>Your Custom Server
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        <span>Managed </span>Hardware & Network
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        <span>Choice </span>of Operating System
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        <span>Full </span>Root Access
                      </li>
                    </ul>
                  </div>
                  <div className="btn_wrapper">
                    <a
                      href="https://akdesigner.com/whmcs-templates/index.php?rp=/store/vps-hosting"
                      className="text-decoration-none get_unmanaged_btn"
                    >
                      Get Unmanaged VPS
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div className="vps_management_box" data-aos="fade-up">
                  <h4>Managed VPS</h4>
                  <p className="pp">100% Worry-Free, HostGuard Server Management</p>
                  <div className="box_image_content">
                    <figure className="mb-0">
                      <img
                        src="./assets/images/vps_management_2.png"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="box_wrapper">
                    <ul className="list-unstyled">
                      <li>
                        <i className="fa-solid fa-check"></i>
                        <span>Easy </span>cPanel Control Panel
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        <span>Managed </span>Hardware & Network
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        <span>24/7/365 </span>Technical Live Support
                      </li>
                      <li>
                        <i className="fa-solid fa-check"></i>
                        <span>Manager </span>Server Security
                      </li>
                    </ul>
                  </div>
                  <div className="btn_wrapper">
                    <a
                      href="https://akdesigner.com/whmcs-templates/index.php?rp=/store/vps-hosting"
                      className="text-decoration-none get_managed_btn"
                    >
                      Get Managed VPS
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- VPS SERVER MANAGEMENT SECTION --> */}
        <section className="server_management_section" id="vps_server">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="server_management_content">
                  <h2>VPS Server Management</h2>
                  <p className="pp">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    labore dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
            <table className="stacktable large-only" data-aos="fade-up">
              <tr>
                <th></th>
                <th className="second_column">
                  <p className="mb-0">User-Responsible</p>
                  FREE (default)
                </th>
                <th className="third_column">
                  <p className="mb-0">Basic</p>
                  $20.00 /mo
                </th>
                <th className="forth_column">
                  <p className="mb-0">Complete</p>
                  $30.00 /mo
                </th>
              </tr>
              <tr>
                <td className="first_column">
                  <i className="fa-solid fa-check"></i> Security Enhancements{" "}
                  <i className="fa-solid fa-question"></i>
                </td>
                <td className="second_column">
                  <span>-</span>
                </td>
                <td className="third_column">
                  <i className="fa-solid fa-check"></i>
                </td>
                <td className="forth_column">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td className="first_column">
                  <i className="fa-solid fa-check"></i> Restore Server Failure{" "}
                  <i className="fa-solid fa-question"></i>
                </td>
                <td className="second_column">
                  $15.00
                  <p className="mb-0">each restore</p>
                </td>
                <td className="third_column">
                  <i className="fa-solid fa-check"></i>
                </td>
                <td className="forth_column">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td className="first_column">
                  <i className="fa-solid fa-check"></i> Core Software Changes{" "}
                  <i className="fa-solid fa-question"></i>
                </td>
                <td className="second_column">
                  1 hr - $15.00
                  <p className="mb-0">flat rate</p>
                </td>
                <td className="third_column">
                  1 hr - $20.00
                  <p className="mb-0">flat rate</p>
                </td>
                <td className="forth_column">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td className="first_column">
                  <i className="fa-solid fa-check"></i> Fix server Failure Cause{" "}
                  <i className="fa-solid fa-question"></i>
                </td>
                <td className="second_column">
                  1 hr - $15.00
                  <p className="mb-0">flat rate</p>
                </td>
                <td className="third_column">
                  1 hr - $20.00
                  <p className="mb-0">flat rate</p>
                </td>
                <td className="forth_column">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td className="first_column">
                  <i className="fa-solid fa-check"></i> Customer Support Advice{" "}
                  <i className="fa-solid fa-question"></i>
                </td>
                <td className="second_column">
                  <i className="fa-solid fa-check"></i>
                </td>
                <td className="third_column">
                  <i className="fa-solid fa-check"></i>
                </td>
                <td className="forth_column">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td className="first_column">
                  <i className="fa-solid fa-check"></i> Initial VPS Setup
                </td>
                <td className="second_column">
                  <i className="fa-solid fa-check"></i>
                </td>
                <td className="third_column">
                  <i className="fa-solid fa-check"></i>
                </td>
                <td className="forth_column">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td className="first_column">
                  <i className="fa-solid fa-check"></i> Operating System{" "}
                  <i className="fa-solid fa-question"></i>
                </td>
                <td className="second_column">
                  <i className="fa-solid fa-check"></i>
                </td>
                <td className="third_column">
                  <i className="fa-solid fa-check"></i>
                </td>
                <td className="forth_column">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td className="first_column">
                  <i className="fa-solid fa-check"></i> Root Access
                </td>
                <td className="second_column">
                  <i className="fa-solid fa-check"></i>
                </td>
                <td className="third_column">
                  <i className="fa-solid fa-check"></i>
                </td>
                <td className="forth_column">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
            </table>
            <table className="stacktable small-only" data-aos="fade-up">
              <tr>
                <th className="st-head-row" colspan="2">
                  <i className="fa-solid fa-check"></i> Security Enhancements{" "}
                  <i className="fa-solid fa-question"></i>
                </th>
              </tr>
              <tr>
                <td className="st-key">
                  <p className="mb-0">User-Responsible</p>
                  FREE (default)
                </td>
                <td className="st-val">
                  <span>-</span>
                </td>
              </tr>
              <tr>
                <td className="st-key">
                  <p className="mb-0">Basic</p>
                  $20.00 /mo
                </td>
                <td className="st-val">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td className="st-key">
                  <p className="mb-0">Complete</p>
                  $30.00 /mo
                </td>
                <td className="st-val">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <th className="st-head-row" colspan="2">
                  <i className="fa-solid fa-check"></i> Restore Server Failure{" "}
                  <i className="fa-solid fa-question"></i>
                </th>
              </tr>
              <tr>
                <td className="st-key">
                  <p className="mb-0">User-Responsible</p>
                  FREE (default)
                </td>
                <td className="st-val">
                  $15.00
                  <p className="mb-0">each restore</p>
                </td>
              </tr>
              <tr>
                <td className="st-key">
                  <p className="mb-0">Basic</p>
                  $20.00 /mo
                </td>
                <td className="st-val">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td className="st-key">
                  <p className="mb-0">Complete</p>
                  $30.00 /mo
                </td>
                <td className="st-val">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <th className="st-head-row" colspan="2">
                  <i className="fa-solid fa-check"></i> Core Software Changes{" "}
                  <i className="fa-solid fa-question"></i>
                </th>
              </tr>
              <tr>
                <td className="st-key">
                  <p className="mb-0">User-Responsible</p>
                  FREE (default)
                </td>
                <td className="st-val">
                  1 hr - $15.00
                  <p className="mb-0">flat rate</p>
                </td>
              </tr>
              <tr>
                <td className="st-key">
                  <p className="mb-0">Basic</p>
                  $20.00 /mo
                </td>
                <td className="st-val">
                  1 hr - $20.00
                  <p className="mb-0">flat rate</p>
                </td>
              </tr>
              <tr>
                <td className="st-key">
                  <p className="mb-0">Complete</p>
                  $30.00 /mo
                </td>
                <td className="st-val">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <th className="st-head-row" colspan="2">
                  <i className="fa-solid fa-check"></i> Fix server Failure Cause{" "}
                  <i className="fa-solid fa-question"></i>
                </th>
              </tr>
              <tr>
                <td className="st-key">
                  <p className="mb-0">User-Responsible</p>
                  FREE (default)
                </td>
                <td className="st-val">
                  1 hr - $15.00
                  <p className="mb-0">flat rate</p>
                </td>
              </tr>
              <tr>
                <td className="st-key">
                  <p className="mb-0">Basic</p>
                  $20.00 /mo
                </td>
                <td className="st-val">
                  1 hr - $20.00
                  <p className="mb-0">flat rate</p>
                </td>
              </tr>
              <tr>
                <td className="st-key">
                  <p className="mb-0">Complete</p>
                  $30.00 /mo
                </td>
                <td className="st-val">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <th className="st-head-row" colspan="2">
                  <i className="fa-solid fa-check"></i> Customer Support Advice{" "}
                  <i className="fa-solid fa-question"></i>
                </th>
              </tr>
              <tr>
                <td className="st-key">
                  <p className="mb-0">User-Responsible</p>
                  FREE (default)
                </td>
                <td className="st-val">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td className="st-key">
                  <p className="mb-0">Basic</p>
                  $20.00 /mo
                </td>
                <td className="st-val">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td className="st-key">
                  <p className="mb-0">Complete</p>
                  $30.00 /mo
                </td>
                <td className="st-val">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <th className="st-head-row" colspan="2">
                  <i className="fa-solid fa-check"></i> Initial VPS Setup
                </th>
              </tr>
              <tr>
                <td className="st-key">
                  <p className="mb-0">User-Responsible</p>
                  FREE (default)
                </td>
                <td className="st-val">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td className="st-key">
                  <p className="mb-0">Basic</p>
                  $20.00 /mo
                </td>
                <td className="st-val">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td className="st-key">
                  <p className="mb-0">Complete</p>
                  $30.00 /mo
                </td>
                <td className="st-val">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <th className="st-head-row" colspan="2">
                  <i className="fa-solid fa-check"></i> Operating System{" "}
                  <i className="fa-solid fa-question"></i>
                </th>
              </tr>
              <tr>
                <td className="st-key">
                  <p className="mb-0">User-Responsible</p>
                  FREE (default)
                </td>
                <td className="st-val">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td className="st-key">
                  <p className="mb-0">Basic</p>
                  $20.00 /mo
                </td>
                <td className="st-val">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td className="st-key">
                  <p className="mb-0">Complete</p>
                  $30.00 /mo
                </td>
                <td className="st-val">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <th className="st-head-row" colspan="2">
                  <i className="fa-solid fa-check"></i> Root Access
                </th>
              </tr>
              <tr>
                <td className="st-key">
                  <p className="mb-0">User-Responsible</p>
                  FREE (default)
                </td>
                <td className="st-val">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td className="st-key">
                  <p className="mb-0">Basic</p>
                  $20.00 /mo
                </td>
                <td className="st-val">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
              <tr>
                <td className="st-key">
                  <p className="mb-0">Complete</p>
                  $30.00 /mo
                </td>
                <td className="st-val">
                  <i className="fa-solid fa-check"></i>
                </td>
              </tr>
            </table>
            <div className="bottom_wrapper">
              <p className="pp">Your business, your call</p>
              <div className="btn_wrapper">
                <a
                  href="https://akdesigner.com/whmcs-templates/index.php?rp=/store/vps-hosting"
                  className="text-decoration-none vps_hosting_btn"
                >
                  Get VPS Hosting
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- VPS HOSTING FEATURES SECTION --> */}
        <section className="vps_hosting_features_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="vps_hosting_features_content">
                  <h2>VPS Hosting Features</h2>
                  <p>
                    Lorem ipsum dolor sit amet labore et dolore magna aliqua.
                  </p>
                </div>
              </div>
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="vps_hosting_features_box hover_effect">
                  <figure>
                    <img
                      src="./assets/images/vps_hosting_features_1.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                  <p>Completely Customizable</p>
                  <p className="pp">
                    Lorem ipsum dolor amet consectetur incididunt ut labore.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="vps_hosting_features_box hover_effect">
                  <figure>
                    <img
                      src="./assets/images/vps_hosting_features_2.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                  <p>Access Control</p>
                  <p className="pp">
                    Risus commodo viverra maecena edit accumsan lacus vel
                    facilisis.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="vps_hosting_features_box hover_effect">
                  <figure>
                    <img
                      src="./assets/images/vps_hosting_features_3.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                  <p>Incredibly Fast</p>
                  <p className="pp">
                    Duis aute irure dolor in reprehenderit dolore nulla
                    pariatur.
                  </p>
                </div>
              </div>
            </div>
            <div className="row" data-aos="fade-up">
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="vps_hosting_features_box hover_effect">
                  <figure>
                    <img
                      src="./assets/images/vps_hosting_features_4.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                  <p>Multi-Server Management</p>
                  <p className="pp">
                    Lorem ipsum dolor amet consectetur incididunt ut labore.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="vps_hosting_features_box hover_effect">
                  <figure>
                    <img
                      src="./assets/images/vps_hosting_features_5.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                  <p>Powerful VPS Security</p>
                  <p className="pp">
                    Risus commodo viverra maecena edit accumsan lacus vel
                    facilisis.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                <div className="vps_hosting_features_box hover_effect">
                  <figure>
                    <img
                      src="./assets/images/vps_hosting_features_6.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                  <p>24/7 Live Support</p>
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
        <section className="connectivity_section vps_connectivity_section">
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
        <section className="accordian-section vps_accordian-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="accordian_content">
                  <h2>Frequently Asked Questions</h2>
                  <p>
                    Do you have any Dedicated Server questions? We have your
                    answers! Below you'll find answers to the most commonly
                    asked Dedicated Server questions.
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
                            <h6>What is VPS Hosting?</h6>
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
                            <h6>What are VPS Hosting Benefits?</h6>
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
                              What is the difference between Shared vs VPS
                              Hosting?
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
                            <h6>How do I get started with VPS Hosting?</h6>
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
