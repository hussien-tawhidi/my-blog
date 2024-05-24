"use client";

import { randomProjects } from "@/constants/data";
import Image from "next/image";
import Slider from "react-slick";


function ReactSlick() {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows:false,
  };

  return (
    <div className=' p-10'>
      <div className='slider-container'>
        <Slider {...settings}>
          {randomProjects.map((project) => (
            <div className='w-[500px] h-[50vh]' key={project.id}>
              <Image
                src={project.image}
                alt={project.category}
                width={1000}
                height={1000}
                className='object-cover w-full h-full'
              />
            </div>
          ))}
        </Slider>
        <link
          rel='stylesheet'
          type='text/css'
          charSet='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
      </div>
    </div>
  );
}

export default ReactSlick;
