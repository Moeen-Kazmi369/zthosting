import React from 'react'

const Blog_Section_Popup = () => {
  return (
    <>
          {/* <!-- BLOG SECTION POPUP --> */}
          <div
        id="blog-model-1"
        className="modal fade blog-model-con"
        tabindex="-1"
        // style="display: none;"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="fa-solid fa-x"></i>
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="blog-box-item mb-0">
                <div className="blog-img">
                  <figure className="mb-0">
                    <img
                      src="./assets/images/recent_posts_left_image.png"
                      alt="blog-img"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="blog-content pl-0 pr-0">
                  <div className="blog-auteher-title">
                    <span>By Elina Parker</span>
                    <span className="float-lg-right">Feb 06, 2023</span>
                  </div>
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
                  <h5>WordCamp US: Connecting A Global Community</h5>
                  <p className="pp">
                    Quis nostrum exercitationem ullam corporis suscit labor
                    iosam, nisi ut aliquid ex ea commodi conse aute irure dolor
                    in reprehenderit in voluptateesse occaecat cuida at non
                    proident, sunt in culpa qui officia deserun.Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Nullam tempor
                    eros a tellus auctor, nec suscipit nunc dignissim. Ut
                    suscipit gravida augue sed elementum. Sed sed luctus nisl.
                    Donec scelerisque nisi in sodales mattis. Vestibulum
                    suscipit odio ac enim blandit sollicitudin. Aliquam ultrices
                    sem quis urna placerat interdum. Etiam rutrum, quam sagittis
                    tristique mollis, libero arcu scelerisque erat, eget
                    tincidunt eros diam quis nunc.
                  </p>
                  <h2>Contact To Hostiko</h2>
                  <form className="contact-form blog-model-form">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input
                            type="text"
                            className="form_style"
                            placeholder="Name"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input
                            type="email"
                            className="form_style"
                            placeholder="Email"
                            name="emailaddress"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input
                            type="tel"
                            className="form_style"
                            placeholder="Phone"
                            name="phonenumber"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input
                            type="text"
                            className="form_style"
                            placeholder="Subject"
                            name="subject"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className=" form-group mb-0">
                          <textarea
                            className="form_style"
                            placeholder="Message"
                            rows="3"
                            name="comments"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <button type="submit">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="blog-model-2"
        className="modal fade blog-model-con"
        tabindex="-1"
        // style="display: none;"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="fa-solid fa-x"></i>
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="blog-box-item mb-0">
                <div className="blog-img">
                  <figure className="mb-0">
                    <img
                      src="./assets/images/blog_post_2.png"
                      alt="blog-img"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="blog-content pl-0 pr-0">
                  <div className="blog-auteher-title">
                    <span>By Elina Parker</span>
                    <span className="float-lg-right">Feb 06, 2023</span>
                  </div>
                  <h5>
                    WordPress Themes Team Launched the Block Theme Creation
                    Plugin
                  </h5>
                  <p className="pp">
                    Quis nostrum exercitationem ullam corporis suscit labor
                    iosam, nisi ut aliquid ex ea commodi conse aute irure dolor
                    in reprehenderit in voluptateesse occaecat cuida at non
                    proident, sunt in culpa qui officia deserun.Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Nullam tempor
                    eros a tellus auctor, nec suscipit nunc dignissim. Ut
                    suscipit gravida augue sed elementum. Sed sed luctus nisl.
                    Donec scelerisque nisi in sodales mattis. Vestibulum
                    suscipit odio ac enim blandit sollicitudin. Aliquam ultrices
                    sem quis urna placerat interdum. Etiam rutrum, quam sagittis
                    tristique mollis, libero arcu scelerisque erat, eget
                    tincidunt eros diam quis nunc.
                  </p>
                  <h2>Contact To Hostiko</h2>
                  <form className="contact-form blog-model-form">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input
                            type="text"
                            className="form_style"
                            placeholder="Name"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input
                            type="email"
                            className="form_style"
                            placeholder="Email"
                            name="emailaddress"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input
                            type="tel"
                            className="form_style"
                            placeholder="Phone"
                            name="phonenumber"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input
                            type="text"
                            className="form_style"
                            placeholder="Subject"
                            name="subject"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className=" form-group mb-0">
                          <textarea
                            className="form_style"
                            placeholder="Message"
                            rows="3"
                            name="comments"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <button type="submit">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="blog-model-3"
        className="modal fade blog-model-con"
        tabindex="-1"
        // style="display: none;"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">
                  <i className="fa-solid fa-x"></i>
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="blog-box-item mb-0">
                <div className="blog-img">
                  <figure className="mb-0">
                    <img
                      src="./assets/images/blog_post_3.png"
                      alt="blog-img"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="blog-content pl-0 pr-0">
                  <div className="blog-auteher-title">
                    <span>By Elina Parker</span>
                    <span className="float-lg-right">Feb 06, 2023</span>
                  </div>
                  <h5>
                    WordPress Themes Team Launched the Block Theme Creation
                    Plugin
                  </h5>
                  <p className="pp">
                    Quis nostrum exercitationem ullam corporis suscit labor
                    iosam, nisi ut aliquid ex ea commodi conse aute irure dolor
                    in reprehenderit in voluptateesse occaecat cuida at non
                    proident, sunt in culpa qui officia deserun.Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Nullam tempor
                    eros a tellus auctor, nec suscipit nunc dignissim. Ut
                    suscipit gravida augue sed elementum. Sed sed luctus nisl.
                    Donec scelerisque nisi in sodales mattis. Vestibulum
                    suscipit odio ac enim blandit sollicitudin. Aliquam ultrices
                    sem quis urna placerat interdum. Etiam rutrum, quam sagittis
                    tristique mollis, libero arcu scelerisque erat, eget
                    tincidunt eros diam quis nunc.
                  </p>
                  <h2>Contact To Hostiko</h2>
                  <form className="contact-form blog-model-form">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input
                            type="text"
                            className="form_style"
                            placeholder="Name"
                            name="name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input
                            type="email"
                            className="form_style"
                            placeholder="Email"
                            name="emailaddress"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input
                            type="tel"
                            className="form_style"
                            placeholder="Phone"
                            name="phonenumber"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group mb-0">
                          <input
                            type="text"
                            className="form_style"
                            placeholder="Subject"
                            name="subject"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className=" form-group mb-0">
                          <textarea
                            className="form_style"
                            placeholder="Message"
                            rows="3"
                            name="comments"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <button type="submit">Send Message</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog_Section_Popup;