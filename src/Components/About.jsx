import React from "react";
import ecomet from "../Components/Images/ecomet.png";

export default function About() {
  return (
    <div id="about">
    <div className="max-w-[80%] mx-auto py-[130px]  grid grid-cols-2">
      <div className="col-span-6 md:col-span-1 flex flex-wrap justify-center items-start">
        <img className="w-[200px] md:w-[300px] h-[200px] md:h-[300px] flex flex-wrap justify-center items-start" src={ecomet} alt="" />
      </div>
      <div className="col-span-6 md:col-span-1 flex justify-center flex-col items-center flex-wrap py-8 md:py-0">
        <div className="text-black font-bold text-3xl py-4">About Us</div>
        <div className="text-black py-2">
          Our expertise lies in three key areas: LinkedIn Marketing, Web
          Development, and Virtual Administrative Assistance. We excel at
          leveraging LinkedIn's platform to enhance brand visibility and
          generate leads. With our web development skills, we create stunning
          and functional websites. Additionally, our virtual administrative
          assistance ensures efficient and organized support for various
          administrative tasks.
        </div>
        <button className="bg-black hover:bg-[#2699fb]  text-white  mt-5 md:mt-5 text-[12px] md:text-xl p-2 md:p-2 w-[100px] md:w-[130px] font-bold rounded-2xl">
          Hire Me
        </button>
      </div>
    </div>
    </div>
  );
}
