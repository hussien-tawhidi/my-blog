"use client";

import Image from "next/image";
import { CiClock2 } from "react-icons/ci";

interface Props {
  title: string;
  desc: string;
  imagePath: string;
  userName: string;
  userEmail?: string;
  tags?: string[];
}

const BlogPageItem = ({
  title,
  desc,
  imagePath,
  userEmail,
  userName,
  tags,
}: Props) => {
  return (
    <div className='m-5 p-3 border-b'>
      <div className='mb-3'>
        <h2 className='md:text-4xl text-3xl capitalize'>{title}</h2>
        <span className='font-semibold opacity-60 text-blue'>Developement</span>
      </div>
      <div className=''>
        <p className='text-justify'>{desc.slice(0, 300)}...</p>
        <div className='flex md:gap-4 sm:gap-2 gap-1'>
          {tags?.map((tag, index) => (
            <span className='font-semibold shadow mt-3 py-1 px-2 text-sm' key={index}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <div className='flex items-center gap-2 mt-5'>
        <Image
          src={imagePath}
          height={100}
          width={100}
          className='object-cover w-10 h-10 rounded-full bg-black'
          alt={userName}
        />
        <div className='flex justify-between items-center w-full'>
          <div className='text-sm'>
            <p>{userName}</p>
            <p>{userEmail}</p>
          </div>
          <span className='text-sm flex items-center justify-center'>
            <span>
              <CiClock2 />
            </span>{" "}
            SEP 12. 2024
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogPageItem;
