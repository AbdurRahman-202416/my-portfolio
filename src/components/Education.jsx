import Section from './Section';
import Reveal from './Reveal';

const education = [
  {
    degree: 'Master of Computer Science and Engineering (MCSE)',
    description: 'Ongoing research on passwordless identity management using WebAuthn.',
    institution: 'National University, Bangladesh',
    duration: '2026 – Present',
  },
  {
    degree: 'Bachelor of Science in Computer Science (CSE)',
    description: 'Focus on software engineering and core algorithms.',
    institution: 'Institute of Science and Technology, National University',
    duration: '2018 – 2022',
  },
];

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="grid gap-6 md:grid-cols-2">
        {education.map((edu, i) => (
          <Reveal
            as="li"
            key={edu.degree}
            delay={i * 120}
            className="rounded-lg border-l-2 border-accent bg-panel p-5 transition-[background-color,transform] duration-300 ease-out-soft hover:-translate-y-1 hover:bg-panel-hover md:p-8"
          >
            <p className="font-mono text-xs text-accent">{edu.duration}</p>
            <h3 className="mt-2 text-lg font-bold leading-snug md:text-xl">{edu.degree}</h3>
            <p className="mt-1 text-sm text-fg/70">{edu.institution}</p>
            <p className="mt-4 text-sm leading-relaxed">{edu.description}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
