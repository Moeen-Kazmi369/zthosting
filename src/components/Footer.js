"use client";
import {RiTwitterXLine} from 'react-icons/ri'
import React from "react";
import {IoIosArrowDown} from 'react-icons/io'
import {IoIosArrowUp} from 'react-icons/io'
import { useGlobalState } from "./GlobalStateProvider";
import { useState,useEffect } from 'react';
import Link from "next/link";
const hosting_links = [
  "Web Hosting",
  "Professional Web Hosting",
  "VPS Hosting",
  "Minecraft Server Hosting",
  "CyberPanel Hosting",
  "Cloud Hosting",
  "Managed WordPress Hosting",
  "Business Email",
  "CMS Hosting",
  "eCommerce Hosting",
  "Free Website Hosting",
];
const tools_links = [
  "Online Store",
  "Website Builder",
  "AI Website Builder",
  "AI Logo Generator",
  "Business Name Generator",
  "Website Templates",
];
const domains_links = [
  "Domain Name Search",
  "Domain Transfer",
  "Free Domain",
  "XYZ Domain",
  "Cheap Domain Names",
  "Domain Extensions",
  "WHOIS Lookup",
  "Free SSL Certificate",
];
const info_links = [
  "Migrate to Hostinger",
  "System Status",
  "Affiliate Program",
  "Partner Program",
  "Payment Methods",
  "Wall of Fame",
  "Reviews",
  "Pricing",
  "Sitemap",
];
const company_links = [
  "About Hostinger",
  "Our Technology",
  "Career",
  "Newsroom",
  "Roadmap",
  "Contact Us",
  "Blog",
  "Student Discount",
];
const help_links = ["Tutorials", "Knowledge Base", "Report Abuse"];
const legal_links = ["Privacy Policy", "Terms of Service"];
const Footer = () => {
  const[hosting_linksOpen,setHosting_LinksOpen]=useState(null);
  const[domains_linksOpen,setDomains_LinksOpen]=useState(null);
  const[tools_linksOpen,setTools_LinksOpen]=useState(null);
  const[Info_linksOpen,setInfo_LinksOpen]=useState(null);
  const[legal_linksOpen,setlegal_LinksOpen]=useState(null);
  const[company_linksOpen,setCompany_LinksOpen]=useState(null);
  const[help_linksOpen,setHelp_LinksOpen]=useState(null);
  const[displayIcons,setDisplayIcons]=useState(null);
  const { theme, setTheme, LoginPage } = useGlobalState();
  useEffect(() => {
    // Function to check and update the state based on the viewport width
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setDisplayIcons(true)
        setHosting_LinksOpen(false);
        setDomains_LinksOpen(false);
        setTools_LinksOpen(false);
        setInfo_LinksOpen(false);
        setlegal_LinksOpen(false);
        setCompany_LinksOpen(false);
        setHelp_LinksOpen(false);
      } else {
        setDisplayIcons(false);
        setHosting_LinksOpen(true);
        setDomains_LinksOpen(true);
        setTools_LinksOpen(true);
        setInfo_LinksOpen(true);
        setlegal_LinksOpen(true);
        setCompany_LinksOpen(true);
        setHelp_LinksOpen(true);
      }
    };

    // Add a resize event listener
    window.addEventListener('resize', handleResize);

    // Initial check when the component mounts
    handleResize();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  return (
    <>
      {/* <!-- FOOTER SECTION --> */}
      <section className={`footer ${theme?"text-white":"text-black"} px-10 pt-20 sm:px-32`}>
        <section className="flex flex-col justify-between">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-[25%] w-full">
              <figure className="footer_logo mb-0">
                <img
                  src={`${
                    theme
                      ? "./assets/images/ZT_hosting_white_logo.png"
                      : "./assets/images/ZT_hosting_black_logo.png"
                  }`}
                  alt=""
                  className="img-fluid w-[200px] h-[150px]"
                />
              </figure>
              <p className="text-sm font-light py-4 px-2">
                We are a web hosting provider on a mission to bring success to
                everyone who goes online. We do it by constantly improving
                server technology, providing professional support, and making
                the web hosting experience seamless.
              </p>
            </div>
            <div className="md:w-[70%] w-full justify-between flex flex-col md:flex-row">
              <div className="flex flex-col md:p-4 p-0">
                <div className="">
                 <div className='flex flex-row justify-between'>
                 <h1
                   className="text-xl font-semibold">
                    HOSTING
                  </h1>
                  <IoIosArrowDown onClick={()=>{setHosting_LinksOpen(true)}} className={`${hosting_linksOpen?"hidden":null} ${displayIcons?"block":"hidden"}`} />
                  <IoIosArrowUp onClick={()=>{setHosting_LinksOpen(false)}} className={`${displayIcons?"block":"hidden"} ${hosting_linksOpen?null:"hidden"}`} />
                 </div>
                  {hosting_links.map((e, i) => {
                    return (
                      <div
                        className={`flex-col justify-between my-2 ${hosting_linksOpen?"flex":"hidden"}`}
                        key={i}
                      >
                        <Link
                          href={"#"}
                          className={`text-sm font-light ${theme?"text-white":"text-black"}`}
                        >
                          {e}
                        </Link>
                      </div>
                    );
                  })}
                </div>
                <div className="">
                 <div className='flex flex-row justify-between'>
                 <h1
                   className="text-xl font-semibold">
                    DOMAINS
                  </h1>
                  <IoIosArrowDown onClick={()=>{setDomains_LinksOpen(true)}} className={` ${domains_linksOpen?"hidden":null} ${displayIcons?"block":"hidden"}`} />
                  <IoIosArrowUp onClick={()=>{setDomains_LinksOpen(false)}} className={` ${displayIcons?"block":"hidden"} ${domains_linksOpen?null:"hidden"}`} />
                 </div>
                  {domains_links.map((e, i) => {
                    return (
                      <div
                        className={`flex-col justify-between my-2 ${domains_linksOpen?"flex":"hidden"}`}
                        key={i}
                      >
                        <Link
                          href={"#"}
                          className={`text-sm font-light ${theme?"text-white":"text-black"}`}
                        >
                          {e}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col md:p-4 p-0">
              <div className="">
                 <div className='flex flex-row justify-between'>
                 <h1
                   className="text-xl font-semibold">
                    TOOLS
                  </h1>
                  <IoIosArrowDown onClick={()=>{setTools_LinksOpen(true)}} className={` ${tools_linksOpen?"hidden":null} ${displayIcons?"block":"hidden"}`} />
                  <IoIosArrowUp onClick={()=>{setTools_LinksOpen(false)}} className={` ${displayIcons?"block":"hidden"} ${tools_linksOpen?null:"hidden"}`} />
                 </div>
                  {tools_links.map((e, i) => {
                    return (
                      <div
                        className={`flex-col justify-between my-2 ${tools_linksOpen?"flex":"hidden"}`}
                        key={i}
                      >
                        <Link
                          href={"#"}
                          className={`text-sm font-light ${theme?"text-white":"text-black"}`}
                        >
                          {e}
                        </Link>
                      </div>
                    );
                  })}
                </div>
                <div className="">
                 <div className='flex flex-row justify-between'>
                 <h1
                   className="text-xl font-semibold">
                    INFORMATION
                  </h1>
                  <IoIosArrowDown onClick={()=>{setInfo_LinksOpen(true)}} className={` ${Info_linksOpen?"hidden":null} ${displayIcons?"block":"hidden"}`} />
                  <IoIosArrowUp onClick={()=>{setInfo_LinksOpen(false)}} className={` ${displayIcons?"block":"hidden"} ${Info_linksOpen?null:"hidden"}`} />
                 </div>
                  {info_links.map((e, i) => {
                    return (
                      <div
                        className={`flex-col justify-between my-2 ${Info_linksOpen?"flex":"hidden"}`}
                        key={i}
                      >
                        <Link
                          href={"#"}
                          className={`text-sm font-light ${theme?"text-white":"text-black"}`}
                        >
                          {e}
                        </Link>
                      </div>
                    );
                  })}
                </div>
                <div className="">
                 <div className='flex flex-row justify-between'>
                 <h1
                   className="text-xl font-semibold">
                    LEGAL
                  </h1>
                  <IoIosArrowDown onClick={()=>{setlegal_LinksOpen(true)}} className={` ${legal_linksOpen?"hidden":null} ${displayIcons?"block":"hidden"}`} />
                  <IoIosArrowUp onClick={()=>{setlegal_LinksOpen(false)}} className={` ${displayIcons?"block":"hidden"} ${legal_linksOpen?null:"hidden"}`} />
                 </div>
                  {legal_links.map((e, i) => {
                    return (
                      <div
                        className={`flex-col justify-between my-2 ${legal_linksOpen?"flex":"hidden"}`}
                        key={i}
                      >
                        <Link
                          href={"#"}
                          className={`text-sm font-light ${theme?"text-white":"text-black"}`}
                        >
                          {e}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-col md:p-4 p-0">
              <div className="">
                 <div className='flex flex-row justify-between'>
                 <h1
                   className="text-xl font-semibold">
                    COMPANY
                  </h1>
                  <IoIosArrowDown onClick={()=>{setCompany_LinksOpen(true)}} className={` ${company_linksOpen?"hidden":null} ${displayIcons?"block":"hidden"}`} />
                  <IoIosArrowUp onClick={()=>{setCompany_LinksOpen(false)}} className={` ${displayIcons?"block":"hidden"} ${company_linksOpen?null:"hidden"}`} />
                 </div>
                  {company_links.map((e, i) => {
                    return (
                      <div
                        className={`flex-col justify-between my-2 ${company_linksOpen?"flex":"hidden"}`}
                        key={i}
                      >
                        <Link
                          href={"#"}
                          className={`text-sm font-light ${theme?"text-white":"text-black"}`}
                        >
                          {e}
                        </Link>
                      </div>
                    );
                  })}
                </div>
                <div className="">
                 <div className='flex flex-row justify-between'>
                 <h1
                   className="text-xl font-semibold">
                    HELP
                  </h1>
                  <IoIosArrowDown onClick={()=>{setHelp_LinksOpen(true)}} className={` ${help_linksOpen?"hidden":null} ${displayIcons?"block":"hidden"}`} />
                  <IoIosArrowUp onClick={()=>{setHelp_LinksOpen(false)}} className={` ${displayIcons?"block":"hidden"} ${help_linksOpen?null:"hidden"}`} />
                 </div>
                  {help_links.map((e, i) => {
                    return (
                      <div
                        className={`flex-col justify-between my-2 ${help_linksOpen?"flex":"hidden"}`}
                        key={i}
                      >
                        <Link
                          href={"#"}
                          className={`text-sm font-light ${theme?"text-white":"text-black"}`}
                        >
                          {e}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* <div className='flex border border-red-800'>
          <div className='w-[25%] self-end border border-red-600'>
              <Link
                href="#"
                className="rounded-full w-6 h-6 bg-black text-white tetext-blackxt-center"
              >
                <RiTwitterXLine className="rounded-full w-6 h-6 bg-black text-white tetext-blackxt-center"/>
              </Link>
              <Link
                href="#"
                className="rounded-full w-6 h-6 bg-[#f04f65] text-white tetext-blackxt-center pt-[3px] md:p-0"
              >
                <i className="fa fa-instagram"></i>
              </Link>
              <Link
                href="#"
                className="rounded-full w-6 h-6 bg-blue-500 text-white tetext-blackxt-center pt-[3px] md:p-0"
              >
                <i className="fa fa-facebook"></i>
              </Link>
              <Link
                href="#"
                className="rounded-full w-6 h-6 bg-blue-500 text-white tetext-blackxt-center pt-[3px] md:p-0"
              >
                <i className="fa fa-linkedin"></i>
              </Link>
              <Link
                href="#"
                className="rounded-full w-6 h-6 bg-green-500 text-white tetext-blackxt-center pt-[3px] md:p-0"
              >
                <i className="fa fa-whatsapp"></i>
              </Link>
                </div>
          </div> */}
          <hr className=""></hr>
          <div className="flex flex-col md:flex-row w-full justify-between my-3">
            <p className="text-sm font-light">© 2004-2023 zthosting.com - Premium Web Hosting, Cloud, VPS & Domain Registration Services.</p>
            <p className="text-sm font-light">Prices are listed without VAT</p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Footer;
