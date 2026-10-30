import Section from './Section';
import Reveal from './Reveal';

const skillCategories = [
  { title: 'Languages', skills: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3'] },
  {
    title: 'Frontend',
    skills: ['Angular', 'React', 'Next.js', 'Tailwind CSS', 'SCSS', 'Angular Material', 'shadcn/ui'],
  },
  { title: 'State & data fetching', skills: ['RxJS', 'Zustand', 'Redux', 'TanStack Query'] },
  { title: 'APIs & testing', skills: ['REST APIs', 'Axios', 'SSE', 'Playwright', 'E2E Testing'] },
  { title: 'Backend', skills: ['Node.js', 'Express.js', 'NestJS (learning)'] },
  {
    title: 'AI-assisted development',
    skills: ['Cursor', 'Claude Code CLI', 'AI Agents', 'MCP', 'Agent Skills and Rules'],
  },
  { title: 'Tools', skills: ['Git', 'GitHub', 'Jira', 'Chrome DevTools', 'Vercel'] },
  {
    title: 'Soft skills',
    skills: ['Problem-Solving', 'Analytical Thinking', 'Team Collaboration', 'Adaptability'],
  },
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-line border-y border-line">
        {skillCategories.map((category, i) => (
          <Reveal
            key={category.title}
            delay={i * 60}
            className="grid gap-3 py-5 sm:grid-cols-[12rem_1fr] sm:items-center sm:gap-8 md:py-6"
          >
            <dt className="text-sm font-semibold text-fg">{category.title}</dt>
            <dd className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="cursor-default rounded-md border border-line px-3 py-1.5 font-mono text-xs text-muted transition-[color,border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent sm:text-[13px]"
                >
                  {skill}
                </span>
              ))}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
