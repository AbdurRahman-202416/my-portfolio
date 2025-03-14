export default function Skills() {
  const skills = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'C', icon: 'fas fa-code' },
        { name: 'C++', icon: 'fas fa-code' },
        { name: 'JavaScript', icon: 'fab fa-js-square' },
        { name: 'TypeScript', icon: 'custom-ts-icon' }
      ]
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'HTML', icon: 'fab fa-html5' },
        { name: 'CSS', icon: 'fab fa-css3-alt' },
        { name: 'React.js', icon: 'fab fa-react' },
        { name: 'Bootstrap', icon: 'fab fa-bootstrap' },
        { name: 'Tailwind CSS', icon: 'fab fa-css3-alt' }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', icon: 'fab fa-node' },
        { name: 'Express.js', icon: 'fab fa-node' },
        { name: 'MongoDB', icon: 'fas fa-database' },
        { name: 'Mongoose', icon: 'fas fa-cogs' },
        { name: 'MySQL', icon: 'fas fa-database' },
        { name: 'REST API', icon: 'fas fa-plug' }
      ]
    },
    {
      category: 'Familiar',
      skills: [
        { name: 'Next.js', icon: 'fab fa-react' },
        { name: 'Shadcn/ui', icon: 'fas fa-paint-brush' },
        { name: 'Material-UI', icon: 'fas fa-paint-brush' }
      ]
    },
    {
      category: 'Tools',
      skills: [
        { name: 'Chrome Dev Tool', icon: 'fab fa-chrome' },
        { name: 'Git', icon: 'fab fa-git' },
        { name: 'Redux', icon: 'fab fa-react' },
        { name: 'Axios', icon: 'fab fa-js-square' },
        { name: 'React Router DOM', icon: 'fab fa-react' },
        { name: 'Vercel', icon: 'fas fa-cloud' },
        { name: 'Netlify', icon: 'fas fa-cloud' },
        { name: 'ESLint', icon: 'fas fa-laptop-code' }
      ]
    }
  ];

  return (
    <section id='skills' className='py-12 bg-blue-50'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold mb-8 text-center'>
          Skills
          <span className='block w-28 h-1 bg-blue-600 mx-auto mt-2 rounded'></span>
        </h2>
        <div className='space-y-8'>
          {skills.map(({ category, skills }) => (
            <div key={category}>
              <h3 className='sm:text-2xl text-xl font-semibold text-center mb-6'>
                {category}
                <span className='block w-28 shadow-xl shadow-blue-600 h-[0.5px] bg-gray-400 mx-auto mt-2 rounded'></span>
              </h3>
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto'>
                {skills.map(({ name, icon }) => (
                  <div
                    key={name}
                    className='bg-white p-4 rounded-lg shadow-sm text-center flex flex-col items-center transform transition-transform duration-500 hover:rotate-3 hover:scale-110 hover:shadow-lg border-2 border-transparent hover:border-blue-500 hover:ring-2 hover:ring-blue-400 hover:ring-opacity-50'
                  >
                    {icon === 'custom-ts-icon' ? (
                      <div className='bg-blue-600 text-white text-xl w-12 h-12 flex items-center justify-center rounded-full mb-2'>
                        TS
                      </div>
                    ) : (
                      <i className={`${icon} text-4xl mb-2 text-blue-600`} />
                    )}
                    <span className='text-lg font-medium'>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}