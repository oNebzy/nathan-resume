import React from 'react'

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-[#d3ece2]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col align-center items-start justify-center'>

        {/* Header container */}
        <div className='mt-[20px]'>
          <p className="font-Kaushanscript text-[#7b857f] mb-1">{'<h1>'}</p>
          <p className='text-[#358f60] font-medium md:text-6xl text-4xl'>About Me</p>
          <p className="font-Kaushanscript text-[#7b857f] mt-1">{'</h1>'}</p>
        </div>

        {/* body container */}
        <div className='mt-4 md:text-4xl text-2xl'>
            <span><span className='text-[#282c2f] font-semibold'>Hello. </span><span className='text-[#282c2f] font-normal'>My name is Nathan, it's a pleasure to meet you.</span></span>
        </div>
        <div className='mt-4 text-[#515854] font-normal md:text-lg text-sm'>
          <p>
            In 2015, when I was a junior in high school, I was fortunate enough to take the first coding class ever offered by my high school. 
            It was a simple game design course in Flash/ActionScript. The following year I took Game Design II, where I began to realize how much I loved coding.
            It was at the end of my Freshman year at WVU when I realized that petroleum engineering was not the best career path for me and I switched majors to pursue my degree in computer science.
          </p>
          <p className='mt-4'>
            Now, I am very blessed to be doing what I love everyday. My focus has been on mobile and front-end development, where my passion for 
            building outstanding mobile and web experiences for clients has flourished.  
          </p>
          <p className='mt-4'>
            I would describe myself as a well-organized, outgoing person with a knack for problem solving. I enjoy snowboarding, playing soccer, working on personal projects and spending time with friends and family in my free time.
          </p>
        </div>

      </div>
    </div>
  )
}

export default About