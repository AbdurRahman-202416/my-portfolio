import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Reveal from './Reveal';

const contactLinks = [
  { href: 'mailto:abdurrahman19011@gmail.com', label: 'abdurrahman19011@gmail.com', icon: Mail },
  { href: 'tel:+8801722341973', label: '+880 1722341973', icon: Phone },
];

const socialLinks = [
  { href: 'https://www.linkedin.com/in/abdur-rahman-cse2024/', label: 'LinkedIn', icon: Linkedin },
  { href: 'https://github.com/AbdurRahman-202416', label: 'GitHub', icon: Github },
];

export default function Contact() {
  return (
    <>
      <section
        id="contact"
        aria-labelledby="contact-title"
        className="mx-auto w-full max-w-3xl px-5 py-8 text-center md:px-12 md:py-14"
      >
        <Reveal>
          <h2 id="contact-title" className="text-3xl font-extrabold md:text-5xl">
            Get in touch
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed md:text-base">
            I'm open to new opportunities and my inbox is always open. Whether you have a question or just want to say
            hi, I'll get back to you.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:justify-center">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                className="group flex items-center justify-center gap-3 rounded-lg border border-line bg-panel px-6 py-4 font-semibold text-fg transition-[border-color,color,transform] duration-300 hover:-translate-y-0.5 hover:border-accent/60 hover:text-accent"
              >
                <Icon size={19} className="text-accent" aria-hidden="true" />
                <span className="break-all">{link.label}</span>
              </a>
            );
          })}
        </Reveal>

        <Reveal delay={220} className="mt-10 flex justify-center gap-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} (opens in a new tab)`}
                className="rounded-full p-2 text-muted transition-[color,transform] duration-300 hover:-translate-y-1 hover:text-accent"
              >
                <Icon size={26} aria-hidden="true" />
              </a>
            );
          })}
        </Reveal>
      </section>

      <footer className="mx-auto max-w-5xl border-t border-line px-5 py-8 text-center md:px-12">
        <p className="font-mono text-xs text-muted">Designed &amp; built by Abdur Rahman © {new Date().getFullYear()}</p>
        <p className="mt-1.5 text-xs text-muted/60">Dhaka, Bangladesh</p>
      </footer>
    </>
  );
}
