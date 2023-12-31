"use client";
import React from "react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
const Page = () => {
  const [Data, setdata] = useState(null);
  const { slug } = useParams();
  useEffect(() => {
    const fetchData = async (slug) => {
        const res = await fetch(
            `https://zthosting.com/wp-json/wp/v2/posts?_embed&slug=${slug}&_fields=title,date,slug,id,excerpt,_links,content&per_page=4&order=asc`
          );
          const data = await res.json();
      setdata(data);
    };
    fetchData(slug);
  }, []);
  console.log(Data);
  return (
    <>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
            <div className="overflow-hidden w-full m-4 shadow-sm flex flex-col justify-center">
              {Data && Data.map((e,i)=>{
                console.log(e);
                return(
                    <>
                    <div key={e.id} className="flex flex-col md:flex-row items-center">
                    {/* <h1 clasName="text-black text-center text-xl font-semibold">{e}</h1> */}
                      <div className=" w-full overflow-hidden flex items-center justify-center">
                        {" "}
                        <img
                          src={e._embedded["wp:featuredmedia"][0].source_url}
                          alt=""
                          className="w-[45vw] h-[30vw]"
                        />{" "}
                      </div>
                      <div className="md:w-2/3 m-4 ">
                        <div className="flex text-gray-500 text-sm m-2">
                          <div className="m-1 font-bold">Vlog,</div>
                          <div className="m-1">31 March, 2023</div>
                        </div>
                        <div className="font-bold text-black text-xl m-2">
                          {e.title.rendered}
                        </div>
                        <div dangerouslySetInnerHTML={{__html:e.excerpt.rendered}} >
                        </div>
                        <div className="flex cursor-pointer">
                          <div className="m-2">
                            {" "}
                            <img
                              src="https://source.unsplash.com/50x50/?man"
                              alt=""
                              className=" rounded-full"
                            />{" "}
                          </div>
                          <div className="grid m-1">
                            <div className="font-bold text-sm hover:text-gray-600 mt-2">
                              Jason Bourne
                            </div>
                            <div className=" text-sm hover:text-gray-600">
                              Student, Los Angeles
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="px-16 py-10" dangerouslySetInnerHTML={{__html: e && e.content.rendered}}>
                    </div>
                    </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <script src="https://cdn.tailwindcss.com"></script> */}
      <script src="https://use.fontawesome.com/03f8a0ebd4.js"></script>
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
// import React from 'react'

// const page = () => {
//   return (
//     <div>Testing</div>
//   )
// }

// export default page