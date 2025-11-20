const Skills = () => {
  const skillCategories = [
    {
      title: 'Backend Development',
      skills: ['Java', 'Python', 'Spring Boot | Spring Framework (MVC, Data JPA, Security)', 'Node.js | Express.js', 'RESTful APIs', 'JWT & OAuth']
    },
    {
      title: 'Frontend Development',
      skills: ['JavaScript | TypeScript', 'Next.js | React.js', 'Tailwind CSS', 'Redux.js']
    },
    {
      title: 'Database & DevOps',
      skills: ['MongoDB|MySQL', 'Mongoose', 'Docker', 'Nginx', 'CI/CD (GitHub Actions)']
    },
    {
      title: 'Tools & Practices',
      skills: ['GitHub | Git | GitLab', 'Maven | Gradle | npm | pip', 'Clean Code & OOP Principles', 'Agile & Startup Environment']
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
                {category.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className='px-3 py-1.5 bg-gray-50 text-gray-600 rounded-lg text-xs border border-gray-200 hover:border-gray-400 transition-all duration-200'
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

export default Skills
