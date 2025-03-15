import { useState } from 'react'
import Typewriter from 'typewriter-effect'
import SocialLinks from './SocialLinks'
import img from '../../public/my-photo.jpg'
import CountUp from 'react-countup'


export default function Hero() {



  return (
    <section className='px-6 pt-18 pb-10 sm:pt-22 bg-gray-100'>


      <div className='grid lg:grid-cols-2 items-center justify-items-center gap-5'>
        {/* Image Section */}
        <div className=' lg:order-1 shadow-2xl'>
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
          <h1 className="text-xl ml-9 sm:ml-0 sm:text-2xl md:text-3xl lg:text-4xl inline-flex text-left items-center text-gray-800">
            I am a{' '}
            <span className="ml-1">
              <Typewriter
                options={{
                  strings: [
                    'Frontend Dev.',
                    'Web Developer.',
                    'Software Dev.',
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

          <p className="mt-2 text-sm sm:text-lg md:text-xl text-left lg:text-2xl text-gray-700">
            Passionate about designing and developing seamless, user-centric web experiences
            that blend aesthetics with functionality.
          </p>


          {/* Buttons */}
          <div className='sm:flex mx-auto justify-center gap-8 sm:justify-start py-2.5'>
            <h1 className='py-2'>
              <a href="#"
                className="animate-pulse focus:animate-none hover:animate-none inline-flex text-md font-medium bg-indigo-600 mt-3 px-4 py-2 rounded-lg tracking-wide text-white">
                <span className="ml-2">Resume</span>
              </a>

            </h1>

            {/* Social Links */}
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  )
}
