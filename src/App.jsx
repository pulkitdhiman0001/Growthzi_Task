import Navbar from './components/Navbar/Navbar'
import Intro from "./pages/Intro/Intro"
import AboutMe from './pages/AboutMe/AboutMe'
import Skills from './pages/Skills/Skills'
import "../index.css"
import Projects from './pages/Projects/Projects'
import Journey from './pages/Journey/Journey'
import Education from './pages/Education/Education'
import Testimonials from './pages/Testimonials/Testimonials'
import Contact from './pages/Contact/Contact'
import Footer from './components/Footer/Footer'
function App() {


  return (
    <div className='main'>
      <Navbar/>
      <Intro/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <Journey/>
      <Education/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
