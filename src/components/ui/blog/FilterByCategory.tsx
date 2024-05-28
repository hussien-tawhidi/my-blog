import "./style.css";
interface Props {}

const FilterByCategory = () => {
  return (
    <>
      <div className='mx-auto flex w-full items-center justify-center'>
        <div className='group relative cursor-pointer'>
          <div className='flex items-center justify-between space-x-5 bg-white px-4'>
            <a
              className='menu-hover my-2 py-2 text-base font-medium text-black lg:mx-4'
              >
              Choose Day
            </a>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke-width='1.5'
                stroke='currentColor'
                className='h-6 w-6'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                />
              </svg>
            </span>
          </div>

          <div className='invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible'>
            <a className='my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2'>
              Sunday
            </a>

            <a className='my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2'>
              Monday
            </a>

            <a className='my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2'>
              Tuesday
            </a>

            <a className='my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2'>
              Wednesday
            </a>

            <a className='my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2'>
              Thursday
            </a>

            <a className='my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2'>
              Friday
            </a>

            <a className='my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2'>
              Saturday
            </a>
          </div>
        </div>
      </div>
      {/* <nav className='flex justify-center items-center gap-5 relative'>
        <ul>
       
          <li>
            <button className='border border-dark py-1.5 px-3'>
              Filter By Category
            </button>
            <ul className='bg-primary p-2'>
              <li className='border-gray-300 border-b'>
                <button>Reactjs</button>
              </li>
              <li className='border-gray-300 border-b'>
                <button>Nextjs</button>
              </li>
              <li className='border-gray-300 border-b'>
                <button>Css</button>
              </li>
            </ul>
          </li>
          <li className=''>
            <button className='border border-dark py-1.5 px-3'>Sort By</button>
            <ul className='bg-primary'>
              <li className='border-gray-300 border-b'>
                <button>Create At</button>
              </li>
            </ul>
          </li>
        </ul>
      </nav> */}
    </>
  );
};

export default FilterByCategory;
