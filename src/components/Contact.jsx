import { Mail, Linkedin, Github, ExternalLink } from "lucide-react";

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="pt-20 lg:pt-32 bg-white border-t border-gray-100 flex flex-col relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#0a2540]/5 rounded-b-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-4xl flex-1 relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-xs sm:text-sm font-bold tracking-widest text-[#4fd1c5] uppercase mb-4">
            Next Steps
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#0a2540] mb-6 leading-tight">
            Let's build something reliable and scalable together.
          </h3>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto mb-10 lg:mb-12">
            I am currently available for long-term remote roles or freelance projects. Looking for a dependable frontend engineer to join your team?
          </p>
          
          <a
            href="https://www.upwork.com/freelancers/~019dd9f7dc821794dd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0a2540] text-white px-8 py-3.5 rounded-md font-medium text-base lg:text-lg hover:bg-[#0a2540]/90 transition-all shadow-md hover:shadow-lg"
          >
            Hire Me on Upwork <ExternalLink size={20} />
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mt-16 pb-24">
          <a 
            href="mailto:abdur.rahman.00b@example.com" 
            className="flex flex-col items-center gap-3 p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100 hover:border-gray-200"
          >
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
              <Mail className="text-[#0a2540]" size={24} />
            </div>
            <span className="font-semibold text-[#0a2540] mt-2">Email Me</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/abdur-rahman-8635b9290" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100 hover:border-gray-200"
          >
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
              <Linkedin className="text-[#0a2540]" size={24} />
            </div>
            <span className="font-semibold text-[#0a2540] mt-2">LinkedIn</span>
          </a>
          <a 
            href="https://github.com/AbdurRahman-202416" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-8 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100 hover:border-gray-200"
          >
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
              <Github className="text-[#0a2540]" size={24} />
            </div>
            <span className="font-semibold text-[#0a2540] mt-2">GitHub</span>
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full border-t border-gray-100 bg-gray-50 mt-auto">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="py-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-lg font-bold text-[#0a2540] mb-1">Abdur Rahman</p>
              <p className="text-sm text-gray-500 font-medium">Graduate Software Engineer</p>
            </div>
            
            <p className="text-sm text-gray-400 font-medium order-3 md:order-2">
              &copy; {currentYear} Abdur Rahman. All rights reserved.
            </p>

            <div className="flex items-center gap-5 order-2 md:order-3">
              <a 
                href="https://github.com/AbdurRahman-202416" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0a2540] transition-colors"
                aria-label="GitHub"
              >
                <Github size={22} />
              </a>
              <a 
                href="https://www.linkedin.com/in/abdur-rahman-8635b9290" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0a2540] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
