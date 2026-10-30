import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => setShowScroll(window.scrollY > 400);
    window.addEventListener('scroll', checkScrollTop, { passive: true });
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-ink text-muted">
      <a
        href="#main"
        className="fixed left-4 top-4 z-[60] -translate-y-20 rounded-md bg-accent px-4 py-2 text-sm font-bold text-ink transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <Header />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0 })}
        tabIndex={showScroll ? 0 : -1}
        aria-hidden={!showScroll}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 rounded-full border border-accent/40 bg-panel/90 p-3 text-accent shadow-lg shadow-black/30 backdrop-blur transition-[opacity,transform,background-color] duration-300 hover:-translate-y-1 hover:bg-accent hover:text-ink md:bottom-10 md:right-10 md:p-3.5 ${
          showScroll ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
        }`}
      >
        <ArrowUp size={20} aria-hidden="true" />
      </button>
    </div>
  );
}

export default App;
