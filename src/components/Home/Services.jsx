import { GrServices } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { BsServer } from "react-icons/bs";
import { FaDisplay } from "react-icons/fa6";
import { GrDocumentTest } from "react-icons/gr";



const Services = () => {
    return (
        <div className='max-w-[78%] mx-auto'>
    
           <div className="flex justify-center gap-3 items-center mt-5">
               <GrServices className="text-4xl"></GrServices>
                <h1 className="font-bold text-4xl">My <span className="text-[#018DB0]">Services</span></h1>
                
            </div>
            <div className="text-center mt-2">
            <h3 className="text-3xl text-gray-500 font-semibold">What I Do</h3>
            <p className="text-gray-600 p-5 font-medium">Passionate MERN Full Stack developer with a focus on crafting dynamic and user-friendly web solutions. Specializing in building scalable applications with a keen eye for detail and a commitment to delivering high-quality code</p>
            </div>
            <div className="mt-10 mb-10 flex flex-col lg:flex-row justify-center items-center gap-10">
                <div className="group border border-[#018DB0] group-hover:border-white w-[300px] h-[250px] hover:bg-[#018DB0]">
                    <div className="flex items-center justify-center">
                        <div className="mt-[80px]">
                        <FaDisplay className="text-4xl ml-[80px] group-hover:text-white text-[#018DB0]"></FaDisplay>
                        <h2 className="group-hover:text-white font-bold text-2xl">Web Development</h2>
                        </div>
                    </div>
                </div>
                <div className="group border border-[#018DB0] group-hover:border-white w-[300px] h-[250px] hover:bg-[#018DB0]">
                    <div className="flex items-center justify-center">
                        <div className="mt-[80px]">
                        <GrDocumentTest className="text-4xl ml-[80px] group-hover:text-white text-[#018DB0]"></GrDocumentTest>
                        <h2 className="group-hover:text-white font-bold text-2xl">API Development</h2>
                        </div>
                    </div>
                </div>
                <div className="group border border-[#018DB0] group-hover:border-white w-[300px] h-[250px] hover:bg-[#018DB0]">
                    <div className="flex items-center justify-center">
                        <div className="mt-[80px]">
                        <CgWebsite className="text-4xl ml-[80px] group-hover:text-white text-[#018DB0]"></CgWebsite>
                        <h2 className="group-hover:text-white text-center font-bold text-2xl">Front-End Development</h2>
                        </div>
                    </div>
                </div>
                <div className="group border border-[#018DB0] group-hover:border-white w-[300px] h-[250px] hover:bg-[#018DB0]">
                    <div className="flex items-center justify-center">
                        <div className="mt-[80px]">
                        <BsServer className="text-4xl ml-[80px] group-hover:text-white text-[#018DB0]"></BsServer>
                        <h2 className="group-hover:text-white text-center font-bold text-2xl">Server-Side Development</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;