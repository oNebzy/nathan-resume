import React from 'react'
import { motion, useIsPresent } from 'framer-motion';
import {FiSend, FiMail, FiPhone} from 'react-icons/fi'
import { FloatingNavBar } from "../components/NavigationBar";

const Contact = () => {

  const isPresent = useIsPresent();

  return (
    <div name="Contact" className="w-full h-screen bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800">

      <FloatingNavBar selectedTabId={3}/>

      {/*Page container */}
      <div className="max-w-[75%] mx-auto p-8 flex flex-col w-full h-full justify-center ">
 
          {/* Header Section */}
          <div className="mt-12">
            <TopFade delay={.3} duration={1.2}>
              <p className="text-white font-normal md:text-8xl text-4xl my-2">Contact Me</p>
            </TopFade>
            <TopFade delay={.6} duration={1.2}>
              <div id="row2" className="grid grid-cols-4 gap-10 ml-44">
                <div className='col-span-1 flex justify-center items-center'>
                  <div id='temp' className="w-full h-[4px] bg-emerald-300"></div>
                </div>
                <div className='col-span-3'>
                    <p className="py-2 font-normal md:text-7xl text-4xl animate-textFast bg-gradient-to-r from-emerald-400 to-pink-300 bg-clip-text text-transparent">Let's create something.</p>
                </div>
                
              </div>
            </TopFade>
          </div>

          {/* Body / Form Section */}
          <div className='grid grid-cols-5'>
            {/* left group*/}
            <div className='col-span-3'>
              <form method="POST" action="https://getform.io/f/e4a5c553-57c4-44a6-8c3f-9d9bddc58109" className='flex flex-col w-full'>
                <TopFade delay={1.2} duration={1.2}>
                  <p className="font-Kaushanscript text-neutral-100">{"<Contact form>"}</p>
                </TopFade>
                <TopFade delay={1.4} duration={1.2}>
                  <input className='w-full bg-neutral-800 p-2 mt-6 text-neutral-100 rounded-lg' type="text" placeholder='Name, Title, or Business' name='name'/>
                </TopFade>
                <TopFade delay={1.6} duration={1.2}>
                  <div className='flex flex-row space-x-4'>
                    <input className='w-full bg-neutral-800 p-2 mt-6 text-neutral-100 rounded-lg' type="text" placeholder='Email' name='email'/>
                    <input className='w-full bg-neutral-800 p-2 mt-6 text-neutral-100 rounded-lg' type="text" placeholder='Phone Number' name='phone'/>
                  </div>
                </TopFade>
                <TopFade delay={1.8} duration={1.2}>
                  <textarea className='w-full bg-neutral-800 p-2 mt-6 text-neutral-100 rounded-lg resize-none' name="msg" rows="10" placeholder='Message'></textarea>  
                </TopFade>
                <TopFade delay={2} duration={1.2}>
                  <SendMsgButton/>
                </TopFade>
                <TopFade delay={1.2} duration={1.2}>
                  <p className="font-Kaushanscript text-neutral-100">{"<Contact form>"}</p>
                </TopFade>
              </form>
            </div>

            {/* right group*/}
            <div className='col-span-2 pt-11 pl-16'>
              <div className='flex flex-col justify-center align-middle'>
                <RightFade delay={1} duration={1.8}>
                  <p className='text-neutral-100 text-xl pt-2 font-medium'>Thanks for visiting my portfolio!</p>
                </RightFade>
                <RightFade delay={1.3} duration={1.8}>
                  <p className='text-neutral-300 text-lg pt-2'>
                    Please complete the form or feel free to contact me directly using the following information. 
                  </p>
                </RightFade>
                <RightFade delay={1.6} duration={1.8}>
                  <p className='pt-6 text-base flex flex-row align-middle items-center space-x-4'>
                    <FiMail className='text-white text-2xl'/><span className='font-semibold underline text-white hover:text-emerald-400 '><a href="mailto: nathanburd.dev@gmail.com">nathanburd.dev@gmail.com</a></span>
                  </p>
                </RightFade>
                <RightFade delay={1.9} duration={1.8}>
                  <p className='pt-6 text-base flex flex-row align-middle items-center space-x-4'>
                    <FiPhone className='text-white text-2xl'/><span className='font-semibold text-white hover:text-pink-300 '>{`(`}304{`)`} 210-5555</span>
                  </p>
                </RightFade>
                <RightFade delay={2.2} duration={1.8}>
                  <p className='text-neutral-300 text-lg pt-6'>
                    Professional references are available upon request to protect their confidentiality and personal privacy
                  </p>
                </RightFade>

              </div>
              
              

            </div>


          </div>
 
          

          


        {/* end container */}
      </div>
    {/* end Contact */}

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

export default Contact

const TopFade = (props) => {        
  return (
    <motion.div
      className=''
      style={{ willChange: 'transform' }}
      initial={{opacity: 0, y: "-50%"}}
      animate={{opacity: 1, y: 0, transition:{duration: props.duration, delay: props.delay}}}
    >
      {props.children}
    </motion.div>
  );
}

const RightFade = (props) => {        
  return (
    <motion.div
      className=''
      style={{ willChange: 'transform' }}
      initial={{opacity: 0, x: "30%"}}
      animate={{opacity: 1, x: 0, transition:{duration: props.duration, delay: props.delay}}}
    >
      {props.children}
    </motion.div>
  );
}

const SendMsgButton = () => {
  return (
    <div className="flex items-center justify-center mt-6">
      <button
        className={`
          group 
          relative w-60 z-0 flex items-center justify-center gap-2 overflow-hidden whitespace-nowrap rounded-lg border-2
          bg-neutral-800 border-white px-4 py-2.5 font-medium
          text-neutral-100 transition-all duration-300
          shadow-[0_0px_15px_-1px_rgba(0,0,0,0.1)] hover:shadow-emerald-300
            
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
        Send Message <FiSend className='ml-2 group-hover:animate-spin'/>
      </button>
    </div>
    
  );
};