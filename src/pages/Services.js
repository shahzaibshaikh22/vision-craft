import React from 'react'
import { LuMonitorSmartphone } from 'react-icons/lu'
import { servicesLeft, servicesRight } from '../utils/Constaints'

const Services = () => {
    return (
        <main name="services" className='py-10'>
            <section className=' w-full my-4  h-auto  sm:px-10 px-6 py-10 bg-gray-100  overflow-hidden'>
                <div className='flex flex-col items-center justify-center gap-4'>
                    <h5 className='text-center text-rose-600 text-md font-bold'>Our Services</h5>
                    <div className='flex items-center justify-center gap-2 text-center'>
                        <h2 className='text-4xl font-semibold text-gray-700'>What We</h2>
                        <h2 className='text-4xl text-gray-500'>Offer</h2>
                    </div>
                    <div className='w-full max-w-7xl gap-4 mx-auto bg-white rounded-md px-4 drop-shadow-md py-10 justify-between flex md:flex-row flex-col  items-center'>
                        <div className='flex  gap-4 items-center'>
                            <div className='mainGradient rounded-full w-24 h-24 flex items-center justify-center'>
                                <LuMonitorSmartphone className='text-5xl text-white' />
                            </div>
                            <div className='flex flex-1 flex-col gap-1'>
                                <h3 className='text-gray-700 font-semibold text-xl'>Plaining Information</h3>
                                <p className='text-gray-500 w-80'>Select the right technology stack and tools to support your web development project's needs and goals</p>
                            </div>
                        </div>
                        <div className='bg-gray-300 p-[.3px] h-24'></div>
                        <div className='flex  gap-4 items-center'>
                            <div className='mainGradient rounded-full w-24 h-24 flex items-center justify-center'>
                                <LuMonitorSmartphone className='text-5xl text-white' />
                            </div>
                            <div className='flex flex-1 flex-col gap-1'>
                                <h3 className='text-gray-700 font-semibold text-xl'>Guarantee of Quality</h3>
                                <p className='text-gray-500 w-80'>Our web development services guarantee top-quality results through rigorous testing, skilled professionals, and client-centric focus, ensuring your project's success</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='w-full max-w-7xl lg:h-[75vh] lg:px-0 px-6 mx-auto grid md:grid-cols-3 grid-col-1 gap-8'>
                <div className='flex flex-col  gap-20 h-full justify-between'>
                    {servicesLeft.map((elem) => {
                        const { id, title, description, image } = elem;
                        return (
                            <div key={id} className='flex justify-between gap-6'>
                                <div className='flex flex-col items-end gap-2'>
                                    <h3 className='text-xl font-semibold text-gray-700'>{title}</h3>
                                    <p className='p-0 m-0 leading-7 text-right text-gray-500'>{description.slice(0, 65)}...</p>
                                </div>
                                <div className='w-28 '>
                                    <img className='w-full' src={image} alt="vision craft " />
                                </div>
                            </div>
                        )
                    })}
                </div>

                <div className='p-2 flex items-center justify-center gap-14 flex-col bg-white rounded-md  shadow-inner'>
                    <div className='w-56'>
                        <img src="./images/visioncraft9.svg" alt="vision craft" />
                    </div>
                    <p className='text-gray-400 text-center'>Crafting Digital Excellence: Elevate Your Web Presence with Our Expertise!</p>
                    <button className='btn-ripple text-rose-600 bg-rose-100 px-10 py-4 rounded-full font-semibold drop-shadow-md'>
                Hire Now
            </button>
                </div>

                <div className='flex flex-col h-full  gap-20 justify-between'>
                   {servicesRight.map((elem) => {
                        const { id, title, description, image } = elem;
                        return (
                            <div key={id} className='flex justify-between gap-6'>
                             <div className='w-28 '>
                                    <img className='w-full' src={image} alt="vision craft " />
                                </div>
                                <div className='flex flex-col items-start gap-2'>
                                    <h3 className='text-xl font-semibold text-gray-700'>{title}</h3>
                                    <p className='p-0 m-0 leading-7 text-left text-gray-500'>{description.slice(0, 65)}...</p>
                                </div>
                               
                            </div>
                        )
                    })}
                </div>

            </section>

        </main>
    )
}

export default Services
