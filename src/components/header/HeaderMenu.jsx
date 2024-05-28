"use client";
import Link from "next/link";
import { headerMenu } from "@/constants/data";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
export default function HeaderMenu({
  showSearchContainer,
  searchContainer,
  onShowCardItems,
  showCardItems,
}) {
  return (
    <div className='header'>
      <Link
        href='/'
        className={searchContainer ? "logo hideHeaderSingleMenu" : "logo"}>
        <Image
          src='/images/logo.png'
          height={1000}
          width={1000}
          alt='logo'
          className='w-[25px] object-cover'
        />
      </Link>
      <div className='menu'>
        {headerMenu.map((header) => (
          <span
            key={header.id}
            className={
              searchContainer ? "menuLinks hideMenuLinks" : "menuLinks"
            }>
            <Link href={header.href}>{header.title}</Link>
          </span>
        ))}
      </div>
      <div className='header-icons'>
        <CiSearch
          className={
            searchContainer ? " searchIcon hideHeaderSingleMenu" : " searchIcon"
          }
          onClick={showSearchContainer}
        />
      </div>
    </div>
  );
}
