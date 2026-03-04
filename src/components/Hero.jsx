
export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 lg:pt-48 lg:pb-32 bg-gray-50/50 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#0a2540]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#4fd1c5]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          
          {/* Text Section */}
          <div className="flex flex-col text-left order-2 lg:order-1">
            <h2 className="text-[#4fd1c5] font-semibold tracking-wide uppercase text-xs sm:text-sm mb-4">
              Graduate Software Engineer at Kona SL | React, Angular, Next.js Specialist
            </h2>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a2540] leading-tight mb-6">
              Frontend Software Engineer building scalable, production-ready web applications.
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl leading-relaxed">
              I help companies build clean, maintainable, and high-performance frontend applications with modern frameworks and best practices.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="#projects" 
                className="w-full sm:w-auto px-8 py-3.5 bg-[#0a2540] text-white rounded-md font-medium hover:bg-[#0a2540]/90 transition-all shadow-sm hover:shadow text-center"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#0a2540] border border-gray-200 rounded-md font-medium hover:border-[#0a2540] hover:bg-gray-50 transition-all text-center"
              >
                Hire Me
              </a>
            </div>
          </div>

          {/* Personal Photo */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-[480px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl group border-[6px] sm:border-[8px] border-white">
              {/* Image */}
              <img 
                src="/my-photo.jpg" 
                alt="Abdur Rahman" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Subtle Overlay to match theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a2540]/40 to-transparent pointer-events-none mix-blend-multiply"></div>
            </div>
            
            {/* Decorative dot background behind image */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-[radial-gradient(#4fd1c5_2px,transparent_2px)] [background-size:16px_16px] opacity-20 -z-10 rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
