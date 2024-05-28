"use client"

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
      <div className='relative w-full h-[320px]' id='home'>
        <div className='absolute inset-0 opacity-70'>
          <Image
            src='/images/heroTow.jfif'
            alt='Background Image'
            width={1000}
            height={1000}
            className='object-cover object-center w-full h-full'
          />
        </div>
        <div className='absolute inset-9 flex flex-col md:flex-row items-center justify-between'>
          <div className='md:w-1/2 mb-4 md:mb-0 text-white'>
            <h1 className='text-grey-700 font-medium text-4xl md:text-5xl leading-tight mb-2'>
              Hussien Tawhidi
            </h1>
            <p className='font-regular text-xl mb-8 mt-4'>
              web developer(Reactjs, Nextjs, Nodejs)
            </p>
            <div className='col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1'>
              <ul className='mb-4 -ml-2 flex md:order-1 md:mb-0'>
                <li>
                  <Link
                    className='text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 hover:text-dark focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
                    aria-label='Instagram'
                    href='#'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      className='h-5 w-5'>
                      <path d='M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z'></path>
                      <path d='M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0'></path>
                      <path d='M16.5 7.5l0 .01'></path>
                    </svg>
                  </Link>
                </li>

                <li>
                  <a
                    className='text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 hover:text-dark focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
                    aria-label='Facebook'
                    href='#'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      className='h-5 w-5'>
                      <path d='M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3'></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    className='text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 hover:text-dark focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
                    aria-label='Github'
                    href='https://github.com/onwidget/tailnext'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      stroke='currentColor'
                      stroke-width='2'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      className='h-5 w-5'>
                      <path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Hero