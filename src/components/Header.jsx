
import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon, Download, Link, ArrowBigDown } from 'lucide-react';
import { ConfettiButton } from "@/components/lightswind/confetti-button";
import logo from "@/assets/images/logo1.jpg"


const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Header = ({ scrollY }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);



  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        } else if (scrollY < document.querySelector('#home').offsetHeight - 100) {
          setActiveSection('home');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollY]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${scrollY > 50 ? ' shadow-sm' : 'bg-transparent'}`}>
      <div className="w-full md:w-[90%] mx-auto flex items-center justify-between  pt-2 px-4 sm:px-6 lg:px-8">
        <div className='flex justify-center items-center gap-1 cursor-pointer'>
          <img src={logo} className='h-8 w-8 md:h-11 md:w-11 ml-2 md:ml-12 rounded-full' alt="logo" href='#home' />
          <h1 className='text-2xl md:text-3xl bbh-regular'>Auntim</h1>
        </div>
        <div className="flex items-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center  space-x-1 bg-white/30 backdrop-blur-md transition rounded-full px-2 py-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`px-4 py-1 rounded-md text-18px font-medium transition-colors ${activeSection === item.href.substring(1)
                  ? 'text-white font-semibold border-b-2 border-primary pb-1'
                  : 'text-white hover:text-primary hover:text-slate-100'
                  }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href).scrollIntoView({
                    behavior: 'smooth'
                  });
                }}
              >
                {item.name}
              </motion.a>
            ))}

          </nav>
          {/* <div className='ml-4 hidden md:inline-block'>
            <ConfettiButton />
          </div> */}


          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden ml-2 bg-gray-800 border-2 border-gray-600 rounded-full"
            onClick={toggleMenu}
            aria-label=""
          >
            {isMenuOpen ? <X size={24} /> : <ArrowBigDown size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/20 backdrop-blur-lg border-t w-[45%] border-white  mx-auto  mt-1 rounded-lg shadow-lg
             flex flex-col items-center justify-center mr-16"
          >
            <nav className=" py-2 flex flex-col items-center justify-center space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-md text-base font-medium ${activeSection === item.href.substring(1)
                    ? ' text-white'
                    : 'text-white hover:text-orange-600 hover:scale-110 transition-transform'
                    }`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href).scrollIntoView({
                      behavior: 'smooth'
                    });
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
