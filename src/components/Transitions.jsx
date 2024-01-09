import React from 'react';
import { motion } from 'framer-motion';

export const TopLeftFade = ({children, className, initial = "initial", animate = "animate", exit = "exit"}) => {
  const topLeft_variants = {
    initial: {opacity: 0, y: "-50%"},
    animate: {opacity: 1, y: 0, transition:{duration: 2}},
    exit: {opacity: 0, y: "-50%", transition:{duration: 1.3, delay: .5}}
  }
  return(
    <motion.div
      className={className}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={topLeft_variants}
    >
      {children}
    </motion.div>
  )
}



