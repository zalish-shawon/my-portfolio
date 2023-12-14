import { GiGraduateCap } from "react-icons/gi";

const Education = () => {
    return (
        <div className="max-w-[78%] mx-auto pt-2 pb-2">
            <div className="flex justify-center gap-3 items-center mt-12">
                <GiGraduateCap className="text-[#909AB9] text-5xl"></GiGraduateCap>
                <h1 className="font-bold text-4xl text-[#909AB9]">My <span className="text-[#018DB0]"> Education</span></h1>

            </div>
            <p className="mt-2 text-center text-[#909AB9] font-semibold">Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.</p>
            <div className="mt-8 mb-6 hover:shadow-lg">
                <div className="bg-[#2f4550]">
                    <div className="flex flex-col lg:flex-row items-center">
                        <img src="https://i.ytimg.com/vi/j1z99pBc-do/maxresdefault.jpg" className="h-[200px] w-[300px] p-3" />
                        <div >
                            <div>
                            <h1 className="text-4xl text-center text-[#909AB9] font-bold">Bachelor Of  <span className="text-[#4bc7bd]"> Computer Sience and Engineering</span></h1>
                            <p className="py-1 text-[22px] font-semibold text-center text-[#909AB9]">IUBAT - International University of Business Agriculture and Technology</p>
                            <p className="py-1 text-[22px] font-semibold text-center text-[#909AB9]"><span className="text-[#b8dbd9]">Session:</span> 2017-2021</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;