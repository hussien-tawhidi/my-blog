"use client";

import Image from "next/image";
import Link from "next/link";
import { headerMenu } from "@/constants/data";
import MenuItems from "./MenuItems";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";

const DescktopHeader = () => {
const [search,setSearch]=useState(false)

  return (
    <div className=' gap-2 py-5 px-10 '>
      <ul className='flex justify-center items-center gap-10'>
        <Link href='/'>
          <Image
            src='/images/logo.png'
            alt='Site Logo'
            width={1000}
            height={1000}
            className='w-[25px] opacity-90 object-cover'
          />
        </Link>
        {headerMenu.map((menu) => (
          <li key={menu.id}>
            <MenuItems
              label={menu.title}
              // icon={menu.icon}
              href={menu.href}
              classLink='flex items-center justify-center gap-2 text-[14px]'
            />
          </li>
        ))}
        <button className="text-[14px] flex items-center justify-center">
          <CiSearch />
        </button>
      </ul>
    </div>
  );
};

export default DescktopHeader;
