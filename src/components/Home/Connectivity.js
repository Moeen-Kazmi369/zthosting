import React from 'react'
import Image from 'next/image';
import {FcFlowChart} from 'react-icons/fc'
import {MdSecurity} from 'react-icons/md'
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
                    <p className="hidden sm:block">Global Datacenters</p>
                    <h2 className='text-[1.5rem]'>
                      Powerful Severs, High Speed Datacenter{" "}
                      <span> Connectivity</span>
                    </h2>
                    <div className="flex flex-col md:flex-row md:justify-between  justify-center items-center">
                    <div className="bg-blue-900 px-3 py-3 w-[80px] h-[80px] rounded-full">
                          <figure className=" ">
                            <FcFlowChart className='text-5xl'/>
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
                    <div className="bg-blue-900 px-3 py-3 w-[80px] h-[80px] rounded-full">
                          <figure className="text-white">
                            <MdSecurity className='text-5xl'/>
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
                <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 hidden md:block">
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