import Strings from '../shared/Strings'

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: Strings.FRONTEND,
      desc: Strings.FRONTEND_DESC,
      logo: '/fontend.png',
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: 2,
      title: Strings.BACKEND,
      desc: Strings.BACKEND_DESC,
      logo: '/backend.png',
      skills: ['Spring Boot', 'Node.js', 'MongoDB', 'REST APIs']
    }
  ]
  
  return (
    <div className='py-16 px-6 md:px-16'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-10'>
          <span className='text-gray-500 font-medium text-xs tracking-[0.3em] uppercase'>Services</span>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mt-2'>{Strings.SERVICES}</h2>
        </div>
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {servicesList.map((item) => (
            <div 
              key={item.id} 
              className='bg-white rounded-xl p-8 border border-gray-200 hover:shadow-md transition-all duration-300'
            >
              <div className='flex justify-center mb-6'>
                <div className='w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center'>
                  <img 
                    src={item.logo} 
                    alt={item.title}
                    className='w-10 h-10 object-contain'
                  />
                </div>
              </div>
              
              <h3 className='text-xl font-bold text-gray-900 mb-3 text-center'>{item.title}</h3>
              <p className='text-gray-600 text-center mb-6 text-sm leading-relaxed'>{item.desc}</p>
              
              <div className='flex flex-wrap gap-2 justify-center'>
                {item.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className='px-3 py-1 bg-gray-50 text-gray-600 rounded-lg text-xs border border-gray-200'
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services