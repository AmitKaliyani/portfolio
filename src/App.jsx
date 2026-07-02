import { BrowserRouter } from 'react-router'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Experience from './Components/Experience'
import Education from './Components/Education'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#0B0F19] text-gray-100 min-h-screen font-sans">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </BrowserRouter>
  )
}

export default App
