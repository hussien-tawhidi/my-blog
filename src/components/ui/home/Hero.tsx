"use client";

import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import HeroFooter from "./HeroFooter";
const Hero = () => {
  return (
    <>
      <div className='relative overflow-hidden bg-red-300'>
        <Image
          src='/images/customize.jpg'
          alt='hero'
          width={1500}
          height={400}
          className='object-cover w-[100vw] md:h-[90vh] h-[60vh]'
        />
        <h1 className="hero-outline-text absolute bottom-20 left-0 z-20 text-[20vw]">
          HUSSIEN
        </h1>
        <h1 className="hero-outline-text absolute bottom-10 right-[10vw] z-20 text-[5vw]">
          DESIGNER & DEVELOPER
        </h1>
        
        <div className='absolute md:gap-2 gap-0 lg:gap-4 bottom-0 right-auto text-xl sm:text-3xl md:text-5xl lg:text-7xl font-mono  left-auto w-full mx-auto text-primary flex flex-col items-center'>
         
          <span className='font-extralight md:mt-3 mt-0 lg:mt-6 animate-bounce'>
            <IoIosArrowDown className='font-extralight' />
          </span>
        </div>
      </div>
      <HeroFooter />
    </>
  );
};

export default Hero;
