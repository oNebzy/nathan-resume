import React, {useState, } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NBlogo from "../assets/personalLogos/NBlogo.png";
import { Link } from "react-scroll";

const Navbar = () => {

  const [temp, setTemp] = useState(false);
  const handleMenuClick = () => setTemp(!temp);


  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#282c2f] opacity-90 text-white z-10">
      <div>
        <img src={NBlogo} alt="Logo" style={{width:'100px'}} />
      </div>

      {/* full screen menu */}
      <ul className="hidden md:flex z-0">
        <li className="hover:animate-wiggle">
          <Link to="Home" smooth={true} duration={800} spy={true} offset={-100} activeClass="text-[#358f60] underline underline-offset-4" className="transition-all duration-500">
            Home
          </Link>
        </li>
        <li className="hover:animate-wiggle">
          <Link to="About" smooth={true} duration={800} spy={true} offset={-100} activeClass="text-[#358f60] underline underline-offset-4" className="transition-all duration-500">
            About
          </Link>
        </li>
        <li className="hover:animate-wiggle">
          <Link to="Skills" smooth={true} duration={800} spy={true} offset={-100} activeClass="text-[#358f60] underline underline-offset-4" className="transition-all duration-500">
            Skills
          </Link>
        </li>
        <li className="hover:animate-wiggle">
          <Link to="Work" smooth={true} duration={800} spy={true} offset={-100} activeClass="text-[#358f60] underline underline-offset-4" className="transition-all duration-500">
            My Work
          </Link>
        </li>
        <li className="hover:animate-wiggle">
          <Link to="Contact" smooth={true} duration={800} spy={true} offset={0} activeClass="text-[#358f60] underline underline-offset-4" className="transition-all duration-500">
            Contact
          </Link>
        </li>
      </ul>

      {/* menu button */}
      <div 
      className="md:hidden cursor-pointer z-10"
      onClick={handleMenuClick}
      >
        {!temp ? <FaBars/> : <FaTimes/>}
      </div>

      {/* mobile/small device menu */}
      <ul className={!temp ? 'hidden' : "md:hidden absolute top-[74px] right-0 px-4 py-2 bg-[#282c2f] flex flex-col items-center rounded-md"}>
      <li className="hover:animate-wiggle">
          <Link to="Home" smooth={true} duration={800} spy={true} offset={-100} activeClass="text-[#358f60] underline underline-offset-4" className="transition-all duration-500">
            Home
          </Link>
        </li>
        <li className="hover:animate-wiggle">
          <Link to="About" smooth={true} duration={800} spy={true} offset={-100} activeClass="text-[#358f60] underline underline-offset-4" className="transition-all duration-500">
            About
          </Link>
        </li>
        <li className="hover:animate-wiggle">
          <Link to="Skills" smooth={true} duration={800} spy={true} offset={-100} activeClass="text-[#358f60] underline underline-offset-4" className="transition-all duration-500">
            Skills
          </Link>
        </li>
        <li className="hover:animate-wiggle">
          <Link to="Work" smooth={true} duration={800} spy={true} offset={-100} activeClass="text-[#358f60] underline underline-offset-4" className="transition-all duration-500">
            My Work
          </Link>
        </li>
        <li className="hover:animate-wiggle">
          <Link to="Contact" smooth={true} duration={800} spy={true} offset={0} activeClass="text-[#358f60] underline underline-offset-4" className="transition-all duration-500">
            Contact
          </Link>
        </li>
      </ul>

    </div>
  );
};

export default Navbar;
