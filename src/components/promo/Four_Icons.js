import React from 'react'

const Four_Icons = () => {
  return (
    <>
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
    </>
  )
}

export default Four_Icons