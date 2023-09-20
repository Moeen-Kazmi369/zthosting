'use client'
import React from "react";
import Link from "next/link";
import { useGlobalState } from "@/components/GlobalStateProvider";
const Page = () => {
const { setLoginPage } = useGlobalState();
  return (
    <>
      <div className="flex justify-center h-screen">
      <Link
            href={"/"}
            onClick={() => setLoginPage(false)}
            className="-m-1.5 p-1.5"
          >
      <figure className="footer_logo fixed top-5 left-5">
              <img
                src={"./assets/images/ZT_hosting_black_logo.png"}
                alt=""
                className="img-fluid w-[200px] h-[150px]"
              />
            </figure>
            </Link>
        <div className="h-[90%] w-full md:w-3/4 m-4">
          <div className="text-xl cursor-pointer flex flex-col justify-center items-center mt-5 md:mt-0">
            <h1 className="font-semibold text-3xl text-gray-700 m-2">Log In</h1>
            <div className="flex">
              <ion-icon
                name="logo-google"
                className="py-2 rounded px-4 border-2 m-1 cursor-pointer border-violet-600 text-white bg-violet-600 hover:bg-white hover:text-violet-600 text-2xl"
              ></ion-icon>
              <ion-icon
                name="logo-facebook"
                className="py-2 rounded px-4 border-2 m-1 cursor-pointer border-blue-500 bg-blue-500 text-white hover:bg-white hover:text-blue-500 text-2xl"
              ></ion-icon>
            </div>
            <div className="text-gray-700 font-semibold"> or </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-10 md:mt-4 space-y-6 md:space-y-8">
            <div className="">
              <input
                type="text"
                placeholder="Email"
                className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
              />
            </div>
            <div className="">
              <input
                type="password"
                placeholder="Password"
                className=" bg-gray-100 rounded-lg px-5 py-2 focus:border border-violet-600 focus:outline-none text-black placeholder:text-gray-600 placeholder:opacity-50 font-semibold md:w-72 lg:w-[340px]"
              />
            </div>
            <div className="flex space-x-2 -ml-28 md:-ml-40  lg:-ml-52">
              <input className="" type="checkbox" id="checkbox" name="checkbox" />
              <h3 className="text-sm font-semibold text-gray-400 -mt-1 cursor-pointer">
                Remember Me
              </h3>
            </div>
          </div>
          <div className="text-center mt-7">
            <Link href={'https://zthosting-sub-domain.vercel.app'}>
            <button className="uppercase px-24 md:px-[118px] lg:px-[140px] py-2 rounded-md text-white bg-violet-500 hover:bg-violet-600  font-medium ">
              login
            </button>
            </Link>
          </div>
          <div className="text-center my-6 flex flex-col">
            <a
              href="#"
              className="text-sm font-medium text-gray-400 hover:text-violet-500 m-1"
            >
              Forgot Password ?
            </a>
            <a
              href="#"
              className="text-sm font-bold text-gray-400 hover:text-violet-500 m-1"
            >
              Not a User? Create New Account
            </a>
          </div>
        </div>
      </div>

      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </>
  );
};

export default Page;
