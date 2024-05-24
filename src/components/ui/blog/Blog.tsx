"use client";

import React, { useState } from "react";
import BlogPageItem from "../development/BlogPageItem";
import { randomData } from "@/constants/data";
import Link from "next/link";
import FilterByCategory from "./FilterByCategory";

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
      <div className='flex items-end justify-center md:gap-6 gap-3 lg:gap-10'>
        <FilterByCategory />
      </div>
      <div className='grid md:grid-cols-2 col-span-1'>
        {randomData.slice(0, blog).map((data) => (
          <Link key={data.id} href={`/blog-details/${data.id}`}>
            <BlogPageItem
              title={data.title}
              desc={data.desc}
              userName={data.user.name}
              userEmail={data.user.email}
              imagePath={data.user.image}
              tags={data.tags}
            />
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
    </div>
  );
};

export default Blog;
