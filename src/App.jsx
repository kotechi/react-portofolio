import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navigationBar'
import HeaderSection from './components/header'
import AboutSection from './components/about'
import SkillSection from './components/skill'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <HeaderSection />
      <AboutSection />
      <SkillSection />
    </>
  )
}

export default App
