import { useEffect, useState } from 'react'

const ProgressBar = () => {
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      setScrollTop(scrolled)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className='fixed left-0 top-20 w-1 bg-gray-200 h-[calc(100vh-5rem)] ml-20'>
      <div 
        className='bg-gray-900 transition-all ease-in-out duration-500' 
        style={{height: `${scrollTop}%`}}
      />
    </div>
  )
}

export default ProgressBar