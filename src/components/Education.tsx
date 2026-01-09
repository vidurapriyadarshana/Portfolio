import { FaGraduationCap, FaCertificate } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

const Education = () => {
  return (
    <div className='py-16 px-6 md:px-16'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-10'>
          <span className='text-theme-light-gray font-professional text-xs tracking-[0.3em] uppercase'>Background</span>
          <h2 className='text-3xl md:text-5xl font-bold text-theme-white mt-2 font-professional'>Education & More</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          <div className='bg-theme-dark-gray/50 rounded-xl p-6 border border-theme-gray shadow-md backdrop-blur-sm'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-theme-black rounded-sm flex items-center justify-center border border-theme-gray'>
                <FaGraduationCap className='text-theme-white text-lg' />
              </div>
              <h3 className='text-xl font-bold text-theme-white font-professional'>Education</h3>
            </div>

            <div className='space-y-6'>
              {portfolioData.education.map((edu, index) => (
                <div key={index} className='relative pl-6 border-l-2 border-theme-gray'>
                  <div className='absolute -left-[5px] top-0 w-2 h-2 bg-theme-white rounded-full'></div>
                  <h4 className='text-base font-bold text-theme-white font-professional'>{edu.degree}</h4>
                  {edu.field && <p className='text-theme-light-gray text-sm font-semibold font-professional'>{edu.field}</p>}
                  <p className='text-theme-light-gray font-medium text-sm font-professional'>{edu.institution}</p>
                  <p className='text-theme-gray text-xs mt-1 font-professional'>{edu.duration}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='bg-theme-dark-gray/50 rounded-xl p-6 border border-theme-gray shadow-md backdrop-blur-sm'>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-10 h-10 bg-theme-black rounded-sm flex items-center justify-center border border-theme-gray'>
                <FaCertificate className='text-theme-white text-lg' />
              </div>
              <h3 className='text-xl font-bold text-theme-white font-professional'>Certifications</h3>
            </div>

            <div className='space-y-3'>
              {portfolioData.certifications.map((cert, index) => (
                <div key={index} className='flex items-start gap-3 p-3 bg-theme-black/30 rounded-lg border border-theme-gray hover:border-theme-white/50 transition-colors'>
                  <FaCertificate className='text-theme-light-gray mt-1 flex-shrink-0' size={14} />
                  <span className='text-theme-light-gray text-sm font-professional'>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
