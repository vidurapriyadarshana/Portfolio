import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

const Projects = () => {
  return (
    <div id='projects' className='py-16 px-6 md:px-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-10'>
          <span className='text-gray-500 font-medium text-xs tracking-[0.3em] uppercase'>My Work</span>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mt-2'>Featured Projects</h2>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {portfolioData.projects.map((project, index) => (
            <div 
              key={index} 
              className='bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col'
            >
              <div className='relative h-48 bg-gray-100 overflow-hidden'>
                <img 
                  src={project.image} 
                  alt={project.name}
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
                {project.type && (
                  <div className='absolute top-3 left-3'>
                    <span className='px-2.5 py-1 bg-gray-900 text-white text-xs font-medium rounded shadow-lg'>
                      {project.type}
                    </span>
                  </div>
                )}
                <div className='absolute top-3 right-3 flex gap-2'>
                  {project.liveDemo && (
                    <a 
                      href={project.liveDemo} 
                      target='_blank' 
                      rel='noopener noreferrer'
                      className='w-8 h-8 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors shadow'
                      title='Live Demo'
                    >
                      <FaExternalLinkAlt size={14} />
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target='_blank' 
                      rel='noopener noreferrer'
                      className='w-8 h-8 bg-white rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors shadow'
                      title='GitHub'
                    >
                      <FaGithub size={16} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className='p-6 flex-1 flex flex-col'>
                <h3 className='text-lg font-bold text-gray-900 mb-2'>
                  {project.name}
                </h3>

                <p className='text-gray-600 text-sm mb-4 leading-relaxed flex-1'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mt-auto'>
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span 
                      key={idx} 
                      className='px-2.5 py-1 bg-gray-50 text-gray-600 rounded-md text-xs border border-gray-200'
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className='px-2.5 py-1 bg-gray-100 text-gray-500 rounded-md text-xs font-medium'>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='text-center mt-10'>
          <a 
            href={portfolioData.personalInfo.github}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm'
          >
            <FaGithub size={18} />
            View More on GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
