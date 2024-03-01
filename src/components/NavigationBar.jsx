import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import NBlogo from "../assets/personalLogos/NBlogo.png";

export const FloatingNavBar = (props) => {

  const [selected, setSelected] = useState(props.selectedTabId);

  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="md:flex hidden fixed left-[50%] top-4 w-fit -translate-x-[50%] items-center gap-6 rounded-lg border-[1px] border-neutral-700 bg-neutral-900 p-2 text-sm text-neutral-500 pr-4 z-50">
        <Logo />
        <NavLink linkTo={"/"} selected={selected === 0} id={0} setSelected={setSelected}>Home</NavLink>
        <NavLink linkTo={"/MyWork"} selected={selected === 1} id={1} setSelected={setSelected}>Professional</NavLink>
        {/* <NavLink linkTo={"/AboutMe"} selected={selected === 2} id={2} setSelected={setSelected}>Personal</NavLink> */}
        <NavLink linkTo={"/ContactMe"} selected={selected === 3} id={3} setSelected={setSelected}>Contact</NavLink>
      </nav>

      <div className="md:hidden">
         <HamburgerButton active={open} setActive={setOpen} />
      </div>
      
      
      {/* <nav className={!open ? 'hidden' : "md:hidden absolute top-0 right-0 px-4 py-2 bg-[#282c2f] flex flex-col rounded-md"}>
        <Logo />
        <NavLink linkTo={"/"} selected={selected === 0} id={0} setSelected={setSelected}>Home</NavLink>
        <NavLink linkTo={"/MyWork"} selected={selected === 1} id={1} setSelected={setSelected}>Professional</NavLink>
        <NavLink linkTo={"/AboutMe"} selected={selected === 2} id={2} setSelected={setSelected}>Personal</NavLink>
        <NavLink linkTo={"/ContactMe"} selected={selected === 3} id={3} setSelected={setSelected}>Contact</NavLink>
      </nav> */}

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

const HamburgerButton = ({ active, setActive }) => {
  
  const HAMBURGER_VARIANTS = {
    top: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        top: ["35%", "50%", "50%"],
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        top: ["50%", "50%", "35%"],
      },
    },
    middle: {
      open: {
        rotate: ["0deg", "0deg", "-45deg"],
      },
      closed: {
        rotate: ["-45deg", "0deg", "0deg"],
      },
    },
    bottom: {
      open: {
        rotate: ["0deg", "0deg", "45deg"],
        bottom: ["35%", "50%", "50%"],   
      },
      closed: {
        rotate: ["45deg", "0deg", "0deg"],
        bottom: ["50%", "50%", "35%"],       
      },
    },
  };

  return (
    <>
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={() => setActive((pv) => !pv)}
        className={`fixed left-1/2 top-2 transform -translate-x-1/2 z-50 h-[50px] w-[70px] transition-all bg-emerald-500 rounded-lg `}
      >
        <motion.span
          variants={HAMBURGER_VARIANTS.top}
          className="absolute block h-1 w-10 bg-white "
          style={{ y: "-50%", left: "50%", x: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.middle}
          className="absolute block h-1 w-10 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={HAMBURGER_VARIANTS.bottom}
          className="absolute block h-1 w-10 bg-white"
          style={{x: "-50%", y: "50%", left: "50%" }}
        />
      </motion.button>
    </>
  );
};