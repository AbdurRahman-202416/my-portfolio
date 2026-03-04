import { MapPin, Calendar, Building } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Graduate Software Engineer',
      company: 'Kona SL',
      location: 'Gulshan-1, Dhaka',
      duration: 'Present',
      responsibilities: [
        'Developing production-ready frontend applications',
        'Working with modern frameworks (Angular, React)',
        'Building reusable UI components',
        'Collaborating with backend and product teams',
        'Following best practices and clean code standards'
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 lg:py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xs sm:text-sm font-bold tracking-widest text-[#4fd1c5] uppercase mb-3 text-left sm:text-center">
            Career
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2540] mb-4 text-left sm:text-center">
            Professional Experience
          </h3>
          <div className="w-16 h-1 bg-[#0a2540] rounded-full mx-0 sm:mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 sm:pl-0 sm:flex gap-8 group"
            >
              {/* Timeline Line (Desktop) */}
              <div className="hidden sm:flex flex-col items-center w-12 pb-8">
                <div className="w-4 h-4 rounded-full bg-[#4fd1c5] ring-4 ring-[#4fd1c5]/20 z-10"></div>
                <div className="w-px h-full bg-gray-100 -mt-2"></div>
              </div>

              {/* Timeline Dot (Mobile) */}
              <div className="absolute left-0 top-6 w-3 h-3 rounded-full bg-[#4fd1c5] ring-4 ring-[#4fd1c5]/20 sm:hidden"></div>
              {/* Timeline Line (Mobile) */}
              <div className="absolute left-1 top-8 bottom-0 w-px bg-gray-100 sm:hidden"></div>

              {/* Content Card */}
              <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-[#0a2540] mb-2">{exp.role}</h4>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 text-gray-600 font-medium text-sm">
                      <span className="flex items-center gap-1.5"><Building size={16} /> {exp.company}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={16} /> {exp.location}</span>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#f8f9fa] rounded-full text-sm font-medium text-[#0a2540]">
                    <Calendar size={16} className="text-[#4fd1c5]" /> {exp.duration}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((task, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#4fd1c5] shrink-0"></span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
