"use client";

import Link from "next/link";
import { IconType } from "react-icons";

interface props {
  label: string;
  icon: IconType;
  href: string;
  classLink: string;
  onClick?: () => void
}

const MenuItems = ({ label, icon: Icon, href, classLink,onClick }: props) => {
  return (
    <Link href={href} className={classLink} onClick={onClick}>
      <span>{label}</span>
      <Icon />
    </Link>
  );
};

export default MenuItems;
