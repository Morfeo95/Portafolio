import { useState } from 'react'
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Carousel from './components/Carousel'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  
  return (
    <div>
      <NavBar/>
      <Hero/>
      <AboutMe/>
      <Carousel/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
