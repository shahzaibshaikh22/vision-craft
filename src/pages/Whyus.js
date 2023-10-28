import React from 'react'
import { Tilt } from 'react-tilt'
import { WhyUs } from '../utils/Constaints'

const Whyus = () => {
  return (
    <section className='w-full lg:px-0 px-6 max-w-[1400px] mx-auto py-10'>
    <div className='flex flex-col items-center justify-center gap-4'>
        <h5 className='text-center text-rose-600 text-md font-bold'>why us ?</h5>
        <div className='flex items-center justify-center gap-2 text-center'>
          <h2 className='text-4xl font-semibold text-gray-700'>Why Choose</h2>
          <h2 className='text-4xl text-gray-500'>Us</h2>
        </div>
        <div className='w-full grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-12 lg:mt-10'>
          {WhyUs.map((elem)=>{
            const { id,title, description, iconSrc } = elem;
            return(
              <Tilt key={id}>
          <div className='whyBox'>
            <lord-icon
                src={iconSrc}
                trigger="hover"
                colors="primary:#e11d48,secondary:#7c3aed"
                style={{width:"150px",height:"120px"}}>
            </lord-icon>
            <h3 className='whyHeading'>{title}</h3>
           <div className=' h-44'>
           <p className='whyDesc'>{description}</p>
           </div>
          </div>
          </Tilt>
            )
          })}
        </div>
    </div>
    </section>
  )
}

export default Whyus
