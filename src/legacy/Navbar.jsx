// import React, {useState, } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import NBlogo from "../assets/personalLogos/NBlogo.png";
// import { Link } from "react-scroll";
// import Fade from "react-reveal/Fade";


// const Navbar = () => {

//   const [temp, setTemp] = useState(false);
//   const handleMenuClick = () => setTemp(!temp);


//   return (
//     <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#282c2f] opacity-90 text-white z-10">
      
//       <Fade left duration={2000}>
//         <div>
//           <img src={NBlogo} alt="Logo" style={{width:'100px'}} />
//         </div>
//       </Fade>
      

//       {/* full screen menu */}
//       <ul className="hidden md:flex z-0">
//           <li className="hover:animate-wiggle">
//             <Fade right>
//               <Link to="Home" smooth={true} duration={800} spy={true} offset={-100} activeClass="text-[#358f60] underline underline-offset-4" className="transition-all duration-500">
//                 Home
//               </Link>
//             </Fade>
//           </li>     
//           <li className="hover:animate-wiggle">
//             <Fade right delay={300}>
//               <Link to="About" smooth={true} duration={800} spy={true} offset={-100} activeClass="text-[#358f60] underline underline-offset-4" className="transition-all duration-500">
//                 About
//               </Link>
//             </Fade>
//           </li>
//           <li className="hover:animate-wiggle">
//             <Fade right delay={600}>
//               <Link to="Skills" smooth={true} duration={800} spy={true} offset={-100} activeClass="text-[#358f60] underline underline-offset-4" className="transition-all duration-500">
//                 Skills
//               </Link>
//             </Fade>
//           </li>
//           <li className="hover:animate-wiggle">
//             <Fade right delay={900}>
//               <Link to="Work" smooth={true} duration={800} spy={true} offset={-100} activeClass="text-[#358f60] underline underline-offset-4" className="transition-all duration-500">
//                 My Work
//               </Link>
//             </Fade>
//           </li>
//           <li className="hover:animate-wiggle">
//             <Fade right delay={1200}>
//               <Link to="Contact" smooth={true} duration={800} spy={true} offset={0} activeClass="text-[#358f60] underline underline-offset-4" className="transition-all duration-500">
//                 Contact
//               </Link>
//             </Fade>
//           </li>
//       </ul>

//       {/* menu button */}
//       <Fade top duration={2000}>
//         <div 
//           className="md:hidden cursor-pointer z-10"
//           onClick={handleMenuClick}
//           >
//             {!temp ? <FaBars/> : <FaTimes/>}
//         </div>
//       </Fade>
      

//       {/* mobile/small device menu */}
//       <Fade clear>
//         <ul className={!temp ? 'hidden' : "md:hidden absolute top-[74px] right-0 px-4 py-2 bg-[#282c2f] flex flex-col items-center rounded-md"}>
//           <li className="hover:animate-wiggle">
//             <Fade right>
//               <Link to="Home" smooth={true} duration={800} spy={true} offset={-100} activeClass="text-[#358f60] underline underline-offset-4" className="transition-all duration-500" onClick={handleMenuClick}>
//                 Home
//               </Link>
//             </Fade>
//           </li>     
//           <li className="hover:animate-wiggle">
//             <Fade right delay={200}>
//               <Link to="About" smooth={true} duration={800} spy={true} offset={-100} activeClass="text-[#358f60] underline underline-offset-4" className="transition-all duration-500" onClick={handleMenuClick}>
//                 About
//               </Link>
//             </Fade>
//           </li>
//           <li className="hover:animate-wiggle">
//             <Fade right delay={400}>
//               <Link to="Skills" smooth={true} duration={800} spy={true} offset={-100} activeClass="text-[#358f60] underline underline-offset-4" className="transition-all duration-500" onClick={handleMenuClick}>
//                 Skills
//               </Link>
//             </Fade>
//           </li>
//           <li className="hover:animate-wiggle">
//             <Fade right delay={600}>
//               <Link to="Work" smooth={true} duration={800} spy={true} offset={-100} activeClass="text-[#358f60] underline underline-offset-4" className="transition-all duration-500" onClick={handleMenuClick}>
//                 My Work
//               </Link>
//             </Fade>
//           </li>
//           <li className="hover:animate-wiggle">
//             <Fade right delay={800}>
//               <Link to="Contact" smooth={true} duration={800} spy={true} offset={0} activeClass="text-[#358f60] underline underline-offset-4" className="transition-all duration-500" onClick={handleMenuClick}>
//                 Contact
//               </Link>
//             </Fade>
//           </li>
//         </ul>
//       </Fade>
      
//     </div>
//   );
// };

// export default Navbar;
