import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menu = [
    { id: 1, name: 'HOME', href: '#home' },
    { id: 2, name: 'ABOUT', href: '#about' },
    { id: 3, name: 'SKILLS', href: '#skills' },
    { id: 4, name: 'EXPERIENCE', href: '#experience' },
    { id: 5, name: 'PROJECTS', href: '#projects' },
    { id: 6, name: 'CONTACT', href: '#contact' }
  ]

  return (
    <div className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-theme-black/95 backdrop-blur-sm border-b border-theme-gray shadow-md h-20 px-8'>
      <div className='flex items-center gap-2'>
        <span className='font-bold text-2xl text-theme-white tracking-tight font-graffiti'>
          Vidura<span className='text-theme-light-gray'>.</span>
        </span>
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex gap-8'>
        {menu.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className='text-sm font-medium text-theme-light-gray hover:text-theme-white transition-colors relative group font-professional tracking-wide'
          >
            {item.name}
            <span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-theme-white transition-all group-hover:w-full'></span>
          </a>
        ))}
      </div>

      <div className='hidden md:block'>
        <a
          href={`mailto:${portfolioData.personalInfo.email}`}
          className='px-4 py-2 bg-theme-white text-theme-black rounded-sm hover:bg-theme-light-gray transition-colors text-sm font-bold font-professional inline-block'
        >
          Contact Me
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        className='md:hidden text-theme-white'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className='absolute top-20 left-0 right-0 bg-theme-black border-b border-theme-gray p-8 flex flex-col gap-6 md:hidden'>
          {menu.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className='text-lg font-medium text-theme-light-gray hover:text-theme-white transition-colors font-professional'
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href={`mailto:${portfolioData.personalInfo.email}`}
            className='px-4 py-2 bg-theme-white text-theme-black rounded-sm hover:bg-theme-light-gray transition-colors text-sm font-bold font-professional text-center'
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Me
          </a>
        </div>
      )}
    </div>
  )
}

export default Header
