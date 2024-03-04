import React, {useState, useEffect} from 'react';
import { motion } from 'framer-motion';
import ViewSiteButton from '../components/buttons/ViewSiteButton';
import CloseProjectButton from '../components/buttons/CloseProjectButton';
import { SkillBox } from '../components/SkillBox';

//Skills Icon Imports
import react from "../assets/logos/react.png";
import css from "../assets/logos/css.png";
import Sass from "../assets/logos/Sass.png";

function SNCoriBento({onClose}) {

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
      <div className='w-[100%] h-[15%] mb-6 grid grid-cols-10 gap-6'>
        {/* Title Box */}
        <motion.div
          className='col-span-7'
          initial={{opacity: 0, y: "-50%"}}
          animate={{opacity: 1, y: 0, transition:{duration: 2}}}
          exit={{opacity: 0, y: "-50%", transition:{duration: 1.3, delay: .5}}}
        >
          <div className=' col-span-7 flex flex-col bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300'>
            <div className='text-5xl ml-4 mt-4 bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent'>S+N Cori</div>
            <div className='text-white text-xl ml-5 mt-1 mb-4'>Front-End Development</div>
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
            <ViewSiteButton navLink={'https://www.smith-nephew.com/en-us/health-care-professionals/products/orthopaedics/cori#overview'}/>
            <CloseProjectButton onClick={() => {onClose()}}/>
          </div> 
        </motion.div>
      </div>

      {/* Second Row */}
      <div className='w-[100%] h-[28%] mb-8 grid grid-cols-11 gap-6'>
        {/* Left Box */}
        <motion.div
          className='col-span-7'
          initial={{opacity: 0, x: "50%"}}
          animate={{opacity: 1, x: 0, transition:{duration: 2}}}
          exit={{opacity: 0, x: "35%", transition:{duration: 1.3, delay: .4}}}
        >
          <div className='h-[100%] col-span-7 align-middle items-center flex flex-col pb-4 bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300 text-white'>
            <div className='w-fit mt-5 mb-2 text-xl font-semibold bg-gradient-to-r from-emerald-600 to-emerald-300 bg-clip-text text-transparent'>
              Project Description
            </div>
            <div className='text-lg ml-6 mr-6'>
              A virtual surgery planner that provides physicians with an interactive 3D mesh of the knee and implant allowing surgeons to create a surgical plan in a training 
              environment. Surgeons can select a patient-specific deformity and practice gap balancing as well as select and change implants and poly thickness.
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
            <div className='text-lg mt-6 text-center'>Improved surgeon user experience satisfaction by</div>
            <div className='text-[68px] animate-text bg-gradient-to-r from-emerald-500 to-pink-400 bg-clip-text text-transparent font-semibold'>100%</div>
            {/* <div className='text-lg '>of </div> */}
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
              <SkillBox imageImport={Sass} skill="Sass"/>
              <SkillBox imageImport={css} skill="CSS"/>     
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
          <div className='col-span-8 h-[100%] pr-2 mb-2 flex flex-col bg-neutral-800 shadow-md shadow-[#7f8285] rounded-xl border-2 border-[#ffffff] transition hover:shadow-lg hover:shadow-pink-300 ease-in-out duration-300'>  
            <div className='w-fit m-3 text-2xl font-semibold bg-gradient-to-r from-pink-500 to-pink-300 bg-clip-text text-transparent'>
              What impact did I have?
            </div>
            <div className='text-white text-lg mb-[10px] ml-3'>
              Led a comprehensive <span className='text-lg font-medium text-emerald-400'>overhaul of the CSS styling</span>, ensuring responsiveness and resolving multiple visual bugs 
            </div>
            <div className='text-white text-lg mb-[10px] ml-3'>
              Enhanced performance across various web browsers and devices by <span className='text-lg font-medium text-emerald-400'>optimizing front-end code and styling</span>
            </div>
            <div className='text-white text-lg mb-[10px] ml-3'>
              <span className='text-lg font-medium text-emerald-400'>Leveraged media queries</span> to ensure a consistent and user-friendly experience across both tablet and web based views
            </div>
            <div className='text-white text-lg mb-[10px] ml-3'>
              Ensured the application's UI & UX aligned seamlessly with <span className='text-lg font-medium text-emerald-400'>medical guidelines and expectations</span> given by the S+N medical team
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
              <div className='text-2xl ml-2 mt-1 bg-gradient-to-r from-emerald-400 to-white bg-clip-text text-transparent'>S+N Cori</div>
              <div className='text-white text-base ml-2 mt-1 mb-2'>Front-End Development</div>
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
              <ViewSiteButton navLink={'https://www.smith-nephew.com/en-us/health-care-professionals/products/orthopaedics/cori#overview'}/>
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
                A virtual surgery planner that provides physicians with an interactive 3D mesh of the knee and implant allowing surgeons to create a surgical plan in a training environment. Surgeons can select a patient-specific deformity and practice gap balancing as well as select and change implants and poly thickness.  
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
              <div className="w-full grid grid-cols-3 text-center text-white font-medium text-xs">
                <SkillBox imageImport={react} skill="React"/>
                <SkillBox imageImport={Sass} skill="Sass"/>
                <SkillBox imageImport={css} skill="CSS"/>
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
              <div className='text-base mt-2 mx-8 text-center'>Improved surgeon user experience satisfaction by</div>
              <div className='text-6xl my-2 animate-text bg-gradient-to-r from-emerald-500 to-pink-400 bg-clip-text text-transparent font-semibold'>100%</div>
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
                Led a comprehensive <span className='text-lg text-emerald-400'>overhaul of the CSS styling</span>, ensuring responsiveness and resolving multiple visual bugs
              </ImpactText>
              <ImpactText>
                Enhanced performance across various web browsers and devices by <span className='text-lg text-emerald-400'>optimizing front-end code and styling</span>
              </ImpactText>
              <ImpactText>
                <span className='text-lg text-emerald-400'>Leveraged media queries</span> to ensure a consistent and user-friendly experience across both tablet and web based views
              </ImpactText>  
              <ImpactText>
                Ensured the application's UI & UX aligned seamlessly with<span className='text-lg text-emerald-400'> medical guidelines and expectations</span> given by the S+N medical team
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

export default SNCoriBento;

const ImpactText = (props) => {
  return (
    <div className='text-white text-base mb-2 ml-2'>
      {props.children}
    </div>
  )
}