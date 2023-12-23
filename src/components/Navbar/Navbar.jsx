/* eslint-disable react/no-unknown-property */
import { Link } from 'react-scroll';
import "../../../navbar.css"
const Navbar = () => {


    return (
        <div className='bg-[#111827]'>
            <div className='navbar max-w-[85%] mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown text-[#909AB9] lg:hidden sm:block">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to="hero" spy={true} smooth={true} offset={-70} duration={500}>
                    <a className="btn btn-ghost hover:bg-[#018DB0] hover:text-white text-lg text-[#909AB9]">Home</a>
                    </Link>
                    <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
                    <a className="btn hover:bg-[#018DB0] hover:text-white btn-ghost text-lg text-[#909AB9]">About</a>
                    </Link>
                    <Link to="services" spy={true} smooth={true} offset={-70} duration={500}>
                    <a className="btn hover:bg-[#018DB0] hover:text-white btn-ghost text-lg text-[#909AB9]">Services</a>
                    </Link>
                    <Link to="skills" spy={true} smooth={true} offset={-70} duration={500}>
                    <a className="btn hover:bg-[#018DB0] hover:text-white btn-ghost text-lg text-[#909AB9]">Skills</a>
                    </Link>
                    <Link to="education" spy={true} smooth={true} offset={-70} duration={500}>
                    <a className="btn hover:bg-[#018DB0] hover:text-white btn-ghost text-lg text-[#909AB9]">Education</a>
                    </Link>
                    <Link to="project" spy={true} smooth={true} offset={-70} duration={500}>
                    <a className="btn hover:bg-[#018DB0] hover:text-white btn-ghost text-lg text-[#909AB9]">Projects</a>
                    </Link>
                    <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                    <a className="btn hover:bg-[#018DB0] hover:text-white btn-ghost text-lg text-[#909AB9]">Contact</a>
                    </Link>
                        </ul>
                    </div>
                    <div className='flex justify-center items-center'>
                        <img className='w-[50px]' src="https://websitedemos.net/personal-portfolio-02/wp-content/uploads/sites/770/2021/02/logo-1-70x70.png" alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:block">
                    <Link to="hero" spy={true} smooth={true} offset={-70} duration={500}>
                    <a className="btn btn-ghost hover:bg-[#018DB0] hover:text-white text-lg text-[#909AB9]">Home</a>
                    </Link>
                    <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
                    <a className="btn hover:bg-[#018DB0] hover:text-white btn-ghost text-lg text-[#909AB9]">About</a>
                    </Link>
                    <Link to="services" spy={true} smooth={true} offset={-70} duration={500}>
                    <a className="btn hover:bg-[#018DB0] hover:text-white btn-ghost text-lg text-[#909AB9]">Services</a>
                    </Link>
                    <Link to="skills" spy={true} smooth={true} offset={-70} duration={500}>
                    <a className="btn hover:bg-[#018DB0] hover:text-white btn-ghost text-lg text-[#909AB9]">Skills</a>
                    </Link>
                    <Link to="education" spy={true} smooth={true} offset={-70} duration={500}>
                    <a className="btn hover:bg-[#018DB0] hover:text-white btn-ghost text-lg text-[#909AB9]">Education</a>
                    </Link>
                    <Link to="project" spy={true} smooth={true} offset={-70} duration={500}>
                    <a className="btn hover:bg-[#018DB0] hover:text-white btn-ghost text-lg text-[#909AB9]">Projects</a>
                    </Link>
                    <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
                    <a className="btn hover:bg-[#018DB0] hover:text-white btn-ghost text-lg text-[#909AB9]">Contact</a>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
