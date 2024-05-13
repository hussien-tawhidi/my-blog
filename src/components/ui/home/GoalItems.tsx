"use client";
import { IconType } from "react-icons";

interface props {
  title: string;
  icon: IconType;
  description: string;
  className: string;
}

const GoalItems = ({ title, icon: Icon, description, className }: props) => {
  return (
    <div className={className}>
      <h2 className='md:text-5xl text-4xl font-light my-2 md:my-4 flex items-center'>
        {title}
        <Icon />
      </h2>
      <p className='font-light leading-8 text-justify'>
        <span className="text-center">{description}</span>
      </p>
    </div>
  );
};

export default GoalItems;
