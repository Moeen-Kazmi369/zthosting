"use client";
import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

const Domain_Section = () => {
  const initialValues = {
    domain: "",
  };
  const validationSchema = Yup.object().shape({
    domain: Yup.string().required("Domain name is required"),
  });
  const handleSubmit = (values, { setSubmitting }) => {
    // You can perform form submission logic here
    console.log(values);
    setSubmitting(false);
  };
  return (
    <>
      {/* <!-- DOMAIN SECTION --> */}
      <section className="domain_section">
        <div className="container">
          <div className="domain_background sm:p-20" data-aos="fade-up">
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
                  <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                  >
                    {({ isSubmitting }) => (
                      <Form
                        action="//akdesigner.com/whmcs-templates/cart.php?systpl=hostiko&a=add&domain=register&query=azcasd"
                        method="POST"
                      >
                        <div className="">
                          <div className="flex flex-col md:flex-row justify-between py-2">
                            <Field
                              type="text"
                              name="domain"
                              id="domainname"
                              className="form-control upper_layer border border-gray-800"
                              placeholder="Search domain name..."
                            />
                            <div className="input-group-append w-full flex items-center justify-center form-button">
                              <button
                                className="bg-blue-900  text-white py-2 px-3 rounded-full text-xl"
                                name="btnsubmit"
                                id="submitbtn"
                                type="submit"
                                disabled={isSubmitting}
                              >
                                Check
                              </button>
                            </div>
                          </div>
                          <ErrorMessage
                            name="domain"
                            component="div"
                            className="text-red-600"
                          />
                        </div>
                      </Form>
                    )}
                  </Formik>
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
  );
};

export default Domain_Section;
