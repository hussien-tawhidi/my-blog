import "./style.css";
interface Props {}

const FilterByCategory = () => {
  return (
    <>
      <nav className='flex justify-center items-center gap-5'>
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
      </nav>
    </>
  );
};

export default FilterByCategory;
