import { FaBriefcase, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

const Experience = () => {
  return (
    <div id='experience' className='py-16 px-6 md:px-16 bg-gray-50'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-10'>
          <span className='text-gray-500 font-medium text-xs tracking-[0.3em] uppercase'>My Journey</span>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mt-2'>Professional Experience</h2>
        </div>
        
        {portfolioData.experience.map((exp, index) => (
          <div key={index} className='bg-white rounded-xl shadow-sm p-8 md:p-10 border border-gray-200'>
            <div className='flex flex-col md:flex-row md:items-start gap-6'>
              <div className='w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0'>
                <FaBriefcase className='text-white text-lg' />
              </div>
              
              <div className='flex-1'>
                <h3 className='text-2xl font-bold text-gray-900 mb-2'>{exp.position}</h3>
                <h4 className='text-lg text-gray-600 font-semibold mb-3'>{exp.company}</h4>
                
                <div className='flex flex-wrap gap-4 mb-6 text-sm text-gray-500'>
                  <div className='flex items-center gap-2'>
                    <FaMapMarkerAlt size={14} />
                    <span>{exp.location}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FaClock size={14} />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <p className='text-gray-600 mb-6 leading-relaxed'>{exp.description}</p>

                <div className='mb-6'>
                  <h5 className='font-semibold text-gray-900 mb-3'>Key Achievements</h5>
                  <ul className='space-y-2'>
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className='flex items-start gap-3 text-gray-600 text-sm'>
                        <span className='text-gray-400 mt-1'>•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className='font-semibold text-gray-900 mb-3'>Technologies Used</h5>
                  <div className='flex flex-wrap gap-2'>
                    {exp.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className='px-3 py-1.5 bg-gray-50 text-gray-600 rounded-lg text-xs border border-gray-200'
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
