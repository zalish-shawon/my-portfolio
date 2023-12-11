import { RiContactsFill, RiDownload2Fill } from "react-icons/ri";
import myphoto from "../../src/assets/myphoto.jpg"

const AboutMe = () => {
    const handleDownload = () => {
        const url = 'https://my-portfolio-b5a05.web.app/resume.pdf';
        // const url = 'http://localhost:5173/resume.pdf';
        const link = document.createElement('a');
        link.href = url;
        link.download = 'resume.pdf';
        link.click();
      };
    return (
        <div className="max-w-[78%] mx-auto">
            <div className="flex justify-center gap-3 items-center mt-8">
               <RiContactsFill className="text-3xl"></RiContactsFill>
                <h1 className="font-bold text-4xl">About <span className="text-[#018DB0]">Me</span></h1>
            </div>

            <div className="flex flex-col-reverse lg:flex-row lg:gap-12">
            <div className="mt-16">
                <div className="w-[300px]">
                    <img src={myphoto} alt="" />
                </div>
            </div>
            <div className="mt-14">
                <h2 className="text-3xl font-semibold text-[#495057]">Md Zalish Mahmud</h2>
                <h3 className="text-xl mt-1 font-medium text-[#FD2E65]">MERN Stack Developer</h3>
                <p className="text-lg font-normal text-gray-500 mt-1">A dedicated web developer passionate about turning ideas into captivating digital experiences. Proficient in a variety of front-end and back-end technologies, I specialize in crafting responsive and user-centric websites. From designing visually appealing interfaces to implementing robust server-side logic, I bring creativity and technical expertise to every project. I thrive on challenges, constantly exploring new technologies to stay at the forefront of web development.</p>
                <button onClick={handleDownload} className="btn bg-[#018DB0] text-white hover:bg-[#276777] mt-1">Download Resume <RiDownload2Fill className="text-lg"></RiDownload2Fill></button>
            </div>
            </div>
        </div>
    );
};

export default AboutMe;