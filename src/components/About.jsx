export default function About() {
  const skills = [
    'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Next.js', 'Angular.js', 'Tailwind CSS', 'Node.js', 'REST APIs'
  ];

  return (
    <section id="about" className="py-8 md:py-24 px-6 md:px-12 mx-auto section-text-justify">
      <div className="flex items-center mb-10 w-full">
        <h2 className="text-2xl md:text-3xl font-bold flex items-center text-[#ccd6f6] whitespace-nowrap">
          <span className="text-[#3b82f6] font-mono text-xl mr-2">01.</span> About Me
        </h2>
        <div className="ml-4 h-[1px] bg-[#233554] w-full max-w-md hidden sm:block"></div>
      </div>

      <div className="grid md:grid-cols-5 gap-12">
        <div className="md:col-span-3 space-y-4">
          <p className="text-base md:text-lg leading-relaxed">
            I'm a <span className="text-[#3b82f6]">Graduate Software Engineer</span> at Kona Software Lab, specializing in building modern, high-performance web applications. I focus on creating clean, maintainable frontend architectures that solve complex business needs.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Recently, I've been deep-diving into <span className="text-[#3b82f6]">Passwordless Identity Management</span> leveraging WebAuthn for my Master's research, combining academic rigor with practical software engineering.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            I am passionate about clean terminology, modern web standards, and pixel-perfect implementation. Whether it's architecting a complex state management system or fine-tuning CSS animations, I aim for excellence.
          </p>
          
          <div className="pt-4">
            <h4 className="text-[#ccd6f6] font-semibold mb-4 text-sm uppercase tracking-wider font-mono italic">Technical Skills Grid:</h4>
            <div className="grid grid-cols-2 gap-2">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center space-x-2">
                  <span className="text-[#3b82f6] text-xs">▹</span>
                  <span className="text-sm font-mono">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-2 flex justify-center items-start">
          <div className="relative group max-w-xs">
            <div className="absolute top-4 left-4 w-full h-full border-2 border-[#3b82f6] rounded translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform duration-300"></div>
            <div className="relative overflow-hidden rounded bg-[#112240]">
              <img 
                src="/my-photo.jpg" 
                alt="Abdur Rahman" 
                className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-[#3b82f6]/10 group-hover:bg-transparent transition-colors duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
