
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AnimatedBlob from './components/AnimatedBlob';
import Router from './Router';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-dark-950 text-slate-900 dark:text-slate-100 relative isolate flex flex-col">
      {/* Background Blobs - positioned absolutely */}
      <div className="fixed inset-0 -z-20 overflow-hidden hidden dark:block">
        <AnimatedBlob color="bg-primary-500/20" className="top-10 left-1/4" />
        <AnimatedBlob color="bg-secondary-400/20" className="bottom-10 right-1/4" animationDelay="2s" />
        <AnimatedBlob color="bg-primary-500/10" className="bottom-1/2 right-1/2" animationDelay="4s" />
      </div>

      <motion.div 
        className="fixed bottom-0 left-0 -z-10 h-2/3 w-full bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(234,88,12,0.1),rgba(255,255,255,0))] hidden dark:block"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'mirror',
          ease: 'easeInOut',
        }}
        />
      <Navbar />
      <main className="relative z-10 flex-grow">
        <Router />
      </main>
      <Footer />
    </div>
  );
};

export default App;
