import { useEffect, useRef } from 'react'
import { portfolioData } from '../data/portfolioData'
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'
import gsap from 'gsap'

const Introduction = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const roleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(containerRef.current, { opacity: 0 }, { opacity: 1, duration: 1 })
      .fromTo(nameRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(roleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      )
  }, [])

  return (
    <div id='home' ref={containerRef} className='flex justify-center items-center py-20 px-6 min-h-[calc(100vh-5rem)]'>
      <div className='max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>

        {/* Text Section */}
        <div className='order-2 md:order-1 flex flex-col items-center md:items-start text-center md:text-left'>
          <h2 className='text-theme-light-gray font-professional text-sm tracking-[0.2em] uppercase mb-4'>
            Hello! I'm
          </h2>

          <h1 ref={nameRef} className='text-5xl md:text-7xl font-bold text-theme-white mb-6 font-professional tracking-tight leading-tight'>
            {portfolioData.personalInfo.fullName}
          </h1>

          <div ref={roleRef} className='mb-10'>
            <h3 className='text-xl md:text-3xl text-theme-light-gray font-light font-professional'>
              {portfolioData.personalInfo.title}
            </h3>
          </div>

          <div className='flex flex-wrap justify-center md:justify-start gap-4 text-theme-white text-sm font-professional'>
            <div className='flex items-center gap-2 px-5 py-2.5 border border-theme-gray rounded-lg hover:border-theme-white transition-colors cursor-pointer group'>
              <FaMapMarkerAlt className='text-theme-light-gray group-hover:text-theme-white transition-colors' size={16} />
              <span>{portfolioData.personalInfo.location}</span>
            </div>

            <a href={`mailto:${portfolioData.personalInfo.email}`} className='flex items-center gap-2 px-5 py-2.5 border border-theme-gray rounded-lg hover:border-theme-white transition-colors cursor-pointer group'>
              <FaEnvelope className='text-theme-light-gray group-hover:text-theme-white transition-colors' size={16} />
              <span>{portfolioData.personalInfo.email}</span>
            </a>

            <a href={`tel:${portfolioData.personalInfo.phone}`} className='flex items-center gap-2 px-5 py-2.5 border border-theme-gray rounded-lg hover:border-theme-white transition-colors cursor-pointer group'>
              <FaPhone className='text-theme-light-gray group-hover:text-theme-white transition-colors' size={16} />
              <span>{portfolioData.personalInfo.phone}</span>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className='order-1 md:order-2 flex justify-center md:justify-end'>
          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-tr from-theme-dark-gray to-transparent rounded-2xl md:rounded-[2rem] transform rotate-6 scale-105 opacity-50 -z-10'></div>
            <img
              src='/avatar.JPG'
              alt='Profile'
              className='w-[280px] h-[350px] md:w-[350px] md:h-[450px] object-cover rounded-2xl md:rounded-[2rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-500'
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Introduction