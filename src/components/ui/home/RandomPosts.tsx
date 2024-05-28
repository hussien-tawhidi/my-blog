"use client";
import { randomProjects } from "@/constants/data";
import Image from "next/image";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import { randomProjects } from "@/constants/data";
// import Image from "next/image";

// const RandomPosts = () => {
//   return (
//     <Swiper
//       slidesPerView={3}
//       spaceBetween={20}
//       autoplay={{
//         delay: 2500,
//         disableOnInteraction: false,
//       }}
//       loop={true}
//       modules={[Autoplay, Pagination, Navigation]}
//       breakpoints={{
//         300: {
//           slidesPerView: 1,
//           spaceBetween: 20,
//         },
//         640: {
//           slidesPerView: 1,
//           spaceBetween: 20,
//         },
//         768: {
//           slidesPerView: 3,
//           spaceBetween: 20,
//         },
//       }}
//       className='mySwiper'>
//       {randomProjects.map((project) => (
//         <SwiperSlide key={project.id}>
//           <div className='m-10 h-[300px] relative rounded-md'>
//             <Image
//               src={project.image}
//               alt='Project'
//               fill
//               className='object-cover'
//             />
//             <span className='absolute top-0 left-0 bg-primary p-3 uppercase tracking-tighter'>
//               {project.category}
//             </span>
//           </div>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default RandomPosts;
import React from "react";
import Slider from "react-slick";

function MultipleItems() {
  const settings = {

    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
     
      
    ],
  };
  return (
    <div className='overflow-hidden mx-auto'>
      <div className='p-10 m-10'>
        <div className='slider-container'>
          <Slider {...settings}>
            {randomProjects.map((project) => (
              <div
                className='m-10 md:h-[300px] h-[200px] relative rounded-md'
                key={project.id}>
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
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default MultipleItems;
