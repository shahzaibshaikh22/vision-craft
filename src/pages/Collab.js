import React from 'react'
import Marquee from 'react-fast-marquee'
import { FaCss3, FaHtml5, FaLaravel, FaNodeJs, FaPhp } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'

const Collab = () => {
  return (
   <section className='bg-white p-2 w-full max-w-[1400px] mx-auto px-6 '>
       <Marquee speed={100} className='w-full'>
      <div className='w-full flex  items-center justify-around'>
      <div className='w-60'>
            <FaHtml5 className='w-full text-7xl opacity-[.4] hovercl transition-all duration-100'/>
        </div>
       <div className='w-60'>
            <FaCss3 className='w-full text-7xl opacity-[.4] hovercl transition-all duration-100'/>
        </div>
        <div className='w-60'>
            <FaPhp className='w-full text-7xl opacity-[.4] hovercl transition-all duration-100'/>
        </div>
        <div className='w-60'>
            <FaNodeJs className='w-full text-7xl opacity-[.4] hovercl transition-all duration-100'/>
        </div>
        <div className='w-60'>
            <FaLaravel className='w-full text-7xl opacity-[.4] hovercl transition-all duration-100'/>
        </div>
        <div className='w-60'>
            <SiMongodb className='w-full text-7xl opacity-[.4] hovercl transition-all duration-100'/>
        </div>
      </div>
       </Marquee>
   </section>
  )
}

export default Collab
