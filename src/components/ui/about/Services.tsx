import React from "react";

interface Props {}

const Services = () => {
  return (
    <>
      <link
        rel='stylesheet'
        href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css'
      />

      <section className=' py-8'>
        <div className='container mx-auto text-center px-4'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'>Services</h2>
          <div className='flex flex-wrap -mx-4'>
            <div className='w-full md:w-1/3 px-4 mb-8'>
              <div className=' p-8 border rounded-md'>
                <i className='fas fa-lock text-4xl text-blue-500 mb-4'></i>
                <h3 className='text-xl font-bold text-gray-800 mb-2'>Secure</h3>
                <p className='text-gray-600'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className='w-full md:w-1/3 px-4 mb-8'>
              <div className=' p-8 border rounded-md'>
                <i className='fas fa-globe-americas text-4xl text-blue-500 mb-4'></i>
                <h3 className='text-xl font-bold text-gray-800 mb-2'>Global</h3>
                <p className='text-gray-600'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className='w-full md:w-1/3 px-4 mb-8'>
              <div className=' p-8 border rounded-md'>
                <i className='fas fa-users text-4xl text-blue-500 mb-4'></i>
                <h3 className='text-xl font-bold text-gray-800 mb-2'>
                  Collaborative
                </h3>
                <p className='text-gray-600'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
