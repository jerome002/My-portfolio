import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Experience from "./sections/Experience"
import Contact from "./sections/Contact"
import Education from "./sections/Education"

function App() {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </div>
  )
}

export default App