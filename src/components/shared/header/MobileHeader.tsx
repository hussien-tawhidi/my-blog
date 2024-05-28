"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Menu from "./Menu";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdLanguage } from "react-icons/md";


const MobileHeader = () => {
  const [menu, setMenu] = useState(false);

  const showMenuHandler = () => {
    setMenu(!menu);
  };

  return (
    <div className='flex justify-between items-center relative p-2 md:p-4'>
      <div className='flex items-center justify-center gap-2'>
        <Link href='/'>
          <Image
            src='/images/logo.png'
            alt='Site Logo'
            width={80}
            height={50}
            className='object-cover w-[20px] sm:w-[30px] overflow-hidden'
          />
        </Link>
        <MdLanguage className='sm:text-[30px] text-[20px]' />
      </div>
      <button onClick={showMenuHandler}>
        <HiMenuAlt3 className='sm:text-[30px] text-[20px]' />
      </button>
      <Menu menu={menu} showMenuHandler={showMenuHandler} />
    </div>
  );
};

export default MobileHeader;
