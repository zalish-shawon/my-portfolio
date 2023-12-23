import { RiContactsFill, RiDownload2Fill } from "react-icons/ri";
import myphoto from "../../src/assets/myphoto.jpg"
import { Link } from "react-scroll";

const AboutMe = () => {

    return (
        <div className="max-w-[85%] mx-auto mt-10" id="about">
            <div className="flex justify-center gap-3 items-center pt-4">
                <RiContactsFill className="text-3xl text-[#909AB9]"></RiContactsFill>
                <h1 className="font-bold text-[#909AB9] text-4xl">About <span className="text-[#018DB0]">Me</span></h1>
            </div>

            <div className="flex flex-col-reverse lg:flex-row lg:gap-16">
                <div data-aos="zoom-in-right" className="mt-16">
                    <div className="w-[350px]">
                        <img src={myphoto} alt="" />
                    </div>
                </div>
                <div data-aos="zoom-in-left" className="mt-[60px]">
                    <h2 className="text-3xl font-semibold text-[#909AB9]">Md Zalish Mahmud</h2>
                    <h3 className="text-xl mt-1 font-medium text-[#2c7972]">MERN Stack Developer</h3>
                    <p className="text-xl font-normal text-gray-500 mt-1">A dedicated web developer passionate about turning ideas into captivating digital experiences. During my practical experiences, I've successfully implemented responsive and visually appealing web applications.
                    My proficiency in React, coupled with a strong foundation in Node.js, Express.js, and JavaScript, has allowed me to create efficient and dynamic solutions. Additionally, my familiarity with Tailwind CSS enhances my ability to produce clean and maintainable code while adhering to modern design principles.</p>
                    <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                        <button className="btn bg-[#018DB0] text-white hover:bg-[#276777] mt-5">Contact Me<RiContactsFill className="text-lg"></RiContactsFill></button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;