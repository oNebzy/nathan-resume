import React from "react";
//import test from "../assets/projects/test.png"
import gigupMobile from "../assets/projects/gigupmobile.png"
import FingyCard from "../assets/projects/FingyCard.png"
import KYKSCard from "../assets/projects/KYKSCard.png"

const Work = () => {
  return (
    <div name="Work" className="w-full bg-[#d3ece2]">

      {/*container */}
      <div className="max-w-[1000px] mx-auto p-8 flex flex-col w-full h-full justify-center">

        {/* header */}
        <div className="pb-8">
          <p className="font-Kaushanscript text-[#7b857f]">{"<h1>"}</p>
          <p className="text-[#358f60] italic font-bold md:text-6xl text-4xl">
            My Work
          </p>
          <p className="font-Kaushanscript text-[#7b857f]">{"<h1/>"}</p>
        </div>
        
        {/* project container */}
        <div className="grid grid-cols-1 gap-4">
          
          {/* card 1 */}

          {/* header */}
          <div className="grid sm:grid-cols-1 grid-cols-2">
            <p className="text-[282c2f] italic font-bold md:text-4xl text-2xl pt-2 sm:pb-2">
              GigUp
            </p>
            <p className="text-[#282c2f] font-normal text-md sm:text-xl text-right sm:text-left">Mobile & Web Development</p>
          </div>
  
          {/* content */}
          <div style={{backgroundImage: `url(${gigupMobile})`}} className=" sm:h-[440px] h-[160px] shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-8 text-center">
                <a href="https://www.gigup.me/" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#282c2f] hover:text-[#98d1b4] text-white font-medium sm:text-lg text-md">Website</button>
                </a>
                <a href="https://apps.apple.com/us/app/gigup/id1603502689" target="_blank" rel="noreferrer">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-[#282c2f] hover:text-[#98d1b4] text-white font-medium sm:text-lg text-md">App Store Listing</button>
                </a>
              </div>
            </div>
            
          </div>

          {/* spacer */}
          <div className="my-4"></div>

          {/* card 2 */}

          {/* header */}
          <div className="grid sm:grid-cols-1 grid-cols-2">
            <p className="text-[282c2f] italic font-bold md:text-4xl text-2xl pt-2 sm:pb-2">
              Fingy3D
            </p>
            <p className="text-[#282c2f] font-normal text-md sm:text-xl text-right sm:text-left">Mobile & Web Development</p>
          </div>
  
          {/* content */}
          <div style={{backgroundImage: `url(${FingyCard})`}} className=" sm:h-[440px] h-[160px] shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-8 text-center">
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

          {/* card 3 */}

          {/* header */}
          <div className="grid sm:grid-cols-1 grid-cols-2">
            <p className="text-[282c2f] italic font-bold md:text-4xl text-2xl pt-2 sm:pb-2">
              KYKS Parent
            </p>
            <p className="text-[#282c2f] font-normal text-md sm:text-xl text-right sm:text-left pt-3 sm:pt-0">Mobile Development</p>
          </div>
  
          {/* content */}
          <div style={{backgroundImage: `url(${KYKSCard})`}} className=" sm:h-[440px] h-[160px] shadow-lg shadow-[#040c16] group container rounded-lg flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <div className="pt-8 text-center">
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

          {/* Resume Container */}
          <div className="grid grid-cols-1">
            <p className="text-[282c2f] italic font-bold md:text-4xl text-2xl pt-2 sm:pb-2">
              Resume
            </p>
            <p className="text-[#282c2f] font-normal italic text-md sm:text-xl ">To see all projects ive worked on & more information about my role in each, visit my resume below:</p>
          </div>

        {/* end project container */}
        </div> 

      </div>

      {/* sub-header container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col my-[20px] ">
        <p className="font-Kaushanscript text-[#7b857f] text-sm">{"<h2>"}</p>
        <p className="text-[#358f60] italic font-bold md:text-3xl text-2xl">
          Personal Projects
        </p>
        <p className="font-Kaushanscript text-[#7b857f] text-sm">{"<h2/>"}</p>
      </div>

      {/* personal work */}
      <div name="personalTiles" className="w-full grid grid-cols-2 md:grid-cols-3 sm:justify-items-center text-center">
      <div>
          Scratch
        </div>
        <div>
          PickUp
        </div>
        <div>
          ToDo
        </div>
      </div>

    </div>
  );
};

export default Work;
