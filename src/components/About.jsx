import Section from './Section';
import Reveal from './Reveal';

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="grid gap-12 md:grid-cols-5 md:gap-14">
        <Reveal className="max-w-prose space-y-5 text-base leading-relaxed md:col-span-3 md:text-lg">
          <p>
            I'm a <span className="text-fg">Graduate Engineer</span> at Kona Software Lab in Dhaka. Most of my work is
            in Angular and TypeScript on the CMS and Switch Portal applications: customer and card workflows, data
            tables, filters and forms wired to REST APIs, and a real-time transaction dashboard fed by Server-Sent
            Events.
          </p>
          <p>
            I also build the front end of <span className="text-fg">KonaPlate</span>, an affiliated payment system, in
            Next.js with Zustand and TanStack Query, with a UI that works in both Korean and English. And I write{' '}
            <span className="text-fg">Playwright E2E tests</span> for product setup, card applications, customer
            lifecycle and maker–checker approvals.
          </p>
          <p>
            For my Master's research I'm working on{' '}
            <span className="text-accent">passwordless authentication with WebAuthn</span>. Outside work I build side
            projects in React and Next.js; a few of them are below.
          </p>
        </Reveal>

        <Reveal delay={150} className="flex items-start justify-center md:col-span-2 md:justify-end md:pt-2">
          <div className="group relative w-full max-w-[17rem]">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-lg border-2 border-accent/80 transition-transform duration-300 ease-out-soft group-hover:translate-x-1.5 group-hover:translate-y-1.5"
            />
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-panel shadow-xl shadow-black/30">
              <img
                src="/my-photo.jpg"
                alt="Abdur Rahman"
                width="600"
                height="800"
                loading="lazy"
                decoding="async"
                className="block h-full w-full object-cover transition-transform duration-500 ease-out-soft group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
