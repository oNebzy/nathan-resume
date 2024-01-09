import React, { useState } from "react";
import { AnimatePresence, motion, useIsPresent } from 'framer-motion';
import { FloatingNavBar } from "../components/NavigationBar";
import { ProjectCard } from "../components/ProjectCard"
import AboutBento from "../bentoPages/AboutBento";
import GrowmentumBento from "../bentoPages/GrowmentumBento";
import T8nBento from "../bentoPages/T8nBento";
import MoodrBento from "../bentoPages/MoodrBento";


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
      default:
        return null
      
    }
  }

  

  return (
    <div className="h=[100vh] w-full bg-[#d3ece2] overflow-hidden scrollbar-hide">

      <FloatingNavBar selectedTabId={1}/>

      <div className="h-[100vh] flex flex-row bg-gradient-to-b from-neutral-800 to-neutral-600 pt-24">
        <div className="w-[600px] grid grid-cols-2 gap-4 ml-6">
          
          <ProjectCard onClick={() => projectClicked(1)} title="Growmentum"/>
          <ProjectCard onClick={() => projectClicked(2)} title="The Eighth Notch"/>
          <ProjectCard onClick={() => projectClicked(3)} title="Moodr"/>
          <ProjectCard onClick={() => projectClicked(4)} title="GigUp"/>
          <ProjectCard onClick={() => projectClicked(5)} title="Fingy3D"/>
          <ProjectCard onClick={() => projectClicked(6)} title="S+N CORI"/>

        </div>
        <div className="w-[8%] flex justify-center">
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
