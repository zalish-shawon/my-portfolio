import AboutMe from "../AboutMe";
import ContactMe from "./ContactMe";
import Education from "./Education";
import Hero from "./Hero";
import Projects from "./Projects";
import Services from "./Services";
import Skills from "./Skills";

const Home = () => {

    return (
        <div className="">
            <div className=" bg-[#FFF7D4]">
                
                <Hero></Hero>
            </div>
            <div className="bg-[#F3F8FF]">
                <AboutMe></AboutMe>
            </div>
            <div className="bg-[#EEE7DA] pt-1 pb-1">
                <Services></Services>
            </div>
            <div className="bg-[#9AD0C2]">
                <Skills></Skills>
            </div>
            <div className="bg-[#EEE2DE]">
                <Education></Education>
            </div>
            <div>
                <Projects></Projects>
            </div>
            <div className="bg-[#F3EEEA]">
                <ContactMe></ContactMe>
            </div>
        </div>
    );
};

export default Home;