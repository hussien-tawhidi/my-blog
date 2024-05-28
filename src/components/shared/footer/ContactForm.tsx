"use client"

const ContactForm = () => {
  return (
    <>
      <section className='md:w-[50vw] sm:w-[80vw] w-[95vw]'>
        <div
          id='contact-us'
          className='overflow-hidden bg-white py-16 px-4 dark:bg-slate-900 sm:px-6 lg:px-8 lg:py-24'>
                  <div className='w-full'
                  >
            <form className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-gray-700 dark:text-slate-400'>
                  Name
                </label>
                <div className='mt-1'>
                  <input
                    name='name'
                    type='text'
                    id='name'
                    autoComplete='organization'
                    required
                    className='border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-700 dark:text-slate-400'>
                  Email
                </label>
                <div className='mt-1'>
                  <input
                    name='email'
                    id='email'
                    required
                    type='email'
                    autoComplete='email'
                    className='border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium text-gray-700 dark:text-slate-400'>
                  Message
                </label>
                <div className='mt-1'>
                  <textarea
                    required
                    name='message'
                    id='message'
                    rows={4}
                    className='border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-gray-500 focus:ring-gray-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white'></textarea>
                </div>
              </div>
              <div className='flex justify-end sm:col-span-2'>
                <button
                  type='submit'
                  className='inline-flex items-center rounded-md px-4 py-2 font-medium focus:outline-none focus-visible:ring focus-visible:ring-gray-500 shadow-sm sm:text-sm transition-colors duration-75 text-gray-500 border border-gray-500 hover:bg-sky-50 active:bg-sky-100 disabled:bg-sky-100 dark:hover:bg-gray-900 dark:active:bg-gray-800 dark:disabled:bg-gray-800 disabled:cursor-not-allowed'>
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
