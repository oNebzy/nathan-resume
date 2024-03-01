import React from 'react';
import { motion } from 'framer-motion';
import ViewSiteButton from '../components/buttons/ViewSiteButton';
import CloseProjectButton from '../components/buttons/CloseProjectButton';
import { SkillBox } from '../components/SkillBox';

//Skills Icon Imports
//Skills Icon Imports
import react from "../assets/logos/react.png";
import firebase from "../assets/logos/firebase.png";
import sql from "../assets/logos/sql.png"
import BigQuery from "../assets/logos/BigQuery.png"
import eas from "../assets/logos/eas.png"

export default function GigUpBento({onClose}) {
  
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
            <div className='text-5xl ml-4 mt-3 pb-2 bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent'>GigUp</div>
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
            <ViewSiteButton navLink={'https://www.gigup.me/'}/>
            <CloseProjectButton onClick={() => {onClose()}}/>
          </div> 
        </motion.div>
      </div>

      {/* Second Row */}
      <div className='w-[100%] h-[26%] mb-6 grid grid-cols-11 gap-6'>
        {/* Left Box */}
        <motion.div
          className='col-span-7'
          initial={{opacity: 0, x: "50%"}}
          animate={{opacity: 1, x: 0, transition:{duration: 2}}}
          exit={{opacity: 0, x: "35%", transition:{duration: 1.3, delay: .4}}}
        >
          <div className='h-[100%] col-span-7 align-middle items-center flex flex-col pb-4 bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300 text-white'>
            <div className='w-fit m-5 text-xl font-semibold bg-gradient-to-r from-emerald-600 to-emerald-300 bg-clip-text text-transparent'>
              Project Description
            </div>
            <div className='text-lg ml-6 mr-6'>
              A job finding platform designed to empower candidates with its user centric design, putting the control in their hands. Gigup matches potential candidates with part time positions based on attributes such as availability, distance, and skills. 
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
            <div className='text-lg mt-2'>peaked at </div>
            <div className='text-[68px] animate-text bg-gradient-to-r from-emerald-500 to-pink-400 bg-clip-text text-transparent font-semibold'> {`<`} 250 </div>
            <div className='text-lg '> active users </div>
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
          <div className='h-fit col-span-3 pb-4 bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300'> 
            <div className='m-3 text-2xl text-white text-center'>
              {'</>'} Tech Stack
            </div>
            <div className="w-full grid grid-cols-2 gap-3 text-center text-white font-medium sm:text-sm text-xs">
              <SkillBox imageImport={react} skill="React"/>
              <SkillBox imageImport={react} skill="React Native"/>
              <SkillBox imageImport={firebase} skill="Firebase"/>
              <SkillBox imageImport={eas} skill="EAS"/>
              <SkillBox imageImport={BigQuery} skill="BigQuery"/>
              <SkillBox imageImport={sql} skill="SQL"/>     
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
          <div className='col-span-8 h-[100%] flex flex-col bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300 '>  
            <div className='w-fit m-3 text-2xl font-semibold bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent'>
              What impact did I have?
            </div>
            <div className='text-white text-lg mb-[10px] ml-3'>
              Assumed <span className='text-lg font-medium text-emerald-400'>full-stack development</span> responsibilities, from conceptualization to deployment
            </div>
            <div className='text-white text-lg mb-[10px] ml-3'>
              Played an instrumental role in <span className='text-lg font-medium text-emerald-400'>feature ideation, design, and implementation</span>  
            </div>
            <div className='text-white text-lg mb-[10px] ml-3'>
              Developed <span className='text-lg font-medium text-emerald-400'>reusable frontend components</span> prioritizing responsive design <br/> across various devices<span className='text-lg font-medium text-emerald-400'></span>
            </div>
            <div className='text-white text-lg mb-[10px] ml-3'>
              Heavily influenced the overall <span className='text-lg font-medium text-emerald-400'>user interface</span> and <span className='text-lg font-medium text-emerald-400'>user experience</span>  of the mobile and web applications  
            </div>
            <div className='text-white text-lg mb-[10px] ml-3'>
              Created <span className='text-lg font-medium text-emerald-400'>automated daily/weekly reporting</span> by integrating BigQuery and Data Studio with the Firebase backend<span className='text-lg font-medium text-emerald-400'></span>  
            </div>
            
          </div>
        </motion.div>
        
      </div>
    </div>
  )
}
