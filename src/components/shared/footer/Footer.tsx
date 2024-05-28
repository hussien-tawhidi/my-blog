"use client";

import Image from "next/image";
import Link from "next/link";
import { IoLogoInstagram } from "react-icons/io";
import { SlSocialFacebook } from "react-icons/sl";
import ContactForm from "./ContactForm";
import { useState } from "react";
import { headerMenu } from "@/constants/data";
import MenuItems from "../header/MenuItems";


const Footer = () => {
const [show,setShow]=useState(false)

  const showContactForm = () => {
    setShow(prev=>!prev)
  }
  

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
            <button
              onClick={showContactForm}
              className=' justify-center text-center border border-gray-400 md:px-10 px-5 md:py-3 py-1.5 flex items-center'>
              Contact US
            </button>
          </div>
        </div>

        <div className='border-t mt-10'>
          <div className='py-10'>
            <div className='flex flex-wrap justify-between'>
              {headerMenu.map((menu) => (
                <div className=' md:w-auto p-3 md:px-6' key={menu.id}>
                  <MenuItems
                    label={menu.title}
                    icon={menu.icon}
                    href={menu.href}
                    classLink='flex items-center border-b md:text-[14px] text-[12px] gap-2 opacity-80 hover:opacity-100 transition-all duration-500'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className='w-full'>
        <footer className=' pt-4 px-3'>
          <div className='container mx-auto flex flex-wrap items-center justify-between'>
            <div className='w-full md:text-center md:mb-4 mb-8 text-center'>
              <p className='text-xs text-gray-400 md:text-sm'>
                Copyright 2024 &copy; All Rights Reserved
              </p>
            </div>
          </div>
        </footer>
      </section>
      {show && (
        <div className='fixed top-0 left-0 h-[100vh] w-full z-30'>
          <div
            className='bg-black/50 h-full w-full flex items-center justify-center'
            onClick={showContactForm}>
            <div className=' mx-auto' onClick={(e) => e.stopPropagation()}>
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
