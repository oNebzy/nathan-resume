import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
//import sticker from '../assets/photos/sticker.png'

const Home = () => {
  return (
    <div name='Home' className='w-full h-screen bg-[#d3ece2]'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className="font-Kaushanscript text-[#7b857f] mb-10">{'<intro>'}</p>
        <p className='text-[#7b857f] text-[20px]'>Hi, my name is</p>
        <h1 className='text-[#5B9F83] text-[42px] leading-9 md:leading-[80px] font-medium md:text-[82px]'>{'<'} Nathan Burd {'/>'}</h1>
        <h2 className='text-[#282c2f] text-3xl font-medium md:text-5xl'>A Mobile {'&'} Front-end Developer.</h2>
        <p className='text-[#515854] text-[14px] md:text-[20px] '>
          {'I strive to design and build responsive, creative, & innovative digital experiences with a "User-First" mindset. I have a strong passion for software engineering & developement '}
          {'that has been growing since I was introduced to coding in a high school game design class. '}
          {'Currently, I\'m working with my team at M&S Consulting to bring cutting edge software to life.'}
        </p>
        <div>
          <button 
            className='group text-[#282c2f] border-2 border-[#282c2f] px-4 py-2 mt-4 flex items-center hover:bg-[#5B9F83] hover:border-[#515854]'
            
          >
            View Skills
            <HiArrowNarrowRight className='ml-2 transition group-hover:rotate-90 duration-[400ms]'/>
          </button>
        </div>
        <p className="font-Kaushanscript text-[#7b857f] my-10">{'<intro/>'}</p>
        
        {/* <div className='border-b-2 border-[#282c2f] justify-center absolute bottom-40 w-full max-w-[1000px]'>
          <img src={sticker} alt={""} className="max-h-64 absolute bottom-0 right-0"></img>
        </div> */}
      </div>
      
    </div>
  )
}

export default Home