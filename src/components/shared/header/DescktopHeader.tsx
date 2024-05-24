"use client";

import Image from "next/image";
import Link from "next/link";
import { headerMenu } from "@/constants/data";
import MenuItems from "./MenuItems";

const DescktopHeader = () => {
  return (
    <div className='flex justify-between items-center gap-2 py-5 px-10 '>
      <Link href='/'>
        <Image
          src='/images/logo.png'
          alt='Site Logo'
          width={60}
          height={100}
          className='object-cover'
        />
      </Link>
      <ul className='flex justify-center items-center gap-5'>
        {headerMenu.map((menu) => (
          <li key={menu.id}>
            <MenuItems
              label={menu.title}
              icon={menu.icon}
              href={menu.href}
              classLink='flex items-center justify-center gap-2 font-semibold'
            />
          </li>
        ))}
      </ul>

    </div>
  );
};

export default DescktopHeader;
