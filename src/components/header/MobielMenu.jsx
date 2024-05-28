"use client";

import Link from "next/link";
import { headerMenu } from "@/constants/data";
import { IoIosSearch } from "react-icons/io";
import Image from "next/image";

export default function MobielMenu({
  onMobile,
  mobiel,
}) {
  return (
    <div className='mobileContainer'>
      <div className='mobileMenu '>
        <div className='icon' onClick={onMobile}>
          <span className={mobiel ? "line1 close" : "line1"}></span>
          <span className={mobiel ? "line2 close" : "line2"}></span>
        </div>
        <div className='shoppingcard'>
          <Image
            src='/images/logo.png'
            alt='logo'
            width={50}
            height={50}
            className='w-auto h-[10px]'
          />
        </div>
      </div>
      <div className={mobiel ? "menu showMobileMenu" : "menu  "}>
        <div className='mobileSearch'>
          <IoIosSearch />
          <input type='text' placeholder='Keyword...' />
        </div>
        <div className='menuLinks'>
          {headerMenu.map((head) => (
            <span key={head.id} className={mobiel ? "show border-b-1" : ""}>
              <Link href={head.href} onClick={onMobile}>
                {head.title}
              </Link>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
