import React from "react";

interface Props {}

const Banner = () => {
  return (
    <div className='w-full h-[400px] sm:h-[500px] md:h-[600px] relative bg-customize-design bg-cover bg-no-repeat bg-center'>
      <div className='flex justify-center items-center w-full h-full '>
        <div className='bg-primary/90 w-[300px] sm:w-[500px] md:w-[600px] mx-auto p-3 sm:p-10 text-center'>
          <span className='md:text-[16px] text-[12px]'>CUSTOMIZE DESIGN</span>
          <h4 className='my-2 text-[20px] sm:text-[30px] md:text-[40px] leading-5 sm:leading-8 md:leading-0'>
            You can build your site exactly how you like it, we would make as
            you like it
          </h4>
          <p className='md:text-[16px] sm:text-[14px] text-[12px]'>
            let &apos; s chat more about what kind of website you like to build,
            we help you to make clean, beautiful, secure and ...
          </p>
          <button className='border-gray-700 border py-1 sm:py-2 px-7 text-[12px] sm:text-[14px] sm:px-10 font-light my-5'>
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
