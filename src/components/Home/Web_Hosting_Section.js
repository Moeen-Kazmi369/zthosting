import React from 'react'

const Web_Hosting_Section = () => {
  return (
    <>
     {/* <!-- WEB HOSTING SECTION --> */}
     <section className="web_hosting_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="web_hosting_image">
                <figure className="mb-0">
                  <img src="./assets/images/web_hosting_image.png" alt="" />
                </figure>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
              <div className="web_hosting_content" data-aos="fade-right">
                <p className="paragraph">Fastest Web Hosting</p>
                <h2>
                  We're Provide Secure Web Hosting <span>Solutions</span>
                </h2>
                <p className="pp">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incid idunt ut labore dolore magna aliqua.
                </p>
                <ul className="list-unstyled">
                  <li>
                    <i className="fa-solid fa-check"></i>Free Domain
                    Registration with Annual Plans.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>Free SSL Certificate,
                    1-Click Installer.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>Optimized to run
                    WordPress and WooCommerce.
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>Free Migration.
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