import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
   <main>
    <Navbar/>
    <Routes>
       <Route path='/' element={ <Home/> }/>
    </Routes>
   </main>
  )
}

export default App
