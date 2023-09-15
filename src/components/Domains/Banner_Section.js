import React from 'react'

const Banner_Section = () => {
  return (
    <>
      {/* <!-- BANNER SECTION --> */}
      <section className="banner-section domain_banner_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                <div className="banner-section-content" data-aos="fade-up">
                  <h1 data-aos="fade-up">
                    Search & Register <span>Domain</span> For Your Website
                  </h1>
                  <p className="pp" data-aos="fade-right">
                    Your domain helps people find you online and makes a first
                    impression. Find one that represents you perfectly.
                  </p>
                  <form
                    action="//akdesigner.com/whmcs-templates/cart.php?systpl=hostiko&a=add&domain=register&query=azcasd"
                    method="POST"
                  >
                    <div className="form-row">
                      <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <input
                          type="text"
                          name="dname"
                          id="domainname"
                          className="form-control"
                          placeholder="Search domain name..."
                        />
                        <div className="input-group-append">
                          <select name="domain" id="domains">
                            <option value=".com">.com</option>
                            <option value=".org">.org</option>
                            <option value=".net">.net</option>
                          </select>
                        </div>
                        <div className="input-group-append form-button">
                          <button
                            className="btn"
                            name="btnsubmit"
                            id="submitbtn"
                            type="submit"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="span_wrapper">
                    <span className="domain_banner_span1">.com | </span>
                    <span className="domain_banner_span"> only $14 </span>
                    <span className="domain_banner_span1">.net | </span>
                    <span className="domain_banner_span"> only $12 </span>
                    <span className="domain_banner_span1">.org | </span>
                    <span className="domain_banner_span"> only $10 </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                <div className="banner_image">
                  <figure className="mb-0">
                    <img src="./assets/images/domain_banner_image.png" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Banner_Section;