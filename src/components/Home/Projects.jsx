/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-no-target-blank */
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
// Import Swiper React components


const Projects = () => {
    return (
        <div className='max-w-[85%] mx-auto'>
            <div className="flex justify-center gap-3 items-center mt-12">
                <AiOutlineFundProjectionScreen className="text-5xl text-[#909AB9]"></AiOutlineFundProjectionScreen>
                <h1 className="font-bold text-4xl text-[#909AB9]">Projects <span className="text-[#018DB0]"> Made</span></h1>

            </div>
            
            <div className="flex justify-center gap-3 items-center mt-8">
                <div class="flex flex-col justify-center items-center">
                    <div class="bg-[#100B32] rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
                        <img src="https://raw.githubusercontent.com/zalish-shawon/online-careerLoom-client/main/public/ss.png" alt="Mountain" class="w-full" />
                        <div class="p-6">
                            <h2 class="text-2xl font-bold text-[#909AB9] mb-2">Beautiful Mountain View</h2>
                            <p class="text-[#909AB9] leading-tight mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu sapien porttitor, blandit velit ac,
                                vehicula elit. Nunc et ex at turpis rutrum viverra.
                            </p>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" class="w-8 h-8 rounded-full mr-2 object-cover" />
                                    <span class="text-[#909AB9] font-semibold">John Doe</span>
                                </div>
                                <span class="text-[#909AB9]">2 hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col justify-center items-center">
                    <div class="bg-[#100B32] rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
                        <img src="https://raw.githubusercontent.com/zalish-shawon/online-careerLoom-client/main/public/ss.png" alt="Mountain" class="w-full" />
                        <div class="p-6">
                            <h2 class="text-2xl font-bold text-[#909AB9] mb-2">Beautiful Mountain View</h2>
                            <p class="text-[#909AB9] leading-tight mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu sapien porttitor, blandit velit ac,
                                vehicula elit. Nunc et ex at turpis rutrum viverra.
                            </p>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" class="w-8 h-8 rounded-full mr-2 object-cover" />
                                    <span class="text-[#909AB9] font-semibold">John Doe</span>
                                </div>
                                <span class="text-[#909AB9]">2 hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="flex flex-col justify-center items-center mr-3">
                    <div class="bg-[#100B32] rounded-lg shadow-lg overflow-hidden max-w-lg w-full">
                        <img src="https://raw.githubusercontent.com/zalish-shawon/online-careerLoom-client/main/public/ss.png" alt="Mountain" class="w-full" />
                        <div class="p-6">
                            <h2 class="text-2xl font-bold text-[#909AB9] mb-2">Beautiful Mountain View</h2>
                            <p class="text-[#909AB9] leading-tight mb-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu sapien porttitor, blandit velit ac,
                                vehicula elit. Nunc et ex at turpis rutrum viverra.
                            </p>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Avatar" class="w-8 h-8 rounded-full mr-2 object-cover" />
                                    <span class="text-[#909AB9] font-semibold">John Doe</span>
                                </div>
                                <span class="text-[#909AB9]">2 hours ago</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>




        </div>
    );
};

export default Projects;


