/* eslint-disable react/no-unknown-property */
import { TfiHeadphoneAlt } from "react-icons/tfi";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const ContactMe = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fcnydc9', 'template_5y2h3zd', form.current, 'igKQtqncuhv7W367B')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };



    return (
        <div className="max-w-[78%] mx-auto pt-2 pb-2">
            <div>
            <div className="flex justify-center gap-3 items-center mt-5">
                <TfiHeadphoneAlt className="text-4xl"></TfiHeadphoneAlt>
                <h1 className="font-bold text-4xl">Get In <span className="text-[#018DB0]">Touch</span></h1>

            </div>
            



            
            </div>
        </div>
    );
};

export default ContactMe;


{/* <form ref={form} onSubmit={sendEmail}></form> */}