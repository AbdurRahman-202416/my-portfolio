import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'WORK', href: '#projects' },
    { name: 'EDUCATION', href: '#education' },
    { name: 'CONTACT', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a192f]/90 backdrop-blur-md shadow-lg border-b-2 border-[#111817] py-2' : 'bg-transparent py-2'}`}>
      <div className="container mx-auto px-6 sm:px-12 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-2 hover:scale-105 transition-transform duration-300">
          <svg width="48" height="48" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#64ffda" stopOpacity="1" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            {/* Hexagon shape */}
            <polygon
              points="50,5 93,27.5 93,72.5 50,95 7,72.5 7,27.5"
              fill="none"
              stroke="url(#logoGrad)"
              strokeWidth="4"
              filter="url(#glow)"
              className="transition-all duration-300"
            />
            {/* Inner accent hexagon */}
            <polygon
              points="50,18 82,35.5 82,64.5 50,82 18,64.5 18,35.5"
              fill="url(#logoGrad)"
              fillOpacity="0.08"
            />
            {/* AR Text */}
            <text
              x="50"
              y="58"
              textAnchor="middle"
              fill="url(#logoGrad)"
              fontSize="28"
              fontWeight="800"
              fontFamily="'Courier New', monospace"
              letterSpacing="-1"
              filter="url(#glow)"
            >
              AR
            </text>
          </svg>
          <span className="hidden md:block text-[#64ffda] font-mono text-xs tracking-[0.3em] opacity-70 group-hover:opacity-100 transition-opacity">
            PORTFOLIO
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-300 tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#64ffda] focus:outline-none z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#0a192f]/95 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div 
          className={`absolute right-0 top-0 h-screen w-2/3 bg-[#112240] flex flex-col items-center justify-center space-y-8 shadow-2xl transition-transform duration-300 ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-lg font-mono text-[#ccd6f6] hover:text-[#64ffda] tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
