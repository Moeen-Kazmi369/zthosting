import React from 'react';

const Resell_Product = () => {
  return (
    <>
      {/* Banner-Section */}
      <div className="bg-gray-100">
        <div className="container">
          <h1 className="text-4xl font-bold py-10">Reseller Hosting</h1>
        </div>
      </div>
      {/* Banner-Section */}

      {/* Section-Section */}
      <div className="bg-white py-16">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-left">
              <div className="text-center md:text-left">
                <img src="assets/images/sevice_icon_01.png" alt="Service Icon" className="mx-auto w-16" />
                <h3 className="text-xl font-bold my-2">Suprior Speed Performance</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consec-tetuer adipiscing elit. Aenean commodo ligula eg et dolor. Aenean
                  massa. Cum sociis nato que penatibuset.
                </p>
              </div>
            </div>
            <div className="text-left">
              <div className="text-center md:text-left">
                <img src="assets/images/sevice_icon_02.png" alt="Service Icon" className="mx-auto w-16" />
                <h3 className="text-xl font-bold my-2">Powerful Control Panel</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consec-tetuer adipiscing elit. Aenean commodo ligula eg et dolor. Aenean
                  massa. Cum sociis nato que penatibuset.
                </p>
              </div>
            </div>
            <div className="text-left">
              <div className="text-center md:text-left">
                <img src="assets/images/sevice_icon_03.png" alt="Service Icon" className="mx-auto w-16" />
                <h3 className="text-xl font-bold my-2">Guranteed 99.9% Uptime</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consec-tetuer adipiscing elit. Aenean commodo ligula eg et dolor. Aenean
                  massa. Cum sociis nato que penatibuset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section-Section */}

      {/* Plan-Section */}
      <div className="bg-gray-100 py-16">
        <div className="container">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-indigo-900 mb-6">Plan and Pricing</h1>
            <p className="text-gray-600">
              Cum sociis natoque penatibus et magnis dis parturient montes, nasceturridiculus mus.donequam felis,
              ultricies nec, pellentesque eu.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white rounded-lg p-6">
              <img src="assets/images/sh_icon_01.png" alt="Plan Icon" className="mx-auto w-16" />
              <h3 className="text-xl font-semibold my-3">RH - 01</h3>
              <ul className="text-gray-600">
                <li>
                  <strong>5 GB</strong> Storage
                </li>
                <li>
                  <strong>Unlimited</strong> projects
                </li>
                <li>
                  <strong>15</strong> Email Accounts
                </li>
                <li>
                  <strong>2</strong> Domain Hosted Support
                </li>
                <li>
                  <strong>24/7</strong> Full Support
                </li>
              </ul>
              <div className="text-indigo-900 font-semibold mt-3">$2.99/mo</div>
              <a href="shared_hosting.html" className="bg-indigo-900 text-white block py-2 px-4 rounded mt-3">
                Order Now
              </a>
            </div>
            {/* Repeat similar content for other plans */}
          </div>
        </div>
      </div>
      {/* Plan-Section */}

      {/* Feature-Section */}
      <div className="bg-white py-16">
        <div className="container">
          <div className="text-center">
            <small className="text-gray-600">Shared Hosting Features</small>
            <h1 className="text-3xl font-semibold text-indigo-900 mb-6">Experience The Hostiko Difference Today!</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="text-center">
              <img src="assets/images/shared_feature_icon_01.png" alt="Feature Icon" className="mx-auto w-16" />
              <h3 className="text-xl font-semibold my-3">20X Faster Servers</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque.
              </p>
            </div>
            <div className="text-center">
              <img src="assets/images/shared_feature_icon_02.png" alt="Feature Icon" className="mx-auto w-16" />
              <h3 className="text-xl font-semibold my-3">24/7/365 Guru Crew</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque.
              </p>
            </div>
            <div className="text-center">
              <img src="assets/images/shared_feature_icon_03.png" alt="Feature Icon" className="mx-auto w-16" />
              <h3 className="text-xl font-semibold my-3">Ultra-Reliable Servers</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis natoque.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Feature-Section */}

      {/* Domain-Section */}
      <div className="bg-gray-100 py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-left md:text-right">
              <small className="text-gray-600">Search your Domain name</small>
              <h1 className="text-3xl font-semibold text-indigo-900 mt-4">Your Domain Registration Destination</h1>
            </div>
            <div className="bg-white rounded-lg p-6">
              <form
                action="//akdesigner.com/whmcs-templates/cart.php?systpl=hostiko&layout=35&a=add&domain=register"
                method="post"
              >
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search Domain"
                    className="text-gray-600 border-b-2 border-indigo-900 focus:outline-none focus:border-indigo-500 flex-1 mr-2"
                    name="query"
                    size="20"
                  />
                  <input
                    type="submit"
                    className="bg-indigo-900 text-white py-2 px-4 rounded"
                    value="Search"
                  />
                </div>
              </form>
              <ul className="text-gray-600 mt-4">
                <li className="flex items-center">
                  <img src="assets/images/domain_img_01.png" alt="Domain Icon" className="w-6 h-6 mr-2" />
                  <div className="domain_price">$30/yr</div>
                </li>
                {/* Repeat similar content for other domain items */}
              </ul>
            </div>
          </div>
          <div className="bg-white text-gray-600 p-6 mt-8">
            <h1 className="text-3xl font-semibold mb-4">The Best Hosting In The Industry</h1>
            <p>
              Cum sociis natoque penatibus et magnis dis parturient montes, nasceturridiculus mus.donequam felis,
              ultricies nec, pellentesque eu.Cum sociis natoque penatibus et magnis dis parturient montes,
              nasceturridiculus mus.donequam felis, ultricies nec, pellentesque eu.Cum sociis natoque penatibus et
              magnis dis parturient montes, nasceturridiculus mus.donequam felis, ultricies nec, pellentesque eu.Cum
              sociis natoque penatibus et magnis dis parturient montes, nasceturridiculus.
            </p>
          </div>
        </div>
      </div>
      {/* Domain-Section */}

      {/* Partner-Section */}
      <div className="bg-indigo-900 py-12">
        <div className="container">
          <div className="grid grid-cols-6 gap-4">
            <div className="col-span-1 col">
              <div className="partner_box">
                <img src="assets/images/partner_img_01.png" alt="Partner Logo" className="mx-auto w-24" />
              </div>
            </div>
            <div className="col-span-1 col">
              <div className="partner_box">
                <img src="assets/images/partner_img_02.png" alt="Partner Logo" className="mx-auto w-24" />
              </div>
            </div>
            <div className="col-span-1 col">
              <div className="partner_box">
                <img src="assets/images/partner_img_03.png" alt="Partner Logo" className="mx-auto w-24" />
              </div>
            </div>
            <div className="col-span-1 col">
              <div className="partner_box">
                <img src="assets/images/partner_img_04.png" alt="Partner Logo" className="mx-auto w-24" />
              </div>
            </div>
            <div className="col-span-1 col">
              <div className="partner_box">
                <img src="assets/images/partner_img_05.png" alt="Partner Logo" className="mx-auto w-24" />
              </div>
            </div>
            <div className="col-span-1 col">
              <div className="partner_box">
                <img src="assets/images/partner_img_06.png" alt="Partner Logo" className="mx-auto w-24" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Partner-Section */}
    </>
  );
};

export default Resell_Product;
