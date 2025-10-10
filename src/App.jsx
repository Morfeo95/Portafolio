import { useState } from 'react'
import NavBar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Hero/>
      <AboutMe/>
    </>
  )
}

export default App
