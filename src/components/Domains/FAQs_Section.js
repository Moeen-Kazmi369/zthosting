import Link from 'next/link';
import React from 'react'

const FAQs_Section = () => {
  return (
    <>
    {/* <!-- FAQ'S SECTION -->         */}
    <section className="accordian-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <div className="accordian_content">
                <h2>Frequently Asked Questions</h2>
                <p>
                  Do you have any Web Hosting questions? We have your answers!
                </p>
              </div>
            </div>
          </div>
          <div className="row" data-aos="fade-right">
            <div className="col-lg-1 col-md-1 col-sm-1 d-lg-block d-none"></div>
            <div className="col-lg-10 col-md-12 col-sm-12 col-xs-12">
              <div className="accordian-section-inner position-relative">
                <div className="accordian-inner">
                  <div id="accordion1">
                    <div className="accordion-card">
                      <div className="card-header" id="headingOne">
                        <Link
                          href="#"
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="false"
                          aria-controls="collapseOne"
                        >
                          <h6>What is a domain name and why do I need one?</h6>
                        </Link>
                      </div>
                      <div
                        id="collapseOne"
                        className="collapse"
                        aria-labelledby="headingOne"
                      >
                        <div className="card-body">
                          <p className="pp text-left mb-0 p-0">
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-card">
                      <div className="card-header" id="headingTwo">
                        <Link
                          href="#"
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <h6>What TLDs are both popular and affordable?</h6>
                        </Link>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                      >
                        <div className="card-body">
                          <p className="pp text-left mb-0 p-0">
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-card">
                      <div className="card-header" id="headingThree">
                        <Link
                          href="#"
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <h6>Do you have any domain promotions/discounts?</h6>
                        </Link>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                      >
                        <div className="card-body">
                          <p className="pp text-left mb-0 p-0">
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-card">
                      <div className="card-header" id="headingFour">
                        <Link
                          href="#"
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFour"
                          aria-expanded="false"
                          aria-controls="collapseFour"
                        >
                          <h6>How do I check if a domain is available?</h6>
                        </Link>
                      </div>
                      <div
                        id="collapseFour"
                        className="collapse"
                        aria-labelledby="headingFour"
                      >
                        <div className="card-body">
                          <p className="pp text-left mb-0 p-0">
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-card">
                      <div className="card-header" id="headingFive">
                        <Link
                          href="#"
                          className="btn btn-link collapsed"
                          data-toggle="collapse"
                          data-target="#collapseFive"
                          aria-expanded="false"
                          aria-controls="collapseFive"
                        >
                          <h6>How do I buy domain names?</h6>
                        </Link>
                      </div>
                      <div
                        id="collapseFive"
                        className="collapse"
                        aria-labelledby="headingFive"
                      >
                        <div className="card-body">
                          <p className="pp text-left mb-0 p-0">
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-1 col-md-1 col-sm-1 d-lg-block d-none"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FAQs_Section;