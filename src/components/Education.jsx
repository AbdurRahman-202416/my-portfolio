export default function Education () {
  const educationDetails = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Institute of Science and Technology, National University',
      duration: '2019 - 2024',
      description:
        'Studied core concepts of Computer Science including algorithms, data structures, programming languages, and software engineering.'
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Syed Abul Hossain College, Madaripur',
      duration: '2016 - 2017',
      description:
        'Focus on Science and Mathematics, which laid the foundation for advanced studies in computer science.'
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution:
        'Shariatpur Government Technical School and College, Shariatpur',
      duration: '2014 - 2015',
      description:
        ' Focused on gaining foundational knowledge in computer science, including basic programming, networking,Computer Architecture and hardware skills.'
    }
  ]

  return (
    <section id='education' className='py-12 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 text-center'>
          Education
          <span className='block w-28 h-1 bg-blue-600 mx-auto mt-2 rounded'></span>
        </h2>
        <div className='space-y-8'>
          {educationDetails.map((education, index) => (
            <div
              key={index}
              className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow'
            >
              <h3 className='sm:text-2xl text-xl font-semibold text-blue-600'>
                {education.degree}
              </h3>
              <p className='text-gray-600 mb-2'>
                {education.institution} | {education.duration}
              </p>
              <p className='text-gray-700'>{education.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
