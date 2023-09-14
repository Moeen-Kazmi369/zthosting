import React from 'react'

const Recently_Posts = () => {
  return (
    <>
    {/* <!-- RECENT POSTS SECTION --> */}
    <section className="recent_posts_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="recent_posts_content">
                  <h2>Recent Posts</h2>
                  <p>
                    Don’t take our word for it. here’s what others have to say
                  </p>
                </div>
              </div>
            </div>
            <div className="row" data-aos="fade-right">
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="recent_post_left_box">
                  <div className="recent_posts_upper_portion">
                    <a
                      href="#"
                      className="text-decoration-none"
                      data-toggle="modal"
                      data-target="#blog-model-1"
                    >
                      <figure className="mb-0">
                        <img
                          src="./assets/images/recent_posts_left_image.png"
                          alt=""
                          className="img-fluid"
                        />
                      </figure>
                    </a>
                  </div>
                  <div className="recent_posts_lower_portion">
                    <div className="recent_posts_span_wrapper">
                      <i className="fa-regular fa-user" aria-hidden="true"></i>
                      <span>Admin</span>
                      <i
                        className="fa-solid fa-calendar-days"
                        aria-hidden="true"
                      ></i>
                      <span>20/04/2022</span>
                      <i className="fa-regular fa-clock" aria-hidden="true"></i>
                      <span>40 mins ago</span>
                    </div>
                    <a
                      href="#"
                      className="text-decoration-none"
                      data-toggle="modal"
                      data-target="#blog-model-1"
                    >
                      <h5>WordCamp US: Connecting A Global Community</h5>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="recent_post_box">
                      <div className="row">
                        <div className="col-lg-6 col-md-4 col-sm-4 col-xs-12">
                          <div className="recent_posts_right_image">
                            <a
                              href="#"
                              className="text-decoration-none"
                              data-toggle="modal"
                              data-target="#blog-model-2"
                            >
                              <figure className="mb-0">
                                <img
                                  src="./assets/images/recent_posts_right_image_1.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </figure>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-8 col-xs-12">
                          <div className="recent_posts_right_content">
                            <a
                              href="#"
                              className="text-decoration-none"
                              data-toggle="modal"
                              data-target="#blog-model-2"
                            >
                              <h5>
                                WordPress Themes Team Launched the Block Theme
                                Creation Plugin
                              </h5>
                            </a>
                            <p className="pp">
                              Duis aute irure dolor reprehenderit eu fugiat
                              nulla pariatur.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="recent_post_box">
                      <div className="row">
                        <div className="col-lg-6 col-md-4 col-sm-4 col-xs-12">
                          <div className="recent_posts_right_image">
                            <a
                              href="#"
                              className="text-decoration-none"
                              data-toggle="modal"
                              data-target="#blog-model-3"
                            >
                              <figure className="mb-0">
                                <img
                                  src="./assets/images/recent_posts_right_image_2.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </figure>
                            </a>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-8 col-xs-12">
                          <div className="recent_posts_right_content">
                            <a
                              href="#"
                              className="text-decoration-none"
                              data-toggle="modal"
                              data-target="#blog-model-3"
                            >
                              <h5>
                                WordPress Themes Team Launched the Block Theme
                                Creation Plugin
                              </h5>
                            </a>
                            <p className="pp">
                              Duis aute irure dolor reprehenderit eu fugiat
                              nulla pariatur.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Recently_Posts;