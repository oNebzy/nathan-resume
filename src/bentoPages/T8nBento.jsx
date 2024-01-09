import React from 'react';
import {HiArrowCircleRight , HiOutlineX} from 'react-icons/hi'

//Skills Icon Imports
import javascript from "../assets/logos/javascript.png";
import css from "../assets/logos/css.png";
import html from "../assets/logos/html.png";
import python from "../assets/logos/python.png";
import sql from "../assets/logos/sql.png"
import BigQuery from "../assets/logos/BigQuery.png"


function T8nBento({onClose}) {
  return (
    <div className="w-full h-full">
      {/* Top Row */}
      <div className='w-[100%] h-[14%] mb-6 grid grid-cols-10 gap-6'>
        <div className=' col-span-7 flex flex-col bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300'>
          <div className='text-5xl ml-4 mt-4 bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent pb-1'>The Eighth Notch</div>
          <div className='text-white text-xl ml-5 mt-1 mb-4'>Web Application & API</div>
        </div>
        <div className='col-span-2 flex flex-col justify-center space-y-4'>
          <ViewSiteButton/>
          <CloseProjectButton onClick={() => {onClose()}}/>
        </div> 
      </div>

      {/* Second Row */}
      <div className='w-[100%] h-[30%] mb-6 grid grid-cols-11 gap-6'>
        {/* Left Box */}
        <div className='col-span-7 justify-center align-middle items-center flex flex-col pb-4 bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300 text-white'>
          project description
        </div>
        
        {/* Right Box */}
        <div className='col-span-4 justify-center align-middle items-center flex flex-col pb-4 bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300 text-white'>
          <div className='text-lg mt-2'>Responsible for</div>
          <div className='text-[68px] animate-text bg-gradient-to-r from-emerald-500 to-pink-400 bg-clip-text text-transparent font-semibold'>{'<'} $100m</div>
          <div className='text-lg '>of labor management & analysis</div>
        </div>
      </div>

      {/* Third Row */}
      <div className='w-[100%] h-[30%] mb-6 grid grid-cols-11 gap-6'>
        {/* Tech Stack Box*/}
        <div className='col-span-3 pb-4 bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300'> 
          <div className='m-3 text-2xl text-white text-center'>
            {'</>'} Tech Stack
          </div>
          <div className="w-full grid grid-cols-2 gap-3 text-center text-white font-medium sm:text-sm text-xs">
            <SkillBox imageImport={javascript} skill="Javascript"/>
            <SkillBox imageImport={html} skill="HTML"/>
            <SkillBox imageImport={css} skill="CSS"/>
            <SkillBox imageImport={python} skill="Python"/>
            <SkillBox imageImport={sql} skill="SQL"/>
            <SkillBox imageImport={BigQuery} skill="BigQuery"/>         
          </div>
        </div>
        {/* Contributions Box*/}
        
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
      </div>
      
    </div>
  )
}

export default T8nBento;



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

const ViewSiteButton = () => {
  return (
    <button
      className={`
        relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-2 
      border-white px-4 py-1.5 font-medium justify-center
      text-neutral-100 transition-all duration-300
         shadow-[0_0px_12px_-1px_rgba(0,0,0,0.1)]  hover:shadow-emerald-400
          
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
      View Site<HiArrowCircleRight className="text-xl"/>
    </button>
  );
};

const CloseProjectButton = ({onClick}) => {
  return (
    <button
      onClick={onClick}
      className={`
          relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-2 
          border-white px-4 py-1.5 font-medium justify-center
         text-neutral-100 transition-all duration-300
         hover:shadow-[0_0px_12px_-1px_rgba(0,0,0,0.1)] hover:shadow-pink-300
          
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
      Close <HiOutlineX className="text-xl"/>
    </button>
  );
};
