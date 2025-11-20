import { portfolioData } from '../data/portfolioData'
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'

const Introduction = () => {
  return (
    <div id='home' className='flex justify-center flex-col items-center py-10 px-6'>
      <div className='h-[80px] w-[1px] bg-gray-300'></div>
      
      <div className='relative mt-8 mb-8'>
        <img 
          src='/avatar.JPG' 
          alt='Profile' 
          className='w-[160px] h-[160px] rounded-full object-cover border-4 border-white shadow-lg'
        />
      </div>

      <h2 className='text-gray-500 font-medium text-xs tracking-[0.3em] uppercase mb-3'>
        Hello! I'm
      </h2>
      
      <h1 className='text-4xl md:text-5xl font-bold text-gray-900 mb-3 text-center'>
        {portfolioData.personalInfo.fullName}
      </h1>
      
      <h3 className='text-lg md:text-xl text-gray-600 font-normal text-center mb-8'>
        {portfolioData.personalInfo.title}
      </h3>

      <div className='flex flex-col md:flex-row items-center gap-4 text-gray-500 text-sm'>
        <div className='flex items-center gap-2'>
          <FaMapMarkerAlt className='text-gray-400' size={14} />
          <span>{portfolioData.personalInfo.location}</span>
        </div>
        <span className='hidden md:block'>•</span>
        <div className='flex items-center gap-2'>
          <FaEnvelope className='text-gray-400' size={14} />
          <a href={`mailto:${portfolioData.personalInfo.email}`} className='hover:text-gray-900 transition-colors'>
            {portfolioData.personalInfo.email}
          </a>
        </div>
        <span className='hidden md:block'>•</span>
        <div className='flex items-center gap-2'>
          <FaPhone className='text-gray-400' size={14} />
          <a href={`tel:${portfolioData.personalInfo.phone}`} className='hover:text-gray-900 transition-colors'>
            {portfolioData.personalInfo.phone}
          </a>
        </div>
      </div>

      <div className='h-[80px] w-[1px] bg-gray-300 mt-12'></div>
    </div>
  )
}

export default Introduction