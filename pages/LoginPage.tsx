
import React from 'react';
import { motion } from 'framer-motion';
import MailIcon from '../components/icons/MailIcon';
import LockIcon from '../components/icons/LockIcon';

const LoginPage: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
  };

  return (
    <div className="min-h-[calc(100vh-160px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="w-full max-w-md space-y-8 p-10 bg-white/40 dark:bg-slate-900/40 rounded-xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm shadow-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-slate-600 dark:text-slate-400">
            Or{' '}
            <a href="#/signup" onClick={(e) => handleNavClick(e, '#/signup')} className="font-medium text-primary-500 hover:text-primary-600 cursor-pointer">
              create a new account
            </a>
          </p>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="space-y-4 rounded-md shadow-sm">
            <div className="relative">
                <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="relative block w-full appearance-none rounded-md border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 px-3 py-3 pl-10 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                    placeholder="Email address"
                />
                <MailIcon className="absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5 text-slate-400" />
            </div>
            <div className="relative">
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="relative block w-full appearance-none rounded-md border border-slate-300 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 px-3 py-3 pl-10 text-slate-900 dark:text-white placeholder-slate-500 dark:placeholder-slate-400 focus:z-10 focus:border-primary-500 focus:outline-none focus:ring-primary-500 sm:text-sm"
                    placeholder="Password"
                />
                <LockIcon className="absolute top-1/2 left-3 -translate-y-1/2 w-5 h-5 text-slate-400" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 rounded border-slate-300 dark:border-slate-600 bg-slate-200 dark:bg-slate-700 text-primary-600 focus:ring-primary-500"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-slate-900 dark:text-slate-300">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" onClick={(e) => handleNavClick(e, '#')} className="font-medium text-primary-500 hover:text-primary-600 cursor-pointer">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <motion.button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-primary-600 py-3 px-4 text-sm font-semibold text-white hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-dark-950"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Sign in
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
