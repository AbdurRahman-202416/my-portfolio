import { Download } from 'lucide-react';
import Typewriter from 'typewriter-effect';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

const taglines = [
  'I build interfaces for card and payment operations.',
  'I work across Angular, React and Next.js.',
  'I automate end-to-end journeys with Playwright.',
];

const CV_URL = 'https://drive.google.com/file/d/1nCOzrHj_qR6jP3WZuN0oaUUgzRSv9AO1/view?usp=sharing';

export default function Hero() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="home"
      className="relative isolate mx-auto flex min-h-[100svh] w-full max-w-5xl flex-col justify-center px-5 pb-16 pt-28 md:px-12"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 -z-10 h-[420px] w-[420px] rounded-full bg-accent/[0.07] blur-3xl"
      />

      <p className="load-in font-mono text-sm text-accent sm:text-base" style={{ '--delay': '100ms' }}>
        Hi, I'm
      </p>

      <h1
        className="load-in mt-4 text-[clamp(2rem,10vw,2.75rem)] font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
        style={{ '--delay': '200ms' }}
      >
        Abdur Rahman.
      </h1>

      <div
        className="load-in mt-3 min-h-[2.5em] max-w-4xl md:min-h-[1.2em] text-xl font-bold leading-tight text-muted sm:text-2xl md:text-3xl lg:text-4xl"
        style={{ '--delay': '320ms' }}
      >
        {reducedMotion ? (
          <span>{taglines[0]}</span>
        ) : (
          <Typewriter
            options={{
              strings: taglines,
              autoStart: true,
              loop: true,
              delay: 45,
              deleteSpeed: 25,
              pauseFor: 2200,
            }}
          />
        )}
      </div>

      <p
        className="load-in mt-6 max-w-xl text-[15px] leading-relaxed sm:text-base md:mt-8 md:text-lg"
        style={{ '--delay': '440ms' }}
      >
        I'm a <span className="text-fg">Graduate Engineer</span> at{' '}
        <span className="text-accent">Kona Software Lab</span>. I build Angular enterprise portals for card
        management and switch operations, including a real-time SSE transaction dashboard, and the Next.js
        front end of KonaPlate. I also write Playwright end-to-end tests.
      </p>

      <div
        className="load-in mt-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-5"
        style={{ '--delay': '560ms' }}
      >
        <a
          href="#projects"
          className="rounded-md border border-accent px-7 py-3.5 text-center font-mono text-sm text-accent transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-accent/10"
        >
          See my work
        </a>
        <a
          href={CV_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-md bg-accent px-7 py-3.5 text-sm font-bold text-ink shadow-[0_8px_24px_-8px_rgb(100_255_218/0.55)] transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-8px_rgb(100_255_218/0.7)] active:translate-y-0"
        >
          <Download size={17} aria-hidden="true" />
          Download CV
        </a>
        <a
          href="#contact"
          className="px-2 py-2 text-center text-sm font-medium text-fg underline-offset-8 transition-colors hover:text-accent hover:underline"
        >
          Get in touch
        </a>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="load-in absolute bottom-10 right-5 hidden flex-col items-center gap-3 text-muted transition-colors hover:text-accent md:right-12 lg:flex"
        style={{ '--delay': '900ms' }}
      >
        <span className="scroll-cue block h-16 w-px bg-current" />
        <span className="font-mono text-[10px] tracking-widest [writing-mode:vertical-rl]">scroll</span>
      </a>
    </section>
  );
}
