import { Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

export default function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="py-8 md:py-24 px-6 md:px-24 max-w-7xl mx-auto text-center">
      <div className="flex flex-col items-center">
        <h2 className="text-[#3b82f6] font-mono text-sm tracking-widest mb-4">
          05. WHAT'S NEXT?
        </h2>
        <h3 className="text-4xl md:text-5xl font-bold text-[#ccd6f6] mb-6">
          Get In Touch
        </h3>
        <p className="text-[#8892b0] max-w-lg mb-8 md:mb-12 text-base md:text-lg">
          I'm currently looking for new opportunities and my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <div className="flex flex-col space-y-4 mb-12">
          <a 
            href="mailto:abdurrahman19011@gmail.com" 
            className="flex items-center justify-center gap-3 text-[#ccd6f6] hover:text-[#3b82f6] transition-colors text-base md:text-xl font-bold bg-[#112240] px-6 md:px-8 py-3 md:py-4 rounded-lg border border-[#233554] hover:border-[#3b82f6]/50"
          >
            <Mail size={20} className="text-[#3b82f6]" />
            abdurrahman19011@gmail.com
          </a>
          
          <a 
            href="tel:+8801722341973" 
            className="flex items-center justify-center gap-3 text-[#ccd6f6] hover:text-[#3b82f6] transition-colors text-base md:text-xl font-bold bg-[#112240] px-6 md:px-8 py-3 md:py-4 rounded-lg border border-[#233554] hover:border-[#3b82f6]/50"
          >
            <Phone size={20} className="text-[#3b82f6]" />
            +880 1722341973
          </a>
        </div>

        <div className="flex space-x-8 mb-8 md:mb-16">
          <a 
            href="https://www.linkedin.com/in/abdur-rahman-cse2024/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-[#8892b0] hover:text-[#64ffda] transition-all hover:-translate-y-1"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href="https://github.com/AbdurRahman-202416" 
            target="_blank" 
            rel="noreferrer" 
            className="text-[#8892b0] hover:text-[#64ffda] transition-all hover:-translate-y-1"
          >
            <Github size={28} />
          </a>
        </div>

        <footer className="w-full pt-8 border-t border-[#233554]">
          <p className="text-[#8892b0] text-xs font-mono uppercase tracking-widest">
            Designed & Built by Abdur Rahman © {currentYear}
          </p>
          <p className="text-[#8892b0] text-[10px] mt-2 opacity-50">
            Dhaka, Bangladesh
          </p>
        </footer>
      </div>
    </section>
  );
}
