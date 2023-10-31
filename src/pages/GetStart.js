import React from 'react'

const GetStart = () => {
  return (
    <section className='bgatach py-10 lg:px-0 px-6'>
        <div className='w-full max-w-6xl mx-auto  grid lg:grid-cols-2 grid-cols-1 gap-4'>
        <div className='flex flex-col justify-center gap-2 '>
        <h5 className=' text-gray-100 text-md font-bold'>InfoBlock</h5>
        <div className='flex gap-1 items-center'>
            <h2 className='text-4xl text-white font-bold'>Kick Start your Digital Apearance</h2>
        </div>
        <h2 className='text-4xl text-white font-light'>Today</h2>
        <p className='text-gray-200 font-semibold'>Our web development services are tailored to your needs, delivering responsive, high-performance websites and web apps. Elevate your online presence with our expertise</p>

        <button className='btn-ripple w-32 text-rose-600 bg-rose-100 px-10 py-4 rounded-full font-semibold drop-shadow-md'>
                Hire Now
            </button>
        </div>
        <div className='flex items-center justify-center'>
            <img className='' src="./images/visioncraft10.svg" alt="" />
        </div>
        </div>
    </section>
  )
}

export default GetStart
