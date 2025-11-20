import { useState, useEffect } from 'react'

const Profile = () => {
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down')
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down')
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up')
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <div 
      className={`sticky w-full h-[calc(100vh-5rem)] transition-all duration-300 ${
        scrollDirection === 'down' ? 'top-20' : 'bottom-0'
      }`}
    >
      <div className='w-full h-full rounded-xl overflow-hidden shadow-lg border border-gray-200'>
        <img 
          src='/user-image.JPG' 
          alt='Profile' 
          className='w-full h-full object-cover object-center' 
        />
      </div>
    </div>
  )
}

export default Profile