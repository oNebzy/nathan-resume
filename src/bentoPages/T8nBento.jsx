import React, {useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ViewSiteButton from '../components/buttons/ViewSiteButton';
import CloseProjectButton from '../components/buttons/CloseProjectButton';
import { SkillBox } from '../components/SkillBox';

//Skills Icon Imports
import javascript from "../assets/logos/javascript.png";
import css from "../assets/logos/css.png";
import html from "../assets/logos/html.png";
import python from "../assets/logos/python.png";
import sql from "../assets/logos/sql.png"
import BigQuery from "../assets/logos/BigQuery.png"

function T8nBento({onClose}) {

  const [screenWidth, setScreenSize] = useState(window.innerWidth)

  const updateScreenSize = () => {
    setScreenSize(window.innerWidth)
  }

  const mobileThreshold = 768;
  const isMobile = screenWidth < mobileThreshold

  useEffect(() => {
    // Event listener for screen size changes
    window.addEventListener('resize', updateScreenSize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);

  const WebView = () => {        
    return (
      <div className="w-full h-full pt-10">
      {/* Top Row */}
      <div className='w-[100%] h-[16%] mb-6 grid grid-cols-10 gap-6'>
        {/* Title Box */}
        <motion.div
          className='col-span-7'
          initial={{opacity: 0, y: "-50%"}}
          animate={{opacity: 1, y: 0, transition:{duration: 2}}}
          exit={{opacity: 0, y: "-50%", transition:{duration: 1.3, delay: .5}}}
        >
          <div className=' col-span-7 flex flex-col bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300'>
            <div className='text-5xl leading-tight ml-4 mt-4 bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent'>The Eighth Notch</div>
            <div className='text-white text-xl ml-5 mb-4 mt-1'>Full Stack Development</div>
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
            <ViewSiteButton navLink={'https://t8notch.com/'}/>
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
              A first-of-its-kind technology platform enabling shippers and carriers to eliminate unnecessary delivery truck stops by sharing data further upstream, thus better coordinating and ultimately synchronizing deliveries.
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
            <div className='text-[68px] animate-text bg-gradient-to-r from-emerald-500 to-pink-400 bg-clip-text text-transparent font-semibold'>16,000 <span className='text-[20px]'>tons</span></div>
            <div className='text-lg text-center'>of carbon emissions never created</div>
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
          <div className='h-[100%] col-span-3 pb-4 bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300'> 
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
        </motion.div>
        
        {/* Contributions Box*/}
        <motion.div
          className='col-span-8'
          initial={{opacity: 0, y: "50%"}}
          animate={{opacity: 1, y: 0, transition:{duration: 2, delay: .5}}}
          exit={{opacity: 0, y: "50%", transition:{duration: 1}}}
        >
          <div className='col-span-8 h-[100%] pr-2 flex flex-col bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300 mb-6'>  
            <div className='w-fit m-3 text-2xl font-semibold bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent'>
              What impact did I have?
            </div>
            <div className='text-white text-lg mb-[10px] ml-3'>
              Developed and maintained <span className='text-lg font-medium text-emerald-400'>multiple interactive dashboards</span> offering insight into system performance and retailer data
            </div>
            <div className='text-white text-lg mb-[10px] ml-3'>
              Developed <span className='text-lg font-medium text-emerald-400'>new front-end features</span> into web-based environments utilizing best UI/UX practices and modern trends
            </div>
            <div className='text-white text-lg mb-[10px] ml-3'>
              Elevated <span className='text-lg font-medium text-emerald-400'>user experience</span> and <span className='text-lg font-medium text-emerald-400'>usability</span> of the retailer portal and platform website
            </div>
            <div className='text-white text-lg mb-[10px] ml-3'>
              Improved API response time by <span className='text-lg font-medium text-emerald-400'> ~150ms</span> by implementing caching 
            </div>
            
            <div className='text-white text-lg mb-[10px] ml-3'>
            <span className='text-lg font-medium text-emerald-400'>Cleaned</span> and <span className='text-lg font-medium text-emerald-400'>parsed client{`’`}s big data</span> for use within the API
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
    );
  }

  const MobileView = () => {        
    return (
      <div className="w-full h-fit">
        
        {/* Top Row */}
        <div className='w-[100%] h-fit mb-3 grid grid-cols-10 gap-3 px-3'>
          {/* Title Box */}
          <motion.div
            style={{ willChange: 'transform' }}
            className='col-span-7'
            initial={{opacity: 0, y: "-50%"}}
            animate={{opacity: 1, y: 0, transition:{duration: 2}}}
            exit={{opacity: 0, y: "-50%", transition:{duration: 1.3, delay: .5}}}
          >
            <div className=' col-span-7 flex flex-col bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300'>
              <div className='text-2xl ml-2 mt-1 bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent'>The Eighth Notch</div>
              <div className='text-white text-base ml-2 mt-1 mb-2'>Full Stack Development</div>
            </div>
          </motion.div>

          {/* Button Box */}
          <motion.div
            style={{ willChange: 'transform' }}
            className='col-span-3'
            initial={{opacity: 0, y: "-50%"}}
            animate={{opacity: 1, y: 0, transition:{duration: 2, delay: .2}}}
            exit={{opacity: 0, y: "-50%", transition:{duration: 1}}}
          >
            <div className='h-[100%] col-span-3 flex flex-col justify-center space-y-2'>
              <ViewSiteButton navLink={'https://t8notch.com/'}/>
              <CloseProjectButton onClick={() => {onClose()}}/>
            </div> 
          </motion.div>
        </div>

        {/* Mobile Second Row */}
        <div className='w-full h-fit mb-3 grid grid-cols-10 gap-3 px-3'>
          {/* Left Box */}
          <motion.div
            style={{ willChange: 'transform' }}
            className='col-span-10'
            initial={{opacity: 0, x: "50%"}}
            animate={{opacity: 1, x: 0, transition:{duration: 2, delay: .5}}}
            exit={{opacity: 0, x: "50%", transition:{duration: 1, delay: .2}}}
          >
            <div className='h-fit col-span-10 align-middle items-center flex flex-col pb-2 bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300 text-white'>
              <div className='w-fit mt-2 text-xl font-semibold bg-gradient-to-r from-emerald-600 to-emerald-300 bg-clip-text text-transparent'>
                Project Description
              </div>
              <div className='text-base mt-1 mx-2 text-center'>
                A first-of-its-kind technology platform enabling shippers and carriers to eliminate unnecessary delivery truck stops by sharing data further upstream, thus better coordinating and ultimately synchronizing deliveries.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mobile third,fourth, fifth Row */}
        <div className='w-full h-fit mb-3 grid grid-cols-10 gap-3 px-3 pb-16'>
          {/* Tech Stack Box*/}
          <motion.div
            style={{ willChange: 'transform' }}
            className='col-span-10'
            initial={{opacity: 0, x: "50%"}}
            animate={{opacity: 1, x: 0, transition:{duration: 2, delay: 1}}}
            exit={{opacity: 0, x: "50%", transition:{duration: 1, delay: .2}}}
          >
            <div className='h-fit col-span-10 pb-4 bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300'> 
              <div className='ml-1 mt-1 text-lg text-white text-center'>
                {'</>'} Tech Stack
              </div>
              <div className="w-full grid grid-cols-6 text-center text-white font-medium text-xs">
                <SkillBox imageImport={javascript} skill="JS"/>
                <SkillBox imageImport={html} skill="HTML"/>
                <SkillBox imageImport={css} skill="CSS"/>
                <SkillBox imageImport={python} skill="Python"/>
                <SkillBox imageImport={sql} skill="SQL"/> 
                <SkillBox imageImport={BigQuery} skill="BigQuery"/> 
              </div>
            </div>
          </motion.div>

          {/* Numbered Box */}
          <motion.div
            style={{ willChange: 'transform' }}
            className='col-span-10'
            initial={{opacity: 0, x: "50%"}}
            animate={{opacity: 1, x: 0, transition:{duration: 2, delay: 1.5}}}
            exit={{opacity: 0, x: "50%", transition:{duration: 1, delay: .2}}}
          >
            <div className='h-fit justify-center align-middle items-center flex flex-col pb-2 bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300 text-white'>
              <div className='text-base mt-2'>Over</div>
              <div className='text-6xl my-2 animate-text bg-gradient-to-r from-emerald-500 to-pink-400 bg-clip-text text-transparent font-semibold'>16,000 <span className='text-[20px]'>tons</span></div>
              <div className='text-base text-center'>of carbon emissions never created</div>
            </div>
          </motion.div>

          {/* Contributions Box*/}
          <motion.div
            style={{ willChange: 'transform' }}
            className='col-span-10'
            initial={{opacity: 0, x: "50%"}}
            animate={{opacity: 1, x: 0, transition:{duration: 2, delay: 2}}}
            exit={{opacity: 0, x: "50%", transition:{duration: 1, delay: .2}}}
          >
            <div className='h-fit pr-2 pb-2 flex flex-col bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300 '>  
              <div className='w-fit m-2 text-lg font-medium bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent'>
                What impact did I have?
              </div>
              <ImpactText>
                Developed and maintained <span className='text-lg text-emerald-400'>multiple interactive dashboards</span> offering insight into system performance and retailer data
              </ImpactText>
              <ImpactText>
                Developed <span className='text-lg text-emerald-400'>new front-end features</span> into web-based environments utilizing best UI/UX practices and modern trends
              </ImpactText>
              <ImpactText>
                Elevated <span className='text-lg font-medium text-emerald-400'>user experience</span> and <span className='text-lg font-medium text-emerald-400'>usability</span> of the retailer portal and platform website
              </ImpactText>
              <ImpactText>
                Improved API response time by <span className='text-lg font-medium text-emerald-400'> ~150ms</span> by implementing caching 
              </ImpactText>  
              <ImpactText>
                <span className='text-lg font-medium text-emerald-400'>Cleaned</span> and <span className='text-lg font-medium text-emerald-400'>parsed client{`’`}s big data</span> for use within the API
              </ImpactText>
            </div>
          </motion.div>

        </div>
      </div>
    );
  }
  
  return (
    !isMobile ? (
      <WebView/>
    ) : (
      <MobileView/>
    )
  )
}

const ImpactText = (props) => {
  return (
    <div className='text-white text-base mb-2 ml-2'>
      {props.children}
    </div>
  )
}

export default T8nBento;

