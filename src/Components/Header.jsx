import React, { useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import { Link } from 'react-scroll';

  

 function Header() {
    const [toggle, setToggle]=useState(false);
  return (
   <div className='bg-[#2699fb] p-2 sticky  top-0'>
    <div className='max-w-[80%] py-1 mx-auto  flex justify-between items-center sticky sticky top-0'>
        <div className='text-3xl font-bold hover:text-white cursor-pointer' >eComet</div>
        {
            toggle ?
            <AiOutlineClose onClick={()=> setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>

            :
            <AiOutlineMenu onClick={()=> setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>


        }
        
        <ul className='   hidden md:flex text-white md:gap-5 font-bold text-[19px]'>
        <link></link>
            <li className='hover:text-black cursor-pointer'>
            <Link to="/" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
            </li>
            <li className='hover:text-black cursor-pointer'>
            <Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
        
            <li className='hover:text-black cursor-pointer'>

            <Link to="skills" spy={true} smooth={true} offset={50} duration={500}>Skills</Link></li>

            <li className='hover:text-black cursor-pointer'>
            <Link to="teams" spy={true} smooth={true} offset={50} duration={500}>Team</Link></li>

            <li className='hover:text-black cursor-pointer'>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
        </ul>
        {/* Responsive */}
        <ul className= { `duration-500 font-bold md:hidden text-white gap-10 fixed bg-black  top-[60px] w-full h-screen ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
            <li className='p-5  decoration-2'>
            <Link to="/" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
            </li>
            <li className='p-5  decoration-2'>
            <Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link>
            </li>
            <li className='p-5  decoration-2'>
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Skills</Link>
            </li>
            <li className='p-5  decoration-2'>
            <Link to="skills" spy={true} smooth={true} offset={50} duration={500}>Team</Link>
            </li>
            <li className='p-5  decoration-2'>
            <Link to="teams" spy={true} smooth={true} offset={50} duration={500}>Contact</Link>
            </li>
        </ul>
    </div>
   </div>
   
  )
}
export default Header