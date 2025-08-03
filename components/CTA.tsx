
import React from 'react';
import { motion } from 'framer-motion';

const CTA: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
  };

  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="container mx-auto px-6">
        <motion.div 
          className="bg-gradient-to-r from-primary-600 to-secondary-500 p-8 sm:p-12 rounded-2xl text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full filter blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full filter blur-xl"></div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to Elevate Your Business?</h2>
          <p className="mt-4 max-w-xl mx-auto text-slate-200">
            Join thousands of innovative companies and take your projects to the next level. Get started today.
          </p>
          <motion.a
            href="#/signup"
            onClick={(e) => handleNavClick(e, '#/signup')}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block px-10 py-4 bg-white text-slate-900 font-bold rounded-lg shadow-xl hover:bg-slate-200 transition-colors duration-300 cursor-pointer"
          >
            Start Your Free Trial
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
