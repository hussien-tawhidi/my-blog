"use client";

import Link from "next/link";
import { IconType } from "react-icons";

interface props {
  label: string;
  icon: IconType;
  href: string;
  classLink: string;
}

const MenuItems = ({ label, icon: Icon, href, classLink }: props) => {
  return (
    <Link href={href} className={classLink}>
      <span>{label}</span>
      <Icon />
    </Link>
  );
};

export default MenuItems;
