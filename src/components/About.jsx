import CountUp from 'react-countup'

export default function About() {
  return (
    <div>
      <section
        id='about'
        className='text-left bg-gradient-to-b from-gray-100 via-white to-gray-100'
      >
        <div className='container mx-auto px-2'>
          {/* Heading */}
          <h2 className='text-3xl font-extrabold text-gray-900 text-center mb-8 relative'>
            About Me
            <span className='block w-28 h-1 bg-blue-600 mx-auto mt-2 rounded'></span>
          </h2>

          {/* Content Container */}
          {/* Content Container */}
          <div className="mx-auto px-3">
            {/* Introduction */}
            <h2 className="text-1xl font-bold text-gray-900">About Me</h2>
            <p className="text-gray-700 mt-3 leading-relaxed">
              Hi, I'm{" "}
              <span className="text-blue-600 font-semibold">Abdur Rahman</span>, a{" "}
              <span className="text-blue-600 font-semibold">Frontend Developer</span>{" "}
              passionate about creating{" "}
              <span className="text-blue-600 font-semibold">
                responsive and user-friendly web experiences.
              </span>{" "}
              With a strong foundation in modern web technologies, I strive to deliver
              high-quality, accessible, and efficient digital solutions that enhance user
              interactions. My goal is to craft smooth and engaging experiences that align
              with both business and user needs.
            </p>

            {/* Skills Section */}
            <h3 className="text-1xl font-semibold text-gray-900 mt-5">Skills</h3>
            <p className="text-gray-700 leading-relaxed">
              I specialize in{" "}
              <span className="font-semibold text-blue-600">
                HTML, CSS, Tailwind CSS, Bootstrap, JavaScript, TypeScript, React.js, and
                Next.js
              </span>
              . My expertise extends to building{" "}
              <span className="text-blue-600 font-semibold">
                clean, functional, and visually appealing
              </span>{" "}
              interfaces using modern UI libraries like{" "}
              <span className="text-blue-600 font-semibold">Material UI</span> and{" "}
              <span className="text-blue-600 font-semibold">Bootstrap</span>.
              I have experience implementing state management solutions, API integration,
              and performance optimization techniques to build scalable applications.
            </p>

            {/* Learning Section */}
            <h3 className="text-1xl font-semibold text-gray-900 mt-5">What I'm Learning</h3>
            <p className="text-gray-700 leading-relaxed">
              I'm currently expanding my knowledge in{" "}
              <span className="text-blue-600 font-semibold">TypeScript</span>,{" "}
              <span className="text-blue-600 font-semibold">Next.js</span>, and advanced
              web technologies to develop{" "}
              <span className="text-blue-600 font-semibold">
                scalable and high-performance applications.
              </span>{" "}
              Additionally, I am exploring{" "}
              <span className="text-blue-600 font-semibold">Prisma ORM</span> for database
              management,{" "}
              <span className="text-blue-600 font-semibold">authentication mechanisms</span>
              for secure user interactions, and{" "}
              <span className="text-blue-600 font-semibold">server-side rendering (SSR)</span>
              to enhance application performance.
            </p>


            {/* Vision Section */}
            <h3 className="text-xl font-semibold text-gray-900 mt-5">My Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              As a developer, I am dedicated to{" "}
              <span className="text-blue-600 font-semibold">continuous learning</span> and
              adapting to new technologies. I believe in writing{" "}
              <span className="text-blue-600 font-semibold">efficient, maintainable, and scalable code</span>
              that enhances user experiences. My long-term goal is to contribute to
              innovative projects that have a meaningful impact on users and businesses
              worldwide.
            </p>
          </div>


        </div>
      </section>

      {/* Count-Up Section */}
      <section className='py-12 px-4 text-gray-800'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap justify-center md:justify-between gap-4 max-w-[100%] md:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] mx-auto'>
            {/* Experience Card */}
            <div className='bg-white p-6 rounded-2xl shadow-lg flex-1 min-w-[120px] text-center transition hover:scale-105'>
              <h2 className='text-4xl font-extrabold text-gray-900'>
                <CountUp enableScrollSpy={true} delay={1} end={1} />+
              </h2>
              <p className='text-gray-700 text-lg mt-1'>Years of Experience</p>
            </div>

            {/* Projects Card */}
            <div className='bg-white p-6 rounded-2xl shadow-lg flex-1 min-w-[120px] text-center transition hover:scale-105'>
              <h2 className='text-4xl font-extrabold text-gray-900'>
                <CountUp enableScrollSpy={true} delay={1} end={15} />+
              </h2>
              <p className='text-gray-700 text-lg mt-1'>Projects Completed</p>
            </div>

            {/* Problems Solved Card */}
            <div className='bg-white p-6 rounded-2xl shadow-lg flex-1 min-w-[120px] text-center transition hover:scale-105'>
              <h2 className='text-4xl font-extrabold text-gray-900'>
                <CountUp enableScrollSpy={true} delay={1} end={100} />+
              </h2>
              <p className='text-gray-700 text-lg mt-1'>Problems Solved</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
