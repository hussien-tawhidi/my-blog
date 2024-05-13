"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { SlSocialFacebook } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io";
import { HiMenuAlt3 } from "react-icons/hi";
import { headerMenu } from "@/constants/data";
import MenuItems from "./MenuItems";

const MobileHeader = () => {
  const [menu, setMenu] = useState(false);

  const showMenuHandler = () => {
    setMenu(!menu);
  };

  return (
    <div className='flex justify-between items-center relative p-2 md:p-4 '>
      <Link href='/'>
        <Image
          src='/images/logo.png'
          alt='Site Logo'
          width={120}
          height={200}
          className='object-cover w-[80px] sm:w-[120px] overflow-hidden'
        />
      </Link>
      <button onClick={showMenuHandler}>
        <HiMenuAlt3 size={30} />
      </button>
      {menu && (
        <div
          className='absolute top-0 right-0 w-full min-h-screen bg-dark/50'
          onClick={showMenuHandler}>
          <div
            className='bg-primary w-60 h-screen'
            onClick={(e) => e.stopPropagation()}>
            <ul className='flex flex-col items-start gap-5 py-5'>
              <li className='w-full flex justify-between flex-col gap-3 p-3'>
                {headerMenu.map((item) => (
                  <MenuItems
                    classLink='flex items-center justify-between font-semibold p-2'
                    key={item.id}
                    label={item.title}
                    icon={item.icon}
                    href={item.href}
                  />
                ))}
              </li>
            </ul>
            <hr />
            <div className='flex flex-col gap-5 p-5'>
              <div className='flex items-center'>
                <SlSocialFacebook />{" "}
                <span className='text-sm'>follow us on facebook</span>
              </div>
              <div className='flex items-center'>
                <IoLogoInstagram />
                <span className='text-sm'>follow us on instagram</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
