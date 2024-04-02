import React from 'react';
import { FloatingNavBar } from '../components/NavigationBar';
import { motion, useIsPresent } from 'framer-motion';
import LogoButton from '../components/buttons/LogoButton';
import javascript from "../assets/logos/javascript.png";

import { SwipeCarousel } from '../components/PersonalCarousel';
//import SpinningBoxText from '../components/3dCard';
import { PersonalProjectCard } from '../components/PersonalProjectCard';

function Personal() {

  const isPresent = useIsPresent();

  const projectList = [
    <PersonalProjectCard 
      title={'Portfolio Website'} 
      stack={'React & TailwindCSS'} 
      about={'My personal portfolio website. This site was designed and developed entirely by me in order to demonstrate and display my development skills'}
    />,
    <PersonalProjectCard 
      title={'Scratch Golf'} 
      stack={'React, React Native, TailwindCSS, PostgreSQL(Supabase)'} 
      about={'A mobile and web golf platform designed to help golfers improve their game. Featuring robust stat tracking for both rounds and practice sessions, this platform aims to give golfers an indepth look into where they can improve.'}
      />,
    <PersonalProjectCard 
      title={'Sample Site 1'} 
      stack={'Next.js & Sass'} 
      about={'A sample landing page and website to demonstrate my front end skills'}
      />,
    <PersonalProjectCard 
      title={'Sample Site 2'} 
      stack={'HTML, CSS, Javascript'} 
      about={'A sample landing page and website to demonstrate my front end skills'}
    />,
  ]

  return (
    <div name="Personal" className="w-full md:h-screen h-fit bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800">
      
      <FloatingNavBar selectedTabId={4}/>

      {/*Page container */}
      <div className="md:max-w-[75%] md:mx-auto p-5 flex flex-col w-full h-full md:justify-center">
        <SwipeCarousel projectList={projectList}/>
        <LogoButton navLink={'https://github.com/'} imgRef={javascript}/>
        <LogoButton navLink={'https://linkedin.com/'} imgRef={javascript}/>
      </div>

      {/* Handle screen transition */}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 left-0 right-0 bottom-0 bg-[#0C0C0D] z-20"
      />
    </div>
  )
}

export default Personal