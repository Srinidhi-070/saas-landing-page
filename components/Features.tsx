import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Feature } from '../types';
import CodeIcon from './icons/CodeIcon';
import ShieldIcon from './icons/ShieldIcon';
import ZapIcon from './icons/ZapIcon';

const features: Feature[] = [
  {
    icon: <ZapIcon className="w-8 h-8 text-primary-500" />,
    title: 'Blazing Fast',
    description: 'Our infrastructure is optimized for speed, ensuring your operations run at lightspeed.',
  },
  {
    icon: <ShieldIcon className="w-8 h-8 text-secondary-400" />,
    title: 'Ironclad Security',
    description: 'With end-to-end encryption and robust security protocols, your data is always safe.',
  },
  {
    icon: <CodeIcon className="w-8 h-8 text-slate-500 dark:text-slate-300" />,
    title: 'Developer Friendly',
    description: 'Integrate seamlessly with our powerful and well-documented API.',
  },
];

const cardVariants: Variants = {
    offscreen: {
        y: 50,
        opacity: 0
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 sm:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Why Choose SaaSier?</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            We've built a platform that's not just powerful, but also a pleasure to use.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/40 dark:bg-slate-900/40 p-8 rounded-xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-secondary-400 to-primary-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-75"></div>
              
              <div className="relative">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-slate-100 dark:bg-slate-800 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;