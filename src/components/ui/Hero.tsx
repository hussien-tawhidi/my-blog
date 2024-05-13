"use client";

import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import HeroFooter from "./HeroFooter";
const Hero = () => {
  return (
    <>
      <div className='relative overflow-hidden'>
        <Image
          src='/images/hero.jpg'
          alt='hero'
          width={1500}
          height={400}
          className='object-cover w-full '
        />
        <div className='absolute md:gap-2 gap-0 lg:gap-4 top-20 sm:top-32 md:top-40 lg:top-80 right-auto text-xl sm:text-3xl md:text-5xl lg:text-7xl font-mono  left-auto w-full mx-auto text-white flex flex-col items-center'>
          <h1>Luxe web design</h1>
          <h1 className='md:text-3xl sm:text-2xl text-md lg:text-5xl font-mono md:font-bold font-normal '>
            & development
          </h1>
          <p className='md:text-md text-sm lg:text-xl italic font-thin'>
            Contact us for more ...
          </p>
          <span className='font-extralight md:mt-3 mt-0 lg:mt-6 animate-bounce'>
            <IoIosArrowDown className='font-extralight' />
          </span>
        </div>
        <HeroFooter />
      </div>
    </>
  );
};

export default Hero;
