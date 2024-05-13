"use client";

import Image from "next/image";
import Link from "next/link";
import { MdDesignServices } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdOutlineContactPhone } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { GoProjectSymlink } from "react-icons/go";
import { SiBloglovin } from "react-icons/si";
import { MdLanguage } from "react-icons/md";

const DescktopHeader = () => {
  return (
    <div className='flex justify-around gap-2 p-3 '>
      <ul className='flex justify-center items-center gap-5'>
        <li>
          <Link
            href='/'
            className='flex items-center justify-center gap-1 lg:gap-0'>
            <span className='tracking-wider font-semibold'>Desgin</span>
            <MdDesignServices />
          </Link>
        </li>

        <li>
          <Link href='/' className='flex items-center justify-center gap-1'>
            <span className='tracking- font-semibold'>Contacts</span>
            <MdOutlineContactPhone />
          </Link>
        </li>
        <li>
          <Link href='/' className='flex items-center justify-center gap-1'>
            <span className='tracking-wider font-semibold'>Development</span>
            <FaCode />
          </Link>
        </li>
        <li>
          <Link href='/' className='flex items-center justify-center gap-1'>
            <span className='tracking-wider font-semibold'>Profile</span>
            <ImProfile />
          </Link>
        </li>
      </ul>
      <Link href='/'>
        <Image
          src='/images/logo.png'
          alt='Site Logo'
          width={200}
          height={200}
          className='object-cover'
        />
      </Link>
      <ul className='flex justify-center items-center gap-5'>
        <li>
          <Link href='/' className='flex items-center justify-center gap-1'>
            <span className='tracking-wider font-semibold'>About</span>
            <FcAbout />
          </Link>
        </li>
        <li>
          <Link href='/' className='flex items-center justify-center gap-1'>
            <span className='tracking-wider font-semibold'>Project</span>
            <GoProjectSymlink />
          </Link>
        </li>
        <li>
          <Link href='/' className='flex items-center justify-center gap-1'>
            <span className='tracking-wider font-semibold'>Blog</span>
            <SiBloglovin />
          </Link>
        </li>
        <li>
          <Link href='/' className='flex items-center justify-center gap-1'>
            <span className='tracking-wider font-semibold'>Lan</span>
            <MdLanguage />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DescktopHeader;
