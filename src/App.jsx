import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Carousel from './components/Carousel'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chat from './components/Chat'
import { Analytics } from "@vercel/analytics/next"
import './App.css'

function App() {
  
  return (
    <div>
      <Analytics/>
      <NavBar/>
      <Hero/>
      <AboutMe/>
      <Carousel/>
      <Contact/>
      <Chat/>
      <Footer/>
    </div>
  )
}

export default App
