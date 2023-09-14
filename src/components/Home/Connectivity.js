import React from 'react'

const Connectivity = () => {
  return (
    <>
    {/* <!-- CONNECTIVITY SECTION --> */}
    <section className="connectivity_section">
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
    </>
    )
}

export default Connectivity;