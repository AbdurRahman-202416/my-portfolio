import CountUp from 'react-countup'

export default function About () {
  return (
    <div>
      <section
        id='about'
        className='pt-16 bg-gradient-to-b from-gray-100 via-white to-gray-100'
      >
        <div className='container mx-auto px-6'>
          {/* Heading */}
          <h2 className='text-4xl font-extrabold text-gray-900 text-center mb-8 relative'>
            About Me
            <span className='block w-28 h-1 bg-blue-600 mx-auto mt-2 rounded'></span>
          </h2>

          {/* Content Container */}
          <div className='max-w-full mx-auto text-center bg-white/40 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200 transition-transform duration-300 hover:scale-105'>
            {/* Introduction */}
            <p className='text-gray-700 text-lg leading-relaxed animate-fadeIn'>
              Hi, I'm{' '}
              <span className='text-blue-600 font-semibold'>
                Abdur Rahman
              </span>
              , a
              <span className='text-blue-600 fonta-semibold'>
                {' '}
                Frontend Developer
              </span>{' '}
              passionate about crafting
              <span className='text-blue-600 font-semibold'>
                {' '}
                responsive, user-friendly
              </span>{' '}
              web experiences.
            </p>

            {/* Skills Section */}
            <div className='mt-6'>
              <p className='text-gray-700 text-lg leading-relaxed animate-fadeIn'>
                I specialize in{' '}
                <span className='font-semibold text-blue-600'>
                  HTML, CSS, Tailwind CSS, Bootstrap, JavaScript,
                  TypeScript,React.js and Next.js
                </span>
                . I create{' '}
                <span className='text-blue-600 font-semibold'>
                  clean, functional, and visually appealing
                </span>{' '}
                interfaces with tools like
                <span className='text-blue-600 font-semibold'>
                  {' '}
                  Material UI
                </span>{' '}
                and Bootstrap.
              </p>
            </div>

            {/* Learning Section */}
            <div className='mt-6'>
              <p className='text-gray-700 text-lg leading-relaxed animate-fadeIn'>
                Currently, I'm expanding my expertise in
                <span className='text-blue-600 font-semibold'>
                  {' '}
                  TypeScript
                </span>
                ,<span className='text-blue-600 font-semibold'> Next.js</span>
                , and other advanced web technologies to build
                <span className='text-blue-600 font-semibold'>
                  {' '}
                  scalable and high-performance applications.
                </span>
              </p>
            </div>
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
