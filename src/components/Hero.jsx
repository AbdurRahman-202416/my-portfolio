import { Download } from 'lucide-react';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  const handleScroll = (e, target) => {
    e.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-[450px] flex flex-col justify-center px-6 md:px-12 mx-auto pt-24 pb-4 md:pt-28 md:pb-0 overflow-hidden">
      <div className="space-y-4 md:space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <h2 className="text-[#64ffda] font-mono text-sm sm:text-base tracking-widest reveal-text">
          Hi, I'm
        </h2>
        
        <div className="space-y-1 sm:space-y-2">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#ccd6f6] leading-tight flex flex-wrap gap-x-4">
            Abdur Rahman.
          </h1>
          <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-[#8892b0] leading-tight min-h-[2.5em] sm:min-h-[2em] md:min-h-[1.5em]">
            <Typewriter
              options={{
                strings: [
                  'I build high performance web experiences.',
                  'I specialize in React,Next.js & Angular.js.',
                  'I solve real world problems with code.'
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
                wrapperClassName: "typewriter-text"
              }}
            />
          </div>
        </div>
        
        <p className="text-sm sm:text-base md:text-lg text-[#8892b0] max-w-2xl leading-relaxed mt-4 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500">
          I'm a <span className="text-[#64ffda]">Front-End Engineer</span> specialized in React and Next.js. Currently, I'm working as a <span className="text-[#64ffda]">Graduate Software Engineer</span> at Kona Software Lab, focusing on building scalable, accessible, and user-centric digital solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-4 sm:gap-6 pt-8 sm:pt-10 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-700">
          <a 
            href="#projects" 
            onClick={(e) => handleScroll(e, 'projects')}
            className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#64ffda] text-[#64ffda] rounded font-mono text-xs sm:text-sm hover:bg-[#64ffda]/10 transition-all duration-300 shadow-lg hover:shadow-[#64ffda]/10 text-center"
          >
            Check out my work!
          </a>
          <a 
            href="https://docs.google.com/document/d/1PPYMkD6P0IhFYCAg7U31XHeqLELG2mifb1vLB9FrnlQ/edit?usp=sharing" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#3b82f6] text-white rounded font-bold text-xs sm:text-sm hover:bg-[#2563eb] transition-all duration-300 shadow-[0_4px_14px_0_rgba(59,130,246,0.5)] active:scale-95"
          >
            <Download size={18} />
            Download CV
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, 'contact')}
            className="px-4 py-2 text-[#ccd6f6] font-mono text-xs sm:text-sm hover:text-[#64ffda] transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            Get In Touch
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
      
      {/* Visual Accent */}
      <div className="hidden lg:block absolute right-12 md:right-24 bottom-24 md:bottom-32">
        <div className="flex flex-col items-center gap-4 text-[#8892b0] animate-bounce">
          <div className="w-[1px] h-16 md:h-24 bg-[#8892b0]"></div>
          <span className="font-mono text-[10px] tracking-widest vertical-rl uppercase">Scroll</span>
        </div>
      </div>
    </section>
  );
}
