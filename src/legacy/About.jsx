import React from 'react'
import Fade from "react-reveal/Fade";
import { FloatingNavBar } from "../components/NavigationBar";

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-[#d3ece2]'>

      <FloatingNavBar selectedTabId={2}/>

      <div className='max-w-[1000px] mx-auto px-8 flex flex-col align-center items-start justify-center'>

        {/* Header container */}
        <div className='mt-[20px]'>
          <Fade right delay={400} duration={1200}>
            <p className="font-Kaushanscript text-[#7b857f] mb-1">{'<h1>'}</p>
          </Fade>
          <Fade right delay={600} duration={1200}>
            <p className='text-[#358f60] font-medium md:text-6xl text-4xl'>About Me</p>
          </Fade>
          <Fade right delay={400} duration={1200}>
            <p className="font-Kaushanscript text-[#7b857f] mt-1">{'</h1>'}</p>
          </Fade>
        </div>

        {/* body container */}
        <Fade right delay={800} duration={2000}>
          <div className='mt-4 md:text-4xl text-2xl'>
            <span>
              <Fade right delay={1400} duration={1200}>
                <span className='text-[#282c2f] font-semibold'>Hello. </span>
              </Fade>
              <Fade right delay={1800} duration={1200}>
                <span className='text-[#282c2f] font-normal'>My name is Nathan, it's a pleasure to meet you.</span>
              </Fade>
            </span>
          </div>
        </Fade>
        <div className='mt-4 text-[#515854] font-normal md:text-lg text-sm'>
          <Fade clear delay={2000} duration={1400}>
            <p>
              When I was a junior in high school, I was fortunate enough to take the first coding class ever offered by my high school. 
              It was a simple game design course in Flash/ActionScript. The following year I took Game Design II, where I began to realize how much I loved coding.
              It was at the end of my Freshman year at WVU when I realized that petroleum engineering was not the best career path for me and I switched majors to pursue my degree in computer science.
            </p>
          </Fade>
          <Fade clear delay={2200} duration={1400}>
            <p className='mt-4'>
              Now, I am very blessed to be doing what I love everyday. My focus has been on mobile and front-end development, where my passion for 
              building outstanding mobile and web experiences for clients has flourished.  
            </p>
          </Fade>
          <Fade clear delay={2400} duration={1400}>
            <p className='mt-4'>
              I would describe myself as a well-organized, outgoing person with a knack for problem solving. I enjoy snowboarding, playing soccer, working on personal projects and spending time with friends and family in my free time.
            </p>
          </Fade>
        </div>

      </div>
    </div>
  )
}

export default About