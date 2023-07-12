import React from 'react'
import image1 from "../Components/Images/Team/1.png";
import image2 from "../Components/Images/Team/2.png";


export default function Teams() {
  return (
    <>
    <div id='teams'>
    <div className='p-[20px] max-w-[80%] mx-auto '>
    <div className='text-black text-4xl font-bold mt-12 flex justify-center'>Dynamic Duo</div>
    <div className='py-3 flex justify-center'>Dynamic, Powerful, Synchronized, Complementary, Unstoppable</div>

    <div className='grid grid-cols-2 py-24'>
        <div className='col-span-6 md:col-span-1 flex justify-center flex-col items-center '>
        <img src={image1} alt='img' className='w-[250px] md:w-[300px] h-[250px] md:h-[300px]'></img>
        <div className='font-bold text-2xl md:text-3xl mt-4 '>Usama Iqbal</div>
        <div className='mt-2 text-black tracking-widest'>Mern <span className='text-[#2699fb] -tracking-tighter font-bold text-xl '>Stack</span>  Developer</div>

        </div>
        <div className='col-span-6 md:col-span-1 flex justify-center flex-col items-center '>
        <img src={image2} alt='img' className='w-[250px] md:w-[300px] h-[250px] md:h-[300px]'></img>
        <div className='font-bold text-2xl md:text-3xl mt-4'>Farooq Ashraf</div>
        <div className='mt-2 text-black tracking-widest'>Ruby <span className='text-[#2699fb] -tracking-tighter font-bold text-xl '> ON </span>Rails
Developer</div>

        </div>
    </div>

    </div>
    </div>
    </>
  )
}
