import React from 'react'

const Rescue = () => {
  return (
   <section className='w-full lg:px-2 px-6 max-w-6xl mx-auto mb-10 bg-white'>
    <div className='flex items-center flex-wrap gap-4 justify-between p-14 rounded-xl drop-shadow-md bg-rose-100 '>
       <div className='flex flex-col gap-2'>
       <h2 className='text-5xl font-medium'>Rescue your company’s growth!</h2>
        <p className='text-xl text-gray-600 mt-2'>Let us know about your business plans on an introductory call, and we’ll lead <br /> the matching process.</p>
       </div>
       <div>
        <button className='rescueHover'>Hire a Pro</button>
       </div>
    </div>
   </section>
  )
}

export default Rescue
