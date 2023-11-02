import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <section name='About' className='w-full about lg:px-0 px-6 py-10'>
        <div className='w-full max-w-7xl mx-auto  flex flex-col items-center justify-center gap-4'>
            <h5 data-aos="fade-down" className='text-center text-rose-600 text-md font-bold'>About Us</h5>
            <div className='flex items-center justify-center gap-2 text-center'>
                <h2 className='text-4xl font-semibold text-gray-700'>Who We</h2>
                <h2 className='text-4xl text-gray-500'>Are</h2>
            </div>
            <div>
                <p className='text-center w-full max-w-xl mx-auto text-gray-500 font-medium'>Welcome to vision craft, where innovation meets excellence in the world of web development. We are a passionate team of skilled professionals dedicated to creating cutting-edge digital solutions that empower businesses and individuals to thrive in the digital age.</p>
            </div>
            <div className='w-full grid md:grid-cols-2 gap-14 lg:mt-10'>
                <div className='aboutShape flex items-center justify-center relative'>
                    {/* <div className="aboutShape"></div> */}
                    <img src="./images/visioncraft11.svg" alt="vision craft" />
                </div>
                <div className='flex flex-col gap-2'  >
                    <h3 className='text-rose-600 font-semibold text-2xl '>Our Story</h3>
                    <p className='text-justify leading-10 text-gray-600 font-mono text-xl'>Established in 2023, <span className='text-rose-600'>Vision Craft</span> was born from a shared vision to transform the online landscape. Over the years, we have evolved into a dynamic web development company, driven by a relentless pursuit of excellence in web design, development, and digital marketing. Our journey has been marked by countless success stories and a commitment to continuous growth and learning.</p>
                </div>
               
                <div className='flex flex-col gap-2'  >
                    <h3 className='text-rose-600 font-semibold text-2xl '>Our Mission</h3>
                    <p className='text-justify leading-10 text-gray-600 font-mono text-xl'>At <span className='text-rose-600'>Vision Craft</span> our mission is clear: to help our clients harness the limitless power of the internet. We aim to be your trusted partner in the digital realm, providing tailor-made web solutions that not only meet but exceed your expectations. Our success is defined by the success of our clients.</p>
                </div>
                <div className='aboutShape flex items-center justify-center relative'>
                    {/* <div className="aboutShape"></div> */}
                    <img src="./images/visioncraft13.svg" alt="vision craft" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
