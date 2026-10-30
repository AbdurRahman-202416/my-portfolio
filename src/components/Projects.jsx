import { ExternalLink, Github } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';
import ecom from '../assets/e-com.jpeg';
import dice from '../assets/dice.jpg';
import admin from '../assets/admin.jpeg';
import job from '../assets/job.jpeg';
import weather from '../assets/weather.jpeg';
import dashboard from '../assets/dashboard.jpg';
import fido from '../assets/fido.jpg';
import edu from '../assets/edu.jpg';
import inventory from '../assets/inventory.jpg';

const featuredProjects = [
  {
    title: 'Smart Billing and Inventory Manager',
    description:
      'A mobile-responsive retail management system for managing inventory and sales, designed for ease of use, speed and efficiency.',
    technologies: ['Next.js 15', 'TypeScript', 'Zustand', 'Tailwind CSS'],
    image: inventory,
    demoLink: 'https://smart-billing-and-inventory-manager.vercel.app/',
    repoLink: 'https://github.com/AbdurRahman-202416/smart-billing-and-inventory-manager',
  },
  {
    title: 'FIDO Passkeys',
    description:
      'A passwordless authentication system using WebAuthn, with a secure Node.js/Express backend for server-side verification.',
    technologies: ['Next.js 15', 'React 19', 'WebAuthn', 'Node.js', 'Express'],
    image: fido,
    demoLink: 'https://authentication-passwordless-fido-au.vercel.app/',
    repoLink: 'https://github.com/AbdurRahman-202416/authentication-passwordless-fido-auth-portal',
  },
  {
    title: 'Fintech Operations & Analytics',
    description:
      'A multi-feature Angular dashboard for financial operations: card lifecycle management, stacked-bar analytics and cross-channel transaction monitoring.',
    technologies: ['Angular', 'RxJS', 'TypeScript', 'Chart.js'],
    image: dashboard,
    demoLink: 'https://angular-heroes-three.vercel.app/dashboard',
    repoLink: 'https://github.com/AbdurRahman-202416/angular-heroes-',
  },
];

const otherProjects = [
  {
    title: 'Premium Academy Portal',
    description:
      'An education site with scroll-triggered animations, interactive components and a custom design system.',
    technologies: ['Next.js', 'React 19', 'Tailwind 4', 'GSAP'],
    image: edu,
    demoLink: 'https://premium-academy-portal.vercel.app/',
    repoLink: 'https://github.com/AbdurRahman-202416/Premium-Academy-Portal',
  },
  {
    title: 'E-Commerce Website',
    description: 'Responsive storefront with product listing, filtering and cart, using Axios for API communication.',
    technologies: ['React', 'Tailwind', 'Axios', 'Context API'],
    image: ecom,
    demoLink: 'https://react-ecommerce-swart-five.vercel.app/',
    repoLink: 'https://github.com/AbdurRahman-202416/react-ecommerce',
  },
  {
    title: 'Admin Analytics Dashboard',
    description: 'Admin interface for monitoring business operations, with responsive data tables and interactive charts.',
    technologies: ['React', 'Tailwind', 'Vite', 'React Router'],
    image: admin,
    demoLink: 'https://admin-dashboard-eta-three-72.vercel.app/dashboard/analytics',
    repoLink: 'https://github.com/AbdurRahman-202416/adminDashboard',
  },
  {
    title: 'Lucky Dice – Casino Royale',
    description: 'Dice-rolling app with animated rolls, instant results, totals in a modal and a casino-themed UI.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    image: dice,
    demoLink: 'https://lucky-dice-eta.vercel.app/',
    repoLink: 'https://github.com/AbdurRahman-202416/lucky-dice',
  },
  {
    title: 'JobHub Employer Portal',
    description: 'Employer portal for managing job listings and candidate applications, with form validation workflows.',
    technologies: ['React', 'Tailwind', 'React Hook Form', 'Axios'],
    image: job,
    demoLink: null,
    repoLink: 'https://github.com/AbdurRahman-202416/react-job-application',
  },
  {
    title: 'Weather Forecast Dashboard',
    description: 'Weather app built on third-party REST APIs, with data transformations and chart visualizations.',
    technologies: ['React', 'Chart.js', 'REST APIs', 'Tailwind'],
    image: weather,
    demoLink: 'https://weather-app-blush-delta-14.vercel.app/',
    repoLink: 'https://github.com/AbdurRahman-202416/weather-app',
  },
];

function ProjectLinks({ project, size = 18 }) {
  const linkClass =
    '-my-2.5 inline-flex items-center gap-1.5 py-2.5 text-sm font-medium text-fg transition-colors duration-200 hover:text-accent';

  return (
    <div className="flex items-center gap-5">
      <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
        <Github size={size} aria-hidden="true" />
        Code
        <span className="sr-only">for {project.title} (opens in a new tab)</span>
      </a>
      {project.demoLink && (
        <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={linkClass}>
          <ExternalLink size={size} aria-hidden="true" />
          Live demo
          <span className="sr-only">of {project.title} (opens in a new tab)</span>
        </a>
      )}
    </div>
  );
}

function TechList({ technologies }) {
  return (
    <ul aria-label="Technologies" className="flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs text-accent/90">
      {technologies.map((tech) => (
        <li key={tech}>{tech}</li>
      ))}
    </ul>
  );
}

function FeaturedProject({ project, reversed }) {
  const imageLink = project.demoLink ?? project.repoLink;

  return (
    <Reveal as="li" className="grid items-center gap-6 lg:grid-cols-12 lg:gap-10">
      <a
        href={imageLink}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={-1}
        aria-hidden="true"
        className={`group relative block overflow-hidden rounded-lg bg-panel shadow-xl shadow-black/30 ring-1 ring-line lg:col-span-7 ${
          reversed ? 'lg:order-2' : ''
        }`}
      >
        <img
          src={project.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-ink/10 transition md:bg-ink/35-opacity duration-500 group-hover:opacity-0" />
      </a>

      <div className={`lg:col-span-5 ${reversed ? 'lg:order-1' : ''}`}>
        <h3 className="text-xl font-bold leading-tight md:text-2xl">{project.title}</h3>
        <p className="mt-4 leading-relaxed">{project.description}</p>
        <div className="mt-5">
          <TechList technologies={project.technologies} />
        </div>
        <div className="mt-6">
          <ProjectLinks project={project} />
        </div>
      </div>
    </Reveal>
  );
}

function ProjectCard({ project, index }) {
  return (
    <Reveal
      as="li"
      delay={(index % 3) * 90}
      className="group flex flex-col overflow-hidden rounded-lg bg-panel ring-1 ring-transparent transition-[transform,box-shadow] duration-300 ease-out-soft hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40 hover:ring-accent/30"
    >
      <div className="relative h-40 overflow-hidden bg-ink">
        <img
          src={project.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-top md:opacity-80 transition-[transform,opacity] duration-500 ease-out-soft group-hover:scale-105 group-hover:opacity-100"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <h3 className="text-lg font-bold leading-snug transition-colors duration-300 group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed">{project.description}</p>
        <div className="mt-5 border-t border-line pt-4">
          <TechList technologies={project.technologies} />
        </div>
        <div className="mt-5">
          <ProjectLinks project={project} size={16} />
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <ul className="space-y-12 md:space-y-20">
        {featuredProjects.map((project, i) => (
          <FeaturedProject key={project.title} project={project} reversed={i % 2 === 1} />
        ))}
      </ul>

      <Reveal as="h3" className="mt-12 text-lg font-bold md:mt-20 md:text-xl">
        Other projects
      </Reveal>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {otherProjects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </ul>
    </Section>
  );
}
