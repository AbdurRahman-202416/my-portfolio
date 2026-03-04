import { ExternalLink, Github } from 'lucide-react';
import weather from '../assets/weather.jpeg';
import ecom from '../assets/e-com.jpeg';
import admin from '../assets/admin.jpeg';
import job from '../assets/job.jpeg';
import dashboard from '../assets/dashboard.png';
import dice from '../assets/dice.png';

export default function Projects() {
  const featuredProjects = [
    {
      title: 'Fintech Operations & Analytics',
      type: 'Fintech / Enterprise Dashboard',
      description: 'A multi-feature Angular dashboard for modern financial operations. Features real-time card lifecycle management, stacked bar analytics for portfolio distribution, and cross-channel transaction monitoring.',
      technologies: ['Angular', 'RxJS', 'TypeScript', 'Chart.js', 'SCSS'],
      image: dashboard,
      demoLink: '/*',
      repoLink: 'https://github.com/AbdurRahman-202416/angular-heroes-'
    },
    {
      title: 'Lucky Dice - Casino Royale',
      type: 'Next.js / TypeScript Game',
      description: 'A lightweight Next.js + TypeScript web app that simulates rolling dice with sleek animations. Features instant results, totals in a friendly modal, and a premium casino-themed UI.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      image: dice,
      demoLink: 'https://lucky-dice-eta.vercel.app/',
      repoLink: 'https://github.com/AbdurRahman-202416/lucky-dice'
    },
    {
      title: 'Admin Analytics Dashboard',
      type: 'Admin Dashboard / Data Visualization',
      description: 'A scalable admin interface for monitoring business operations, featuring responsive data tables, interactive charting, and state management for complex UI flows.',
      technologies: ['React', 'Tailwind CSS', 'Vite', 'React Router'],
      image: admin,
      demoLink: 'https://admin-dashboard-eta-three-72.vercel.app/dashboard/analytics',
      repoLink: 'https://github.com/AbdurRahman-202416/adminDashboard'
    },
    {
      title: 'E-Commerce Platform',
      type: 'Payment UI / Cart System',
      description: 'A comprehensive frontend storefront including product catalogs, cart state management, and streamlined checkout flows optimized for performance.',
      technologies: ['React', 'Tailwind CSS', 'Context API', 'Axios'],
      image: ecom,
      demoLink: 'https://react-ecommerce-swart-five.vercel.app/',
      repoLink: 'https://github.com/AbdurRahman-202416/react-ecommerce'
    },
    {
      title: 'JobHub Employer Portal',
      type: 'CMS / Forms / Tables',
      description: 'An employer-facing portal allowing businesses to manage job listings, process candidate applications, and handle complex form validation workflows.',
      technologies: ['React', 'Tailwind CSS', 'React Hook Form', 'Axios'],
      image: job,
      demoLink: '/*',
      repoLink: 'https://github.com/AbdurRahman-202416/react-job-application'
    },
    {
      title: 'Weather Forecast Dashboard',
      type: 'API-Integrated Frontend',
      description: 'A real-time weather monitoring application that integrates with third-party REST APIs, featuring data transformations and custom chart visualizations.',
      technologies: ['React', 'Chart.js', 'REST APIs', 'Tailwind CSS'],
      image: weather,
      demoLink: 'https://weather-app-blush-delta-14.vercel.app/',
      repoLink: 'https://github.com/AbdurRahman-202416/weather-app'
    }
  ];

  return (
    <section id="projects" className="py-16 lg:py-24 bg-gray-50 border-y border-gray-100 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xs sm:text-sm font-bold tracking-widest text-[#4fd1c5] uppercase mb-3 text-left sm:text-center">
            Portfolio
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2540] mb-4 text-left sm:text-center">
            Featured Work
          </h3>
          <div className="w-16 h-1 bg-[#0a2540] rounded-full mx-0 sm:mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group flex flex-col"
            >
              {/* Project Image */}
              <div className="aspect-video w-full overflow-hidden bg-gray-100 flex items-center border-b border-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col">
                <span className="text-[10px] lg:text-xs font-bold tracking-wider text-[#4fd1c5] uppercase mb-2">
                  {project.type}
                </span>
                <h4 className="text-xl font-bold text-[#0a2540] mb-3">
                  {project.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 bg-gray-50 border border-gray-200 text-gray-700 text-[10px] font-semibold rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-100">
                  {project.demoLink && project.demoLink !== '/*' && (
                    <a 
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex justify-center items-center gap-2 bg-[#0a2540] text-white px-4 py-2.5 rounded-md font-medium text-sm hover:bg-[#0a2540]/90 transition-colors"
                    >
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                  <a 
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex justify-center items-center gap-2 bg-white border border-gray-200 text-[#0a2540] px-4 py-2.5 rounded-md font-medium text-sm hover:border-[#0a2540] hover:bg-gray-50 transition-colors"
                  >
                    <Github size={16} /> View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
