import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonial = () => {
  return (
    <section className='w-full max-w[1400px] mx-auto mt-10'>
        <div className='flex flex-col items-center justify-center gap-4'>
                    <h5 className='text-center text-rose-600 text-md font-bold'>Our Services</h5>
                    <div className='flex items-center justify-center gap-2 text-center'>
                        <h2 className='text-4xl font-semibold text-gray-700'>A word from our</h2>
                        <h2 className='text-4xl text-gray-500'>Clients</h2>
                    </div>
                    <div className='w-full max-w-5xl gap-4 mx-auto rounded-md px-4 drop-shadow-md py-6 justify-between flex md:flex-row flex-col  items-center'>
                    <Swiper
                    slidesPerView={1}
                     navigation={true}
                     modules={[Navigation]}
                     className="w-full max-w-4xl flex items-center justify-center px-14 rounded-xl">
                        <SwiperSlide className='w-full flex items-center justify-center'>
                            <div className='flex w-full max-w-lg mx-auto relative items-center justify-center flex-col gap-4'>
                            <div className="notch"></div>

                                <div className='bg-rose-200 rounded-md p-4'>
                                    <p className='text-center text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ducimus dolorum dolores, accusantium necessitatibus dignissimos quos nisi ad laudantium. Dolor quo beatae architecto veritatis. Nihil officia fugiat soluta.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className='w-full bg-red-500 flex items-center justify-center'>
                            <div className='flex w-full items-center justify-center flex-col gap-4'>
                                <div className=''>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ducimus dolorum dolores, accusantium necessitatibus dignissimos quos nisi ad laudantium. Dolor quo beatae architecto veritatis. Nihil officia fugiat soluta dolorem nobis.</p>
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
