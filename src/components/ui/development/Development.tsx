"use client";
import BlogPageItem from "@/components/ui/development/BlogPageItem";
import Carousel from "@/components/ui/development/carousel";
import { randomData } from "@/constants/data";
import Link from "next/link";
import { useState } from "react";

const DATA = [
  { image: "https://picsum.photos/seed/random101/500/500" },
  { image: "https://picsum.photos/seed/random102/500/500" },
  { image: "https://picsum.photos/seed/random103/500/500" },
];


const Development = () => {
  const [blog, setBlog] = useState(5);

  const showMoreBlog = () => {
    setBlog((blog) => blog + 3);
  };

  return (
    <>
      <div className='pt-20 md:w-[90%] mx-auto w-[95%] gap-5'>
        <div className='grid md:grid-cols-3 col-span-1'>
          <div className='md:col-span-2'>
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
            {randomData.length > blog && (
              <button
                className='my-5 flex items-center w-full justify-center'
                onClick={showMoreBlog}>
                Show more ...
              </button>
            )}
          </div>
          <div>
            <Carousel data={DATA} />
            <Carousel data={DATA} />
            <Carousel data={DATA} />
            <Carousel data={DATA} />
            <Carousel data={DATA} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Development;
