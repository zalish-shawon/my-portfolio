
const Hero = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-around items-center  max-w-[90%] mx-auto">
            <div className="lg:w-1/2">
                <div className=" ml-12">
                <h1 className="font-bold text-5xl">Hi👋 I’m <br /> Md Zalish Mahmud 
                    <span className="text-[#EEC759]"> MERN Stack</span> Developer </h1>

                <p className="text-lg mt-4 w-[90%] text-gray-500">I am a junior MERN stack developer, proficient in MongoDB, Express.js, React.js, and Node.js. My expertise lies in designing databases, developing server-side logic, and building responsive user interfaces for web applications.</p>
                
                <button className="btn btn-warning mt-4 font-semibold">My Resume</button>
                </div>

            </div>
            <div className="lg:w-1/3">
                <img src="/src/assets/my-pic2.png" alt="" />
            </div>
        </div>
    );
};

export default Hero;