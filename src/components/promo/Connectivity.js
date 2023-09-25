import React from 'react'
import Image from 'next/image';
const Connectivity = () => {
  return (
    <>
    {/* <!-- CONNECTIVITY SECTION --> */}
    <section className="connectivity_section text-color">
          <div className="container">
            <div className="connectivity_box">
              <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                  <div className="connectivity_content" data-aos="fade-up">
                    <p className="global_data">Global Datacenters</p>
                    <h2 className='text-[1.5rem]'>
                      Powerful Severs, High Speed Datacenter{" "}
                      <span> Connectivity</span>
                    </h2>
                    <div className="flex flex-col md:flex-row md:justify-between  justify-center items-center">
                        <div className="bg-blue-900 flex justify-center items-center w-[100px] h-[100px] rounded-full">
                          <figure className=" ">
                            <Image height={"500"} width={"500"}
                              src="/assets/images/connectivity_icon_1.png"
                              alt=""
                              className=""
                            />
                          </figure>
                        </div>
                        <div className="md:w-[70%] w-full ">
                          <h5>Global Datacenters</h5>
                          <p className="">
                            Lorem ipsum dolor sit amet consectetur adipis labore
                            dolore magna aliqua.
                          </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between justify-center items-center">
                        <div className="bg-blue-900 flex justify-center items-center w-[100px] h-[100px] rounded-full">
                          <figure className=" ">
                            <Image height={"500"} width={"500"}
                              src="/assets/images/connectivity_icon_2.png"
                              alt=""
                              className=""
                            />
                          </figure>
                        </div>
                        <div className="md:w-[70%] w-full ">
                          <h5>Facility Security</h5>
                          <p className="">
                            Lorem ipsum dolor sit amet, consectetur adipis cing
                            elit, sed eiusmod tempor incididunt labore dolore
                            magna aliqua.
                          </p>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                  <div className="connectivity_image">
                    <figure className="mb-0">
                      <Image height={"500"} width={"500"}
                        src="/assets/images/connectivity_image.png"
                        alt=""
                        className="img-fluid"
                        data-aos="fade-down"
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