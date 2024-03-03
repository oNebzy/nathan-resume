import React from 'react';
import { motion } from 'framer-motion';
import { SkillBox } from '../components/SkillBox';
import {TbFileExport} from 'react-icons/tb'
import resume from "../assets/NathanBurdResume.pdf"
import { FloatingNavBar } from "../components/NavigationBar";

//Skills Icon Imports
import javascript from "../assets/logos/javascript.png";
import css from "../assets/logos/css.png";
import git from "../assets/logos/git.png";
import html from "../assets/logos/html.png";
import jira from "../assets/logos/jira.png";
import react from "../assets/logos/react.png";
import tailwind from "../assets/logos/tailwind.png";
import python from "../assets/logos/python.png";
import sql from "../assets/logos/sql.png"
import csharp from "../assets/logos/csharp.png"


function AboutScreen() {

  return (
    <div className="min-h-[100dvh] w-full bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 overflow-hidden" >

      
      <FloatingNavBar selectedTabId={2}/>

      <div className="w-full h-full mt-[5.5rem] mb-6" id="about">
        {/* Top Row */}
        <div className='w-[100%] h-fit md:mb-6 mb-3 grid grid-cols-10 md:gap-6 gap-3 md:px-0 px-4'>
          <motion.div
            className='col-span-7'
            initial={{opacity: 0, y: "-50%"}}
            animate={{opacity: 1, y: 0, transition:{duration: 2, delay: 1}}}
            exit={{opacity: 0, y: "-50%", transition:{duration: 1, delay: .4}}}
          >
            <div className='h-[100%] col-span-7 flex flex-col bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300'>
              <div className='md:text-5xl text-2xl md:ml-4 ml-2 md:mt-4 mt-1 bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent'>Nathan Burd</div>
              <div className='md:text-xl text-sm text-white  md:ml-4 ml-2 md:mt-1 mt-0 mb-2'>Web, Mobile, & Full Stack Developer</div>
            </div>
          </motion.div>
          <motion.div
            className='col-span-3'
            initial={{opacity: 0, x: "50%"}}
            animate={{opacity: 1, x: 0, transition:{duration: 2, delay: 1.2}}}
            exit={{opacity: 0, y: "-50%", transition:{duration: 1}}}
          >
            <div className='h-[100%] col-span-3 flex flex-col items-center bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300'>
              <div className='hidden md:flex text-[54px] text-emerald-300 font-semibold'>3</div>
              <div className='hidden md:flex text-base text-white mb-2 text-center'>Years Experience</div>

              <div className='flex md:hidden text-[34px] leading-10 text-emerald-300 font-semibold'>3</div>
              <div className='flex md:hidden text-sm leading-3 text-white mb-2 text-center'>Years of Exp.</div>
            </div> 
          </motion.div>
          
        </div>

        {/* Web View second and third rows */}

        {/* Second Row */}
        <div className='md:grid hidden w-[100%] h-[30%] mb-6 grid-cols-11 gap-6 md:px-0 px-4'>
          {/* skills Box*/}
          <motion.div
            className='col-span-7'
            initial={{opacity: 0, x: "50%"}}
            animate={{opacity: 1, x: 0, transition:{duration: 2, delay: 1}}}
            exit={{opacity: 0, x: "30%", transition:{duration: 1}}}
          >
            <div className='h-[100%] col-span-7 bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300'> 
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
          </motion.div>
          
          {/*Project Count Box */}
          <motion.div
            className='col-span-4'
            initial={{opacity: 0, x: "50%"}}
            animate={{opacity: 1, x: 0, transition:{duration: 2, delay: 1.7}}}
            exit={{opacity: 0, x: "50%", transition:{duration: .75}}}
          >
            <div className='h-[100%] col-span-4 justify-center align-middle items-center flex flex-col pb-4 bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300 text-white'>
              <div className='text-[100px] animate-text bg-gradient-to-r from-emerald-500 to-pink-400 bg-clip-text text-transparent font-semibold'>11+</div>
              <div className='text-xl '>Profesional Projects</div>
            </div>
          </motion.div>
          
        </div>

        {/* Third Row */}
        <div className='md:grid hidden w-[100%] h-[30%] mb-6 grid-cols-11 gap-6 md:px-0 px-4'>
          {/* Project Industries Box*/}
          <motion.div
            className='col-span-3 flex flex-col'
            initial={{opacity: 0, y: "50%"}}
            animate={{opacity: 1, y: 0, transition:{duration: 2, delay: 1}}}
            exit={{opacity: 0, y: "50%", transition:{duration: 1}}}
          >
            <div className='col-span-3 py-3 mb-4 flex flex-col items-center justify-center bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300'>
              <div className='text-base text-white'>Projects in</div>
              <div className='text-[72px] bg-gradient-to-br from-pink-500 to-pink-300 bg-clip-text text-transparent font-semibold mt-3 mb-3'>8</div>
              <div className='text-base text-white'>unique industries</div>
            </div>
            <ResumeButton/>
          </motion.div>

          {/* About Text Box*/}
          <motion.div
            className='col-span-7'
            initial={{opacity: 0, y: "50%"}}
            animate={{opacity: 1, y: 0, transition:{duration: 2, delay: 1.5}}}
            exit={{opacity: 0, y: "50%", transition:{duration: 1, delay: .2}}}
          >
            <div className='col-span-7 h-fit py-1 flex flex-col items-center justify-center bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300'> 
              <div className='m-4 text-xl text-white text-center'>
                I am dedicated to crafting 
                <span className='text-[22px] text-emerald-400'> Responsive</span>, 
                <span className='text-[22px] text-pink-400'> Imaginative</span>, and
                <span className='text-[22px] text-emerald-400'> Innovative </span>software applications. 
              </div>
              <div className='m-4 text-xl text-white text-center'>
                Developing with a <span className='text-[22px] text-pink-400'>"User-First" </span> approach to create seamless experiences across web and mobile platforms.
              </div>
              <div className='m-4 text-xl text-white text-center'>
              I would describe myself as a well-organized and outgoing individual with a <span className='text-[22px] text-emerald-400'>passion for transforming ideas into reality</span>. Please check out what I can do, and let's create something great together.
              </div>
            </div>
          </motion.div>
        </div>

        {/* END Web View second and third rows */}

        {/* Mobile view 2nd+ Rows*/}

        {/* Mobile 2nd row container*/}
        <div className='md:hidden grid w-[100%] h-[30%] md:mb-6 mb-3 grid-cols-11 gap-4 md:px-0 px-4'>
          
          {/* Second Row Left Column Container */}
          {/* skills Box*/}
          <motion.div
            className='col-span-6'
            initial={{opacity: 0, x: "50%"}}
            animate={{opacity: 1, x: 0, transition:{duration: 2, delay: 1}}}
            exit={{opacity: 0, x: "30%", transition:{duration: 1}}}
          >
            <div className='h-fit col-span-7 bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300'> 
              <div className='mt-1 ml-2 text-lg text-white '>
                {'</>'} Skills
              </div>
              <div className="w-full grid grid-cols-2 text-center text-white font-medium text-xs pb-2">
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
          </motion.div>
          
          {/* Second Row Right Column Container */}
          <div className='col-span-5'>
            <motion.div
              className='col-span-5'
              initial={{opacity: 0, x: "50%"}}
              animate={{opacity: 1, x: 0, transition:{duration: 2, delay: 1.5}}}
              exit={{opacity: 0, x: "50%", transition:{duration: .75}}}
            >
              <div className='h-fit w-full justify-center align-middle items-center flex flex-col py-3 mb-3 bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300 text-white'>
                <div className='text-7xl animate-text bg-gradient-to-r from-emerald-500 to-pink-400 bg-clip-text text-transparent font-semibold'>11+</div>
                <div className='text-base '>Profesional Projects</div>
              </div>
            </motion.div>
            <motion.div
              className='col-span-5'
              initial={{opacity: 0, x: "50%"}}
              animate={{opacity: 1, x: 0, transition:{duration: 2, delay: 1.8}}}
              exit={{opacity: 0, x: "50%", transition:{duration: .75}}}
            >
              <div className='h-fit w-full py-3 mb-3 flex flex-col items-center justify-center bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300 text-white'>
                <div className='text-base '>Projects in</div>
                <div className='text-7xl bg-gradient-to-br from-pink-500 to-pink-300 bg-clip-text text-transparent font-semibold'>8</div>
                <div className='text-base'>unique industries</div>
              </div>
            </motion.div>
            <motion.div
              className='col-span-5'
              initial={{opacity: 0, x: "50%"}}
              animate={{opacity: 1, x: 0, transition:{duration: 2, delay: 2.1}}}
              exit={{opacity: 0, x: "50%", transition:{duration: .75}}}
            >
              <ResumeButton/>
            </motion.div>
          </div>
        </div>

        {/* Mobile 3rd row container*/}
        <div className='md:hidden grid w-[100%] h-fit md:mb-6 grid-cols-1 md:px-0 px-4 pb-5'>
          <motion.div
            className='col-span-1'
            initial={{opacity: 0, y: "50%"}}
            animate={{opacity: 1, y: 0, transition:{duration: 2, delay: 1.5}}}
            exit={{opacity: 0, y: "50%", transition:{duration: 1, delay: .2}}}
          >
            <div className='w-full h-fit py-1 flex flex-col items-center justify-center bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300'> 
              <div className='px-3 pt-3 text-base text-white text-center'>
                I am dedicated to crafting 
                <span className='text-base text-emerald-400'> Responsive</span>, 
                <span className='text-base text-pink-400'> Imaginative</span>, and
                <span className='text-base text-emerald-400'> Innovative </span>software applications. 
              </div>
              <div className='px-3 pt-3 text-base text-white text-center'>
                Developing with a <span className='text-base text-pink-400'>"User-First" </span> approach to create seamless experiences across web and mobile platforms.
              </div>
              <div className='p-3 text-base text-white text-center'>
              I would describe myself as a well-organized and outgoing individual with a <span className='text-base text-emerald-400'>passion for transforming ideas into reality</span>. Please check out what I can do, and let's create something great together.
              </div>
            </div>
          </motion.div>
        </div>
        
        
      </div>
    </div>
    
  )
}

export default AboutScreen;

const ResumeButton = () => {
  return (
    <a href={resume} target="_blank" rel="noreferrer">
      <button
        className={`
          relative w-full z-0 flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-2
          bg-neutral-800 border-white px-4 py-2.5 font-medium
          text-neutral-100 md:text-base text-sm transition-all duration-300
          shadow-[0_0px_15px_-1px_rgba(0,0,0,0.1)] hover:shadow-pink-300
            
          before:absolute before:inset-0
          before:-z-10 before:translate-y-[200%]
          before:scale-[2.5]
          before:rounded-[100%] before:bg-neutral-50
          before:transition-transform before:duration-1000
          before:content-[""]

          hover:scale-105 hover:border-neutral-50 hover:text-neutral-900
          hover:before:translate-y-[0%]
          active:scale-100`}
      >
        My Full Resume <TbFileExport className="text-xl"/>
      </button>
    </a>
  );
};