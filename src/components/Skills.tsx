import { 
  SiPython, SiSpring, SiNodedotjs,
  SiJavascript, SiNextdotjs, SiTailwindcss, SiRedux,
  SiMongodb, SiDocker, SiNginx,
  SiGithub
} from 'react-icons/si'
import { FaCode, FaLock, FaCog, FaUsers, FaJava, FaDatabase } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      skills: [
        { name: 'Java', icon: FaJava },
        { name: 'Python', icon: SiPython },
        { name: 'Spring Boot | Spring Framework (MVC, Data JPA, Security)', icon: SiSpring },
        { name: 'Node.js | Express.js', icon: SiNodedotjs },
        { name: 'RESTful APIs', icon: FaCode },
        { name: 'JWT & OAuth', icon: FaLock }
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'JavaScript | TypeScript', icon: SiJavascript },
        { name: 'Next.js | React.js', icon: SiNextdotjs },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Redux.js', icon: SiRedux }
      ]
    },
    {
      title: 'Database & DevOps',
      skills: [
        { name: 'MongoDB|MySQL', icon: SiMongodb },
        { name: 'Mongoose', icon: FaDatabase },
        { name: 'Docker', icon: SiDocker },
        { name: 'Nginx', icon: SiNginx },
        { name: 'CI/CD (GitHub Actions)', icon: FaCog }
      ]
    },
    {
      title: 'Tools & Practices',
      skills: [
        { name: 'GitHub | Git | GitLab', icon: SiGithub },
        { name: 'Maven | Gradle | npm | pip', icon: FaCog },
        { name: 'Clean Code & OOP Principles', icon: FaCode },
        { name: 'Agile & Startup Environment', icon: FaUsers }
      ]
    }
  ]

  return (
    <div id='skills' className='py-16 px-6 md:px-16'>
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-10'>
          <span className='text-gray-500 font-medium text-xs tracking-[0.3em] uppercase'>What I Know</span>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mt-2'>Technical Skills</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className='bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow duration-300'
            >
              <h3 className='text-lg font-bold text-gray-900 mb-4'>{category.title}</h3>
              <div className='flex flex-wrap gap-2'>
                {category.skills.map((skill, idx) => {
                  const Icon = skill.icon
                  return (
                    <span 
                      key={idx}
                      className='px-3 py-1.5 bg-gray-50 text-gray-600 rounded-lg text-xs border border-gray-200 hover:border-gray-400 transition-all duration-200 flex items-center gap-2'
                    >
                      <Icon className='text-sm flex-shrink-0' />
                      <span>{skill.name}</span>
                    </span>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
