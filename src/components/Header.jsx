import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Confetti from 'react-confetti'

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'about',
        'skills',
        'experience',
        'services',
        'projects',
        'contact'
      ]
      let currentSection = ''

      sections.forEach(section => {
        const sectionElement = document.getElementById(section)
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section
          }
        }
      })

      setActiveLink(currentSection)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = link => {
    setActiveLink(link)
    setMenuOpen(false) // Close menu on mobile after click
  }
  const [celebrate, setCelebrate] = useState(false)

  const handleClick2 = () => {
    setCelebrate(true)

    // Reset the celebration after 3 seconds
    setTimeout(() => setCelebrate(false), 6000)
  }
  return (
    <nav onClick={handleClick2} className='fixed w-full bg-[#F2F9FF] shadow-md z-50'>

      <div className='container mx-auto px-6 py-3 flex justify-between items-center'>
        {/* Logo */}
        <a onClick={handleClick} href='#Naver'>
          <h1 className='text-1xl sm:text-[20px] font-bold text-blue-600'>
            Abdur Rahman
            <span className='inline-block align-middle mx-2 text-2xl'>🎓</span>
          </h1>
        </a>
        {/* Desktop Navigation */}
        <div onClick={handleClick2} className='hidden md:flex space-x-2'>
          {[
            'about',
            'skills',
            'experience',
            'services',
            'projects',
            'contact'
          ].map(link => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => handleClick(link)}
              className={`text-gray-600 hover:text-blue-600 transition-all duration-300 ease-in-out px-2 py-2 rounded-full text-lg font-medium ${activeLink === link ? 'bg-blue-600 text-white' : ''
                }`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-gray-600 focus:outline-none'
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='md:hidden bg-white shadow-md py-4 absolute top-16 left-0 w-full flex flex-col items-center space-y-4'>
          {[
            'about',
            'skills',
            'experience',
            'services',
            'projects',
            'contact'
          ].map(link => (
            <a
              key={link}
              href={`#${link}`}
              onClick={() => handleClick(link)}
              className={`text-gray-600 hover:text-blue-600 transition-all duration-300 ease-in-out px-4 py-2 rounded-full text-lg font-medium ${activeLink === link ? 'bg-orange-100 text-blue-600' : ''
                }`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          ))}
        </div>
      )}
      {celebrate && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}
    </nav>

  )
}
