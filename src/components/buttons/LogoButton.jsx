import React from 'react'

const LogoButton = ({navLink, imgRef}) => {

  return (
    <a href={navLink} target="_blank" rel="noreferrer">
      <button    
        className={`
          relative w-full z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-2 
        border-white md:px-4 px-1 md:py-1.5 py-1 md:font-medium font-normal md:text-base text-sm justify-center
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
        <img src={imgRef} alt={""} className="max-h-10 md:max-w-10 max-w-8"></img>
      </button>
    </a>
    
  );
}

export default LogoButton