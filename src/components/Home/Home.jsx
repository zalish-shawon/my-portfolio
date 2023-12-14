import AboutMe from "../AboutMe";
import ContactMe from "./ContactMe";
import Education from "./Education";
import Hero from "./Hero";
import Projects from "./Projects";
import Services from "./Services";
import Skills from "./Skills";

const Home = () => {

    return (
        <div className="bg-[#060918]">
            <div className=" ">
                
                <Hero></Hero>
            </div>
            <div className="">
                <AboutMe></AboutMe>
            </div>
            <div className=" pt-1 pb-1">
                <Services></Services>
            </div>
            <div className="">
                <Skills></Skills>
            </div>
            <div className="">
                <Education></Education>
            </div>
            <div>
                <Projects></Projects>
            </div>
            <div className="">
                <ContactMe></ContactMe>
            </div>
        </div>
    );
};

export default Home;