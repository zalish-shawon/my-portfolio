/* eslint-disable react/jsx-no-target-blank */
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Projects = () => {
    return (
        <div className='max-w-[78%] mx-auto'>
            <div className="flex justify-center gap-3 items-center mt-12">
                <AiOutlineFundProjectionScreen className="text-5xl"></AiOutlineFundProjectionScreen>
                <h1 className="font-bold text-4xl">Projects <span className="text-[#018DB0]"> Made</span></h1>

            </div>
            <div>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="mt-8 mb-6 hover:shadow-lg">
                            <div className="bg-base-200">
                                <div className="flex flex-col lg:flex-row items-center">
                                    <img src="https://raw.githubusercontent.com/zalish-shawon/online-careerLoom-client/main/public/ss.png" className="h-[200px] w-[300px] " />
                                    <div >
                                        <div className="ml-2">
                                            <h1 className="text-3xl text-center lg:text-left font-bold">CareerLoom- Online Job Marketplace</h1>
                                            <p className="py-1 text-lg font-normal text-center lg:text-left text-gray-500 mr-3">Users can also check the job description, bid amount, and deadline.
                                                The job owner also sees a job bid request from the bid request route, and he or she can accept or reject that job. This web application uses a Firebase authentication system</p>
                                        </div>
                                        <div className="flex gap-2 ml-2 mt-2 justify-center">
                                            <a href=" https://careerloom-89809.web.app/ 
                                        "target="_blank"><button className="btn btn-outline btn-primary">Live preview</button></a>
                                            <a href="https://github.com/zalish-shawon/online-careerLoom-client" target="_blank"><button className="btn btn-outline btn-primary">Client side</button></a>
                                            <a href=" https://github.com/zalish-shawon/online-careerLoom-server 
                                        "target="_blank">
                                                <button className="btn btn-outline btn-primary">Server side</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mt-8 mb-6 hover:shadow-lg">
                            <div className="bg-base-200">
                                <div className="flex flex-col lg:flex-row items-center">
                                    <img src="https://raw.githubusercontent.com/zalish-shawon/polling-survey-client/main/public/ss.png" className="h-[200px] w-[300px] " />
                                    <div >
                                        <div className="ml-2">
                                            <h1 className="text-3xl text-center lg:text-left font-bold">Polling and Survey App</h1>
                                            <p className="py-1 text-lg font-normal text-center lg:text-left text-gray-500 mr-3">This is a full-stack online polling survey app. Users can participate in online polling for a survey. Pro users can complete their payments using an online payment system (Stripe) and also make comments. There are admin, surveyor, and user dashboards</p>
                                        </div>
                                        <div className="flex gap-2 ml-2 mt-2 justify-center">
                                            <a href="https://online-polliing-survey.web.app/ 
                                        "target="_blank"><button className="btn btn-outline btn-primary">Live preview</button></a>
                                            <a href="https://github.com/zalish-shawon/polling-survey-client" target="_blank"><button className="btn btn-outline btn-primary">Client side</button></a>
                                            <a href="https://github.com/zalish-shawon/polling-survey-server 
                                        "target="_blank">
                                                <button className="btn btn-outline btn-primary">Server side</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="mt-8 mb-6 hover:shadow-lg">
                            <div className="bg-base-200">
                                <div className="flex flex-col lg:flex-row items-center">
                                    <img src="https://raw.githubusercontent.com/zalish-shawon/brand-shop-client/main/public/ss.png" className="h-[200px] w-[300px] " />
                                    <div >
                                        <div className="ml-2">
                                            <h1 className="text-3xl text-center lg:text-left font-bold">Electronics eshop</h1>
                                            <p className="py-1 text-lg font-normal text-center lg:text-left text-gray-500 mr-3">This is an electronics eStore where users can check out new products.
                                                Users can check which products are available based on the product brand
                                                If users want to view product details, they should log in first.
                                                Users can also create an account or register on this site.
                                                </p>
                                        </div>
                                        <div className="flex gap-2 ml-2 mt-2 justify-center">
                                            <a href="https://brand-eshop-7ab17.web.app/ 
                                        "target="_blank"><button className="btn btn-outline btn-primary">Live preview</button></a>
                                            <a href="https://github.com/zalish-shawon/brand-shop-client" target="_blank"><button className="btn btn-outline btn-primary">Client side</button></a>
                                            <a href="https://github.com/zalish-shawon/brand-shop-server 
                                        "target="_blank">
                                                <button className="btn btn-outline btn-primary">Server side</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </div>
        </div>
    );
};

export default Projects;