import ContactMeForm from "@/components/ui/about/ContactMe";
import { Metadata } from "next";
import Image from "next/image";
import { TbSeo } from "react-icons/tb";
import { DiResponsive } from "react-icons/di";
import { PiTimerThin } from "react-icons/pi";
import { SiAltiumdesigner } from "react-icons/si";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: "In this page we talk about the purpose of this page",
};

const AboutBlogPage = () => {
  return (
    <div className='pt-20'>
      <div className='w-[90%] md:w-[70%] mx-auto'>
        {/* image and intro */}
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
                Programmer and web developer
              </p>
              <div className='col-span-4 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1'>
                <ul className='mb-4 -ml-2 flex md:order-1 md:mb-0'>
                  <li>
                    <Link
                      className='text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
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
                      className='text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
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
                      className='text-muted inline-flex items-center rounded-lg p-2.5 text-sm hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
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
        {/* services */}
        <section className='py-10' id='services'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-gray-800 mb-8 text-center'>
              Our Services
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                <Image
                  src='/images/fashion.png'
                  alt='wheat flour grinding'
                  width={1000}
                  height={1000}
                  className='w-full h-64 object-cover'
                />
                <div className='p-6 text-center'>
                  <h3 className='text-xl font-medium text-gray-800 mb-2'>
                    Web designing
                  </h3>
                  <p className='text-gray-700 text-base'>
                    Our wheat flour grinding service provides fresh,
                    high-quality flour to businesses and individuals in the
                    area. We use state-of-the-art equipment to grind wheat into
                    flour, and we offer a variety of flours to meet the needs of
                    our customers.
                  </p>
                </div>
              </div>
              <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                <Image
                  src='/images/fashion.png'
                  alt='wheat flour grinding'
                  width={1000}
                  height={1000}
                  className='w-full h-64 object-cover'
                />
                <div className='p-6 text-center'>
                  <h3 className='text-xl font-medium text-gray-800 mb-2'>
                    Web development
                  </h3>
                  <p className='text-gray-700 text-base'>
                    Our gram flour is perfect for a variety of uses, including
                    baking, cooking, and making snacks. It is also a good source
                    of protein and fiber.Our gram flour grinding service is a
                    convenient and affordable way to get the freshest gram flour
                    possible.
                  </p>
                </div>
              </div>
              <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                <Image
                  src='/images/fashion.png'
                  alt='wheat flour grinding'
                  width={1000}
                  height={1000}
                  className='w-full h-64 object-cover'
                />
                <div className='p-6 text-center'>
                  <h3 className='text-xl font-medium text-gray-800 mb-2'>
                    Branding
                  </h3>
                  <div className='text-gray-700 text-base'>
                    Our jowar grinding service is a convenient and affordable
                    way to get fresh, high-quality jowar flour. We use
                    state-of-the-art equipment to grind jowar into a fine
                    powder, which is perfect for making roti, bread, and other
                    dishes.
                    <span>
                      <span>Read More</span>
                      <p>
                        Our jowar flour is also a good source of protein and
                        fiber, making it a healthy choice for your family.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                <Image
                  src='/images/fashion.png'
                  alt='wheat flour grinding'
                  width={1000}
                  height={1000}
                  className='w-full h-64 object-cover'
                />
                <div className='p-6 text-center'>
                  <h3 className='text-xl font-medium text-gray-800 mb-2'>
                    Personal blog
                  </h3>
                  <div className='text-gray-700 text-base'>
                    We specializes in the production of high-quality chili
                    powder. Our chili powder is made from the finest, freshest
                    chilies, and we use traditional pounding methods to ensure
                    that our chili powder retains its full flavor and aroma.
                    <div>
                      <span>Read More</span>
                      <p>
                        {" "}
                        We offer a variety of chili powder products, including
                        mild, medium, and hot. We also offer custom blends to
                        meet the specific needs of our customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-white rounded-lg bg-gradient-to-tr from-pink-300 to-blue-300 p-0.5 shadow-lg overflow-hidden min-h-full'>
                <div className='text-center text-white font-medium'>
                  Online Shopping
                </div>
                <Image
                  src='/images/fashion.png'
                  alt='wheat flour grinding'
                  width={1000}
                  height={1000}
                  className='w-full h-64 object-cover'
                />
                <div className='p-6 bg-white text-center rounded-b-lg md:min-h-full'>
                  <h3 className='text-xl font-medium text-gray-800 mb-2'>
                    Flavoured Spaghetti
                  </h3>
                  <p className='text-gray-700 text-base'>
                    <span className='font-medium underline'>
                      Our speciality is
                    </span>
                    Bappa Flour Mill offers a variety of flavored spaghetti
                    dishes that are sure to tantalize your taste buds. We use
                    only the freshest ingredients Our flavors include: Mango,
                    spinach
                  </p>
                </div>
              </div>

              <div className='bg-white rounded-lg shadow-md overflow-hidden'>
                <Image
                  src='/images/fashion.png'
                  alt='wheat flour grinding'
                  width={1000}
                  height={1000}
                  className='w-full h-64 object-cover'
                />
                <div className='p-6 text-center'>
                  <h3 className='text-xl font-medium text-gray-800 mb-2'>
                    Music App
                  </h3>
                  <div className='text-gray-700 text-base'>
                    Our company produces high-quality rice papad that is made
                    with the finest ingredients. We use traditional methods to
                    make our papad, which gives it a unique flavor and texture.
                    Our papad is also gluten-free and vegan.
                    <div>
                      <span>Read More</span>
                      <p>
                        {" "}
                        We offer a variety of rice papad flavors, including
                        plain, salted, spicy, and flavored. We also offer a
                        variety of sizes and shapes to choose from. Our papad is
                        available in bulk or in individual packages.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about me  */}
        <div>
          <section className='bg-gray-100' id='aboutus'>
            <div className='container mx-auto py-16 px-4 sm:px-6 lg:px-8'>
              <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
                <div className='max-w-lg'>
                  <h2 className='text-3xl font-bold text-gray-800 mb-8 text-center'>
                    About Me
                  </h2>
                  <p>
                    Hossein Tawhidi has had many experiences in his personal and
                    social life. After completing his school, he went to the
                    Afghan National Army and successfully completed his service
                    for two years. After completing his military service, he
                    participated in the Kankor examination and was successful in
                    the field of administration and business, but due to
                    economic problems, he couldn&apos;t continue it. He started
                    working and to save money for continuing his education, Due
                    to working, he studied graphic designing (Photoshop,
                    Premiere...). after finished graphic designing, he has been
                    worked with an advertising company (Focus Advertising
                    Company) within two years. Most of his work was designing
                    posters, viral graphics, creating promotional teasers ... As
                    he was very interested in coding, he started learning in the
                    html, so he decided to study software engineering and be
                    able to study in this field professionally Therefore, he
                    enrolled in Kateb university, faculty of computer science,
                    department of software engineering. He was so clever in
                    studying so he received Iran scholarship, , he came to Iran,
                    and he continued his studies in the Islamic Azad University
                    of Koraj branch in the field of software engineering
                  </p>
                </div>
                <div className='mt-12 md:mt-0'>
                  <Image
                    src='/images/hero.jpg'
                    alt='wheat flour grinding'
                    width={1000}
                    height={1000}
                    className='w-full h-64 object-cover'
                  />
                </div>
              </div>
            </div>
          </section>

          <section className='text-gray-700 body-font mt-10'>
            <div className='container px-5 py-12 mx-auto'>
              <div className='flex flex-wrap text-center justify-center text-dark'>
                <div className='p-4 md:w-1/4 sm:w-1/2'>
                  <div className='px-4 py-6 transform transition duration-500 hover:scale-110 text-dark'>
                    <div className='flex justify-center'>
                      <TbSeo className='w-auto h-[15vh]' />
                      {/* <img
                      src='https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp'
                      className='w-32 mb-3'
                    /> */}
                    </div>
                    <h2 className='title-font font-regular text-2xl'>
                      Seo Freindly
                    </h2>
                  </div>
                </div>

                <div className='p-4 md:w-1/4 sm:w-1/2'>
                  <div className='px-4 py-6 transform transition duration-500 hover:scale-110'>
                    <div className='flex justify-center'>
                      <DiResponsive className='w-auto h-[15vh]' />
                    </div>
                    <h2 className='title-font font-regular text-2xl text-gray-900'>
                      Responsive
                    </h2>
                  </div>
                </div>

                <div className='p-4 md:w-1/4 sm:w-1/2'>
                  <div className='px-4 py-6 transform transition duration-500 hover:scale-110'>
                    <div className='flex justify-center'>
                      <PiTimerThin className='w-auto h-[15vh]' />
                    </div>
                    <h2 className='title-font font-regular text-2xl text-gray-900'>
                      Fast Loading
                    </h2>
                  </div>
                </div>

                <div className='p-4 md:w-1/4 sm:w-1/2'>
                  <div className='px-4 py-6 transform transition duration-500 hover:scale-110'>
                    <div className='flex justify-center'>
                      <SiAltiumdesigner className='w-auto h-[15vh]' />
                    </div>
                    <h2 className='title-font font-regular text-2xl text-gray-900'>
                      Expertise in Industry
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* address */}
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
                      {/* <Link className='flex m-1' href='tel:+919823331842'>
                        <div className='flex-shrink-0'>
                          <div className='flex items-center justify-between h-10 w-30 rounded-md bg-secondary text-white p-2'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              fill='none'
                              viewBox='0 0 24 24'
                              stroke-width='1.5'
                              stroke='currentColor'
                              className='w-6 h-6'>
                              <path
                                stroke-linecap='round'
                                stroke-linejoin='round'
                                d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                              />
                            </svg>
                            Call now
                          </div>
                        </div>
                      </Link> */}
                      <p className='mt-1 font-bold text-gray-600'>
                        <Link href='tel:+123'>Email: hussientawhidi710@gmail.com</Link>
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
      </div>
    </div>
  );
};

export default AboutBlogPage;
