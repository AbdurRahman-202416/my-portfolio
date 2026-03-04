export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend Frameworks',
      skills: ['React', 'Next.js', 'Angular']
    },
    {
      title: 'Languages',
      skills: ['TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3']
    },
    {
      title: 'Tools & Practices',
      skills: ['Tailwind CSS', 'Redux', 'Git', 'RESTful APIs', 'Clean Architecture', 'Reusable Components']
    }
  ];

  return (
    <section id="skills" className="py-16 lg:py-24 bg-gray-50 border-y border-gray-100 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xs sm:text-sm font-bold tracking-widest text-[#4fd1c5] uppercase mb-3">
            Core Competencies
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2540] mb-4">
            Technical Arsenal
          </h3>
          <div className="w-16 h-1 bg-[#0a2540] rounded-full mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="text-base lg:text-lg font-bold text-[#0a2540] mb-5 lg:mb-6 pb-4 border-b border-gray-100">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-3 py-1.5 bg-[#f8f9fa] text-gray-700 text-xs sm:text-sm font-medium rounded-md border border-gray-200 hover:border-[#4fd1c5] hover:bg-[#4fd1c5]/5 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}