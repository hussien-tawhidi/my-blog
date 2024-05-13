import { FaCode } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GoProjectSymlink } from "react-icons/go";
import { ImProfile } from "react-icons/im";
import {
  MdDesignServices,
  MdLanguage,
  MdOutlineContactPhone,
} from "react-icons/md";
import { SiBloglovin } from "react-icons/si";

export const headerMenu = [
  { id: 1, title: "design", icon: MdDesignServices, href: "/design" },
  { id: 2, title: "Development", icon: FaCode, href: "/development" },
  { id: 3, title: "Project", icon: GoProjectSymlink, href: "/project" },
  { id: 4, title: "Blog", icon: SiBloglovin, href: "/blog" },
  { id: 5, title: "Profile", icon: ImProfile, href: "/profile" },
  { id: 6, title: "About", icon: FcAbout, href: "/about" },
  { id: 7, title: "Contact", icon: MdOutlineContactPhone, href: "/contact" },
  { id: 8, title: "Lan", icon: MdLanguage, href: "/language" },
];
