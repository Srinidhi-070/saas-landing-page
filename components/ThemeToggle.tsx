
import React from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import SunIcon from './icons/SunIcon';
import MoonIcon from './icons/MoonIcon';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const iconVariants: Variants = {
  hidden: { rotate: -180, opacity: 0, scale: 0 },
  visible: { 
    rotate: 0, 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3, ease: 'easeInOut' }
  },
  exit: { 
    rotate: 180, 
    opacity: 0, 
    scale: 0,
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700/50 transition-colors"
      aria-label="Toggle theme"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === 'dark' ? (
          <motion.div
            key="sun"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <SunIcon className="w-6 h-6" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            variants={iconVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <MoonIcon className="w-6 h-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;
