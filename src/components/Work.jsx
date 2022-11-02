import React from "react";
//import test from "../assets/projects/test.png"
import GigUpCard from "../assets/projects/GigUpCard.png"
import FingyCard from "../assets/projects/FingyCard.png"
import KYKSCard from "../assets/projects/KYKSCard.png"

import resume from "../assets/NathanBurd-Resume.pdf"
import {TbFileExport} from 'react-icons/tb'


const Work = () => {
  return (
    <div name="Work" className="w-full bg-[#d3ece2]">

      {/*container */}
      <div className="max-w-[1000px] mx-auto p-8 flex flex-col w-full h-full justify-center">

        {/* header */}
        <div className="pb-8">
          <p className="font-Kaushanscript text-[#7b857f]">{"<h1>"}</p>
          <p className="text-[#358f60] font-medium md:text-6xl text-4xl">
            My Work
          </p>
          <p className="font-Kaushanscript text-[#7b857f]">{"</h1>"}</p>
        </div>
        
        {/* project container */}
        <div className="grid grid-cols-1 gap-4">
          
          {/* card 1 */}

          {/* header */}
          <div className="grid sm:grid-cols-1 grid-cols-2">
            <p className="text-[#282c2f] italic font-bold md:text-4xl text-2xl pt-2 sm:pb-2">
              GigUp
            </p>
            <p className="text-[#515854] font-normal text-md sm:text-xl text-right sm:text-left">Mobile & Web Development</p>
          </div>
  
          {/* content */}
          <div style={{backgroundImage: `url(${GigUpCard})`}} className=" sm:h-[440px] h-[160px] shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              {/* buttons */}
              <div className="text-center sm:space-x-8">
                <a href="https://www.gigup.me/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-[#282c2f] hover:text-[#98d1b4] text-white font-medium sm:text-lg text-sm">
                    Website
                  </button>
                </a>
                <a href="https://apps.apple.com/us/app/gigup/id1603502689" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-[#282c2f] hover:text-[#98d1b4] text-white font-medium sm:text-lg text-sm">
                    App Store
                  </button>
                </a>
              </div>
            </div>
            
          </div>

          {/* spacer */}
          <div className="my-4"></div>

          {/* card 2 */}

          {/* header */}
          <div className="grid sm:grid-cols-1 grid-cols-2">
            <p className="text-[#282c2f] italic font-bold md:text-4xl text-2xl pt-2 sm:pb-2">
              KYKS Parent
            </p>
            <p className="text-[#515854] font-normal text-md sm:text-xl text-right sm:text-left pt-3 sm:pt-0">Mobile Development</p>
          </div>
  
          {/* content */}
          <div style={{backgroundImage: `url(${KYKSCard})`}} className=" sm:h-[440px] h-[160px] shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="text-center sm:space-x-8">
                <a href="https://kyksfirst.com/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-[#282c2f] hover:text-[#98d1b4] text-white font-medium sm:text-lg text-md">Website</button>
                </a>
                <a href="https://apps.apple.com/ie/app/kyks-parent/id1516542596" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-[#282c2f] hover:text-[#98d1b4] text-white font-medium sm:text-lg text-md">App Store</button>
                </a>
              </div>
            </div>
            
          </div>
          
          {/* spacer */}
          <div className="my-4"></div>

          {/* card 3 */}

          {/* header */}
          <div className="grid sm:grid-cols-1 grid-cols-2">
            <p className="text-[#282c2f] italic font-bold md:text-4xl text-2xl pt-2 sm:pb-2">
              Fingy3D
            </p>
            <p className="text-[#515854] font-normal text-md sm:text-xl text-right sm:text-left">Mobile & Web Development</p>
          </div>
  
          {/* content */}
          <div style={{backgroundImage: `url(${FingyCard})`}} className=" sm:h-[440px] h-[160px] shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="text-center sm:space-x-8">
                <a href="https://fingy3d.com/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-[#282c2f] hover:text-[#98d1b4] text-white font-medium sm:text-lg text-md">Website</button>
                </a>
                <a href="https://app.fingy3d.com/start" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-[#282c2f] hover:text-[#98d1b4] text-white font-medium sm:text-lg text-md">Application</button>
                </a>
              </div>
            </div>
            
          </div>

          {/* spacer */}
          <div className="my-4"></div>

          {/* Resume Container */}
          <div className="grid grid-cols-1">
            <p className="text-[#282c2f] italic font-bold md:text-4xl text-2xl pt-2 sm:pb-2">
              Resume
            </p>
            <p className="text-[#515854] font-normal italic text-md sm:text-lg">To see a complete list of all projects I've worked on, and information about my role in each, please refer to my resume:</p>
            <a href={resume} target="_blank" rel="noreferrer">
              <button 
                className='rounded text-[#282c2f] border-2 border-[#282c2f] px-4 py-2 mt-4 flex items-center hover:bg-[#5B9F83] hover:border-[#515854]'
              >
                My Resume
                <TbFileExport className='ml-2'/>
              </button>
            </a>
          </div>

        {/* end project container */}
        </div> 

      </div>

      {/* sub-header container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col my-[20px] pb-8">
        <p className="font-Kaushanscript text-[#7b857f] text-sm">{"<h2>"}</p>
        <p className="text-[#358f60] font-medium md:text-5xl text-3xl">
          Personal Projects
        </p>
        <p className="font-Kaushanscript text-[#7b857f] text-sm">{"</h2>"}</p>
      </div>

      {/* personal work web*/}
      <div name="personalTiles" className="w-full grid sm:grid-cols-2 grid-cols-1 gap-10 mx-auto max-w-[1000px] px-8">
        {/* project 1 */}
        <div className="flex justify-items-center">
          <div name="Scratch" className="p-4 rounded-xl border-4 border-[#282c2f] transition hover:scale-105 hover:shadow-lg hover:shadow-[#358f60] ease-in-out duration-300">
            <p className="text-[#282c2f] italic font-bold sm:text-3xl text-2xl">Scratch</p>
            <p className="text-[#515854] font-normal sm:text-xl text-lg pb-2" >Mobile Development</p>
            <p className="text-[#fff] font-normal sm:text-base text-sm rounded-lg p-3 bg-[#282c2f]">
              A social recipe and cookbook app turning your kitchen into a Scratch kitchen. 
              Scratch is a platform that empowers users to discover or create fun, tasty new recipes and cookbooks using a modern UI. 
              Your next home cooked meal is just a swipe away with Scratch! 
            </p>
          </div>
        </div>

        {/* project 2 */}
        <div className="flex justify-items-center ">
          <div name="Scratch" className="p-4 rounded-xl border-4 border-[#282c2f] transition hover:scale-105 hover:shadow-lg hover:shadow-[#358f60] ease-in-out duration-300">
          <p className="text-[#282c2f] italic font-bold sm:text-3xl text-2xl">PickUp</p>
            <p className="text-[#515854] font-normal sm:text-xl text-lg pb-2" >Mobile & Web Development</p>
            <p className="text-[#fff] font-normal sm:text-base text-sm rounded-lg p-4 bg-[#282c2f]">
              A web and mobile app designed to give athletes and sports enthusiasts the oppertunity to find pick up games of any sport in their local area.
              I'm also currently developing a leagues/ranking feature and tournament feature to gamify the app before release.
            </p>
          </div>
        </div>

        {/* project 3 */}
        <div className="flex justify-items-center">
          <div name="Scratch" className="p-4 rounded-xl border-4 border-[#282c2f] transition hover:scale-105 hover:shadow-lg hover:shadow-[#358f60] ease-in-out duration-300">
            <p className="text-[#282c2f] italic font-bold sm:text-3xl text-2xl ">ToDo</p>
            <p className="text-[#515854] font-normal sm:text-xl text-lg pb-2" >Mobile Development</p>
            <p className="text-[#fff] font-normal sm:text-base text-sm rounded-lg p-4 bg-[#282c2f]">
              Organization and task management are crucial to keep my productivity high. I kept trying different task management/reminder apps and none of them ever felt right for me.
              This led me to just develope my own personal one, catered to my specific needs that I use daily to keep my productivity at an all time high.
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Work;
