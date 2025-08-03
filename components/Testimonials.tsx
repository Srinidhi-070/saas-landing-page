import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
    name: 'Sarah Johnson',
    company: 'CEO, Innovate Inc.',
    quote: 'SaaSier has revolutionized our workflow. The speed and user experience are simply unmatched. It\'s the core of our tech stack now.',
  },
  {
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026705d',
    name: 'Michael Chen',
    company: 'Lead Developer, Tech Solutions',
    quote: 'As a developer, I appreciate the clean API and fantastic documentation. Integration was a breeze, saving us weeks of development time.',
  },
  {
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026706d',
    name: 'Emily Rodriguez',
    company: 'Marketing Director, Growth Co.',
    quote: 'The analytics and reporting features have given us insights we never had before. Our marketing campaigns are more effective than ever.',
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

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 sm:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Loved by Teams Worldwide</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Don't just take our word for it. Here's what our users have to say.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/40 dark:bg-slate-900/40 p-8 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col backdrop-blur-sm"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-secondary-400 to-primary-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-75"></div>
              
              <div className="relative flex flex-col h-full">
                <p className="text-slate-600 dark:text-slate-300 flex-grow">"{testimonial.quote}"</p>
                <div className="mt-6 flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border-2 border-slate-200 dark:border-slate-600"
                  />
                  <div className="ml-4">
                    <p className="font-bold text-slate-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;