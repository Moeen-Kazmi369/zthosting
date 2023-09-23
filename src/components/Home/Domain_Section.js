import React from 'react'

const Domain_Section = () => {
  return (
    <>
     {/* <!-- DOMAIN SECTION --> */}
     <section className="domain_section">
          <div className="container">
            <div className="domain_background" data-aos="fade-up">
              <div className="row">
                <div className="col-lg-3 col-md-4 col-sm-12 col-xs-12">
                  <div className="domain_content">
                    <p>Popular Domains</p>
                    <h3>Search Your Domain Name</h3>
                    <figure className="mb-0">
                      <img
                        src="./assets/images/domain_globe_icon.png"
                        alt=""
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                </div>
                <div className="col-lg-1 col-md-1 col-sm-6 col-xs-12 d-lg-block d-none"></div>
                <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12">
                  <div className="domain_right_content">
                    <form
                      action="//akdesigner.com/whmcs-templates/cart.php?systpl=hostiko&a=add&domain=register&query=azcasd"
                      method="POST"
                    >
                      <div className="form-row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <input
                            type="text"
                            name="domain"
                            id="domainname"
                            className="form-control upper_layer border border-gray-800"
                            placeholder="Search domain name..."
                          />
                          <div className="input-group-append w-full flex items-center justify-center form-button">
                            <button
                              className="btn"
                              name="btnsubmit"
                              id="submitbtn"
                              type="submit"
                            >
                              Check
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                    <ul className="list-unstyled mb-0">
                      <li>
                        <p>.com</p>
                        <p className="price">$7.99</p>
                      </li>
                      <li>
                        <p>.net</p>
                        <p className="price">$9.99</p>
                      </li>
                      <li>
                        <p>.org</p>
                        <p className="price">$9.99</p>
                      </li>
                      <li>
                        <p>.info</p>
                        <p className="price">$7.99</p>
                      </li>
                      <li>
                        <p>.club</p>
                        <p className="price">$5.99</p>
                      </li>
                      <li>
                        <p>.xyz</p>
                        <p className="price">$8.99</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Domain_Section;