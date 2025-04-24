import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import './App.css'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Resume from './components/Resume'
function App() {
  return (
    <div className='min-h-screen'>
      <div className="main_header">
        <Header />
      </div>
      <div className='px-10 mt-15'>
        <div id="about_section">
          <About />
        </div>
        <div id="skills_section">
          <Skills />
        </div>
        <div id="projects_section">
          <Projects />
        </div>
        <div id="experience_section">
          <Experience />
        </div>
        <div id="resume_section">
          <Resume />
        </div>
        <div id="certifications_section">
          <Certifications />
        </div>
        <div id="contact_section">
          <Contact />
        </div>
       
      </div>
      <div className="main_footer">
        <Footer />
      </div>
    </div>
  )
}

export default App