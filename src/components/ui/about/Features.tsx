
const Features = () => {
    return (
      <>
        <div className='grid grid-cols-4 gap-8 p-8 md:p-1'>
          <div className='col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-gray-300 rounded-xl text-gray-500'>
            <span className='absolute -top-6 p-3 border-2 border-gray-300 rounded-full '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
                className='w-7 h-7 text-yellow-640'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z'></path>
              </svg>
            </span>
            <h2 className='my-1 gradient-red text-base uppercase tracking-wide'>
              Animated &amp; Responsive
            </h2>
            <p className='py-2 text-center text-sm'>
              What makes Fancy Tailwind awesome is that our Tailwind CSS
              components are - for the most - animated, beautiful and
              responsive, which make them so cool.
            </p>
          </div>

          <div className='col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-gray-300 rounded-xl text-gray-500'>
            <span className='absolute -top-6 p-3 border-2 border-gray-300 rounded-full '>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
                className='w-7 h-7 text-yellow-640'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'></path>
              </svg>
            </span>
            <h2 className='my-1 gradient-red text-base uppercase tracking-wide'>
              Copy code &amp; Paste
            </h2>
            <p className='py-2 text-center text-sm'>
              Simply copy and paste the code I provide to implement Fancy
              Tailwind components in your projects.
            </p>
          </div>

          <div className='col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-gray-300 rounded-xl text-gray-500'>
            <span className='absolute -top-6 p-3 border-2 border-gray-300 rounded-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
                className='w-7 h-7 text-yellow-640'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01'></path>
              </svg>
            </span>
            <h2 className='my-1 gradient-red text-base uppercase tracking-wide'>
              Instructions
            </h2>
            <p className='py-2 text-center text-sm'>
              Some of the components require fews modifications in your Tailwind
              config or CSS file. I obviously give you these instructions
              alongside the code to make sure the components work perfectly.
            </p>
          </div>

          <div className='col-span-4 sm:col-span-2 lg:col-span-1 relative px-5 pt-10 pb-2 flex flex-col justify-start items-center border-2 border-gray-300 rounded-xl text-gray-500'>
            <span className='absolute -top-6 p-3 border-2 border-gray-300 rounded-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
                className='w-7 h-7 text-yellow-640'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'></path>
              </svg>
            </span>
            <h2 className='my-1 gradient-red text-base uppercase tracking-wide'>
              Javascript
            </h2>
            <p className='py-2 text-center text-sm'>
              Complex components may need some cooking and the JavaScript needed
              to make them awesome is included. So don&apos;t worry, you&apos;ll get it
              all !
            </p>
          </div>
        </div>
      </>
    );
}

export default Features