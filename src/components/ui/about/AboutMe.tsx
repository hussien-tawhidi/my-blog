"use client"

import Image from "next/image";
import  { useState } from "react";
import AboutMeDetails from "./AboutMeDetails";

const AboutMe = () => {
  const [show, setShow] = useState(false);
  const showMoreAboutMe = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      {show && <AboutMeDetails showMoreAboutMe={showMoreAboutMe} />}
      <section className='' id='aboutus'>
        <div className='container mx-auto py-16 px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
            <div className='max-w-lg'>
              <h2 className='text-3xl font-bold text-gray-800 mb-8 text-center'>
                About Me
              </h2>
              <p>
                Hossein Tawhidi has had many experiences in his personal and
                social life. After completing his school, he went to the Afghan
                National Army and successfully completed his service for two
                years...
              </p>
              <button onClick={showMoreAboutMe} className='text-blue'>
                Open more ...
              </button>
            </div>
            <div className='mt-12 md:mt-0'>
              <Image
                src='/images/hero.jpg'
                alt='wheat flour grinding'
                width={1000}
                height={1000}
                className='w-full h-64 object-cover'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
