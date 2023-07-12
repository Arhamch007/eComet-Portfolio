import React from 'react';
import Typed from 'react-typed';

export default function Banner() {
  return (
    <div className='bg-[#2699fb] w-full  h-[88vh] md:h-screen flex flex-wrap flex-col items-center justify-center '>

    <div className='max-w-[80%] mx-auto text-center font-bold '>
        <div className='text-xl  md:text-3xl items-center '>Work with us</div>
        <div className='text-4xl text-white md:text-[80px] p-[20px] md:p-[45px] '>Grow with us.</div>
        <div className='text-xl md:text-[40px] p-[10px] md:p-[25px] text-white'>
        <Typed className='pl-1 md:pl-4 text-yellow-300 pt-10 leading-none'
                    strings={['Web Development','Virtual Administrative Assistance','LinkedIn Marketing']}
                    typeSpeed={100}
                    backSpeed={50}
                    loop={true}
                /></div>

                <button className='bg-black hover:text-yellow-300 text-white mt-5 md:mt-10 text-[19px] md:text-2xl p-2 md:p-4 w-[150px] md:w-[220px] rounded-2xl' >Hire Me</button>
    </div>
    
    </div>
  )

  }