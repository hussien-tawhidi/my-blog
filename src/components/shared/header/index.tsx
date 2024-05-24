"use client";

import { useEffect, useState } from "react";
import DescktopHeader from "./DescktopHeader";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScrolling = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScrolling);

    return () => {
      window.removeEventListener("scroll", handleScrolling);
    };
  }, []);

  return (
    <div
      className={
        isScrolling
          ? "fixed top-0 left-0 right-0 z-[999] bg-primary/85 transition-all duration-500"
          : "fixed top-0 left-0 right-0 z-[999] bg-primary/20 transition-all duration-500"
      }>
      <div className=''>
        <MobileHeader />
      </div>
    </div>
  );
};

export default Header;
