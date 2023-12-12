import { GiGraduateCap } from "react-icons/gi";

const Education = () => {
    return (
        <div className="max-w-[78%] mx-auto pt-2 pb-2">
            <div className="flex justify-center gap-3 items-center mt-12">
                <GiGraduateCap className="text-5xl"></GiGraduateCap>
                <h1 className="font-bold text-4xl">My <span className="text-[#018DB0]"> Education</span></h1>

            </div>
            <p className="mt-2 text-center font-semibold">Education Is Not The Learning Of Facts, But The Training Of The Mind To Think.</p>
            <div className="mt-8 mb-6 hover:shadow-lg">
                <div className="bg-base-200">
                    <div className="flex flex-col lg:flex-row items-center">
                        <img src="https://i.ytimg.com/vi/j1z99pBc-do/maxresdefault.jpg" className="h-[200px] w-[300px] p-3" />
                        <div >
                            <div>
                            <h1 className="text-3xl text-center font-bold">Bachelor Of  <span className="text-[#56AF3C]"> Computer Sience and Engineering</span></h1>
                            <p className="py-1 text-xl font-semibold text-center text-[#D34658]">IUBAT - International University of Business Agriculture and Technology</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Education;