"use client";

import MenuItems from "@/components/shared/header/MenuItems";
import { homeGoalData } from "@/constants/data";
import Link from "next/link";

import GoalItems from "./GoalItems";

const MainGoal = () => {
  return (
    <div className=' my-14 md:my-20'>
      <div className='grid lg:grid-cols-3'>
        {homeGoalData.map((goal, index) => (
          <GoalItems
            title={goal.title}
            key={index}
            className={`
          flex flex-col py-1.5 px-5 lg:p-10 gap-5
          ${index < 2 && "border-r h-full "}`}
            description={goal.described.slice(0, 300)}
            icon={goal.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default MainGoal;
