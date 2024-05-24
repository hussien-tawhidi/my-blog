"use client";

import Image from "next/image";
import Link from "next/link";

interface props {
  title: string;
  description: string;
  image: string;
  tags: string[];
  userImage: string;
  userName: string;
  userEmail: string;
}

const AsidCard = () => {
  return (
    <div className='flex flex-wrap place-items-center overflow-hidden'>
      <div className='overflow-hidden transition duration-500 ease-in-out transform hover:-translate-y-5 hover:shadow-2xl rounded-lg h-90 cursor-pointer m-auto'>
        <div className='w-full block h-full'>
          <Image
            width={500}
            height={700}
            alt='blog photo'
            src='/images/hero.jpg'
            className=' w-full object-cover'
          />
          <div className='bg-white w-full p-4'>
            <p className='text-2xl font-medium'>
              Should You Get Online Education?
            </p>

            <div className='text-gray-600 font-light text-md'>
              It is difficult to believe that we have become so used to having
              instant access to information at...
              <Link
                className='inline-flex text-dark font-semibold text-sm'
                href='#'>
                Read More...
              </Link>
            </div>
            <div className='flex flex-wrap justify-starts items-center py-3 border-b-2 text-xs text-dark font-semibold'>
              <span className='m-1 px-2 py-1 rounded border'>#online</span>
              <span className='m-1 px-2 py-1 rounded border'>#internet</span>
              <span className='m-1 px-2 py-1 rounded border'>#education</span>
            </div>
            <div className='flex items-center mt-2'>
              <Image
                width={100}
                height={100}
                className='w-10 h-10 object-cover rounded-full'
                alt='User avatar'
                src='/images/profile.png'
              />

              <div className='pl-3'>
                <div className='font-medium'>Jean Marc</div>
                <div className='text-gray-600 text-sm'>CTO of Supercars</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AsidCard;
