/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-target-blank */
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { motion } from 'framer-motion';



const Projects = () => {
    return (
        <div className='max-w-[85%] mx-auto' id="project">

            <div className="flex justify-center gap-3 items-center mt-12">

                <AiOutlineFundProjectionScreen className="text-5xl text-[#909AB9]"></AiOutlineFundProjectionScreen>
                <h1 className="font-bold text-4xl text-[#909AB9]">Projects <span className="text-[#018DB0]"> Made</span></h1>

            </div>

            <div className="mt-11">
                <motion.div whileHover={{ scale: 1.1 }}>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" class="w-full max-w-6xl mx-auto px-4  relative">
                        <div class="shadow rounded-xl">
                            <div class="grid overflow-hidden text-[#df805d] shadow-xl md:grid-cols-2 bg-blue-900 rounded-xl">
                                <aside class="p-8 space-y-4 md:p-16">
                                    <h2 class="text-2xl font-bold tracking-tight md:text-4xl font-headline">
                                        CareerLoom - Online Market Place
                                    </h2>
                                    <div>
                                        <a target="_blank" href="https://careerloom-89809.web.app/" class="bg-blue-600 text-white px-4 py-2 mt-3 rounded-xl transition-transform transform hover:scale-105">
                                            Live Preview
                                        </a>
                                        <a target="_blank" href="https://github.com/zalish-shawon/online-careerLoom-client" class="bg-green-600 text-white px-4 py-2 mt-3 rounded-xl transition-transform transform hover:scale-105 ml-3">
                                            Project Code
                                        </a>
                                    </div>

                                </aside>
                                <aside class="relative hidden md:block">
                                    <img class="absolute inset-0 object-cover object-left-top w-full h-full mt-16 -mr-16 rounded-tl-lg" src="https://raw.githubusercontent.com/zalish-shawon/online-careerLoom-client/main/public/ss.png" alt="Discover our beautiful panel" />
                                </aside>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.1 }} class="py-8 md:py-8">
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" class="w-full max-w-6xl mx-auto px-4 relative">
                        <div class="shadow rounded-xl">
                            <div class="grid overflow-hidden text-[#29ADB2] shadow-xl md:grid-cols-2 bg-blue-900 rounded-xl">
                                <aside class="p-8 space-y-4 md:p-16">
                                    <h2 class="text-2xl font-bold tracking-tight md:text-4xl font-headline">
                                        Polling and Survey App
                                    </h2>
                                    <div>
                                        <a target="_blank" href="https://online-polliing-survey.web.app/" class="bg-blue-600 text-white px-4 py-2 mt-3 rounded-xl transition-transform transform hover:scale-105">
                                            Live Preview
                                        </a>
                                        <a target="_blank" href="https://github.com/zalish-shawon/polling-survey-client" class="bg-green-600 text-white px-4 py-2 mt-3 rounded-xl transition-transform transform hover:scale-105 ml-3">
                                            Project Code
                                        </a>
                                    </div>

                                </aside>
                                <aside class="relative hidden md:block">
                                    <img class="absolute inset-0 object-cover object-left-top w-full h-full mt-16 -mr-16 rounded-tl-lg" src="https://raw.githubusercontent.com/zalish-shawon/polling-survey-client/main/public/ss.png" alt="Discover our beautiful panel" />
                                </aside>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>



        </div>


    );
};

export default Projects;


