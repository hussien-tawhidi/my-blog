"use client";

import React, { useState } from "react";
import BlogPageItem from "../development/BlogPageItem";
import { randomData } from "@/constants/data";
import Link from "next/link";
import FilterByCategory from "./FilterByCategory";
import Image from "next/image";
import moment from "moment";
import { CiClock2 } from "react-icons/ci";

const DATA = [
  { image: "https://picsum.photos/seed/random101/500/500" },
  { image: "https://picsum.photos/seed/random102/500/500" },
  { image: "https://picsum.photos/seed/random103/500/500" },
];

const Blog = () => {
  const [blog, setBlog] = useState(5);

  const showMoreBlog = () => {
    setBlog((blog) => blog + 3);
  };

  return (
    <div className='pt-15 md:w-[90%] mx-auto w-[95%] gap-5'>
      <div className='flex items-end justify-center md:gap-6 gap-3 lg:gap-10 relative'>
        <FilterByCategory />
      </div>
      <div className='grid md:grid-cols-3 grid-cols-1 gap-5 col-span-1 mt-10'>
        {randomData.slice(0, blog).map((data) => (
          <Link key={data.id} href={`/blog-details/${data.id}`}>
            {/* <BlogPageItem
              title={data.title}
              desc={data.desc}
              userName={data.user.name}
              userEmail={data.user.email}
              imagePath={data.user.image}
              tags={data.tags}
            /> */}
            <div className='rounded overflow-hidden flex flex-col border p-5'>
              <div className='relative'>
                <div>
                  <Image
                    width={1000}
                    height={1000}
                    className='w-full object-cover h-[30vh]'
                    src={data.image}
                    alt='Sunset in the mountains'
                  />
                  <div className='hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25'></div>
                </div>
              </div>
              <div className='px-6 py-4 mb-auto'>
                <div className='font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out  mb-2'>
                  {data.title}
                </div>
                <p className='text-gray-500 text-sm'>
                  {data.desc.slice(0, 200)} ...
                </p>
              </div>
              <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                  <Image
                    src={data.user.image}
                    height={100}
                    width={100}
                    className='object-cover w-10 h-8 rounded-full bg-black'
                    alt={data.user.name}
                  />
                  <div className='flex justify-between items-center w-full'>
                    <div className='text-sm'>
                      <p>{data.user.name}</p>
                      <span className='text-[10px] flex items-center gap-1'>
                        <CiClock2/>
                        {moment().startOf("hour").fromNow()}
                      </span>
                    </div>
                  </div>
                </div>
                <span className='text-xs font-regular text-gray-900 flex items-center'>
                  <svg
                    className='h-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'>
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      d='M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z'></path>
                  </svg>
                  <span className='ml-1'>39 Comments</span>
                </span>
              </div>

             
            </div>
          </Link>
        ))}
      </div>
      {randomData.length > blog && (
        <button
          className='my-5 flex items-center w-full justify-center'
          onClick={showMoreBlog}>
          Show more ...
        </button>
      )}
      {/* +-------- */}
      <div className='max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16'></div>
      {/* ---------------- */}
    </div>
  );
};

export default Blog;
