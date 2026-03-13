import { MapPin, Calendar, Building, ChevronRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Graduate Software Engineer',
      company: 'Kona Software Lab Limited',
      location: 'Gulshan-2, Dhaka',
      duration: 'May 2026 - Present',
      responsibilities: [
        'Implemented product listing, filtering, and cart system with REST API integration.',
        'Collaborated with backend engineers to integrate APIs, pixel-perfect web designs.',
        'Optimized web performance and accessibility to ensure a seamless user experience across devices.'
      ]
    },
    {
      role: 'Front-End Developer Intern',
      company: 'Kona Software Lab Limited',
      location: 'Gulshan-2, Dhaka',
      duration: 'Sep 2024 - Dec 2024',
      responsibilities: [
        'Gained hands-on experience in HTML, CSS, Tailwind CSS, JavaScript, and React.js.',
        'Developed and improved UI components for web applications.',
        'Worked collaboratively with the development team to implement responsive designs.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-8 md:py-24 px-6 md:px-12 mx-auto overflow-hidden section-text-justify">
      <div className="flex items-center mb-12 animate-in fade-in slide-in-from-left-10 duration-1000">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center text-[#ccd6f6] whitespace-nowrap">
          <span className="text-[#64ffda] font-mono text-xl mr-2">02.</span> Experience
        </h2>
        <div className="ml-4 h-[1px] bg-[#233554] w-full hidden sm:block"></div>
      </div>

      <div className="space-y-8 md:space-y-12">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className={`relative pl-8 border-l-2 border-[#233554] transition-all duration-700 animate-in fade-in slide-in-from-bottom-10`}
            style={{ animationDelay: `${index * 200}ms` }}
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-[#0a192f] border-2 border-[#64ffda] shadow-[0_0_8px_#64ffda]"></div>
            
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4">
                <h3 className="text-xl md:text-2xl font-bold text-[#ccd6f6]">
                  {exp.role} <span className="text-[#64ffda] break-words">@ {exp.company}</span>
                </h3>
                <span className="text-xs font-mono text-[#8892b0] bg-[#112240] px-3 py-1 rounded-full whitespace-nowrap">
                  {exp.duration}
                </span>
              </div>
              <p className="text-sm font-mono text-[#8892b0] flex items-center gap-2">
                <MapPin size={14} className="text-[#64ffda]" /> {exp.location}
              </p>
              
              <ul className="mt-6 space-y-4">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex space-x-3 text-base md:text-lg text-[#8892b0] leading-relaxed group">
                    <span className="text-[#64ffda] mt-1.5 min-w-[12px] h-[12px] flex items-center justify-center transition-transform group-hover:translate-x-1">
                      <ChevronRight size={16} />
                    </span>
                    <span className="group-hover:text-[#ccd6f6] transition-colors">{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
