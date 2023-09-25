import React from 'react'

const Shared_hosting = () => {
  return (
    <>
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
    </>
  )
}

export default Shared_hosting