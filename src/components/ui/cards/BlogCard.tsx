import React from "react";

interface Props {
  userName: string;
  title: string;
  descriptions: string;
}

const BlogCard = () => {
  return (
    <div className='flex flex-col justify-between w-full h-[250px] sm:h-[400px] bg-white bg-center text-gray-800 shadow-md overflow-hidden cursor-pointer bg-blog-card bg-cover'>
      <div className='flex justify-between items-center ml-4 pr-8'>
        <div className='bg-primary text-dark bg-opacity-95 shadow px-2 py-1 flex items-center font-bold text-xs rounded'>
          Some information
        </div>
        <div className='bg-red-600 w-10 h-12 shadow flex flex-col-reverse p-2 text-center font-bold text-white rounded-b-full'>
          %
        </div>
      </div>
      <div className='bg-white bg-opacity-95 shadow-md rounded-r-xl p-4 flex flex-col mr-4 mb-8'>
        <h3 className='text-xl font-bold pb-2'>Happy Nowruz 1400</h3>
        <p className='truncate text-gray-500 text-sm'>
          Nowruz is the Persian New Year, which begins on the Spring equinox,
          marking the first day of Farvardin, the first month of the Iranian
          solar calendar.
        </p>
        <div className='flex justify-between items-center'>
          <span className='text-gray-400 text-xs'>Have a nice year...</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
