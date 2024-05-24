"use client";
import Link from "next/link";
import BlogCard from "../cards/BlogCard";
import { IoIosArrowRoundForward } from "react-icons/io";

const RandomBlogPosts = () => {
  return (
    <div className='relative md:py-10 py-5 md:px-10 w-full'>
      <Link
        href='/blog'
        className='flex justify-end items-center mb-2 pr-4 font-light text-xl'>
        See more blogs posts
        <IoIosArrowRoundForward className='pt-1 font-bold' />
      </Link>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1  px-5 gap-5'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default RandomBlogPosts;
