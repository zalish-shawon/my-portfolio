import AboutMe from "../AboutMe";
import Education from "./Education";
import Hero from "./Hero";
import Projects from "./Projects";
import Services from "./Services";
import Skills from "./Skills";

const Home = () => {
    return (
        <div className="bg-[#E5ECFB]">
            <div className=" ">
                <Hero></Hero>
            </div>
            <div>
                <AboutMe></AboutMe>
            </div>
            <div>
                <Services></Services>
            </div>
            <div>
                <Skills></Skills>
            </div>
            <div>
                <Education></Education>
            </div>
            <div>
                <Projects></Projects>
            </div>
        </div>
    );
};

export default Home;