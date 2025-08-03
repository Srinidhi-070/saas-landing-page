
import React from 'react';
import { motion, Variants } from 'framer-motion';
import InteractiveVisual from './InteractiveVisual';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-32 pb-16 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 dark:text-white leading-tight tracking-tighter"
          >
            Smarter Solutions,
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-400">
              Seamlessly Delivered.
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300"
          >
            Elevate your workflow with our next-generation SaaS platform. Experience unparalleled efficiency and intuitive design.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#/signup"
              onClick={(e) => handleNavClick(e, '#/signup')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 bg-primary-600 text-white font-semibold rounded-lg shadow-lg hover:bg-primary-500 transition-colors duration-300 cursor-pointer"
            >
              Get Started
            </motion.a>
            <motion.a
              href="#features"
              onClick={(e) => handleNavClick(e, '#features')}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-3 bg-slate-200 dark:bg-slate-700/50 text-slate-800 dark:text-white font-semibold rounded-lg border border-slate-300 dark:border-slate-600 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors duration-300 cursor-pointer"
            >
              View Demo
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="mt-16 lg:mt-24 w-full max-w-4xl mx-auto">
           <InteractiveVisual />
        </div>
      </div>
    </section>
  );
};

export default Hero;
