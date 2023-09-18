import Build_Website from '@/components/Home/Build_Website';
import React from 'react'

const Page = () => {
  return (
    <>
    <div className="sections_wrapper">
    <div className="contact-sub-banner-section">
        {/* <!-- BANNER SECTION --> */}
        <section className="banner-section contact-banner-section">
            <div className="container">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="w-full sm:w-[48%]">
                        <div className="banner-section-content" data-aos="fade-up">
                            <h1 data-aos="fade-up">Contact Us</h1>
                            <p className="pp" data-aos="fade-right">Hostiko is a global provider company of web hosting and related services in all over the world.</p>
                            <div className="btn_wrapper" data-aos="fade-up">
                                <a  href="./contact.html" className="text-decoration-none contact_us_btn">Contact Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-[48%]">
                        <div className="">
                            <figure className="mb-0">
                                <img src="./assets/images//contact_banner_image.png" alt=""/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    {/* <!-- REPORT & INQUIRY SECTION --> */}
    <div className="report_inquiry_section">
        <div className="container">
            <div className="flex flex-col sm:flex-row justify-between items-center" data-aos="fade-up">
                <div className="w-full sm:w-[48%]">
                    <div className="report_inquiry_box hover_effect">
                        <figure>
                            <img src="./assets/images/report_abuse_image.png" alt="" className="img-fluid"/>
                        </figure>
                        <p>Report Abuse</p>
                        <p className="pp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                </div>
                <div className="w-full sm:w-[48%]">
                    <div className="report_inquiry_box hover_effect">
                        <figure>
                            <img src="./assets/images/general_inquiry_image.png" alt="" className="img-fluid"/>
                        </figure>
                        <p>General Inquiry</p>
                        <p className="pp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- CONTACT DETAILS SECTION --> */}
    <section className="contact_details_section">
        <div className="container">
            <div className="contact_details_box">
                <div className="flex flex-col sm:flex-row justify-between items-center">
                    <div className="w-full sm:w-[48%]">
                        <div className="contact_form_content">
                            <h2>Contact To Hostiko</h2>
                            <form id="contactpage" method="POST" action="./contact-form.php">
                                <div className="flex flex-col">
                                    <div className="w-full">
                                        <div className="form-group mb-0">    
                                        <input type="text" name="fname" id="name" className="form-control" placeholder="Name"/> 
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="form-group mb-0">
                                        <input type="email" name="emailaddress" id="email" className="form-control" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="form-group mb-0">    
                                        <input type="tel" name="phonenum" id="phone" className="form-control" placeholder="Phone"/> 
                                        </div>
                                    </div>
                                    <div className="w-full">
                                        <div className="form-group mb-0">    
                                            <textarea rows="3" name="msg" id="comment" className="form-control" placeholder="Message"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="btn_wrapper">
                                    <button type="submit" name="send_message" id="send">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-full sm:w-[48%]">
                        <div className="contact_details_content" data-aos="fade-right">
                            <span>Contact Us</span>
                            <h2>Contact Details</h2>
                            <p>Mailing Address</p>
                            <p className="pp location">121 King Street, Melbourne Victoria 3000 Australia</p>
                            <p>Get Support</p>
                            <a href="mailto:support.reply@envato.com" className="text-decoration-none"><p className="pp mailone">support.reply@envato.com</p></a> 
                            <a href="mailto:support@envato.com" className="text-decoration-none"><p className="pp mailtwo">support@envato.com</p></a>
                            <p>Email</p>
                            <a href="mailto:info@hostiko.com" className="text-decoration-none"><p className="pp">info@hostiko.com</p></a>
                            <p className="callnow">Call Us Now</p>
                            <a href="tel:+928008007890" className="text-decoration-none"><p className="pp mb-0">+92 800 800 7890</p></a>
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