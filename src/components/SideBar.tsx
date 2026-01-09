import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

const SideBar = () => {
  const [activeSection, setActiveSection] = useState('HOME')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].toUpperCase())
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='fixed left-0 top-20 h-[calc(100vh-5rem)] w-20 border-r border-theme-gray bg-theme-dark-gray hidden md:flex flex-col items-center py-8 z-40'>
      <div className='flex flex-col gap-6'>
        <a
          href={portfolioData.personalInfo.github}
          target='_blank'
          rel='noopener noreferrer'
          className='text-theme-light-gray hover:text-theme-white transition-colors'
          title='GitHub'
        >
          <FaGithub size={24} />
        </a>
        <a
          href={portfolioData.personalInfo.linkedin}
          target='_blank'
          rel='noopener noreferrer'
          className='text-theme-light-gray hover:text-theme-white transition-colors'
          title='LinkedIn'
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      <div className='writing-mode-vertical text-sm font-semibold text-theme-light-gray tracking-wider mt-auto mb-16 font-professional'>
        <span className='inline-block -rotate-90 whitespace-nowrap'>{activeSection}</span>
      </div>
    </div>
  )
}

export default SideBar