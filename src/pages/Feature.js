import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Feature = () => {
  return (
    <section className=' w-full my-4  h-auto  sm:px-10 px-6 py-10  overflow-hidden'>
    <div className='flex flex-col items-center justify-center gap-4'>
        <h5 className='text-center text-rose-600 text-md font-bold'>How It Works</h5>
        <div className='flex flex-col items-center justify-center gap-2 text-center'>
            <h2 className='text-4xl font-bold text-gray-700'>Important Features</h2>
            <h2 className='text-4xl text-gray-600 font-light'>For Development</h2>
        </div>
        <p className='w-full max-w-xl text-center text-gray-600'>Elevate your digital presence with our comprehensive services. From design to development and product creation, we bring your vision to life with innovative solutions.</p>
        <div className='w-full max-w-6xl gap-4 mx-auto bg-white rounded-md px-4 py-10 grid lg:grid-cols-3'>
           <div className='flex flex-col items-center gap-6'>
            <div className='relative w-40 h-40 flex items-center justify-center bg-rose-100 rounded-full'>
                <h3 className='text-5xl text-rose-600 font-extrabold'>01</h3>
                <span className='absolute top-0 right-0 w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center'><FaCheck className='text-white'/></span>
            </div>
            <h3 className='text-center font-semibold text-2xl text-gray-800'>Design</h3>
            <p className='text-center text-md font-medium text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus perspiciatis minima architecto!</p>
           </div>

           <div className='flex flex-col items-center gap-6'>
            <div className='relative w-40 h-40 flex items-center justify-center bg-rose-100 rounded-full'>
                <h3 className='text-5xl text-rose-600 font-extrabold'>02</h3>
                <span className='absolute top-0 right-0 w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center'><FaCheck className='text-white'/></span>
            </div>
            <h3 className='text-center font-semibold text-2xl text-gray-800'>Develop</h3>
            <p className='text-center text-md font-medium text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus perspiciatis minima architecto!</p>
           </div>

           <div className='flex flex-col items-center gap-6'>
            <div className='relative w-40 h-40 flex items-center justify-center bg-rose-100 rounded-full'>
                <h3 className='text-5xl text-rose-600 font-extrabold'>03</h3>
                <span className='absolute top-0 right-0 w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center'><FaCheck className='text-white'/></span>
            </div>
            <h3 className='text-center font-semibold text-2xl text-gray-800'>Product</h3>
            <p className='text-center text-md font-medium text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus perspiciatis minima architecto!</p>
           </div>
        </div>
    </div>
</section>
  )
}

export default Feature
