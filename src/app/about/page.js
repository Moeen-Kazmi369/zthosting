import Build_Website from '@/components/Home/Build_Website';
import React from 'react'

const Page = () => {
  return (
    <>
    <div className="sections_wrapper">
    <div className="about-sub-banner-section">
        {/* <!-- BANNER SECTION --> */}
        <section className="banner-section about-banner-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                        <div className="banner-section-content" data-aos="fade-up">
                            <h1 data-aos="fade-up">About Us</h1>
                            <p className="pp" data-aos="fade-right">We offer data center colocation, cloud, connectivity, hardware, software,
                                and managed services from providers worldwide.</p>
                            <div className="btn_wrapper" data-aos="fade-up">
                                <a  href="./about.html" className="text-decoration-none about_us_btn">About Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                        <div className="banner_image">
                            <figure className="mb-0">
                                <img src="./assets/images/about_banner_image.png" alt=""/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    {/* <!-- MISSION & VISION SECTION --> */}
    <div className="mission_vision_section">
        <div className="container">
            <div className="row" data-aos="fade-up">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="mission_vision_box hover_effect">
                        <figure>
                            <img src="./assets/images/our_mission_image.png" alt="" className="img-fluid"/>
                        </figure>
                        <p>Our Mission</p>
                        <p className="pp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div className="mission_vision_box hover_effect">
                        <figure>
                            <img src="./assets/images/our_vision_image.png" alt="" className="img-fluid"/>
                        </figure>
                        <p>Our Vision</p>
                        <p className="pp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- HOSTING EMPOWERED SECTION --> */}
    <section className="hosting_empowered_section" id="empowered">
        <div className="container">
            <div className="hosting_empowered_box">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="hosting_empowered_image">
                            <figure className="mb-0">
                                <img src="./assets/images/hosting_empowered_image.png" alt="" className="img-fluid"/>
                            </figure>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <div className="hosting_empowered_content" data-aos="fade-right">
                            <p className="about_us">About Us</p>
                            <h2>Hosting Empowered</h2>
                            <p>Our hosting solutions range from web hosting to blazing fast shared hosting.</p>
                            <p className="pp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ut tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim enim veniam, quis nostrud exercitation ullami laboris nisi ut aliquip ex ea comm do consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                            <div className="box">
                                <div className="box_image_content">
                                    <figure className="mb-0">
                                        <img src="./assets/images/hosting_empowered_icon_1.png" alt="" className="img-fluid"/>
                                    </figure>
                                </div>
                                <div className="box_wrapper">
                                    <span className="counter">50</span>
                                    <span className="plus_sign">+</span>
                                    <p className="mb-0 pp">Datacenters</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box_image_content">
                                    <figure className="mb-0">
                                        <img src="./assets/images/hosting_empowered_icon_2.png" alt="" className="img-fluid"/>
                                    </figure>
                                </div>
                                <div className="box_wrapper">
                                    <span className="counter">1150</span>
                                    <span className="plus_sign">+</span>
                                    <p className="mb-0 pp">Employees</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="box_image_content">
                                    <figure className="mb-0">
                                        <img src="./assets/images/hosting_empowered_icon_3.png" alt="" className="img-fluid"/>
                                    </figure>
                                </div>
                                <div className="box_wrapper">
                                    <span>2.5m</span>
                                    <p className="mb-0 pp">Customers</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- MILESTONES SECTION --> */}
    <section className="milestones_section" id="milestone">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="milestones_content">
                        <h2>Milestones</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="milestones">
                        <div className="milestones_map_content m1">
                            <p className="pp mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidi dunt labore et dolore magna aliqua.</p>
                        </div>
                        <div className="milestones_map_content m2">
                            <p className="pp mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidi dunt labore et dolore magna aliqua.</p>
                        </div>
                        <div className="milestones_map_content m3">
                            <p className="pp mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidi dunt labore et dolore magna aliqua.</p>
                        </div>
                        <figure className="milestones_center_bar mb-0">
                             <img src="./assets/images/milestones_center_bar.png" alt="" className="img-fluid"/>
                        </figure>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div className="milestones_wrapper">
                        <div className="milestones_map_content milestones_map_content2 m4">
                            <p className="pp mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidi dunt labore et dolore magna aliqua.</p>
                        </div>
                        <div className="milestones_map_content milestones_map_content2 m5">
                            <p className="pp mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidi dunt labore et dolore magna aliqua.</p>
                        </div>
                        <div className="milestones_map_content milestones_map_content2 m6">
                            <p className="pp mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod tempor incidi dunt labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- OUR SUPPORT SECTION --> */}
    <section className="support_section" id="support">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="support_content">
                        <h2>Our Support knows No Boundaries</h2>
                        <p className="pp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
            </div>
            <div className="row" data-aos="fade-up">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="support_box hover_effect">
                        <h4>Texas Raised</h4>
                        <p className="pp">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="support_box hover_effect">
                        <h4>We Host Worldwide</h4>
                        <p className="pp">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                    <div className="support_box hover_effect">
                        <h4>24/7/365 Support</h4>
                        <p className="pp">Lorem ipsum dolor sit amet, consect adipiscing elit sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- CUSTOMER SECTION --> */}
    <section className="customer_section about_customer_section">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="customer_heading_content">
                        <h2>Our Happy Customers</h2>
                        <p>Don’t take our word for it. here’s what others have to say</p>
                    </div>
                </div>
            </div>
            <div className="row position-relative" data-aos="fade-up">
                <div className="owl-carousel owl-theme">
                    <div className="item">
                        <div className="customer_box">
                            <div className="customer_content">
                                <figure className="quote_mark"><img src="./assets/images/testimonial_quote.png" className="img-fluid" alt=""/></figure>
                                <p className="pp">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                <figure className="customer_image"><img src="./assets/images/testimonial_image_2.png" className="img-fluid" alt=""/></figure>
                                <p className="mb-0 customer_name">Rizwan Joseph</p>
                                <span>Co-Founder</span>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="customer_box">
                            <div className="customer_content">
                                <figure className="quote_mark"><img src="./assets/images/testimonial_quote.png" className="img-fluid" alt=""/></figure>
                                <p className="pp">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                <figure className="customer_image"><img src="./assets/images/testimonial_image_3.png" className="img-fluid" alt=""/></figure>
                                <p className="mb-0 customer_name">Olivia Charlotte</p>
                                <span>Mananger</span> 
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="customer_box">
                            <div className="customer_content">
                                <figure className="quote_mark"><img src="./assets/images/testimonial_quote.png" alt="" className="img-fluid"/></figure>
                                <p className="pp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                <figure className="customer_image"><img src="./assets/images/testimonial_image_1.png" className="img-fluid" alt=""/></figure>
                                <p className="mb-0 customer_name">George Michel</p>
                                <span>Director</span>                       
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Build_Website/>
</div>
    </>
  )
}

export default Page;