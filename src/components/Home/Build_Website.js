import React from 'react'

const Build_Website = () => {
  return (
    <>
     {/* <!-- BUILD WEBSITE SECTION --> */}
     <section className="build_website_section">
          <div className="container">
            <div className="build_website_background_image">
              <div className="row">
                <div className="col-lg-7 col-md-8 col-sm-12 col-xs-12">
                  <div className="build_website_content">
                    <h2>
                      Build Your Website with <span>Hostiko</span>
                    </h2>
                    <p>
                      From professional business to enterprise, we’ve got you
                      covered!
                    </p>
                  </div>
                </div>
                <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12 d-lg-block d-none"></div>
                <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                  <div className="build_website_btn_wrapper">
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

export default Build_Website;