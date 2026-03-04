export default function Education() {
  const educationDetails = [
    {
      degree: 'M.Sc. in Computer Science & Engineering',
      status: 'Ongoing',
      institution: 'National University, Dhaka',
      session: '2026–2027'
    },
    {
      degree: 'B.Sc. in Computer Science & Engineering',
      status: 'Completed',
      institution: 'National University, Dhaka',
      session: '2018–2022'
    }
  ];

  return (
    <section id="education" className="py-16 lg:py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xs sm:text-sm font-bold tracking-widest text-[#4fd1c5] uppercase mb-3 text-left sm:text-center">
            Academic Background
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2540] mb-4 text-left sm:text-center">
            Education
          </h3>
          <div className="w-16 h-1 bg-[#0a2540] rounded-full mx-0 sm:mx-auto"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 lg:space-y-6">
          {educationDetails.map((education, index) => (
            <div 
              key={index}
              className="bg-gray-50 border border-gray-100 p-6 lg:p-8 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-shadow group"
            >
              <div>
                <h4 className="text-lg lg:text-xl font-bold text-[#0a2540] mb-1 lg:mb-2">{education.degree}</h4>
                <p className="text-sm lg:text-base text-gray-600 font-medium">{education.institution}</p>
              </div>
              <div className="text-left md:text-right">
                <div className="inline-block px-3 py-1 bg-white border border-gray-200 text-[#0a2540] text-[10px] sm:text-sm font-semibold rounded-md mb-2">
                  Session: {education.session}
                </div>
                <p className={`text-xs sm:text-sm font-bold uppercase tracking-wide ${education.status === 'Ongoing' ? 'text-[#4fd1c5]' : 'text-[#0a2540]'}`}>
                  {education.status}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
