import Image from "next/image";
import Link from "next/link";
import Services from "@/components/ui/about/Services";
import Features from "../../../components/ui/about/Features";
import AboutMe from "@/components/ui/about/AboutMe";
import Address from "@/components/ui/about/Address";
import Hero from "@/components/ui/about/Hero";

const AboutBlogPage = () => {
  return (
    <div className='pt-20 relative'>
      <div className='w-[90%] md:w-[70%] mx-auto'>
        <Hero />
        <Services />
        <AboutMe />
        <Features />
        <Address />
      </div>
    </div>
  );
};

export default AboutBlogPage;
