import React from 'react'
import Marquee from 'react-fast-marquee'
import { FaCss3, FaHtml5, FaLaravel, FaNodeJs, FaPhp } from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'

const Collab = () => {
  return (
   <section className='bg-white p-2 w-full max-w-[1400px] mx-auto px-6 '>
       <Marquee speed={100} className='w-full'>
      <div className='w-full flex  items-center justify-around'>
      <div className='w-60 flex flex-col gap-2 items-center justify-center'>
            <FaHtml5 className='w-full text-7xl opacity-[.4] hovercl transition-all duration-100'/>
            <h3 className='text-2xl font-bold text-gray-400'>HTML5</h3>
        </div>
       <div className='w-60 flex flex-col gap-2 items-center justify-center'>
            <FaCss3 className='w-full text-7xl opacity-[.4] hovercl transition-all duration-100'/>
            <h3 className='text-2xl font-bold text-gray-400'>CSS3</h3>
        </div>
        <div className='w-60 flex flex-col gap-2 items-center justify-center'>
            <FaPhp className='w-full text-7xl opacity-[.4] hovercl transition-all duration-100'/>
            <h3 className='text-2xl font-bold text-gray-400'>PHP</h3>
        </div>
        <div className='w-60 flex flex-col gap-2 items-center justify-center'>
            <FaNodeJs className='w-full text-7xl opacity-[.4] hovercl transition-all duration-100'/>
            <h3 className='text-2xl font-bold text-gray-400'>NODEJS</h3>
        </div>
        <div className='w-60 flex flex-col gap-2 items-center justify-center'>
            <FaLaravel className='w-full text-7xl opacity-[.4] hovercl transition-all duration-100'/>
            <h3 className='text-2xl font-bold text-gray-400'>LARAVEL</h3>
        </div>
        <div className='w-60 flex flex-col gap-2 items-center justify-center'>
            <SiMongodb className='w-full text-7xl opacity-[.4] hovercl transition-all duration-100'/>
            <h3 className='text-2xl font-bold text-gray-400'>MONGODB</h3>
        </div>
      </div>
       </Marquee>
   </section>
  )
}

export default Collab
