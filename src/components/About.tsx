import { portfolioData } from '../data/portfolioData'

const About = () => {
  return (
    <div id='about' className='py-16 px-6 md:px-16'>
      <div className='max-w-5xl mx-auto'>
        <div className='text-center mb-10'>
          <span className='text-gray-500 font-medium text-xs tracking-[0.3em] uppercase'>Get To Know Me</span>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mt-2'>About Me</h2>
        </div>
        
        <div className='bg-white rounded-xl shadow-sm p-8 md:p-10 border border-gray-100'>
          <p className='text-base md:text-lg text-gray-600 leading-relaxed text-center'>
            {portfolioData.professionalSummary}
          </p>
          
          <div className='mt-8 pt-8 border-t border-gray-100'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 text-center'>
              <div>
                <div className='text-2xl font-bold text-gray-900'>1+</div>
                <div className='text-gray-500 text-xs mt-1'>Years Experience</div>
              </div>
              <div>
                <div className='text-2xl font-bold text-gray-900'>6+</div>
                <div className='text-gray-500 text-xs mt-1'>Projects Completed</div>
              </div>
              <div>
                <div className='text-2xl font-bold text-gray-900'>17+</div>
                <div className='text-gray-500 text-xs mt-1'>Technologies</div>
              </div>
              <div>
                <div className='text-2xl font-bold text-gray-900'>100%</div>
                <div className='text-gray-500 text-xs mt-1'>Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About