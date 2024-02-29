import React from 'react'
import Spline from '@splinetool/react-spline';
import Fade from "react-reveal/Fade";
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import {HiArrowNarrowRight} from 'react-icons/hi'
import { motion } from 'framer-motion';

const LandingPage = () => {

  //const isPresent = useIsPresent();

  return (
      <div className="absolute inset-0 z-0 bg-[#0C0C0D]">
        
        <Spline className='absolute' scene="https://prod.spline.design/62i4pm30Ahcym-zB/scene.splinecode"/>
        
        <div className='w-fit px-8 flex flex-col h-fit relative left-44 top-52'>
          <Fade top delay={1200} duration={2000}>
            <h1 className='text-[#b5ffdc] text-[42px] leading-9 md:leading-[80px] font-medium md:text-5xl mb-4'>Nathan Burd</h1>
          </Fade>

          <Fade top delay={1400} duration={2000}>
            <h2 className='text-[#ffffff] text-3xl font-medium md:text-[84px] mb-2'>
              <Typed
                strings={['Front End Developer^1000','Web Exerience Creator^1000', 'Mobile Developer^1000']}
                typeSpeed={50}
                backSpeed={60}
                loop
                delay={300}
              >
              </Typed>
            </h2>
          </Fade>

          <Fade delay={1800} duration={2000}>
            <div className='mt-8'>
              <Link to="/MyWork"><ExploreButton/></Link>
            </div>
            
          </Fade>

      </div>

      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: 1 }}
        className="fixed top-0 left-0 right-0 bottom-0 bg-[#0C0C0D] z-20"
      />

    </div>
  )
}

const ExploreButton = () => {
  return (
    <button
      className={`
          relative z-0 flex items-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-[3px] 
          border-neutral-800 px-4 py-1.5 font-medium
         text-neutral-100 transition-all duration-300
         shadow-[0_0px_15px_-1px_rgba(0,0,0,0.1)] shadow-emerald-400 hover:shadow-pink-300
          
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
      Projects & Experience <HiArrowNarrowRight className="text-xl"/>
    </button>
  );
};


export default LandingPage