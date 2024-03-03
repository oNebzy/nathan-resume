import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import NBlogo from "../assets/personalLogos/NBlogo.png";

export const FloatingNavBar = (props) => {

  const [selected, setSelected] = useState(props.selectedTabId);

  return (
    <div>
      <nav className="md:flex hidden fixed left-[50%] top-4 w-fit -translate-x-[50%] items-center gap-6 rounded-lg border-[1px] border-neutral-700 bg-neutral-900 p-2 text-sm text-neutral-500 pr-4 z-50">
        <Logo />
        <NavLink linkTo={"/"} selected={selected === 0} id={0} setSelected={setSelected}>Home</NavLink>
        <NavLink linkTo={"/MyWork"} selected={selected === 1} id={1} setSelected={setSelected}>Professional</NavLink>
        {/* <NavLink linkTo={"/AboutMe"} selected={selected === 4} id={4} setSelected={setSelected}>Personal</NavLink> */}
        <NavLink linkTo={"/ContactMe"} selected={selected === 3} id={3} setSelected={setSelected}>Contact</NavLink>
      </nav>

      <nav className="md:hidden flex fixed left-[50%] top-2 w-fit -translate-x-[50%] items-center gap-3 rounded-lg border-[1px] border-neutral-700 bg-neutral-900 p-2 text-sm text-neutral-500 pr-4 z-50">
        <Logo />
        <NavLink linkTo={"/"} selected={selected === 0} id={0} setSelected={setSelected}>Home</NavLink>
        <NavLink linkTo={"/About"} selected={selected === 2} id={2} setSelected={setSelected}>About</NavLink>
        <NavLink linkTo={"/MyWork"} selected={selected === 1} id={1} setSelected={setSelected}>Professional</NavLink>
        {/* <NavLink linkTo={"/Personal"} selected={selected === 4} id={4} setSelected={setSelected}>Personal</NavLink> */}
        <NavLink linkTo={"/ContactMe"} selected={selected === 3} id={3} setSelected={setSelected}>Contact</NavLink>
      </nav>
      

      

    </div>
    
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <img src={NBlogo} alt="Logo" style={{width:'40px'}} />
  );
};

const NavLink = ({ children, linkTo, selected, id, setSelected }) => {
  return (
    <Link to={linkTo} className="block overflow-hidden" onClick={() => setSelected(id)}>
      <motion.div
        whileHover={{ y: -20 }}
        transition={{ ease: "backInOut", duration: 0.5 }}
        className="h-[20px]"
      >
        {selected ? <span className="flex h-[20px] items-center text-[#358f60] underline underline-offset-4">{children}</span> : <span className="flex h-[20px] items-center">{children}</span>}
        <span className="flex h-[20px] items-center text-neutral-50">
          {children}
        </span>
      </motion.div>
    </Link>
  );
};

// const JoinButton = () => {
//   return (
//     <Link to="/ContactMe">
//       <button
//         className={`
//             relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[1px] 
//             border-neutral-700 px-4 py-1.5 font-medium
//           text-neutral-300 transition-all duration-300
            
//             before:absolute before:inset-0
//             before:-z-10 before:translate-y-[200%]
//             before:scale-[2.5]
//             before:rounded-[100%] before:bg-neutral-50
//             before:transition-transform before:duration-1000
//             before:content-[""]
    
//             hover:scale-105 hover:border-neutral-50 hover:text-neutral-900
//             hover:before:translate-y-[0%]
//             active:scale-100`}
//       >
//         Contact Me
//       </button>
//     </Link>
//   );
// };