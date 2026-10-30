import { MapPin } from 'lucide-react';
import Section from './Section';
import Reveal from './Reveal';

const experiences = [
  {
    role: 'Graduate Engineer',
    company: 'Kona Software Lab Limited',
    location: 'Dhaka, Bangladesh',
    duration: 'May 2025 – Present',
    current: true,
    summary:
      'I work on two product lines at Kona Software Lab: CMS and Switch Portal, Angular enterprise applications for customer, card and transaction management; and KonaPlate Affiliate WebView, a Next.js white-label prepaid card WebView embedded in partner mobile apps.',
    projects: [
      {
        name: 'CMS and Switch Portal',
        context: 'Angular enterprise applications for card issuers',
        responsibilities: [
          'Develop customer and card management workflows covering card activation, international payment controls, and credit, debit, and prepaid card applications; integrate REST APIs and build reusable components, data tables, filters, forms, and validation.',
          'Develop SSE-powered transaction dashboards displaying throughput, approval rates, response times, network health, transaction details, and decline reasons; support internationalized interfaces across enterprise modules.',
          'Work on notification templates, rewards, sanctions, journal entries, and ATM FIT configuration; maintain Playwright E2E tests for card applications, customer lifecycle, and Maker–Checker approval workflows.',
        ],
        stack: [
          'Angular',
          'TypeScript',
          'RxJS',
          'Angular Material',
          'Angular CDK',
          'ngx-formly',
          'ngx-datatable',
          'ngx-translate',
          'ApexCharts',
        ],
      },
      {
        name: 'KonaPlate Affiliate WebView (Revamp)',
        context: 'White-label prepaid card WebView for partner mobile apps',
        responsibilities: [
          'Developed white-label prepaid card WebView modules for partner mobile apps, including Card Registration, Card List and Tracking, Pay Home, PG/QR Payments, ATM/Store Withdrawals, and Refunds.',
          'Built pixel-accurate, mobile-first interfaces from Figma using Tailwind CSS, shadcn/ui, and Radix UI; implemented Zustand for state management and TanStack React Query for asynchronous data fetching and caching.',
          'Resolved design and functional issues from KSL reviews, HQ inspections, and design QA; developed Playwright E2E tests for Card List and Card Details, and prototyped face detection, fingerprint authentication, and React Native WebView hosting.',
        ],
        stack: [
          'Next.js 15',
          'React 19',
          'TypeScript',
          'Zustand',
          'TanStack React Query',
          'Tailwind CSS',
          'shadcn/ui',
          'Playwright',
        ],
      },
    ],
  },
  {
    role: 'Front-End Developer Intern',
    company: 'Kona Software Lab Limited',
    location: 'Dhaka, Bangladesh',
    duration: 'Sep 2024 – Dec 2024',
    responsibilities: [
      'Gained hands-on experience in HTML, CSS, Tailwind CSS, JavaScript, and React.js; developed reusable UI components.',
      'Collaborated with the development team to implement responsive designs across different screen sizes.',
    ],
  },
];

function BulletList({ items, className = '' }) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item) => {
        const { label, text } = typeof item === 'string' ? { text: item } : item;
        return (
          <li key={label ?? text} className="flex gap-3 leading-relaxed">
            <span aria-hidden="true" className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              {label && <strong className="font-semibold text-fg">{label}: </strong>}
              {text}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function StackList({ items }) {
  return (
    <ul aria-label="Technologies used" className="flex flex-wrap gap-2">
      {items.map((tech) => (
        <li key={tech} className="rounded-full bg-accent/10 px-3 py-1 font-mono text-xs text-accent">
          {tech}
        </li>
      ))}
    </ul>
  );
}

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-8 md:space-y-12">
        {experiences.map((exp) => (
          <Reveal as="li" key={exp.role} className="relative border-l border-line pl-5 md:pl-10">
            <span
              aria-hidden="true"
              className={`absolute -left-[7px] top-2 h-3.5 w-3.5 rounded-full border-2 border-accent bg-ink ${
                exp.current ? 'pulse-ring' : ''
              }`}
            />

            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <h3 className="text-lg font-bold leading-snug md:text-xl">
                {exp.role} <span className="text-accent">@ {exp.company}</span>
              </h3>
              <span className="w-fit shrink-0 rounded-full bg-panel px-3 py-1 font-mono text-xs text-muted">
                {exp.duration}
              </span>
            </div>
            <p className="mt-2 flex items-center gap-2 text-sm text-muted">
              <MapPin size={14} className="text-accent" aria-hidden="true" /> {exp.location}
            </p>

            {exp.summary && <p className="mt-4 max-w-3xl text-[15px] leading-relaxed md:text-base">{exp.summary}</p>}

            {exp.responsibilities && (
              <BulletList items={exp.responsibilities} className="mt-5 max-w-3xl text-[15px] md:text-base" />
            )}

            {exp.projects?.map((project, i) => (
              <Reveal
                key={project.name}
                delay={120}
                className={`group ${i === 0 ? 'mt-6 md:mt-8' : 'mt-5 md:mt-6'} md:rounded-lg md:border md:border-line md:bg-panel/60 md:p-8 md:transition-colors md:duration-300 md:hover:border-accent/40`}
              >
                <h4 className="text-base font-bold text-fg transition-colors duration-300 group-hover:text-accent md:text-lg">
                  {project.name}
                </h4>
                <p className="mt-1 text-sm text-muted">{project.context}</p>
                <BulletList items={project.responsibilities} className="mt-4 text-sm md:text-[15px]" />
                <div className="mt-6">
                  <StackList items={project.stack} />
                </div>
              </Reveal>
            ))}
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
