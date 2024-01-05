import React from 'react';
import { motion, useIsPresent } from 'framer-motion';

//Skills Icon Imports
import javascript from "../../assets/logos/javascript.png";
import css from "../../assets/logos/css.png";
import git from "../../assets/logos/git.png";
import html from "../../assets/logos/html.png";
import jira from "../../assets/logos/jira.png";
import react from "../../assets/logos/react.png";
import tailwind from "../../assets/logos/tailwind.png";
import python from "../../assets/logos/python.png";
import sql from "../../assets/logos/sql.png"
import csharp from "../../assets/logos/csharp.png"

function AboutBento() {
  return (
    <div className="w-full h-full">
      {/* Top Row */}
      <div className='w-[100%] h-[14%] mb-6 grid grid-cols-10 gap-6'>
        <motion.div
          initial={{opacity: 0, y: -300}} 
          animate={{opacity: 1, y: 0}}
          transition={{duration: 1, ease: "easeIn"}}
          className=' col-span-7 flex flex-col bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300'>
          <div className='text-5xl ml-4 mt-4 bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent'>Nathan Burd</div>
          <div className='text-white text-xl ml-5 mt-1'>Web, Mobile, & Full Stack Developer</div>
        </motion.div>
        <div className='col-span-3 flex flex-col items-center bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300'>
          <div className='text-[54px] text-emerald-300 font-semibold'>3</div>
          <div className='text-base text-white mb-2'>Years Experience</div>
        </div> 
      </div>

      {/* Second Row */}
      <div className='w-[100%] h-[30%] mb-6 grid grid-cols-11 gap-6'>
        {/* skills Box*/}
        <div className='col-span-7 pb-4 bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300'> 
          <div className='m-3 text-2xl text-white '>
            {'</>'} Skills
          </div>
          <div className="w-full grid grid-cols-5 gap-3 text-center text-white font-medium sm:text-sm text-xs">
            <SkillBox imageImport={javascript} skill="Javascript"/>
            <SkillBox imageImport={html} skill="HTML"/>
            <SkillBox imageImport={css} skill="CSS"/>
            <SkillBox imageImport={react} skill="React"/>
            <SkillBox imageImport={python} skill="Python"/>
            
            <SkillBox imageImport={tailwind} skill="Tailwind"/>
            <SkillBox imageImport={sql} skill="SQL"/>
            <SkillBox imageImport={csharp} skill="C#"/>
            <SkillBox imageImport={git} skill="Git"/>
            <SkillBox imageImport={jira} skill="Jira"/>
          </div>
        </div>
        {/* Education Box */}
        <div className='col-span-4 justify-center align-middle items-center flex flex-col pb-4 bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300 text-white'>
          
          <div className='text-[100px] animate-text bg-gradient-to-r from-emerald-500 to-pink-400 bg-clip-text text-transparent font-semibold'>11+</div>
          <div className='text-xl '>Profesional Projects</div>

        </div>
      </div>

      {/* Third Row */}
      <div className='w-[100%] h-[30%] mb-6 grid grid-cols-11 gap-6'>
        {/* skills Box*/}
        <div className='col-span-3 h-[60%] flex flex-col items-center justify-center bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300 mb-24'>
          <div className='text-base text-white'>Projects in</div>
          <div className='text-[72px] bg-gradient-to-br from-pink-500 to-pink-300 bg-clip-text text-transparent font-semibold mt-3 mb-3'>8</div>
          <div className='text-base text-white'>unique industries</div>
        </div> 
        <div className='col-span-7 h-[100%] flex flex-col items-center justify-center pb-4 bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300 mb-6'> 
          <div className='m-4 text-xl text-white text-center'>
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
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default AboutBento;



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
