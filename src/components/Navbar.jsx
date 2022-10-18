import React, {useState, } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import NBlogo from "../assets/personalLogos/NBlogo.png";

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
        <li className="hover:animate-wiggle">Home</li>
        <li className="hover:animate-wiggle ">About</li>
        <li className="hover:animate-wiggle ">Skills</li>
        <li className="hover:animate-wiggle ">My Work</li>
        <li className="hover:animate-wiggle ">Contact</li>
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
        <li className="hover:scale-110">Home</li>
        <li className="hover:scale-110">About</li>
        <li className="hover:scale-110">Skills</li>
        <li className="hover:scale-110">My Work</li>
        <li className="hover:scale-110">Contact</li>
      </ul>

    </div>
  );
};

export default Navbar;
