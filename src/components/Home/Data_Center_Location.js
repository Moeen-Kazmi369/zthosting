import React from 'react'

const Data_Center_Location = () => {
  return (
    <>
     {/* <!-- DATA CENTER LOCATION SECTION --> */}
     <section className="data_center_section">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="data_center_content">
                  <h2>Our Data Center Locations</h2>
                  <p>
                    You will find everything you need to deploy your service
                    globally.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="data_center_image">
                  <figure className="mb-0">
                    <img
                      src="./assets/images/center_location_image.png"
                      alt=""
                      className="img-fluid"
                    />
                  </figure>
                  <div>
                               {/* <div className="point germany tippy">
                    <div className="location">Germany</div>
                  </div>
                  <div className="point los-angeles tippy">
                    <div className="location">Los Angeles</div>
                  </div>
                  <div className="point dallas tippy">
                    <div className="location dallas_loc">Dallas</div>
                  </div>
                  <div className="point united-kingdom tippy">
                    <div className="location">United Kingdom</div>
                  </div>
                  <div className="point moscow tippy">
                    <div className="location moscow_loc">Moscow</div>
                  </div>
                  <div className="point japan tippy">
                    <div className="location">Japan</div>
                  </div>
                  <div className="point sydney tippy">
                    <div className="location">Sydney</div>
                  </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
    )
}

export default Data_Center_Location;