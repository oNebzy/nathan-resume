import React, { useState } from "react";
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

  const isPresent = useIsPresent();

  const [selectedProject, setSelectedProject] = useState(0);

  const projectClicked = (id) => {
    console.log(`clicked project:${id}`)
    setSelectedProject(id)
  }

  const onProjectClose = () => {
    setSelectedProject(0)
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

  

  return (
    <div className="h=[100vh] w-full bg-[#d3ece2] overflow-hidden scrollbar-hide">

      <FloatingNavBar selectedTabId={1}/>

      <div className="h-[100vh] flex flex-row bg-gradient-to-b from-neutral-800 to-neutral-600 pt-[5.5rem]">
        <div className="w-[600px] grid grid-cols-2 gap-x-16 ml-12 pt-[.7rem]">
          
          <ProjectCard onClick={() => projectClicked(1)} title="Growmentum" bgImage={GrowmentumBG}/>
          <ProjectCard onClick={() => projectClicked(2)} title="The Eighth Notch" bgImage={t8nBG}/>
          <ProjectCard onClick={() => projectClicked(3)} title="Moodr" bgImage={MoodrBG}/>
          <ProjectCard onClick={() => projectClicked(6)} title="S+N CORI" bgImage={coriTest}/>
          <ProjectCard onClick={() => projectClicked(5)} title="Fingy3D" bgImage={FingyCard}/>
          <ProjectCard onClick={() => projectClicked(4)} title="GigUp" bgImage={GigUpCard}/>
          
          

        </div>
        <div className="w-[7%] flex justify-center">
          <div className="w-[4px] h-[98%] bg-white"></div>
        </div>
        <div className="w-[50%]" id="ProjectContainer">
          <AnimatePresence mode="wait">
            {renderProjectComponent()}
          </AnimatePresence>
          
        </div>
      </div>

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

export default Work
