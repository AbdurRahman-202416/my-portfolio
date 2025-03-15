import cal from '../assets/Calculator.jpeg'
import weather from '../assets/weather.jpeg'
import ecom from '../assets/e-com.jpeg'
import todo from '../assets/todo.jpeg'
import admin from '../assets/admin.jpeg'
import postOffice from '../assets/post.jpeg'
import job from '../assets/job.jpeg'

export default function Projects() {
  const projects = [
    {
      title: 'Admin Dashboard',
      description:
        'A modern, fully responsive admin dashboard built with Vite, React, Tailwind CSS, and React Router. Designed for managing and analyzing eCommerce or business operations.',
      technologies: [
        'Vite',
        'JavaScript',
        'React.js',
        'Tailwind CSS',
        'React Router'
      ],
      image: admin,
      demoLink:
        'https://admin-dashboard-eta-three-72.vercel.app/dashboard/analytics',
      repoLink: 'https://github.com/AbdurRahman-202416/adminDashboard'
    },
    {
      title: 'Morden Web Calculator',
      description:
        'Interactive Calculator Application with Keyboard Support and Sound Effects',
      technologies: ['HTML-5', 'CSS', 'Tailwind Css', 'JavaScript'],
      image: cal,
      demoLink: 'https://abdurrahman-202416.github.io/web-calculator/',
      repoLink: 'https://github.com/AbdurRahman-202416/web-calculator'
    },
    {
      title: 'React JobHub',
      description:
        'Employers can post detailed job descriptions, required qualifications, and company information, giving potential candidates a clear understanding of the roles they are applying for.',
      technologies: [
        'Vite',
        'JavaScript',
        'Tailwind Css',
        'React Router',
        'React js',
        'Axios'
      ],
      image: job,
      demoLink: '/*',
      repoLink: 'https://github.com/AbdurRahman-202416/react-job-application'
    },
    {
      title: 'Weather App with 5-Day Forecast',
      description:
        'Weather application built using React.js that provides real-time weather data, including a 5-day forecast with a bar chart visualization of daily temperatures.',
      technologies: [
        'Vite',
        'JavaScript',
        'React.js',
        'Chart.js',
        'Tailwind CSS',
        'Axios'
      ],
      image: weather,
      demoLink: 'https://weather-app-blush-delta-14.vercel.app/',
      repoLink: 'https://github.com/AbdurRahman-202416/weather-app'
    },
    {
      title: 'E-Commerce Website',
      description:
        'Collaboratively developed a comprehensive E-commerce website using React.js and Tailwind CSS for performance and scalability.',
      technologies: ['Vite', 'JavaScript', 'React.js', 'Tailwind CSS', 'Axios'],
      image: ecom,
      demoLink: 'https://react-ecommerce-swart-five.vercel.app/',
      repoLink: 'https://github.com/AbdurRahman-202416/react-ecommerce'
    },
    {
      title: 'To-Do List App (CRUD API)',
      description:
        'A simple CRUD API built using Node.js, Express, MongoDB, and Mongoose. Allows users to manage their to-do tasks with the ability to add, read, update, and delete tasks.',
      technologies: [
        'Vite',
        'JavaScript',
        'React.js',
        'Tailwind CSS',
        'Axios',
        ' Node.js',
        'Express.js',
        'MongoDB',
        'Mongoose'
      ],
      image: todo,
      demoLink: 'https://todo-list-lac-psi-88.vercel.app/',
      repoLink: 'https://github.com/AbdurRahman-202416/crud-api-node-mongo',
      backendLink: 'https://crud-api-node-mongo.vercel.app/api/todos'
    },

    {
      title: 'Postal Details Finder',
      description:
        'A web application to fetch and display location details based on postal codes. Uses an external API to provide country, state, and place details with an intuitive UI.',
      technologies: ['React.js', 'Tailwind CSS', 'Axios'],
      image: postOffice,
      demoLink: 'https://post-office-tracker-taupe.vercel.app/',
      repoLink: 'https://github.com/AbdurRahman-202416/Post-office-tracker'
    }
  ]

  return (
    <section id='projects' className='py-2 bg-blue-50'>
      <div className='container flex flex-col items-center justify-center gap-3 mx-auto px-4'>
        <h2 className='text-3xl font-bold  text-center text-gray-800'>
          Projects
          <span className='block w-28 h-1 bg-blue-600 mx-auto mt-2 rounded'></span>
        </h2>
        <div className='grid md:grid-cols-2 gap-4'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='bg-white px-2 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col h-full'
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-64 object-contain rounded-lg mb-4'
              />
              <h3 className='text-1xl font-semibold mb-2 text-gray-800'>
                {project.title}
              </h3>
              <p className='text-gray-600 mb-4'>{project.description}</p>

              {/* Technologies */}
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className='bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold'
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons Footer */}
              <div className="mt-auto flex justify-between items-center gap-4 pt-6 border-t">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-6 py-1 text-white bg-blue-600 rounded-lg text-sm font-semibold transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    Live Demo
                  </a>
                )}
                <a
                  href={project.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-6 py-1 text-white bg-gray-800 rounded-lg text-sm font-semibold transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-500"
                >
                  GitHub Repo
                </a>
                {project.backendLink && (
                  <a
                    href={project.backendLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-6 py-1 text-white bg-green-600 rounded-lg text-sm font-semibold transition duration-300 hover:scale-105 hover:shadow-lg hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300"
                  >
                    Backend API
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
