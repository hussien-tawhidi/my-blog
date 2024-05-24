"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Menu from "./Menu";
import { HiMenuAlt2 } from "react-icons/hi";
const MobileHeader = () => {
  const [menu, setMenu] = useState(false);

  const showMenuHandler = () => {
    setMenu(!menu);
  };

  return (
    <div className='flex justify-between items-center relative p-2 md:p-4'>
      <Link href='/' className='lg:hidden block'>
        <Image
          src='/images/logo.png'
          alt='Site Logo'
          width={80}
          height={50}
          className='object-cover w-[45px] sm:w-[60px] overflow-hidden'
        />
      </Link>
      <button onClick={showMenuHandler} className='lg:block hidden'>
        <HiMenuAlt2 size={30} />
      </button>
      <button onClick={showMenuHandler} className='lg:hidden block'>
        <HiMenuAlt3 size={30} />
      </button>

      <Link href='/' className='lg:block hidden'>
        <Image
          src='/images/logo.png'
          alt='Site Logo'
          width={80}
          height={50}
          className='object-cover w-[45px] sm:w-[60px] overflow-hidden'
        />
      </Link>

      <Menu menu={menu} showMenuHandler={showMenuHandler} />
    </div>
  );
};

export default MobileHeader;
