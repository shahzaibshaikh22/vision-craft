import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaLocationArrow, FaPhone } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className='w-full flex items-center justify-center'>
        <div className='w-full grid grid-cols-2 max-w-5xl rounded-lg p-6 h-[70vh] bg-rose-500 my-4'>
            {/* <div className='flex w-full items-center justify-center py-4'>
            <h2 className='text-4xl text-gray-800 font-semibold'>Get In Touch</h2>
            </div> */}
            <div className='flex flex-col justify-between gap-10'>
                <div className='flex flex-col'>
                <h2 className='text-4xl text-white font-bold'>Let's discuss <br /> on something <span className='color3'>Cool</span></h2>
                <h2 className='text-4xl text-white font-bold'>Together</h2>
                </div>
                <div className='flex flex-col gap-2'>
                   <div className='w-[260px]  hover:bg-rose-600 p-1 rounded-md'>
                   <div className='flex items-center hover:bg-rose-500  gap-4 p-2 rounded-md cursor-pointer'>
                        <FaEnvelope className='text-xl text-gray-100'/>
                        <p className='text-gray-100 font-medium'>info.visioncraft@gmail.com</p>
                    </div>
                   </div>
                   <div className='w-[260px]  hover:bg-rose-600 p-1 rounded-md'>
                   <div className='flex items-center hover:bg-rose-500  gap-4 p-2 rounded-md cursor-pointer'>
                        <FaPhone className='text-xl text-gray-100'/>
                        <p className='text-gray-100 font-medium'>0313-31335687</p>
                    </div>
                   </div>
                   <div className='w-[260px]  hover:bg-rose-600 p-1 rounded-md'>
                   <div className='flex items-center hover:bg-rose-500  gap-4 p-2 rounded-md cursor-pointer'>
                        <FaLocationArrow className='text-xl text-gray-100'/>
                        <p className='text-gray-100 font-medium'>Street 4 dadan shah unit-9</p>
                    </div>
                   </div>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center bg-rose-800'>
                        <a href="#">
                        <FaFacebook className='text-white text-2xl'/>
                        </a>
                    </div>
                    <div className='w-10 h-10 rounded-full flex items-center justify-center bg-rose-800'>
                        <FaInstagram className='text-white text-2xl'/>
                    </div>
                </div>
            </div>
            <div className='bg-white rounded-lg p-6'>
                <form className='bg-white rounded-lg'>
                    <input type="text" name="" id="" />
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
