import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import TechStack from "./sections/TechStack"
import SelectedWorks from "./sections/SelectedWorks"
import EngineeringPhilosophy from "./sections/EngineeringPhilosophy"
import Experience from "./sections/Experience"
import Education from "./sections/Education"
import Contact from "./sections/Contact"

function App() {
  return (
    <div className="min-h-screen bg-deep-slate text-text-primary font-body">
      <Navbar />
      <Hero />
      <TechStack />
      <SelectedWorks />
      <EngineeringPhilosophy />
      <Experience />
      <Education />
      <Contact />
    </div>
  )
}

export default App