import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { SlSocialFacebook } from "react-icons/sl";

interface Props {}

const Footer = () => {
  return (
    <div className='relative w-full flex items-center justify-center flex-col text-dark'>
      <div className='md:w-2/3 w-full px-4 flex flex-col justify-center'>
        <div className='w-full text-5xl md:text-7xl'>
          <h1 className='w-full md:w-2/3'>How can we help you. get in touch</h1>
        </div>
        <div className='flex mt-8 flex-col md:flex-row md:justify-between'>
          <p className='w-full md:w-2/3 text-gray-400'>
            To ensure that all Wikipedia content is verifiable, anyone may
            question an uncited claim. If your work has been tagged
          </p>
          <div className='w-44 pt-6 md:pt-0'>
            <Link
              href='/contact'
              className=' justify-center text-center border border-gray-400 md:px-10 px-5 md:py-3 py-1.5 flex items-center'>
              Contact US
            </Link>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex md:mt-24 mt-16 md:mb-12 mb-6 flex-row justify-between items-center'>
            <Link href='/' className='overflow-hidden w-32'>
              <Image
                src='/images/logo.png'
                alt='logo'
                width={300}
                height={300}
                className='md:w-32 w-24 overflow-hidden'
              />
            </Link>
            <Link
              href='/about'
              className='hidden md:block cursor-pointer text-gray-600  uppercase'>
              About
            </Link>
            <Link
              href='/services'
              className='hidden md:block cursor-pointer text-gray-600 uppercase'>
              Services
            </Link>
            <Link
              href='/why-us'
              className='hidden md:block cursor-pointer text-gray-600 uppercase'>
              Why us
            </Link>
            <Link
              href='/contact'
              className='hidden md:block cursor-pointer text-gray-600 uppercase'>
              Contact
            </Link>
            <div className='flex flex-row space-x-8 items-center justify-between'>
              <div className='flex flex-col'>
                <div className='flex items-center'>
                  <SlSocialFacebook />{" "}
                  <span className='md:text-sm text-[12px]'>
                    follow us on facebook
                  </span>
                </div>
                <div className='flex items-center my-1'>
                  <IoLogoInstagram />
                  <span className='md:text-sm text-[12px]'>
                    follow us on instagram
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="w-full">
        <footer className='bg-gray-200 text-white pt-4 px-3'>
          <div className='container mx-auto flex flex-wrap items-center justify-between'>
            <div className='w-full md:text-center md:mb-4 mb-8 text-center'>
              <p className='text-xs text-gray-400 md:text-sm'>
                Copyright 2024 &copy; All Rights Reserved
              </p>
            </div>
       
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
