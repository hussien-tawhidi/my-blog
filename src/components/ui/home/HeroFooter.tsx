import React from 'react'
import { IoLogoInstagram } from 'react-icons/io';
import { SlSocialFacebook } from 'react-icons/sl';

interface Props {}

const HeroFooter = () => {
    return (
      <div className='grid lg:grid-cols-2 grid-cols-1'>
        <div className='border '>
          {" "}
          <div className='flex justify-center gap-5 md:p-5 p-3'>
            <div className='flex items-center'>
              <SlSocialFacebook />{" "}
              <span className='sm:text-sm text-[10px] italic font-sans'>
                follow us on facebook
              </span>
            </div>
            <div className='flex items-center'>
              <IoLogoInstagram />
              <span className='sm:text-sm text-[10px] italic font-sans'>
                follow us on instagram
              </span>
            </div>
          </div>
        </div>
        <div className='border flex justify-center items-center md:pr-10 lg:p-0 p-2 md:p-4'>
          <p>Creative Inspiration & Motivation</p>
        </div>
      </div>
    );
}

export default HeroFooter