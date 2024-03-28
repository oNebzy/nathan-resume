import React from 'react';
import { FloatingNavBar } from '../components/NavigationBar';
import { motion, useIsPresent } from 'framer-motion';
import LogoButton from '../components/buttons/LogoButton';
import javascript from "../assets/logos/javascript.png";

import { SwipeCarousel } from '../components/PersonalCarousel';
import SpinningBoxText from '../components/3dCard';

function Personal() {

  const isPresent = useIsPresent();

  return (
    <div name="Personal" className="w-full md:h-screen h-fit bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800">
      
      <FloatingNavBar selectedTabId={4}/>

      {/*Page container */}
      <div className="md:max-w-[75%] md:mx-auto p-5 flex flex-col w-full h-full md:justify-center">
        <SwipeCarousel/>
        <SpinningBoxText/>
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