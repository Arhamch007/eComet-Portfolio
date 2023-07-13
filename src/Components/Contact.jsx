// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';


// export default function Contact() {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs.sendForm('service_gf3uipk', 'template_9c5ule9', form.current, 'DcuvkmLCSdBqkiTK1')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       }).then(function (message) {
//         alert("Your email has been sent successfully!");
//         // Reload page
//         window.location.reload();
//       });
//   };

//   return (
    
//     <div id="contact">
//    <div className="max-w-[80%] mx-auto">
//    <div className="flex justify-center flex-col content-center flex-wrap">
//    <div className="text-black text-4xl font-bold mt-12 flex items-center justify-center">Email Us</div>
//    <form ref={form} onSubmit={sendEmail} className=' flex content-center  justify-center flex-col'>
//    <label className="font-bold" >Name:</label>
//    <input minLength={3} maxLength={15} name="name" id="name"  placeholder="Enter Your Name" type="text" required className="focus:outline-none focus:right-3 focus:border-[#2699fb] px-2 placeholder:px-1 placeholder:italic h-[30px] w-[300px]  md:h-[40px] md:w-[450px] text-black border border-black rounded"/>
   
//    <label className="font-bold pt-3" >Email:</label>
   
//    <input name="email" id="email"   placeholder="Enter Your Name" type="email" required className=" focus:outline-none focus:right-3 focus:border-[#2699fb] px-2 placeholder:px-1 placeholder:italic  h-[30px] w-[300px] md:h-[40px] md:w-[450px] text-black border border-black rounded"/>
   
//    <label className="font-bold pt-3" >Contact Number:</label>
  
//    <input name="number" id="number"   placeholder="Enter Your Name" type="tel" required className="focus:outline-none focus:right-3 focus:border-[#2699fb] px-2 placeholder:px-1 placeholder:italic h-[30px] w-[300px] md:h-[40px] md:w-[450px] text-black border border-black rounded"/>
   
//    <label className="font-bold pt-3" >Message:</label>
   
//    <textarea name="message" id="message"   placeholder="Enter Your Name" required className="focus:outline-none focus:right-3 focus:border-[#2699fb] px-2 py-2 placeholder:px-1 placeholder:italic h-[70px] w-[300px] md:h-[150px] md:w-[450px] text-black border border-black rounded"/>
  
//    <div className="flex justify-center content-center">
   
//    <button id="btn" className="bg-black hover:bg-[#2699fb] mb-7 flex justify-center items-center content-center text-white  mt-5 md:mt-5 text-[12px] md:text-xl p-2 md:p-2 w-[100px] md:w-[130px] font-bold rounded-2xl">
//           Submit
//         </button>
//         </div>
//         </form>
//    </div>
//    </div>
//    </div>
   
//   );
// }
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();
  const [validationErrors, setValidationErrors] = useState({});

  const validateEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
;
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Simple phone number validation regex
    const phoneRegex = /^\d{11}$/;
    return phoneRegex.test(phoneNumber);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.name.value;
    const email = form.current.email.value;
    const phoneNumber = form.current.number.value;
    const message = form.current.message.value;
    const errors = {};

    if (!name || name.length < 3) {
      errors.name = 'Name must be at least 3 characters long.';
    }

    if (!email || !validateEmail(email)) {
      errors.email = 'Please enter a valid email address.';
    }

    if (!phoneNumber || !validatePhoneNumber(phoneNumber)) {
      errors.phoneNumber = 'Please enter a valid phone number.';
    }

    if (!message) {
      errors.message = 'Please enter a message.';
    }

    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    emailjs
      .sendForm('service_gf3uipk', 'template_9c5ule9', form.current, 'DcuvkmLCSdBqkiTK1')
      .then(
        (result) => {
          console.log(result.text);
          alert('Your email has been sent successfully!');
          // Reload page
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send email. Please try again.');
        }
      );
  };

  return (
    <div id="contact">
      <div className="max-w-[80%] mx-auto">
        <div className="flex justify-center flex-col content-center flex-wrap">
          <div className="text-black text-4xl font-bold mt-12 flex items-center justify-center">Email Us</div>
          <form ref={form} onSubmit={sendEmail} className="flex content-center justify-center flex-col">
            <label className="font-bold">Name:</label>
            <input
              minLength={3}
              maxLength={15}
              name="name"
              id="name"
              placeholder="Enter Your Name"
              type="text"
              required
              className={`focus:outline-none focus:right-3 focus:border-[#2699fb] px-2 placeholder:px-1 placeholder:italic h-[30px] w-[300px] md:h-[40px] md:w-[450px] text-black border ${
                validationErrors.name ? 'border-red-500' : 'border-black'
              } rounded`}
            />
            {validationErrors.name && <p className="text-red-500">{validationErrors.name}</p>}

            <label className="font-bold pt-3">Email:</label>
            <input
              name="email"
              id="email"
              placeholder="Enter Your Email"
              type="email"
              required
              className={`focus:outline-none focus:right-3 focus:border-[#2699fb] px-2 placeholder:px-1 placeholder:italic h-[30px] w-[300px] md:h-[40px] md:w-[450px] text-black border ${
                validationErrors.email ? 'border-red-500' : 'border-black'
              } rounded`}
            />
            {validationErrors.email && <p className="text-red-500">{validationErrors.email}</p>}

            <label className="font-bold pt-3">Contact Number:</label>
            <input
              name="number"
              id="number"
              placeholder="Enter Your Contact Number"
              type="tel"
              required
              className={`focus:outline-none focus:right-3 focus:border-[#2699fb] px-2 placeholder:px-1 placeholder:italic h-[30px] w-[300px] md:h-[40px] md:w-[450px] text-black border ${
                validationErrors.phoneNumber ? 'border-red-500' : 'border-black'
              } rounded`}
            />
            {validationErrors.phoneNumber && <p className="text-red-500">{validationErrors.phoneNumber}</p>}

            <label className="font-bold pt-3">Message:</label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter Your Message"
              required
              className={`focus:outline-none focus:right-3 focus:border-[#2699fb] px-2 py-2 placeholder:px-1 placeholder:italic h-[70px] w-[300px] md:h-[150px] md:w-[450px] text-black border ${
                validationErrors.message ? 'border-red-500' : 'border-black'
              } rounded`}
            />
            {validationErrors.message && <p className="text-red-500">{validationErrors.message}</p>}

            <div className="flex justify-center content-center">
              <button
                id="btn"
                className="bg-black hover:bg-[#2699fb] mb-7 flex justify-center items-center content-center text-white  mt-5 md:mt-5 text-[12px] md:text-xl p-2 md:p-2 w-[100px] md:w-[130px] font-bold rounded-2xl"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}