import { portfolioData } from '../data/portfolioData'

const Header = () => {
  const menu = [
    {
      id: 1,
      name: 'HOME',
      href: '#home'
    },
    {
      id: 2,
      name: 'ABOUT',
      href: '#about'
    },
    {
      id: 3,
      name: 'SKILLS',
      href: '#skills'
    },
    {
      id: 4,
      name: 'EXPERIENCE',
      href: '#experience'
    },
    {
      id: 5,
      name: 'PROJECTS',
      href: '#projects'
    },
    {
      id: 6,
      name: 'CONTACT',
      href: '#contact'
    }
  ]

  return (
    <div className='fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white border-b border-gray-200 shadow-sm h-20 px-8'>
      <div className='flex items-center gap-2'>
        <span className='font-bold text-2xl text-gray-900 tracking-tight'>
          Vidura<span className='text-gray-400'>.</span>
        </span>
      </div>
      
      <div className='hidden md:flex gap-8'>
        {menu.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className='text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors'
          >
            {item.name}
          </a>
        ))}
      </div>
      
      <a 
        href={`mailto:${portfolioData.personalInfo.email}`}
        className='px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium'
      >
        Contact Me
      </a>
    </div>
  )
}

export default Header
