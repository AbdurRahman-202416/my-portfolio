export default function Education() {
  const education = [
    {
      degree: 'Master of Computer Science and Engineering (MCSE)',
      type: 'Postgraduate Degree',
      description: 'Ongoing research focus on Passwordless Identity Management using WebAuthn.',
      institution: 'National University, Bangladesh',
      duration: '2026 - Present'
    },
    {
      degree: 'Bachelor of Science in Computer Science (CSE)',
      type: 'Undergraduate Degree',
      description: 'Completed Bachelor’s degree with a focus on Software Engineering and Core Algorithms.',
      institution: 'Institute of Science and Technology, National University',
      duration: '2018 - 2022'
    }
  ];

  return (
    <section id="education" className="py-8 md:py-24 px-6 md:px-12 mx-auto section-text-justify">
      <div className="flex items-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center text-[#ccd6f6] whitespace-nowrap">
          <span className="text-[#3b82f6] font-mono text-xl mr-2">04.</span> Education
        </h2>
        <div className="ml-4 h-[1px] bg-[#233554] w-full max-w-md hidden sm:block"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-[#112240] p-8 rounded-lg border-l-4 border-[#3b82f6] hover:bg-[#1d2d44] transition-all duration-300">
            <p className="text-[#3b82f6] font-mono text-xs uppercase tracking-widest mb-1">{edu.duration}</p>
            <h3 className="text-xl font-bold text-[#ccd6f6] mb-1">{edu.degree}</h3>
            <p className="text-[#ccd6f6] text-sm mb-4 italic opacity-70">{edu.institution}</p>
            <p className="text-[#8892b0] text-sm leading-relaxed">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
