import React from 'react';
import { motion } from 'framer-motion';
import ViewSiteButton from '../components/buttons/ViewSiteButton';
import CloseProjectButton from '../components/buttons/CloseProjectButton';
import { SkillBox } from '../components/SkillBox';

//Skills Icon Imports
import react from "../assets/logos/react.png";
import postgress from "../assets/logos/postgress.png"
import heymarket from "../assets/logos/heymarket.png"
import fitbit from "../assets/logos/fitbit2.png"



export default function MoodrBento({onClose}) {
  return (
    <div className="w-full h-full pt-10">
      {/* Top Row */}
      <div className='w-[100%] h-[15%] mb-6 grid grid-cols-10 gap-6'>
        {/* Title Box */}
        <motion.div
          className='col-span-7'
          initial={{opacity: 0, y: "-50%"}}
          animate={{opacity: 1, y: 0, transition:{duration: 2}}}
          exit={{opacity: 0, y: "-50%", transition:{duration: 1.3, delay: .5}}}
        >
          <div className=' col-span-7 flex flex-col bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300'>
            <div className='text-5xl ml-4 mt-4 bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent'>Moodr</div>
            <div className='text-white text-xl ml-5 mt-1 mb-4'>Web & Mobile Application Development</div>
          </div>
        </motion.div>

        {/* Button Box */}
        <motion.div
          className='col-span-2'
          initial={{opacity: 0, y: "-50%"}}
          animate={{opacity: 1, y: 0, transition:{duration: 2, delay: .2}}}
          exit={{opacity: 0, y: "-50%", transition:{duration: 1}}}
        >
          <div className='h-[100%] col-span-2 flex flex-col justify-center space-y-4'>
            <ViewSiteButton navLink={'https://www.moodrhealth.com/'}/>
            <CloseProjectButton onClick={() => {onClose()}}/>
          </div> 
        </motion.div>
      </div>

      {/* Second Row */}
      <div className='w-[100%] h-[26%] mb-8 grid grid-cols-11 gap-6'>
        {/* Left Box */}
        <motion.div
          className='col-span-7'
          initial={{opacity: 0, x: "50%"}}
          animate={{opacity: 1, x: 0, transition:{duration: 2}}}
          exit={{opacity: 0, x: "35%", transition:{duration: 1.3, delay: .4}}}
        >
          <div className='h-[100%] col-span-7 align-middle items-center flex flex-col pb-4 bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300 text-white'>
            <div className='w-fit mt-5 mb-3 text-xl font-semibold bg-gradient-to-r from-emerald-600 to-emerald-300 bg-clip-text text-transparent'>
              Project Description
            </div>
            <div className='text-lg ml-6 mr-6'>
              A flagship proactive mental health platform improving clinicians ability to prevent, identify, and treat parental mental health challenges. 
              Utilizing wearables and patient input, clinicians get a 360 view of their patients: improving patient outcomes and clinician efficiency.
            </div>
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
            <div className='text-lg mt-2'>Over</div>
            <div className='text-[68px] animate-text bg-gradient-to-r from-emerald-500 to-pink-400 bg-clip-text text-transparent font-semibold'>1000</div>
            <div className='text-lg '>Parents already impacted</div>
          </div>
        </motion.div>
        
      </div>

      {/* Third Row */}
      <div className='w-[100%] h-[30%] mb-6 grid grid-cols-11 gap-6 pt-1'>
        {/* Tech Stack Box*/}
        <motion.div
          className='col-span-3'
          initial={{opacity: 0, y: "50%"}}
          animate={{opacity: 1, y: 0, transition:{duration: 2}}}
          exit={{opacity: 0, y: "50%", transition:{duration: 1, delay: .2}}}
        >
          <div className='h-fit col-span-3 pb-4 bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300'> 
            <div className='m-3 text-2xl text-white text-center'>
              {'</>'} Tech Stack
            </div>
            <div className="w-full grid grid-cols-2 gap-3 text-center text-white font-medium sm:text-sm text-xs">
              <SkillBox imageImport={react} skill="React"/>
              <SkillBox imageImport={react} skill="React Native"/>
              <SkillBox imageImport={postgress} skill="PostreSQL"/>
              <SkillBox imageImport={fitbit} skill="Fitbit"/>
              <SkillBox imageImport={heymarket} skill="heymarket"/>     
            </div>
          </div>
        </motion.div>
        
        {/* Contributions Box*/}
        <motion.div
          className='col-span-8'
          initial={{opacity: 0, y: "50%"}}
          animate={{opacity: 1, y: 0, transition:{duration: 2, delay: .5}}}
          exit={{opacity: 0, y: "50%", transition:{duration: 1}}}
        >
          <div className='col-span-8 h-[100%] pr-2 flex flex-col bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300 '>  
            <div className='w-fit m-3 text-2xl font-semibold bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent'>
              What impact did I have?
            </div>
            <div className='text-white text-lg mb-[10px] ml-3'>
              Designed and <span className='text-lg font-medium text-emerald-400'>developed responsive & reusable front-end components</span> such as charts, surveys, and forms  
            </div>
            <div className='text-white text-lg mb-[10px] ml-3'>
              Shadowed medical professionals to <span className='text-lg font-medium text-emerald-400'>create application requirements</span> from their process and friction points
            </div>
            <div className='text-white text-lg mb-[10px] ml-3'>
            <span className='text-lg font-medium text-emerald-400'>Created custom algorithms</span> to score users responses, giving providers clear insight into their patient's sleep, mood, and diet
            </div>
            <div className='text-white text-lg mb-[10px] ml-3'>
              Lead the <span className='text-lg font-medium text-emerald-400'>integration of a texting platform</span> allowing patient-client text messaging from the application to native mobile device sms
            </div>
            <div className='text-white text-lg mb-[10px] ml-3'>
              Lead the <span className='text-lg font-medium text-emerald-400'>integration with wearables</span> such as Apple Watch and Fitbit.
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  )
}