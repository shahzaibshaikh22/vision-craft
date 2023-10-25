import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import Collab from './Collab'
import Services from './Services'

const Home = () => {
  return (
  <>
     <section className='w-full md:h-[80vh] h-auto md:py-0 py-10 mt-20'>
    <div className='panals'>
        <div className='md:block hidden panal1'></div>
        <div className='md:block hidden panal2'></div>
    </div>
    <div className='w-full h-full grid md:grid-cols-2 grid-cols-1 max-w-[1400px] lg:px-10 px-6 mx-auto'>
        <div className='flex flex-col justify-center gap-4 h-full'>
            <h1 className='md:text-7xl text-6xl font-bold mainHeading'>Make Your Digital Appearance Today</h1>
            <p className='text-gray-500 text-lg'>Empowering businesses through innovative web solutions, code that speaks, and user-centric designs. Your online success, our passion-driven mission</p>
            <div className=''>
                <button className='flex text-rose-600 font-semibold items-center gap-4 hover:-translate-y-[4px] hover:bg-red-300 transition-all bg-rose-100 drop-shadow-md px-8 py-3 rounded-full'>
                    Contact <FaChevronRight className='text-rose-600'/>
                </button>
            </div>
        </div>
        <div className='flex h-full items-center justify-center'>
            <img className='w-full' src='./images/visioncraft1.svg' alt='visioncraft'/>
        </div>
    </div>
    </section>
    <Collab/>
    <Services/>
  </>
  )
}

export default Home
