
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

const pricingPlans = [
  {
    name: 'Starter',
    monthlyPrice: 29,
    yearlyPrice: 278,
    description: 'For individuals and small teams getting started.',
    features: ['5 Projects', 'Basic Analytics', '24/7 Support'],
    isPopular: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 79,
    yearlyPrice: 758,
    description: 'For growing businesses that need more power and features.',
    features: ['Unlimited Projects', 'Advanced Analytics', 'Priority Support', 'API Access'],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 0, // Custom
    yearlyPrice: 0, // Custom
    description: 'For large organizations with custom needs.',
    features: ['Dedicated Infrastructure', 'Custom Integrations', 'SLA', '24/7/365 Support'],
    isPopular: false,
  },
];

const cardVariants: Variants = {
  offscreen: { y: 50, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", bounce: 0.4, duration: 0.8 }
  }
};

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('monthly');

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    window.location.hash = href;
  };

  return (
    <section id="pricing" className="py-20 sm:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Choose Your Plan</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Simple, transparent pricing. No hidden fees.
          </p>
        </div>

        <div className="mt-10 flex justify-center items-center gap-4">
          <span className={`font-medium ${billingCycle === 'monthly' ? 'text-primary-500' : 'text-slate-500'}`}>Monthly</span>
          <div
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annually' : 'monthly')}
            className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors ${billingCycle === 'monthly' ? 'bg-primary-500' : 'bg-secondary-500'}`}
          >
            <motion.div
              className="w-6 h-6 bg-white rounded-full shadow-md"
              layout
              transition={{ type: "spring", stiffness: 700, damping: 30 }}
              style={{
                marginLeft: billingCycle === 'annually' ? 'auto' : '0',
                marginRight: billingCycle === 'monthly' ? 'auto' : '0',
              }}
            />
          </div>
          <span className={`font-medium ${billingCycle === 'annually' ? 'text-secondary-500' : 'text-slate-500'}`}>
            Annually <span className="text-xs text-green-500">(Save 20%)</span>
          </span>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`group relative flex flex-col bg-white/40 dark:bg-slate-900/40 p-8 rounded-xl border border-slate-200 dark:border-slate-800 backdrop-blur-sm ${plan.isPopular ? 'border-primary-500 dark:border-primary-500' : ''}`}
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-secondary-400 to-primary-500 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-75"></div>
              
              {plan.isPopular && <div className="absolute top-0 right-8 -translate-y-1/2 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>}

              <div className="relative flex flex-col h-full">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{plan.name}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400 flex-grow">{plan.description}</p>
                <div className="mt-8">
                  {plan.name === 'Enterprise' ? (
                     <p className="text-4xl font-bold text-slate-900 dark:text-white">Custom</p>
                  ) : (
                    <p className="text-4xl font-bold text-slate-900 dark:text-white">
                      ${billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                      <span className="text-lg font-normal text-slate-500">
                        {billingCycle === 'monthly' ? '/mo' : '/yr'}
                      </span>
                    </p>
                  )}
                </div>
                <ul className="mt-8 space-y-4 text-slate-600 dark:text-slate-300">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <motion.a
                  href={plan.name === 'Enterprise' ? '#/contact' : `#/signup?plan=${plan.name.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, plan.name === 'Enterprise' ? '#/contact' : `#/signup?plan=${plan.name.toLowerCase()}`)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full block text-center mt-auto pt-8 text-white font-semibold py-3 rounded-lg shadow-lg transition-colors duration-300 cursor-pointer ${plan.isPopular ? 'bg-primary-600 hover:bg-primary-500' : 'bg-slate-700 hover:bg-slate-600'}`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Choose Plan'}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
