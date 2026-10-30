import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Education', id: 'education' },
  { name: 'Contact', id: 'contact' },
];

function Logo() {
  return (
    <svg width="44" height="44" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#64ffda" />
          <stop offset="100%" stopColor="#3b82f6" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <polygon
        points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
        fill="none"
        stroke="url(#logoGrad)"
        strokeWidth="4"
        filter="url(#glow)"
      />
      <polygon points="50,18 82,35.5 82,64.5 50,82 18,64.5 18,35.5" fill="url(#logoGrad)" fillOpacity="0.08" />
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fill="url(#logoGrad)"
        fontSize="28"
        fontWeight="800"
        fontFamily="'JetBrains Mono', monospace"
        letterSpacing="-1"
        filter="url(#glow)"
      >
        AR
      </text>
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(({ id }) => document.getElementById(id)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
          scrolled && !menuOpen
            ? 'border-b border-line/60 bg-ink/85 shadow-lg shadow-black/20 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav aria-label="Primary" className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-10 md:h-20">
          <a href="#home" aria-label="Abdur Rahman, back to top" className="group flex items-center gap-3">
            <span className="transition-transform duration-300 group-hover:rotate-[30deg]">
              <Logo />
            </span>
            <span className="hidden font-mono text-xs tracking-[0.25em] text-accent/70 transition-colors group-hover:text-accent lg:block">
              PORTFOLIO
            </span>
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {navLinks.map(({ name, id }) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? 'true' : undefined}
                    className={`group relative py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive ? 'text-accent' : 'text-fg hover:text-accent'
                    }`}
                  >
                    {name}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 -bottom-0.5 h-px origin-left bg-accent transition-transform duration-300 ${
                        isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            className="relative z-50 rounded p-1 text-accent md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-ink/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div
          id="mobile-menu"
          className={`absolute inset-y-0 right-0 flex w-3/4 max-w-xs flex-col justify-center bg-panel px-10 shadow-2xl transition-transform duration-300 ease-out-soft ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="space-y-7">
            {navLinks.map(({ name, id }, i) => (
              <li
                key={id}
                className={`transition-[opacity,transform] duration-500 ease-out-soft ${
                  menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'
                }`}
                style={{ transitionDelay: menuOpen ? `${120 + i * 50}ms` : '0ms' }}
              >
                <a
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`text-xl font-semibold ${active === id ? 'text-accent' : 'text-fg hover:text-accent'}`}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
