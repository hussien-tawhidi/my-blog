import React from "react";
import { IoIosCheckmark } from "react-icons/io";

interface Props {
  showMoreAboutMe:()=>void
}

const AboutMeDetails = ({ showMoreAboutMe }:Props) => {
  return (
    <div
      className='min-h-screen w-full bg-black/50 fixed top-0 left-0 z-20'
      onClick={showMoreAboutMe}>
      <div className='flex  w-full h-[100vh] items-center justify-center'>
        <div className='w-[70%] mx-auto h-[50vh] overflow-y-auto bg-slate-100 p-10 flex flex-col gap-3 rounded-md'>
          <p>
            <span className='font-semibold'>Hossein Tawhidi</span> has had many
            experiences in his personal and social life.
          </p>
          <p>
            After completing his school, he went to the Afghan National Army and
            successfully completed his service for two years.
          </p>
          <p>
            After completing his military service, he participated in the Kankor
            examination and was successful in the field of administration and
            business, but due to economic problems, he couldn&apos;t continue
            it.
          </p>
          <p>
            He started working and to save money for continuing his education,
            Due to working, he studied graphic designing (Photoshop,
            Premiere...).
          </p>
          <p>
            after finished graphic designing, he has been worked with an
            advertising company (Focus Advertising Company) within two years.
          </p>
          <p>
            {" "}
            Most of his work was designing posters, viral graphics, creating
            promotional teasers ... As he was very interested in coding, he
            started learning in the html, so he decided to study software
            engineering and be able to study in this field professionally
            Therefore, he enrolled in Kateb university, faculty of computer
            science, department of software engineering.
          </p>
          He was so clever in studying so he received Iran scholarship, he came
          to Iran, to continued his studies in the Islamic Azad University of
          Koraj branch in the field of software engineering
          <br />
          <div className='italic mt-5 capitalize'>
            <h4 className='font-semibold'>
              Qualification coursesQualification courses
            </h4>
            <p className='flex items-center'>
              <IoIosCheckmark size={30} /> Website design with html & css
            </p>
            <p className='flex items-center'>
              <IoIosCheckmark size={30} /> bootstrap course
            </p>
            <p className='flex items-center'>
              <IoIosCheckmark size={30} /> beginning to advanced javascript
              course
            </p>
            <p className='flex items-center'>
              <IoIosCheckmark size={30} /> beginning to advanced fron-end course
            </p>
            <p className='flex items-center'>
              <IoIosCheckmark size={30} /> full training course from 0 to 100
              reactjs
            </p>
            <p className='flex items-center'>
              <IoIosCheckmark size={30} /> complete nextjs course
            </p>
            <p className='flex items-center'>
              <IoIosCheckmark size={30} /> Seo Introductory
            </p>
            <p className='flex items-center'>
              <IoIosCheckmark size={30} /> Photoshop
            </p>
            <p className='flex items-center'>
              <IoIosCheckmark size={30} /> Premier
            </p>
            <p className='flex items-center'>
              <IoIosCheckmark size={30} /> Diploma in English
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeDetails;
