import React from "react";

export default function Contact() {
  return (
    <div id="contact">
   <div className="max-w-[80%] mx-auto">
   <div className="flex justify-center flex-col content-center flex-wrap">
   <div className="text-black text-4xl font-bold mt-12 flex items-center justify-center">Email Us</div>
   <label className="font-bold" >Name:</label>
   <input   placeholder="Enter Your Name" type="text" className="focus:ring-blue-500 focus:border-blue-500 px-2 placeholder:px-1 placeholder:italic h-[30px] w-[300px]  md:h-[40px] md:w-[450px] text-black border border-black rounded"/>
   <label className="font-bold" >Email:</label>
   <input placeholder="Enter Your Name" type="email" className="px-2 placeholder:px-1 placeholder:italic  h-[30px] w-[300px] md:h-[40px] md:w-[450px] text-black border border-black rounded"/>
   <label className="font-bold" >Contact Number:</label>
   <input placeholder="Enter Your Name" type="tel" className="px-2 placeholder:px-1 placeholder:italic h-[30px] w-[300px] md:h-[40px] md:w-[450px] text-black border border-black rounded"/>
   <label className="font-bold" >Message:</label>
   <textarea placeholder="Enter Your Name" className="px-2 py-2 placeholder:px-1 placeholder:italic h-[70px] w-[300px] md:h-[150px] md:w-[450px] text-black border border-black rounded"/>
   <div className="flex justify-center content-center">
   <button className="bg-black hover:bg-[#2699fb]  text-white  mt-5 md:mt-5 text-[12px] md:text-xl p-2 md:p-2 w-[100px] md:w-[130px] font-bold rounded-2xl">
          Contact Us
        </button>
        </div>
   </div>
   </div>
   </div>
   
  );
}
