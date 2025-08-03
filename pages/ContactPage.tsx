
import React from 'react';
import { motion } from 'framer-motion';
import MailIcon from '../components/icons/MailIcon';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center py-20 sm:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white">Get In Touch</h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
              We’d love to hear from you. Whether you have a question about features, trials, pricing, or anything else, our team is ready to answer all your questions.
            </p>
          </div>

          <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/40 dark:bg-slate-900/40 p-8 rounded-xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm shadow-2xl">
            <div className="space-y-8">
                <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Contact Information</h3>
                    <p className="mt-1 text-slate-600 dark:text-slate-400">Fill up the form and our Team will get back to you within 24 hours.</p>
                </div>
                <div className="flex items-center gap-4">
                    <MailIcon className="w-6 h-6 text-primary-500" />
                    <span className="text-slate-700 dark:text-slate-300">help@saasier.com</span>
                </div>
                 <div className="flex items-center gap-4">
                    <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <span className="text-slate-700 dark:text-slate-300">+1 (555) 123-4567</span>
                </div>
                 <div className="flex items-start gap-4">
                    <svg className="w-6 h-6 text-primary-500 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span className="text-slate-700 dark:text-slate-300">123 SaaSier Lane, <br/>Innovation City, 12345</span>
                </div>
            </div>
            
            <form action="#" method="POST" className="space-y-6">
                <div>
                    <label htmlFor="name" className="sr-only">Full Name</label>
                    <input type="text" name="name" id="name" required placeholder="Full Name" className="block w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 focus:border-primary-500 focus:ring-primary-500" />
                </div>
                 <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input type="email" name="email" id="email" required placeholder="Email Address" className="block w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 focus:border-primary-500 focus:ring-primary-500" />
                </div>
                <div>
                    <label htmlFor="message" className="sr-only">Message</label>
                    <textarea name="message" id="message" rows={5} required placeholder="Your Message" className="block w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 px-4 py-3 text-slate-900 dark:text-white placeholder-slate-500 focus:border-primary-500 focus:ring-primary-500"></textarea>
                </div>
                <div>
                    <motion.button
                        type="submit"
                        className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Send Message
                    </motion.button>
                </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
