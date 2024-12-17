
import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="max-w-7xl mx-auto pt-20 px-6">
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer />
   </div>
  )
}

export default App