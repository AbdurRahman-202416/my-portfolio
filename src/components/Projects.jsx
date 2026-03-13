import { ExternalLink, Github, PieChart, ShoppingCart, Briefcase, CloudSun, ShieldCheck, Smartphone, Layout, GraduationCap, PackageSearch } from 'lucide-react';
import ecom from '../assets/e-com.jpeg';
import dice from '../assets/dice.png';
import admin from '../assets/admin.jpeg';
import job from '../assets/job.jpeg';
import weather from '../assets/weather.jpeg';
import dashboard from '../assets/dashboard.png';
import post from '../assets/fido.png';
import edu from '../assets/edu.png';
import calc from '../assets/invatotry.png';

export default function Projects() {
  const featuredProjects = [
    {
      title: 'Smart Billing and Inventory Manager',
      description: 'A Next-generation, Mobile-Responsive Retail Management System built with Next.js 15, Tailwind CSS, and Zustand. Designed for ease of use, speed, and efficiency in managing inventory and sales.',
      technologies: ['Next.js 15', 'Tailwind CSS', 'Zustand', 'TypeScript'],
      icon: <PackageSearch size={40} className="text-[#64ffda]" />,
      image: calc,
      demoLink: 'https://smart-billing-and-inventory-manager.vercel.app/',
      repoLink: 'https://github.com/AbdurRahman-202416/smart-billing-and-inventory-manager'
    },
    {
      title: 'Premium Academy Portal',
      description: 'This project features a premium look and feel with complex scroll-triggered animations, interactive components, and a custom design system centered around a modern educational aesthetic.',
      technologies: ['Next.js', 'React 19', 'Tailwind 4', 'GSAP', 'TypeScript'],
      icon: <GraduationCap size={40} className="text-[#64ffda]" />,
      image: edu,
      demoLink: 'https://premium-academy-portal.vercel.app/',
      repoLink: 'https://github.com/AbdurRahman-202416/Premium-Academy-Portal'
    },
    {
      title: 'E-Commerce Website',
      description: 'Developed responsive e-commerce UI with listing, filtering, and cart using React & Tailwind. Utilized Axios for efficient API communication and dynamic product data updates.',
      technologies: ['React', 'Tailwind', 'Axios', 'Context API'],
      icon: <ShoppingCart size={40} className="text-[#64ffda]" />,
      image: ecom,
      demoLink: 'https://react-ecommerce-swart-five.vercel.app/',
      repoLink: 'https://github.com/AbdurRahman-202416/react-ecommerce'
    },
    {
      title: 'FIDO Passkeys',
      description: 'Built a passwordless authentication system using WebAuthn, Next.js 15, and React 19. Implemented a secure Node.js/Express backend for robust server-side verification.',
      technologies: ['Next.js 15', 'WebAuthn', 'Node.js', 'Express', 'JSON SERVER'],
      icon: <ShieldCheck size={40} className="text-[#64ffda]" />,
      image: post,
      demoLink: 'https://authentication-passwordless-fido-au.vercel.app/', 
      repoLink: 'https://github.com/AbdurRahman-202416/authentication-passwordless-fido-auth-portal'
    },
    {
      title: 'Fintech Operations & Analytics',
      description: 'A multi-feature Angular dashboard for modern financial operations. Features real-time card lifecycle management, stacked bar analytics, and cross-channel transaction monitoring.',
      technologies: ['Angular', 'RxJS', 'TypeScript', 'Chart.js'],
      icon: <PieChart size={40} className="text-[#64ffda]" />,
      image: dashboard,
      demoLink: 'https://angular-heroes-three.vercel.app/dashboard',
      repoLink: 'https://github.com/AbdurRahman-202416/angular-heroes-'
    },
    {
      title: 'Lucky Dice - Casino Royale',
      description: 'A lightweight Next.js + TypeScript web app that simulates rolling dice with sleek animations. Features instant results, totals in a modal, and a premium casino-themed UI.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
      icon: <Smartphone size={40} className="text-[#64ffda]" />,
      image: dice,
      demoLink: 'https://lucky-dice-eta.vercel.app/',
      repoLink: 'https://github.com/AbdurRahman-202416/lucky-dice'
    },
    {
      title: 'Admin Analytics Dashboard',
      description: 'A scalable admin interface for monitoring business operations, featuring responsive data tables, interactive charting, and state management for complex UI flows.',
      technologies: ['React', 'Tailwind', 'Vite', 'React Router'],
      icon: <Layout size={40} className="text-[#64ffda]" />,
      image: admin,
      demoLink: 'https://admin-dashboard-eta-three-72.vercel.app/dashboard/analytics',
      repoLink: 'https://github.com/AbdurRahman-202416/adminDashboard'
    },
    {
      title: 'JobHub Employer Portal',
      description: 'An employer-facing portal allowing businesses to manage job listings, process candidate applications, and handle complex form validation workflows.',
      technologies: ['React', 'Tailwind', 'React Hook Form', 'Axios'],
      icon: <Briefcase size={40} className="text-[#64ffda]" />,
      image: job,
      demoLink: '/*',
      repoLink: 'https://github.com/AbdurRahman-202416/react-job-application'
    },
    {
      title: 'Weather Forecast Dashboard',
      description: 'A real-time weather monitoring application that integrates with third-party REST APIs, featuring data transformations and custom chart visualizations.',
      technologies: ['React', 'Chart.js', 'REST APIs', 'Tailwind'],
      icon: <CloudSun size={40} className="text-[#64ffda]" />,
      image: weather,
      demoLink: 'https://weather-app-blush-delta-14.vercel.app/',
      repoLink: 'https://github.com/AbdurRahman-202416/weather-app'
    }
  ];

  return (
    <section id="projects" className="py-8 md:py-24 px-6 md:px-12 mx-auto">
      <div className="flex items-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center text-[#ccd6f6] whitespace-nowrap">
          <span className="text-[#3b82f6] font-mono text-xl mr-2">03.</span> Work
        </h2>
        <div className="ml-4 h-[1px] bg-[#233554] w-full max-w-md hidden sm:block"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project, index) => (
          <div 
            key={index} 
            className="bg-[#112240] rounded-lg hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full border border-transparent hover:border-[#3b82f6]/30 shadow-xl overflow-hidden"
          >
            {/* Project Image Header */}
            <div className="relative h-48 overflow-hidden bg-[#0a192f]">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#3b82f6]/10 group-hover:bg-transparent transition-colors duration-300"></div>
              
              {/* Links Overlay */}
              <div className="absolute top-4 right-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a 
                  href={project.repoLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="bg-[#0a192f]/80 p-2 rounded-full text-[#ccd6f6] hover:text-[#64ffda] backdrop-blur-sm"
                >
                  <Github size={18} />
                </a>
                {project.demoLink && project.demoLink !== '/*' && (
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-[#0a192f]/80 p-2 rounded-full text-[#ccd6f6] hover:text-[#64ffda] backdrop-blur-sm"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-6">
                <div className="p-2 bg-[#0a192f] rounded-lg shadow-inner ring-1 ring-[#3b82f6]/20">
                  {project.icon}
                </div>
                {/* Mobile/Default Links (if image links are hidden) */}
                <div className="flex md:hidden space-x-4 text-[#ccd6f6]">
                  <a href={project.repoLink} target="_blank" rel="noreferrer" className="hover:text-[#64ffda] transition-colors p-1">
                    <Github size={20} />
                  </a>
                  {project.demoLink && project.demoLink !== '/*' && (
                    <a href={project.demoLink} target="_blank" rel="noreferrer" className="hover:text-[#64ffda] transition-colors p-1">
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-[#ccd6f6] mb-3 group-hover:text-[#64ffda] transition-colors italic">
                {project.title}
              </h3>
              
              <p className="text-[#8892b0] text-sm leading-relaxed mb-6 flex-grow project-description">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto pt-4 border-t border-[#233554]">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-[11px] font-mono text-[#3b82f6] uppercase tracking-wider">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
