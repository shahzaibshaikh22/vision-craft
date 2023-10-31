import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Testimonial = () => {
  return (
    <section className='w-full max-w[1400px] mx-auto py-10 bg-gray-100'>
        <div className='flex flex-col items-center justify-center gap-4'>
                    <h5 className='text-center text-rose-600 text-md font-bold'>Testimonials</h5>
                    <div className='flex items-center justify-center gap-2 text-center'>
                        <h2 className='text-4xl font-semibold text-gray-700'>A word from our</h2>
                        <h2 className='text-4xl text-gray-500'>Clients</h2>
                    </div>
                    <div className='w-full max-w-5xl gap-4 mx-auto rounded-md  px-2 drop-shadow-md py-6 justify-between flex md:flex-row flex-col  items-center bg-white'>
                    <Swiper
                    slidesPerView={1}
                     navigation={true}
                     pagination={true}
                     modules={[Navigation, Pagination]}
                     className="w-full  flex items-center justify-center py-10 h-[45vh]">
                        <SwiperSlide className='w-full flex items-center justify-center '>

                            <div className='flex w-full max-w-lg mx-auto relative items-center justify-center flex-col gap-10'>
                                <div className='bg-rose-200 rounded-md p-4 notch'>
                                    <p className='text-center text-gray-500 font-medium text-md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ducimus dolorum dolores, accusantium necessitatibus dignissimos quos nisi ad laudantium. Dolor quo beatae architecto veritatis. Nihil officia fugiat soluta.</p>
                                </div>
                                <div className='flex flex-col gap-2 items-center justify-center'>
                                    <div className='w-14 h-14 rounded-full bg-rose-100 p-1'>
                                        <img className='w-full rounded-full h-full object-cover' src="./images/team7.jpg" alt="vision craft" />
                                    </div>
                                    <h3 className='text-xl text-gray-500 font-semibold'>Jhon Doe</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='w-full flex items-center justify-center'>
                            <div className='flex w-full max-w-lg mx-auto relative items-center justify-center flex-col gap-10'>
                                <div className='bg-rose-200 rounded-md p-4'>
                                    <p className='text-center text-gray-600 font-medium text-md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ducimus dolorum dolores, accusantium necessitatibus dignissimos quos nisi ad laudantium. Dolor quo beatae architecto veritatis. Nihil officia fugiat soluta.</p>
                                </div>
                                <div className='flex flex-col gap-2 items-center justify-center'>
                                    <div className='w-14 h-14 rounded-full bg-rose-100 p-1'>
                                        <img className='w-full rounded-full h-full object-cover' src="./images/team7.jpg" alt="vision craft" />
                                    </div>
                                    <h3 className='text-xl text-gray-500 font-semibold'>Jhon Doe</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        
                    </Swiper>
                    </div>
                </div>
    </section>
  )
}

export default Testimonial
