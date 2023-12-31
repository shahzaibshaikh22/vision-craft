import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    // const [isOpen, setIsOpen] = useState(false);
    const [showNav, setShowNav] = useState('');
    const [fixNav, setFixNav] = useState('')


    const isScroll = ()=>{
        const isHeight = 100;
        const showHeight = document.body.scrollTop || document.documentElement.scrollTop
        if(isHeight < showHeight){
            setFixNav('fixedNav')
        }else{
            setFixNav('')
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', isScroll)
    })
  return (
   <>
    <nav className={`flex ${fixNav} py-4 w-full   md:px-10 px-6  mx-auto items-center justify-between fixed z-10 top-0 left-0 right-0`}>
        <div className='flex items-center gap-20'>
             <div className='w-40'>
                <img className='w-full' src="./images/logo.png" alt="" />
             </div>
             <ul className='lg:flex hidden items-center gap-8'>
                <Link className='text-md cursor-pointer text-gray-700 border-b-2 border-rose-500  linkHover' to="home">Home</Link>
                <Link className='text-md cursor-pointer text-gray-700  linkHover' to="About">About</Link>
                <Link className='text-md cursor-pointer text-gray-700  linkHover' to="services">Services</Link>
                <Link className='text-md cursor-pointer text-gray-700  linkHover' to="testimonial">Testimonials</Link>
                <Link className='text-md cursor-pointer text-gray-700  linkHover' to="/">Contact</Link>
                <Link className='text-md cursor-pointer text-gray-700  linkHover' to="/">Blogs</Link>
             </ul>
        </div>
        <div className='lg:block hidden'>
            <button className='text-rose-600 bg-rose-100 px-10 py-4 rounded-full font-semibold drop-shadow-md'>
                Get in Touch
            </button>
        </div>
    
        {showNav === ""? (<FaBars onClick={()=>setShowNav("showNav")} className='text-rose-600 text-2xl lg:hidden block cursor-pointer'/>) :(
            <FaTimes onClick={()=>setShowNav("")} className='text-rose-600 text-2xl lg:hidden block cursor-pointer'/>
        )}
   </nav>
        <div className={`navbar ${showNav} bg-rose-50 p-4 rounded-sm drop-shadow-md h-screen`}>
        <ul className='flex flex-col w-full gap-8'>
        <Link className='text-md w-11 text-gray-700 border-b-2 border-rose-500 font-semibold linkHover' to="/">Home</Link>
                <Link className='text-md w-11 text-gray-700 font-semibold linkHover' to="/">About</Link>
                <Link className='text-md w-11 text-gray-700 font-semibold linkHover' to="/">Services</Link>
                <Link className='text-md w-11 text-gray-700 font-semibold linkHover' to="/">Contact</Link>
                <Link className='text-md w-11 text-gray-700 font-semibold linkHover' to="/">Blogs</Link>
             </ul>
        </div>
</>
  )
}

export default Navbar
