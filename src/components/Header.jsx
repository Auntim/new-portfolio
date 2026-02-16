
import React, { useState, useEffect, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon, Download, Link } from 'lucide-react';
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${scrollY > 50 ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container-custom flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        <div className='flex justify-center items-center gap-1 cursor-pointer'>
          <img src={logo} className='h-8 w-8 md:h-12 md:w-12 ml-2 md:ml-12 rounded-full' alt="logo" href='#home' />
          <h1 className='text-2xl md:text-3xl bbh-regular'>Auntim</h1>
        </div>
        <div className="flex items-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 ">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`px-4 py-1 rounded-md text-sm font-medium transition-colors ${activeSection === item.href.substring(1)
                  ? 'text-primary font-semibold border-b-2 border-primary pb-1'
                  : 'text-muted-foreground hover:text-primary hover:text-slate-100'
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
          <div className='ml-4 hidden md:inline-block'>
            <ConfettiButton />
          </div>


          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden ml-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="md:hidden bg-background border-t"
          >
            <nav className=" py-2 flex flex-col space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-md text-base font-medium ${activeSection === item.href.substring(1)
                    ? 'bg-secondary text-primary'
                    : 'text-muted-foreground hover:text-primary hover:bg-secondary'
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
