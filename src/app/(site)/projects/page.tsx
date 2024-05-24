import ReactSlick from "@/components/ReactSlick";
import BlogCard from "@/components/ui/cards/BlogCard";
import { randomProjects } from "@/constants/data";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description: "In this page we show the project we design",
};

const ProjectsPage = () => {
  return (
    <div className='min-h-screen pt-20'>
      <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
        {randomProjects.map((project) => (
          <div className='overflow-hidden' key={project.id}>
            <Link
              className='p-8 max-w-lg border hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center'
              href={project.href}>
              <Image
                width={1000}
                height={1000}
                alt=''
                src={project.image}
                className='object-cover h-[300px] w-[300px] overflow-hidden border'
              />
              <div className='mt-8'>
                <h4 className='font-bold text-xl'>{project.category}</h4>
                <p className='mt-2 text-gray-600'>
                  {project.desc.slice(0, 100)}...
                </p>
                <div className='mt-5'>
                  <button
                    type='button'
                    className='inline-flex items-center border border-dark px-7 py-2 text-sm font-medium leading-4  shadow-sm'>
                    Order ...
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
