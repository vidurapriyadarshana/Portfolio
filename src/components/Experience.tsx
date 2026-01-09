import { FaBriefcase, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

const Experience = () => {
  return (
    <div id='experience' className='py-16 px-6 md:px-16 bg-transparent'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-10'>
          <span className='text-theme-light-gray font-professional text-xs tracking-[0.3em] uppercase'>My Journey</span>
          <h2 className='text-3xl md:text-5xl font-bold text-theme-white mt-2 font-professional'>Professional Experience</h2>
        </div>

        {portfolioData.experience.map((exp, index) => (
          <div key={index} className='bg-theme-dark-gray/50 rounded-xl shadow-lg p-8 md:p-10 border border-theme-gray backdrop-blur-sm mb-6'>
            <div className='flex flex-col md:flex-row md:items-start gap-6'>
              <div className='w-12 h-12 bg-theme-black rounded-sm flex items-center justify-center flex-shrink-0 border border-theme-gray rotate-3 group-hover:rotate-0 transition-transform'>
                <FaBriefcase className='text-theme-white text-lg' />
              </div>

              <div className='flex-1'>
                <h3 className='text-2xl font-bold text-theme-white mb-2 font-professional'>{exp.position}</h3>
                <h4 className='text-lg text-theme-light-gray font-semibold mb-3 font-professional'>{exp.company}</h4>

                <div className='flex flex-wrap gap-4 mb-6 text-sm text-theme-light-gray font-professional'>
                  <div className='flex items-center gap-2'>
                    <FaMapMarkerAlt size={14} />
                    <span>{exp.location}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <FaClock size={14} />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <p className='text-theme-light-gray mb-6 leading-relaxed font-professional'>{exp.description}</p>

                <div className='mb-6'>
                  <h5 className='font-semibold text-theme-white mb-3 font-professional'>Key Achievements</h5>
                  <ul className='space-y-2'>
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className='flex items-start gap-3 text-theme-light-gray text-sm font-professional'>
                        <span className='text-theme-white mt-1'>•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className='font-semibold text-theme-white mb-3 font-professional'>Technologies Used</h5>
                  <div className='flex flex-wrap gap-2'>
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className='px-3 py-1.5 bg-theme-black text-theme-light-gray rounded-sm text-xs border border-theme-gray font-professional'
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
