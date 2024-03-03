import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, useIsPresent } from 'framer-motion';
import { FloatingNavBar } from "../components/NavigationBar";
import { ProjectCard } from "../components/ProjectCard"
import AboutBento from "../bentoPages/AboutBento";
import GrowmentumBento from "../bentoPages/GrowmentumBento";
import T8nBento from "../bentoPages/T8nBento";
import MoodrBento from "../bentoPages/MoodrBento";
import GigUpBento from "../bentoPages/GigUpBento";
import FingyBento from "../bentoPages/Fingy3DBento";
import SNCoriBento from "../bentoPages/SNCoriBento";

// project card bg images 
import GrowmentumBG from "../assets/projects/GrowmentumBG.png"
import t8nBG from "../assets/projects/t8nBG.png"
import MoodrBG from "../assets/projects/MoodrBG.png"
import GigUpCard from "../assets/projects/GigUpCard.png"
import FingyCard from "../assets/projects/FingyCard.png"
import coriTest from "../assets/projects/coriTest.png"


const Work = () => {

  const [screenWidth, setScreenSize] = useState(window.innerWidth)

  const updateScreenSize = () => {
    setScreenSize(window.innerWidth)
  }

  const mobileThreshold = 768;
  const isMobile = screenWidth < mobileThreshold

  const isPresent = useIsPresent();

  const [selectedProject, setSelectedProject] = useState(0);
  const [isProjectSelected, setIsProjectSelected] = useState(false);

  const projectClicked = (id) => {
    console.log(`clicked project:${id}`)
    setSelectedProject(id)
    setIsProjectSelected(true)
  }

  const onProjectClose = () => {
    setSelectedProject(0)
    setIsProjectSelected(false)
  }

  const renderProjectComponent = () => {
    switch(selectedProject){
      case 0:
        return <AboutBento key="about"/>;
      case 1: 
        return <GrowmentumBento key="growmentum" onClose={onProjectClose}/>
      case 2:
        return <T8nBento key="t8n" onClose={onProjectClose}/>
      case 3: 
        return <MoodrBento key="moodr" onClose={onProjectClose}/>
      case 4:
        return <GigUpBento key="gigup" onClose={onProjectClose}/>
      case 5:
        return <FingyBento key="fingy" onClose={onProjectClose}/>
      case 6:
        return <SNCoriBento key="sncori" onClose={onProjectClose}/>
      default:
        return null
      
    }
  }

  const CurrentBento = () => {
    return (
      <div className="flex w-[50%]" id="ProjectContainer">
        <AnimatePresence mode="wait">
          {renderProjectComponent()}
        </AnimatePresence>
      </div>
    );
  };

  const MobileView = () => {
    return (
      <div className="w-full h-fit">
        {isProjectSelected ? (
          <CurrentBento/>
        ) : (
          <ProjectSectionMobile/>
        )}
      </div>
    );
  }

  const ProjectSection = () => {
    return (
      <div className="md:w-[600px] w-full grid grid-cols-2 md:gap-x-16 md:gap-y-0 gap-y-3 md:ml-12 ml-2 pt-0 md:pt-[.7rem] ">
        <ProjectCard onClick={() => projectClicked(1)} title="Growmentum" bgImage={GrowmentumBG}/>
        <ProjectCard onClick={() => projectClicked(2)} title="The Eighth Notch" bgImage={t8nBG}/>
        <ProjectCard onClick={() => projectClicked(3)} title="Moodr" bgImage={MoodrBG}/>
        <ProjectCard onClick={() => projectClicked(6)} title="S+N CORI" bgImage={coriTest}/>
        <ProjectCard onClick={() => projectClicked(5)} title="Fingy3D" bgImage={FingyCard}/>
        <ProjectCard onClick={() => projectClicked(4)} title="GigUp" bgImage={GigUpCard}/>
      </div>
    );
  }

  const ProjectSectionMobile = () => {
    return (
      <AnimatePresence mode="wait">
        <div className="w-full max-h-screen grid grid-cols-2 gap-y-8 ml-2">
          {/* row 1 */}
          <LeftFade delay={1} duration={1.8}>
            <ProjectCard onClick={() => projectClicked(1)} title="Growmentum" bgImage={GrowmentumBG}/>
          </LeftFade>
          <RightFade delay={1} duration={1.8}>
            <ProjectCard onClick={() => projectClicked(2)} title="The Eighth Notch" bgImage={t8nBG}/>
          </RightFade>

          {/* row 2 */}
          <LeftFade delay={1.3} duration={1.8}>
            <ProjectCard onClick={() => projectClicked(3)} title="Moodr" bgImage={MoodrBG}/>
          </LeftFade>
          <RightFade delay={1.3} duration={1.8}>
            <ProjectCard onClick={() => projectClicked(6)} title="S+N CORI" bgImage={coriTest}/>
          </RightFade>

          {/* row 3 */}
          <LeftFade delay={1.6} duration={1.8}>
            <ProjectCard onClick={() => projectClicked(5)} title="Fingy3D" bgImage={FingyCard}/>
          </LeftFade>
          <RightFade delay={1.6} duration={1.8}>
            <ProjectCard onClick={() => projectClicked(4)} title="GigUp" bgImage={GigUpCard}/>
          </RightFade>
        </div>
      </AnimatePresence>
    )
  }

  useEffect(() => {
    // Event listener for screen size changes
    window.addEventListener('resize', updateScreenSize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', updateScreenSize);
    };
  }, []);
  
  return (
    <div className="h-full w-full bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 overflow-hidden" >

      <FloatingNavBar selectedTabId={1}/>

      {!isMobile ? (
        <div className="md:h-[100vh] h-fit flex md:flex-row flex-col bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 md:pt-[5.5rem] pt-10">
          {/* Project card section */}
          <ProjectSection/>

          {/* Divider section */}
          <div className="md:flex hidden w-[7%] justify-center ">
            <div className="w-[4px] h-[98%] bg-white"></div>
          </div>

          {/* Current bento section */}
          <CurrentBento/>
        </div>
      ) : (
        <div className="h-fit flex flex-col bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 pt-24">
          <MobileView/>
        </div>
      )}

      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 left-0 right-0 bottom-0 bg-[#0C0C0D] z-20"
      />

    </div>
  );
};

export default Work;

const RightFade = (props) => {        
  return (
    <motion.div
      className=''
      style={{ willChange: 'transform' }}
      initial={{opacity: 0, x: "30%"}}
      exit={{opacity: 0, x: "30%", transition:{duration: props.duration, delay: props.delay}}}
      animate={{opacity: 1, x: 0, transition:{duration: props.duration, delay: props.delay}}}
    >
      {props.children}
    </motion.div>
  );
}
const LeftFade = (props) => {        
  return (
    <motion.div
      className=''
      style={{ willChange: 'transform' }}
      initial={{opacity: 0, x: "-30%"}}
      exit={{opacity: 0, x: "30%", transition:{duration: props.duration, delay: props.delay}}}
      animate={{opacity: 1, x: 0, transition:{duration: props.duration, delay: props.delay}}}
    >
      {props.children}
    </motion.div>
  );
}