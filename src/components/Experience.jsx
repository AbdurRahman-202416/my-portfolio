export default function Experience () {
  const experiences = [
    {
      company: 'Kona Software Lab Limited',
      role: 'Trainee Front-End Developer ',
      duration: '17-Sep 2024 - 16-Dec 2024',
      description:
        'Gained hands-on experience in HTML, CSS, JavaScript, and React. Developed and improved UI components for web applications. Worked collaboratively with the development team to implement responsive designs. Learned Jira, Git, React Router DOM, Tailwind CSS, and more.'
    }
  ]

  return (
    <section id='experience' className='py-12 bg-gray-50'>
      <div className='container mx-auto px-6'>
        <h2 className='text-3xl font-bold mb-8 text-center text-gray-800'>
          Experience
          <span className='block w-28 h-1 bg-blue-600 mx-auto mt-2 rounded'></span>
        </h2>
        <div className='max-w-3xl mx-auto space-y-6'>
          {experiences.map((exp, index) => (
            <div
              key={index}
              className='p-6 bg-white rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl'
            >
              <h3 className='sm:text-2xl text-xl font-semibold text-gray-800 mb-2'>
                {exp.role}
              </h3>
              <p className='text-blue-600 mb-4'>
                {exp.company} • {exp.duration}
              </p>
              <p className='text-gray-600 leading-relaxed sm:text text-sm  '>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
