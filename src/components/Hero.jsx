import { useState } from 'react'
import Typewriter from 'typewriter-effect'
import SocialLinks from './SocialLinks'
import img from '../../public/img.jpg'
import CountUp from 'react-countup'
import Confetti from 'react-confetti'

export default function Hero () {
  const [celebrate, setCelebrate] = useState(false)

  const handleClick = () => {
    setCelebrate(true)

    // Reset the celebration after 3 seconds
    setTimeout(() => setCelebrate(false), 6000)
  }

  return (
    <section className='px-6 pt-24 pb-10 bg-gray-100'>
      {/* Confetti Effect */}
      {celebrate && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      <div className='grid lg:grid-cols-2 items-center justify-items-center gap-5'>
        {/* Image Section */}
        <div className='order-1 lg:order-1 shadow-2xl'>
          <img
            className='w-[100%] max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto aspect-square object-cover rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105'
            src={img}
            alt='Profile'
          />
        </div>

        {/* Text Section */}
        <div className='order-2 lg:order-2 flex flex-col justify-center text-center lg:text-left'>
          <p className='text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800'>
            Hi There
          </p>
          <p className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900'>
            I'm <span className='text-blue-600'>Abdur Rahman</span>.
          </p>
          <h1 className='text-lg sm:text-2xl md:text-3xl lg:text-4xl text-nowrap text-gray-800'>
            I am a{' '}
            <span>
              <Typewriter
                options={{
                  strings: [
                    'Frontend Developer.',
                    'Web Developer.',
                    'Software Developer.',
                    'Web Designer.',
                    'Programmer.'
                  ],
                  autoStart: true,
                  loop: true,
                  cursor: '|',
                  delay: 50,
                  deleteSpeed: 50
                }}
              />
            </span>
          </h1>
          <p className='mt-2 text-sm sm:text-lg md:text-xl lg:text-2xl text-gray-700'>
            Designer and Developer devoted to crafting beautiful web experiences
            focused on simplicity and purpose.
          </p>

          {/* Buttons */}
          <div className='sm:flex mx-auto justify-center gap-4 sm:justify-start mt-8'>
            <h1>
              <button className='text-base sm:text-lg md:text-xl lg:text-2xl bg-blue-600 text-white hover:text-black py-2 px-5 hover:bg-transparent border-2 border-blue-600 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105'>
                <span className='mx-2 p-1'>╰┈➤</span>
                <a href='#ContactMe'>Resume</a>
              </button>
            </h1>
            <h1 className='relative inline-block py-1 px-1 m-2 sm:m-0'>
              <button
                className='text-base hover:bg-transparent border-2 border-blue-600 sm:text-lg md:text-xl lg:text-2xl bg-blue-600 text-white hover:text-black py-2 px-2  rounded-full transition duration-300 ease-in-out transform hover:scale-105 ml-4'
                onClick={handleClick}
              >
                🎉Yay
              </button>
            </h1>

            {/* Social Links */}
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  )
}
