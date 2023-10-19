import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showNav, setShowNav] = useState('');
  return (
   <>
    <nav className='flex py-4 w-full max-w-[1400px]  md:px-10 px-6  mx-auto items-center justify-between fixed z-10 top-0 left-0 right-0 '>
        <div className='flex items-center gap-20'>
             <h2 className='text-2xl font-bold text-rose-600'>Vision-Craft</h2>
             <ul className='md:flex hidden items-center gap-8'>
                <Link className='text-md text-gray-700 border-b-2 border-rose-500  linkHover' to="/">Home</Link>
                <Link className='text-md text-gray-700  linkHover' to="/">About</Link>
                <Link className='text-md text-gray-700  linkHover' to="/">Services</Link>
                <Link className='text-md text-gray-700  linkHover' to="/">Contact</Link>
                <Link className='text-md text-gray-700  linkHover' to="/">Blogs</Link>
             </ul>
        </div>
        <div className='md:block hidden'>
            <button className='text-rose-600 bg-rose-100 px-10 py-4 rounded-full font-semibold drop-shadow-md'>
                Get in Touch
            </button>
        </div>
    
        {showNav === ""? (<FaBars onClick={()=>setShowNav("showNav")} className='text-rose-600 text-2xl md:hidden block cursor-pointer'/>) :(
            <FaTimes onClick={()=>setShowNav("")} className='text-rose-600 text-2xl md:hidden block cursor-pointer'/>
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
