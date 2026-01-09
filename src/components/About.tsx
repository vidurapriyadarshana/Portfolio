import { portfolioData } from '../data/portfolioData'

const About = () => {
  return (
    <div id='about' className='py-16 px-6 md:px-16'>
      <div className='max-w-5xl mx-auto'>
        <div className='text-center mb-10'>
          <span className='text-theme-light-gray font-professional text-xs tracking-[0.3em] uppercase'>Get To Know Me</span>
          <h2 className='text-3xl md:text-5xl font-bold text-theme-white mt-2 font-professional'>About Me</h2>
        </div>

        <div className='bg-theme-dark-gray/50 rounded-xl shadow-lg p-8 md:p-10 border border-theme-gray backdrop-blur-sm'>
          <p className='text-base md:text-lg text-theme-light-gray leading-relaxed text-center font-professional'>
            {portfolioData.professionalSummary}
          </p>

          <div className='mt-8 pt-8 border-t border-theme-gray'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
              <div className='group'>
                <div className='text-3xl font-bold text-theme-white font-professional group-hover:scale-110 transition-transform'>1+</div>
                <div className='text-theme-light-gray text-xs mt-1 font-professional'>Years Experience</div>
              </div>
              <div className='group'>
                <div className='text-3xl font-bold text-theme-white font-professional group-hover:scale-110 transition-transform'>6+</div>
                <div className='text-theme-light-gray text-xs mt-1 font-professional'>Projects Completed</div>
              </div>
              <div className='group'>
                <div className='text-3xl font-bold text-theme-white font-professional group-hover:scale-110 transition-transform'>17+</div>
                <div className='text-theme-light-gray text-xs mt-1 font-professional'>Technologies</div>
              </div>
              <div className='group'>
                <div className='text-3xl font-bold text-theme-white font-professional group-hover:scale-110 transition-transform'>100%</div>
                <div className='text-theme-light-gray text-xs mt-1 font-professional'>Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About