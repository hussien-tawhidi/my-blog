"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { randomProjects } from "@/constants/data";
import Image from "next/image";

const RandomPosts = () => {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={20}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay, Pagination, Navigation]}
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      className='mySwiper'>
      {randomProjects.map((project) => (
        <SwiperSlide key={project.id}>
          <div className='m-10 h-[300px] relative rounded-md'>
            <Image
              src={project.image}
              alt='Project'
              fill
              className='object-cover'
            />
            <span className='absolute top-0 left-0 bg-primary p-3 uppercase tracking-tighter'>
              {project.category}
            </span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RandomPosts;
