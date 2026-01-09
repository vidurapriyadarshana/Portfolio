import Strings from '../shared/Strings'
import { FaCode, FaServer } from 'react-icons/fa'

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: Strings.FRONTEND,
      desc: Strings.FRONTEND_DESC,
      icon: FaCode,
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: 2,
      title: Strings.BACKEND,
      desc: Strings.BACKEND_DESC,
      icon: FaServer,
      skills: ['Spring Boot', 'Node.js', 'MongoDB', 'REST APIs']
    }
  ]

  return (
    <div className='py-16 px-6 md:px-16'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-10'>
          <span className='text-theme-light-gray font-professional text-xs tracking-[0.3em] uppercase'>Services</span>
          <h2 className='text-3xl md:text-5xl font-bold text-theme-white mt-2 font-professional'>{Strings.SERVICES}</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {servicesList.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className='bg-theme-dark-gray/50 rounded-xl p-8 border border-theme-gray hover:shadow-lg hover:border-theme-white/50 transition-all duration-300 backdrop-blur-sm'
              >
                <div className='flex justify-center mb-6'>
                  <div className='w-16 h-16 bg-theme-black rounded-sm flex items-center justify-center border border-theme-gray group hover:bg-theme-white transition-colors duration-300'>
                    <Icon className='text-theme-white w-8 h-8 group-hover:text-theme-black transition-colors duration-300' />
                  </div>
                </div>

                <h3 className='text-xl font-bold text-theme-white mb-3 text-center font-professional'>{item.title}</h3>
                <p className='text-theme-light-gray text-center mb-6 text-sm leading-relaxed font-professional'>{item.desc}</p>

                <div className='flex flex-wrap gap-2 justify-center'>
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className='px-3 py-1 bg-theme-black text-theme-light-gray rounded-sm text-xs border border-theme-gray font-professional'
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Services