import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [activeLink, setActiveLink] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      let currentSection = 'home';

      sections.forEach(section => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveLink(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, link) => {
    e.preventDefault();
    setActiveLink(link);
    setMenuOpen(false);

    if (link === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const section = document.getElementById(link);
    if (section) {
      const offset = -80;
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
    }
  };

  const navLinks = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center max-w-7xl">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleClick(e, 'home')} className="flex items-center gap-2">
          <span className="text-xl font-bold text-[#0a2540] tracking-tight">Abdur Rahman</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link}`}
              onClick={(e) => handleClick(e, link)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                activeLink === link
                  ? 'text-[#0a2540] font-semibold'
                  : 'text-gray-600 hover:text-[#0a2540] hover:bg-gray-50'
              }`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleClick(e, 'contact')}
            className="bg-[#0a2540] text-white px-6 py-2.5 rounded-md font-medium text-sm hover:bg-[#0a2540]/90 transition-colors duration-200"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-[#0a2540] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-xl absolute top-[73px] left-0 w-full flex flex-col py-4 px-6 border-b border-gray-100">
          {navLinks.map(link => (
            <a
              key={link}
              href={`#${link}`}
              onClick={(e) => handleClick(e, link)}
              className={`block py-3 text-base font-medium border-b border-gray-50 last:border-0 ${
                activeLink === link
                  ? 'text-[#0a2540] font-semibold'
                  : 'text-gray-600'
              }`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleClick(e, 'contact')}
            className="mt-6 w-full text-center bg-[#0a2540] text-white px-6 py-3 rounded-md font-medium hover:bg-[#0a2540]/90 transition-colors"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
