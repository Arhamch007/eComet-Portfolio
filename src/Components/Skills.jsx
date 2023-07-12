import React from 'react'
import { BsCodeSlash } from "react-icons/bs";
import { BiBarChart } from "react-icons/bi";
import { FaRobot } from "react-icons/fa6";

export default function Skills() {
  return (
    <>
    <div id='skills' >
    <div className='max-w-[80%] mx-auto py-[20px]   md:py-[70px] '>
    <div className='flex flex-wrap justify-center items-center flex-col '>
    <div className='text-black text-4xl font-bold' >Skills</div>
    <div className='py-3'>Skilled professionals ready to assist</div>
    </div>

    <div className='grid grid-cols-3 gap-3 cursor-pointer py-10'>
    <div className='  mt-2 rounded-2xl col-span-6 md:col-span-1 shadow-2xl hover:bg-[#2699fb]  h-[300px] md:h-[400px]  hover:scale-75 duration-300 flex justify-center items-center flex-col group'>
        <div className='p-4 text-8xl font-bold text-[#2699fb] group-hover:text-white'><BsCodeSlash/></div>
        <div className='p-4 text-2xl group-hover:text-white font-bold'>Web Developer</div>
        <div className=''>Full Stack Developer</div>
    </div>
    <div className='mt-2 rounded-2xl col-span-6 md:col-span-1 shadow-2xl hover:bg-[#2699fb]  h-[300px] md:h-[400px]  hover:scale-75 duration-300 flex justify-center items-center flex-col group'>
        <div className='p-4 text-8xl font-bold text-[#2699fb] group-hover:text-white'><BiBarChart/></div>
        <div className='p-4 text-2xl group-hover:text-white font-bold'>Linkedin Marketing</div>
        <div className=''>Full Stack Developer</div>
    </div>

    <div className='mt-2 rounded-2xl col-span-6 md:col-span-1 shadow-2xl hover:bg-[#2699fb]  h-[300px]md:h-[400px]  hover:scale-75 duration-300 flex justify-center items-center flex-col group'>
        <div className='p-4 text-8xl font-bold text-[#2699fb] group-hover:text-white'><FaRobot/></div>
        <div className='p-4 text-2xl group-hover:text-white font-bold'>Virtual Assistant</div>
        <div className=''>Full Stack Developer</div>
    </div>   
    </div>



    </div>
    </div>
    </>
  )
}

