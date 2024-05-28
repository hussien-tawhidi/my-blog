import Link from 'next/link';
import React from 'react'

interface Props {}

const Address = () => {
    return (
      <>
        <section className='bg-gray-100'>
          <div className='max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-20 lg:px-8'>
            <div className='max-w-2xl lg:max-w-4xl mx-auto text-center'>
              <h2
                className='text-3xl font-extrabold text-gray-900'
                id='contactUs'>
                Visit Our Location
              </h2>
              <p className='mt-3 text-lg text-gray-500'>
                Let us serve you the best
              </p>
            </div>
            <div className='mt-8 lg:mt-20'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                <div>
                  <div className='max-w-full mx-auto rounded-lg overflow-hidden'>
                    <div className='border-t border-gray-200 px-6 py-4'>
                      <h3 className='text-lg font-bold text-gray-900'>
                        Contact
                      </h3>
                      <p className='mt-1 font-bold text-gray-600'>
                        <Link href='tel:+123'>Phone: +98 9932268115</Link>
                      </p>
                      <p className='mt-1 font-bold text-gray-600'>
                        <Link href='tel:+123'>
                          Email: hussientawhidi710@gmail.com
                        </Link>
                      </p>
                    </div>
                    <div className='px-6 py-4'>
                      <h3 className='text-lg font-medium text-gray-900'>
                        Our Address
                      </h3>
                      <p className='mt-1 text-gray-600'>Iran, Alborz, Karaj</p>
                    </div>
                  </div>
                </div>
                <div className='rounded-lg overflow-hidden order-none sm:order-first'>
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1617.718767206864!2d50.97978515691328!3d35.813739364300694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dbfb78896f4c9%3A0xec78b57950de1c31!2sLaleh%20out%20door%20Market!5e0!3m2!1sen!2s!4v1716574592016!5m2!1sen!2s'
                    className='w-full'
                    width='600'
                    height='450'
                    style={{ border: 0 }}
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
}

export default Address