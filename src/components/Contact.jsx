import React from 'react'
import {FiSend} from 'react-icons/fi'
import Fade from "react-reveal/Fade";
import { FloatingNavBar } from "./NavigationBar";

const Contact = () => {
  return (
    <div name="Contact" className="w-full h-screen bg-[#d3ece2]">

      <FloatingNavBar selectedTabId={3}/>

      {/*container */}
      <div className="max-w-[1000px] mx-auto p-8 flex flex-col w-full h-full justify-center">

        {/* header */}
        <div className="pb-8">
          <Fade top delay={100} duration={1200}>
            <p className="font-Kaushanscript text-[#7b857f]">{"<form>"}</p>
          </Fade>
          <Fade top delay={300} duration={1200}>
            <p className="text-[#358f60] font-medium md:text-6xl text-4xl">
              Contact Me
            </p>
          </Fade>
          <Fade top delay={600} duration={1200}>
            <p className='text-[#282c2f] text-xl pt-2 font-medium'>Thanks for visiting my portfolio!</p>
          </Fade>
          <Fade top delay={900} duration={1200}>
            <p className='text-[#282c2f] text-lg pt-2'>
              Please complete the form below or email me directly - <span className='font-semibold underline hover:text-[#5B9F83]'><a href="mailto: nathanburd.dev@gmail.com">nathanburd.dev@gmail.com</a></span>
            </p>
          </Fade>
                 
          <form method="POST" action="https://getform.io/f/e4a5c553-57c4-44a6-8c3f-9d9bddc58109" className='flex flex-col w-full'>
            <Fade top delay={1200} duration={1200}>
              <input className='bg-[#282c2f] p-2 mt-6 text-white rounded-lg' type="text" placeholder='Name' name='name'/>
            </Fade>
            <Fade top delay={1400} duration={1200}>
              <input className='bg-[#282c2f] p-2 my-4 text-white rounded-lg' type="text" placeholder='Email' name='email'/>
            </Fade>
            <Fade top delay={1600} duration={1200}>
              <textarea className='bg-[#282c2f] p-2 mb-6 text-white rounded-lg' name="msg" rows="10" placeholder='Message'></textarea>  
            </Fade>
            <Fade right delay={1800} duration={1200} distance="40%">
              <button 
                className='group rounded text-[#282c2f] border-2 border-[#282c2f] px-4 py-2 mt-4 mx-auto flex items-center hover:bg-[#5B9F83] hover:border-[#515854]'
              >
                Send Message
                <FiSend className='ml-2 group-hover:animate-spin'/>
              </button>
            </Fade>
          </form>
          
          <Fade top delay={900} duration={1200}>
            <p className="font-Kaushanscript text-[#7b857f]">{"</form>"}</p>
          </Fade>

          
          
          
        </div>

        {/* end container */}
      </div>
    {/* end Contact */}
    </div>
      
  )
}

export default Contact