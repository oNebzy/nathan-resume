import React from 'react'
import {HiArrowCircleRight} from 'react-icons/hi'

const ViewSiteButton = ({navLink}) => {

  return (
    <a href={navLink} target="_blank" rel="noreferrer">
      <button    
        className={`
          relative w-full z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-2 
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
          active:scale-100
        `}
      >
        View Site<HiArrowCircleRight className="text-xl"/>
      </button>
    </a>
    
  );
}

export default ViewSiteButton