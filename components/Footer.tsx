
import React from 'react';
import TwitterIcon from './icons/TwitterIcon';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';

const Footer: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
  };

  return (
    <footer className="bg-slate-50 dark:bg-dark-950 border-t border-slate-200 dark:border-slate-900">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 pr-8">
            <h3 className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white">SaaSier</h3>
            <p className="mt-2 text-slate-500 dark:text-slate-400 max-w-xs">Smarter Solutions, Seamlessly Delivered.</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white tracking-wide">Product</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#features" onClick={(e) => handleNavClick(e, '#features')} className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Features</a></li>
              <li><a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')} className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Pricing</a></li>
              <li><a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">FAQ</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, '#')} className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Docs</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white tracking-wide">Company</h4>
            <ul className="mt-4 space-y-2">
              <li><a href="#" onClick={(e) => handleNavClick(e, '#')} className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">About Us</a></li>
              <li><a href="#" onClick={(e) => handleNavClick(e, '#')} className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Careers</a></li>
              <li><a href="#/contact" onClick={(e) => handleNavClick(e, '#/contact')} className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm">&copy; {new Date().getFullYear()} SaaSier. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"><TwitterIcon className="w-5 h-5" /></a>
            <a href="#" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"><GithubIcon className="w-5 h-5" /></a>
            <a href="#" className="text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"><LinkedinIcon className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
