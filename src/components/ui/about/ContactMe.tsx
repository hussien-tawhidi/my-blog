import React from "react";

interface Props {}

const ContactMeForm = () => {
  return (
    <form action='#' className='w-full'>
      <h2 className='text-2xl pb-3 font-semibold'>
        Send Message me a note if you have any question from me
      </h2>
      <div>
        <div className='flex flex-col mb-3'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            className='px-3 py-2 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500'
            autoComplete='off'
          />
        </div>
        <div className='flex flex-col mb-3'>
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            id='email'
            className='px-3 py-2 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500'
            autoComplete='off'
          />
        </div>
        <div className='flex flex-col mb-3'>
          <label htmlFor='message'>Message</label>
          <textarea
            rows={4}
            id='message'
            className='px-3 py-2 border border-gray-900 bg-transparent resize-none focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500'></textarea>
        </div>
      </div>
      <div className='w-full pt-3'>
        <button
          type='submit'
          className='w-full border border-gray-500 px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-gray-500 hover:text-white text-xl cursor-pointer'>
          Send
        </button>
      </div>
    </form>
  );
};

export default ContactMeForm;
