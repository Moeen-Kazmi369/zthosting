"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
const Recently_Posts = () => {
  const [data, setdata] = useState([]);
  const [currentPosts, setcurrentPosts] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const postsPerPage = 4;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchAllPosts();
      setdata(res.props.data);
      const postData = res.props.data;
      setTotalPages(Math.ceil(postData.length / 4));
      setcurrentPosts(postData.slice(indexOfFirstPost, indexOfLastPost));
    };
    fetchData();
  }, []);
  useEffect(() => {
    setcurrentPosts(data.slice(indexOfFirstPost, indexOfLastPost));
  }, [currentPage]);
  return (
    <div>
      <style jsx>
        {`
          .animate-zoomOut {
            transition: transform 0.3s ease;
          }

          .animate-zoomOut:hover {
            transform: scale(1.1);
          }
        `}
      </style>
      <div className="flex items-center justify-center text-center py-8">
        <div className="flex flex-col p-2 m-2  max-w-7xl ">
          <div className="text-[3rem] text-center">
            Featured Posts
          </div>
          <div className="text-[1rem] text-center my-4 mx-2">
            "Diving into the Code Ocean: Stories from a Hunter Coder's Desk"
          </div>
          <div className="flex items-center align-middle flex-wrap justify-center md:flex-row lg:flex-row xl:flex-row flex-col">
            {currentPosts
              ? currentPosts.map((e, i) => {
                  return (
                    <Link href={`/blogs/${e.slug}`}>
                      <div
                        key={e.id}
                        className=" lg:h-auto xl:h-auto xl:w-[30vw] lg:w-[30vw] h-auto w-[50vh] md:h-auto md:w-[30vw] m-8 overflow-hidden animate-zoomOut"
                      >
                        {" "}
                        <img
                          src={
                            e["_embedded"]["wp:featuredmedia"][0]["source_url"]
                          }
                          alt="No image"
                          className="lg:h-[30vw] xl:h-[30em] xl:w-full lg:w-full h-[50vh] w-full md:h-[30vw] md:w-full"
                        />
                        <div className="flex text-gray-500 text-sm m-2">
                          <div className="m-1 font-bold">Vlog,</div>
                          <div className="m-1">31 March, 2023</div>
                        </div>
                        <div className="font-bold text-black text-xl m-2">
                          {e.title.rendered.length > 30
                            ? e.title.rendered.substring(0, 30) + "..."
                            : e.title.rendered}
                        </div>
                        <div
                          className="text-sm text-gray-500 mt-4 m-2"
                          dangerouslySetInnerHTML={{
                            __html:
                              e.excerpt.rendered.length > 65
                                ? e.excerpt.rendered.substring(0, 65) + "..."
                                : e.excerpt.rendered,
                          }}
                        ></div>
                        <div className="flex cursor-pointer">
                          <div className="m-2">
                            {" "}
                            <img
                              src="https://source.unsplash.com/50x50/?girl"
                              alt=""
                              className=" rounded-full"
                            />{" "}
                          </div>
                          <div className="grid m-1">
                            <div className="font-bold text-sm hover:text-gray-600 mt-2">
                              Max
                            </div>
                            <div className=" text-sm hover:text-gray-600">
                              Professor, California
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })
              : null}
          </div>
        </div>
      </div>
      <div className="w-[98.7vmax] flex justify-center items-center">
        <button
          onClick={() => {
            if (currentPage > 1) {
              setcurrentPage(currentPage - 1);
            }
          }}
          className={`bg-slate-200 ${
            currentPage === 1 ? "hidden" : null
          } ml-4 p-2 pl-4 pr-4 hover:bg-slate-500 hover:border-2 hover:border-solid hover:border-black transition-all duration-[0.5s] ease-in-out text-lg font-semibold text-black`}
        >
          Previous
        </button>
        <button
          className={
            "bg-slate-200 ml-4 p-2 pl-4 pr-4 hover:bg-slate-500 hover:border-2 hover:border-solid hover:border-black transition-all duration-[0.5s] ease-in-out text-lg font-semibold text-black"
          }
        >
          {currentPage}
        </button>
        <button
          onClick={() => {
            if (data && currentPage <= totalPages) {
              setcurrentPage(currentPage + 1);
            }
          }}
          className={`bg-slate-200 ${
            currentPage === totalPages ? "hidden" : null
          } ml-4 p-2 pl-4 pr-4 hover:bg-slate-500 hover:border-2 hover:border-solid hover:border-black transition-all duration-[0.5s] ease-in-out text-lg font-semibold text-black`}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export async function fetchAllPosts(context) {
  // console.log(context)
  const res = await fetch(
    `https://zthosting.com/wp-json/wp/v2/posts?_embed&per_page=50&_fields=title,date,slug,id,excerpt,_links&order=asc`
  );
  const data = await res.json();
  //  console.log(data.length);
  // Pass data to the page via props
  return { props: { data } };
}
export default Recently_Posts;
