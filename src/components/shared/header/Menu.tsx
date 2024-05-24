import { headerMenu } from "@/constants/data";
import React from "react";
import MenuItems from "./MenuItems";
import { SlSocialFacebook } from "react-icons/sl";
import { IoLogoInstagram } from "react-icons/io5";

interface Props {
  menu: boolean;
  showMenuHandler: () => void;
}

const Menu = ({ menu, showMenuHandler }: Props) => {
  return (
    <div
      className={`absolute transition duration-1000 top-0 right-0 w-full min-h-screen backdrop-blur-sm bg-black/20 opacity-0 pointer-events-none ${
        menu && "opacity-100 pointer-events-auto"
      }`}
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
                onClick={showMenuHandler}
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
  );
};

export default Menu;
