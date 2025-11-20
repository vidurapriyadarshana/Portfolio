import { FaGraduationCap, FaCertificate, FaLanguage } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

const Education = () => {
  return (
    <div className='py-16 px-6 md:px-16'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-10'>
          <span className='text-gray-500 font-medium text-xs tracking-[0.3em] uppercase'>Background</span>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mt-2'>Education & More</h2>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-white rounded-xl p-6 border border-gray-200 shadow-sm'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center'>
                <FaGraduationCap className='text-white text-lg' />
              </div>
              <h3 className='text-xl font-bold text-gray-900'>Education</h3>
            </div>
            
            <div className='space-y-6'>
              {portfolioData.education.map((edu, index) => (
                <div key={index} className='relative pl-6 border-l-2 border-gray-300'>
                  <div className='absolute -left-[5px] top-0 w-2 h-2 bg-gray-900 rounded-full'></div>
                  <h4 className='text-base font-bold text-gray-900'>{edu.degree}</h4>
                  {edu.field && <p className='text-gray-600 text-sm font-semibold'>{edu.field}</p>}
                  <p className='text-gray-700 font-medium text-sm'>{edu.institution}</p>
                  <p className='text-gray-500 text-xs mt-1'>{edu.duration}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='bg-white rounded-xl p-6 border border-gray-200 shadow-sm'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center'>
                <FaCertificate className='text-white text-lg' />
              </div>
              <h3 className='text-xl font-bold text-gray-900'>Certifications</h3>
            </div>
            
            <div className='space-y-3'>
              {portfolioData.certifications.map((cert, index) => (
                <div key={index} className='flex items-start gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200'>
                  <FaCertificate className='text-gray-600 mt-1 flex-shrink-0' size={14} />
                  <span className='text-gray-700 text-sm'>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='mt-6 bg-white rounded-xl p-6 border border-gray-200 shadow-sm'>
          <div className='flex items-center gap-3 mb-6'>
            <div className='w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center'>
              <FaLanguage className='text-white text-lg' />
            </div>
            <h3 className='text-xl font-bold text-gray-900'>Languages</h3>
          </div>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {portfolioData.languages.map((lang, index) => (
              <div 
                key={index} 
                className='bg-gray-50 border border-gray-200 rounded-lg p-4 text-center'
              >
                <h4 className='font-bold text-base text-gray-900'>{lang.language}</h4>
                <p className='text-gray-600 text-xs mt-1'>{lang.level}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
