export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          
          {/* Header/Title - 4 cols */}
          <div className="lg:col-span-4 lg:sticky top-32">
            <h2 className="text-xs sm:text-sm font-bold tracking-widest text-[#4fd1c5] uppercase mb-3 text-left">
              About Me
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0a2540] mb-6 leading-tight">
              Engineering web experiences that matter.
            </h3>
            <div className="w-16 h-1 bg-[#0a2540] rounded-full"></div>
          </div>

          {/* Content - 8 cols */}
          <div className="lg:col-span-8 flex flex-col gap-8 mt-4 lg:mt-0">
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="text-lg sm:text-xl leading-relaxed text-[#0a2540] font-medium mb-6">
                I am a Software Developer and Graduate Engineer at Kona SL, focused on building scalable, high-performance web solutions for production environments.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed mb-6">
                My professional experience is rooted in delivering maintainable frontend architectures tailored for real-world business needs. Working within a structured company environment has ingrained in me the importance of clean code standards, cross-functional collaboration, and robust testing practices.
              </p>
              
              <p className="text-base sm:text-lg leading-relaxed">
                Beyond my daily engineering responsibilities, I maintain a strong research mindset. I hold a B.Sc. in Computer Science and Engineering and am currently pursuing my Master’s (MCSE), focusing my research on Passwordless Identity Management leveraging WebAuthn. This academic rigor deeply informs my approach to security and cutting-edge web standards in my shipping code.
              </p>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid sm:grid-cols-3 gap-4 lg:gap-6 pt-8 mt-4 border-t border-gray-100">
              <div className="bg-gray-50 p-5 lg:p-6 rounded-xl border border-gray-100">
                <p className="text-2xl lg:text-3xl font-bold text-[#0a2540] mb-2">2+</p>
                <p className="text-xs lg:text-sm text-gray-600 font-medium">Years Enterprise Experience</p>
              </div>
              <div className="bg-gray-50 p-5 lg:p-6 rounded-xl border border-gray-100">
                <p className="text-2xl lg:text-3xl font-bold text-[#0a2540] mb-2">15+</p>
                <p className="text-xs lg:text-sm text-gray-600 font-medium">Projects Delivered</p>
              </div>
              <div className="bg-gray-50 p-5 lg:p-6 rounded-xl border border-gray-100">
                <p className="text-2xl lg:text-3xl font-bold text-[#0a2540] mb-2">Ongoing</p>
                <p className="text-xs lg:text-sm text-gray-600 font-medium">WebAuthn Research</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
