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
            <section class="bg-white mb-5 mt-6">
                <div class="container px-6 mx-auto w-full">
                    <div >
                        
                        <div class="p-4 py-6 rounded-lg bg-gray-50 md:p-8">
                            <form ref={form} onSubmit={sendEmail}>
                                <div class="-mx-2 md:items-center md:flex">
                                    <div class="flex-1 px-2">
                                        <label class="block mb-2 text-sm text-gray-600">Full Name</label>
                                        <input name="form_name" type="text" placeholder="John " class="block w-full px-5 py-2.5 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-lg    focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                    </div>

                                   
                                </div>

                                <div class="mt-4">
                                    <label class="block mb-2 text-sm text-gray-600 ">Email address</label>
                                    <input name="form_email" type="email" placeholder="johndoe@example.com" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                </div>

                                <div class="w-full mt-4">
                                    <label class="block mb-2 text-sm text-gray-600 ">Message</label>
                                    <textarea name="message" class="block w-full h-32 px-5 py-2.5 mt-2 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                                </div>

                                <button type="submit" value="send" class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Send message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
    );
};

export default ContactMe;