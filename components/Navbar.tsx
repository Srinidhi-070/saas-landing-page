
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '#' },
  { name: 'Features', href: '#features' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#/contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [theme, toggleTheme] = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 dark:bg-dark-950/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" onClick={(e) => handleNavClick(e, '#')} className="text-3xl font-black tracking-tighter text-slate-900 dark:text-white">
            SaaSier
          </a>
          <div className="hidden md:flex items-center space-x-2">
            <div 
              className="flex items-center space-x-6 mr-4"
              onMouseLeave={() => setHoveredLink(null)}
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  className="relative text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-200 px-3 py-2 cursor-pointer"
                >
                  {link.name}
                  {hoveredLink === link.name && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-500 rounded-full"
                      layoutId="underline"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
             <motion.a
                href="#/login"
                onClick={(e) => handleNavClick(e, '#/login')}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-slate-600 dark:text-slate-300 text-sm font-semibold rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors duration-300 cursor-pointer"
            >
                Login
            </motion.a>
             <motion.a
                href="#/signup"
                onClick={(e) => handleNavClick(e, '#/signup')}
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="ml-2 px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-primary-500 transition-colors duration-300 cursor-pointer"
            >
                Get Started
            </motion.a>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 dark:text-white z-50">
              {isOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/95 dark:bg-dark-950/95 backdrop-blur-md md:hidden"
          >
            <motion.div 
              className="mt-24 container mx-auto px-6 py-4 flex flex-col space-y-6 items-center"
              initial={{ y: -20, opacity: 0}}
              animate={{ y: 0, opacity: 1}}
              transition={{delay: 0.1, staggerChildren: 0.1}}
              >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white text-2xl font-semibold cursor-pointer"
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                >
                  {link.name}
                </motion.a>
              ))}
               <motion.a
                href="#/signup"
                onClick={(e) => handleNavClick(e, '#/signup')}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 w-full max-w-xs text-center px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg shadow-lg hover:bg-primary-500 transition-colors duration-300 cursor-pointer"
              >
                  Get Started
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
