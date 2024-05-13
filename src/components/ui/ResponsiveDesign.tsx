import Image from "next/image";

const ResponsiveDesign = () => {
  return (
    <div className='flex flex-col justify-center items-center p-5 w-full mx-auto text-center py-10'>
      <h6 className='text-3xl md:text-5xl font-light my-3'>
        Benefits of responsive design
      </h6>
      <p className='text-center w-full md:w-[55%] mx-auto font-light'>
        With the proliferation of smartphones and tablets, more and more people
        are accessing the internet on their mobile devices. This surge in mobile
        usage has resulted in a significant increase in mobile web traffic. As a
        website owner, it is crucial to cater to this growing audience by
        implementing responsive design
      </p>
      <button className='border-gray-700 border py-2 px-10 font-light my-5'>
        Contact us
      </button>
      <Image
        src='/images/responsive.webp'
        alt='Responive Design'
        width={800}
        height={800}
        className='my-5'
      />
      <p className='text-center w-full md:w-[55%] mx-auto font-light'>
        Responsive design allows your website to adapt and adjust its layout and
        content automatically based on the user &apos; s device and screen size.
        This means that your website will look and function seamlessly on mobile
        devices, providing visitors with an optimal browsing experience
      </p>
    </div>
  );
};

export default ResponsiveDesign;
