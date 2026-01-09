import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { portfolioData } from '../data/portfolioData'

const Projects = () => {
  return (
    <div id='projects' className='py-16 px-6 md:px-16'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-10'>
          <span className='text-theme-light-gray font-professional text-xs tracking-[0.3em] uppercase'>My Work</span>
          <h2 className='text-3xl md:text-5xl font-bold text-theme-white mt-2 font-professional'>Featured Projects</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {portfolioData.projects.map((project, index) => (
            <div
              key={index}
              className='bg-theme-dark-gray/50 rounded-xl overflow-hidden border border-theme-gray hover:border-theme-white/50 transition-all duration-300 flex flex-col group backdrop-blur-sm'
            >
              <div className='relative h-48 bg-theme-black overflow-hidden'>
                <img
                  src={project.image}
                  alt={project.name}
                  className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0'
                />
                {project.type && (
                  <div className='absolute top-3 left-3'>
                    <span className='px-2.5 py-1 bg-theme-black/80 text-theme-white text-xs font-medium rounded-sm shadow-lg border border-theme-gray font-professional'>
                      {project.type}
                    </span>
                  </div>
                )}
                <div className='absolute top-3 right-3 flex gap-2 translate-x-10 group-hover:translate-x-0 transition-transform duration-300'>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-8 h-8 bg-theme-black text-theme-white rounded-sm flex items-center justify-center hover:bg-theme-white hover:text-theme-black transition-colors shadow border border-theme-gray'
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
                      className='w-8 h-8 bg-theme-black text-theme-white rounded-sm flex items-center justify-center hover:bg-theme-white hover:text-theme-black transition-colors shadow border border-theme-gray'
                      title='GitHub'
                    >
                      <FaGithub size={16} />
                    </a>
                  )}
                </div>
              </div>

              <div className='p-6 flex-1 flex flex-col'>
                <h3 className='text-lg font-bold text-theme-white mb-2 font-professional'>
                  {project.name}
                </h3>

                <p className='text-theme-light-gray text-sm mb-4 leading-relaxed flex-1 font-professional'>
                  {project.description}
                </p>

                <div className='flex flex-wrap gap-2 mt-auto'>
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className='px-2.5 py-1 bg-theme-black text-theme-light-gray rounded-sm text-xs border border-theme-gray font-professional'
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className='px-2.5 py-1 bg-theme-gray text-theme-light-gray rounded-sm text-xs font-medium font-professional'>
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
            className='inline-flex items-center gap-2 px-6 py-3 bg-theme-white text-theme-black rounded-sm hover:bg-theme-light-gray transition-colors font-bold text-sm font-professional'
          >
            <span className='flex items-center gap-2'>
              <FaGithub size={18} />
              View More on GitHub
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
