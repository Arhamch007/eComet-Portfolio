import React from 'react'
import ecomet1 from "../Components/Images/white.jpg";
import { BiLogoUpwork } from "react-icons/bi";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa6";



export default function Footer() {
  return (
    <div className='bg-[#2699fb] '>
    <div className='max-w-[80%] mx-auto '>
    <div className='grid grid-cols-3'>

    <div className="col-span-6 md:col-span-1  py-7 ">
        <div className='flex flex-col items-center md:items-start'>
        <img src={ecomet1} className='h-[150px] w-[150px]' alt='logo'></img>
        <div className='py-3 font-bold text-white'>About the company</div>
        <div className='text-white'>Building digital solutions, bridging innovation and efficiency,paving the way for your technological success.</div>
        <div className='flex py-4 justify-left gap-7 text-3xl text-white'>
        <div><BiLogoUpwork/></div>
        <div><BiLogoFacebookCircle/></div>
        <div><BiLogoLinkedinSquare/></div>   
        </div>
        </div>
    </div>
    <div className="col-span-6 md:col-span-1 flex justify-center gap-6 flex-col items-center py-7 ">
    <div className='text-white'>Home</div>
    <div className='text-white'>About</div>
    <div className='text-white'>Contact Us</div>
    <div className='text-white'>Skills</div>
    <div className='text-white'>Team</div>
    </div>
    <div className="col-span-6 md:col-span-1  flex flex-col justify-center gap-8 items-center md:items-start py-7 ">
  
        <div className='flex text-white ' ><FaLocationDot className='text-2xl mr-2'/> <span children> F-Block Street #9 Vehari Punjab Pakistan</span></div>
        <div className='flex text-white'><FaPhone className='text-2xl mr-2'/> <span> +92-332-721763-7</span></div>
        <div className='flex text-white'><FaEnvelope className='text-2xl mr-2'/> <span> ecomet-technologies@gmail.com</span></div>
    </div>
    

    </div>
    <div className='flex items-center justify-center tracking-wide text-white py-7 md:py-0'>© 2023 eComet | All Rights Reserved | Develop by&nbsp;  <span className='text-yellow-300'> eComet</span> </div>
    </div>
    </div>
  )
}
