import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Collab from './pages/Collab'
import Services from './pages/Services'
import Feature from './pages/Feature'
import GetStart from './pages/GetStart'
import About from './pages/About'
import Whyus from './pages/Whyus'
import Rescue from './pages/Rescue'
import Home from './pages/Home'
import Testimonial from './pages/Testimonial'
import Footer from './components/Footer'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
   <Collab/>
   <About/>
   <Whyus/>
   <Services/>
   <Feature/>
   <Rescue/>
   <GetStart/>
   <Testimonial/>
   <Contact/>
   <Footer/>
 </>
  )
}

export default App
