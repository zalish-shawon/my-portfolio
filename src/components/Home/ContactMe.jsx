/* eslint-disable react/jsx-no-target-blank */
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
        <div className="max-w-[85%] mx-auto pt-2 pb-2" >
            <div>
                <div className="flex justify-center gap-3 items-center mt-5">
                    <TfiHeadphoneAlt className="text-4xl text-[#909AB9]"></TfiHeadphoneAlt>
                    <h1 className="font-bold text-4xl text-[#909AB9]" >Get In <span className="text-[#018DB0]">Touch</span></h1>
                </div>
                <section className="mt-10 mb-16" id="contact">
                    <div class="container px-6 mx-auto">
                        <div class="flex flex-col-reverse lg:flex-row items-center justify-center lg:-mx-6">
                            <div class="lg:w-1/2 lg:mx-6 mt-8" data-aos="fade-right"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                <h1 class="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
                                    Contact me for <br /> more info
                                </h1>
                                <div class="mt-6 space-y-8 md:mt-8">
                                    <p class="flex items-start -mx-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>

                                        <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">
                                            Uttara Dhaka - 1230
                                        </span>
                                    </p>

                                    <p class="flex items-start -mx-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>

                                        <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">+8801784866101</span>
                                    </p>

                                    <p class="flex items-start -mx-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>

                                        <span class="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">zalish.shawon@gmail.com</span>
                                    </p>
                                </div>

                                <div class="mt-6 w-80 md:mt-8">
                                    <h3 class="text-gray-600 dark:text-gray-300 ">Follow me</h3>

                                    <div class="flex mt-4 -mx-1.5 ">
                                       

                                        <a class="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="https://www.linkedin.com/in/zalish-shawon/" target="_blank">
                                            <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
                                                <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
                                                <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
                                            </svg>
                                        </a>

                                        <a class="mx-1.5 dark:hover:text-blue-400 text-gray-400 transition-colors duration-300 transform hover:text-blue-500" href="https://www.facebook.com/zalish.shawon" target="_blank">
                                            <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z" fill="currentColor" />
                                            </svg>
                                        </a>

                                        
                                    </div>
                                </div>
                            </div>

                            <div class="mt-8 lg:w-1/2 lg:mx-6" data-aos="fade-left"
                                data-aos-offset="300"
                                data-aos-easing="ease-in-sine">
                                <div
                                    class="w-full px-8 pb-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                                    <form ref={form} onSubmit={sendEmail} className="mt-6">
                                        <div class="flex-1">
                                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Full Name</label>
                                            <input name="user_name" type="text" placeholder="John Doe" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </div>

                                        <div class="flex-1 mt-6">
                                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                                            <input name="user_email" type="email" placeholder="johndoe@example.com" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                                        </div>

                                        <div class="w-full mt-6">
                                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                                            <textarea name="message" class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                                        </div>

                                        <button type="submit" class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                            get in touch
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </div>
    );
};

export default ContactMe;


{/* <form ref={form} onSubmit={sendEmail}></form> */ }