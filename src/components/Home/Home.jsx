import AboutMe from "../AboutMe";
import Hero from "./Hero";

const Home = () => {
    return (
        <div>
            <div className="bg-[#FFF3EA] ">
           <Hero></Hero>
            </div>
            <div>
                <AboutMe></AboutMe>
            </div>
        </div>
    );
};

export default Home;