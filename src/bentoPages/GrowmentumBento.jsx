import React from 'react';
import { motion } from 'framer-motion';
import ViewSiteButton from '../components/buttons/ViewSiteButton';
import CloseProjectButton from '../components/buttons/CloseProjectButton';

//Skills Icon Imports
import javascript from "../assets/logos/javascript.png";
import css from "../assets/logos/css.png";
import html from "../assets/logos/html.png";
import python from "../assets/logos/python.png";
import sql from "../assets/logos/sql.png"


function GrowmentumBento({onClose}) {
  
  
  const TopLeftFade = ({children, className, initial = "initial", animate = "animate", exit = "exit"}) => {
    const topLeft_variants = {
      initial: {opacity: 0, y: "-50%"},
      animate: {opacity: 1, y: 0, transition:{duration: 2}},
      exit: {opacity: 0, y: "-50%", transition:{duration: 1.3, delay: .5}}
    }
    return(
      <motion.div
        className={className}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={topLeft_variants}
      >
        {children}
      </motion.div>
    )
  }

  
  return (
    <div className="w-full h-full">
      {/* Top Row */}
      <div className='w-[100%] h-[14%] mb-6 grid grid-cols-10 gap-6'>
        {/* Title Box */}
        <TopLeftFade className='col-span-7'>
          <div className=' col-span-7 flex flex-col bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300'>
            <div className='text-5xl ml-4 mt-4 bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent'>Growmentum</div>
            <div className='text-white text-xl ml-5 mt-1 mb-4'>Web and Tablet Application</div>
          </div>
        </TopLeftFade>

        {/* Button Box */}
        <motion.div
          className='col-span-2'
          initial={{opacity: 0, y: "-50%"}}
          animate={{opacity: 1, y: 0, transition:{duration: 2, delay: .2}}}
          exit={{opacity: 0, y: "-50%", transition:{duration: 1}}}
        >
          <div className='h-[100%] col-span-2 flex flex-col justify-center space-y-4'>
            <ViewSiteButton/>
            <CloseProjectButton onClick={() => {onClose()}}/>
          </div> 
        </motion.div>
      </div>

      {/* Second Row */}
      <div className='w-[100%] h-[30%] mb-6 grid grid-cols-11 gap-6'>
        {/* Left Box */}
        <motion.div
          className='col-span-7'
          initial={{opacity: 0, x: "50%"}}
          animate={{opacity: 1, x: 0, transition:{duration: 2}}}
          exit={{opacity: 0, x: "35%", transition:{duration: 1.3, delay: .4}}}
        >
          <div className='h-[100%] col-span-7 justify-center align-middle items-center flex flex-col pb-4 bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300 text-white'>
            project description
          </div>
        </motion.div>
        
        
        {/* Right Box */}
        <motion.div
          className='col-span-4'
          initial={{opacity: 0, x: "50%"}}
          animate={{opacity: 1, x: 0, transition:{duration: 2, delay: 1}}}
          exit={{opacity: 0, x: "35%", transition:{duration: 1}}}
        >
          <div className='h-[100%] col-span-4 justify-center align-middle items-center flex flex-col pb-4 bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300 text-white'>
            <div className='text-lg mt-2'>Responsible for</div>
            <div className='text-[68px] animate-text bg-gradient-to-r from-emerald-500 to-pink-400 bg-clip-text text-transparent font-semibold'>{'<'} $100m</div>
            <div className='text-lg '>of labor management & analysis</div>
          </div>
        </motion.div>
        
      </div>

      {/* Third Row */}
      <div className='w-[100%] h-[30%] mb-6 grid grid-cols-11 gap-6'>
        {/* Tech Stack Box*/}
        <motion.div
          className='col-span-3'
          initial={{opacity: 0, y: "50%"}}
          animate={{opacity: 1, y: 0, transition:{duration: 2}}}
          exit={{opacity: 0, y: "50%", transition:{duration: 1, delay: .2}}}
        >
          <div className='h-[100%] col-span-3 pb-4 bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300'> 
            <div className='m-3 text-2xl text-white text-center'>
              {'</>'} Tech Stack
            </div>
            <div className="w-full grid grid-cols-2 gap-3 text-center text-white font-medium sm:text-sm text-xs">
              <SkillBox imageImport={javascript} skill="Javascript"/>
              <SkillBox imageImport={html} skill="HTML"/>
              <SkillBox imageImport={css} skill="CSS"/>
              <SkillBox imageImport={python} skill="Python"/>
              <SkillBox imageImport={sql} skill="SQL"/>     
            </div>
          </div>
        </motion.div>
        
        {/* Contributions Box*/}
        <motion.div
          className='col-span-7'
          initial={{opacity: 0, y: "50%"}}
          animate={{opacity: 1, y: 0, transition:{duration: 2, delay: .5}}}
          exit={{opacity: 0, y: "50%", transition:{duration: 1}}}
        >
          <div className='col-span-7 h-[100%] flex flex-col items-center justify-center pb-4 bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300 mb-6'>  
            Contributions 
            {/* <div className='m-4 text-xl text-white text-center'>
              I am dedicated to crafting 
              <span className='text-[22px] text-emerald-400'> Responsive</span>, 
              <span className='text-[22px] text-pink-400'> Imaginative</span>, and
              <span className='text-[22px] text-emerald-400'> Innovative </span>software applications. 
            </div>
            <div className='m-4 text-xl text-white text-center'>
              Developing with a <span className='text-[22px] text-pink-400'>"User-First" </span> approach to create seamless experiences across web and mobile platforms.
            </div>
            <div className='m-4 text-xl text-white text-center mt-8'>
            I would describe myself as a well-organized and outgoing individual with a passion for transforming ideas into reality. Please check out what I can do, and let's create something great together.
            </div> */}

          </div>
        </motion.div>
        
      </div>
    </div>
  )
}

export default GrowmentumBento;



function SkillBox(props) {
  return (
    <div className="rounded-lg w-full h-[86px] flex flex-col p-2 justify-evenly">
      <div className="w-full h-full flex justify-center items-center">
        <img src={props.imageImport} alt={""} className="max-h-10"></img>
      </div>
      <div>{props.skill}</div>
    </div>
  )
}