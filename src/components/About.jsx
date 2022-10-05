import React from 'react'

import me3 from '../assets/photos/me3.jpg'

const About = () => {
  return (
    <div name="About" className='w-full h-screen bg-[#d3ece2]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col h-full'>
        <div className=''>
          <p className='text-[#7b857f] italic font-semibold inline border-b-4 border-[#358f60] mt-[20px] text-2xl'>About Me</p>
        </div>
        <img src={me3} alt="personalThree" className='justify-center h-[] w-[]'/>
        <div>
          <p>Hello and welcome to my portfolio!</p>
        </div>
      </div>
    </div>
  )
}

export default About