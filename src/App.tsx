import Header from './components/Header'
import SideBar from './components/SideBar'
import Introduction from './components/Introduction'
import About from './components/About'
import Services from './components/Services'
import ProgressBar from './components/ProgressBar'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import BackgroundAnimation from './components/BackgroundAnimation'

const App = () => {
  return (
    <>
      <BackgroundAnimation />
      <Header />
      <SideBar />
      <ProgressBar />

      <div className='ml-0 md:ml-20 pt-20 min-h-screen text-theme-white overflow-x-hidden'>
        <Introduction />
        <About />
        <Services />
        <div id='skills'>
          <Skills />
        </div>
        <div id='experience'>
          <Experience />
          <Education />
        </div>
        <div id='projects'>
          <Projects />
        </div>
        <div id='contact'>
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App