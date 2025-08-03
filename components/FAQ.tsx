
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ChevronDownIcon from './icons/ChevronDownIcon';

const faqData = [
  {
    question: 'What is SaaSier and how does it work?',
    answer: 'SaaSier is a next-generation platform designed to streamline your workflow. It works by integrating with your existing tools to automate tasks, provide deep analytics, and foster collaboration. You can get started in minutes.'
  },
  {
    question: 'Can I try SaaSier before committing?',
    answer: 'Absolutely! We offer a 14-day free trial on our Pro plan, with no credit card required. You can explore all the features and see if it\'s the right fit for your team. You can sign up from our pricing section.'
  },
  {
    question: 'What kind of support do you offer?',
    answer: 'We offer 24/7 email support for all our plans. Pro and Enterprise plans include priority support and dedicated account managers. Check out our documentation for self-service help.'
  },
  {
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel your subscription at any time. If you cancel, you will retain access to your plan\'s features until the end of your billing cycle. There are no cancellation fees.'
  },
  {
    question: 'How does SaaSier handle data security?',
    answer: 'Security is our top priority. We use end-to-end encryption, regular security audits, and comply with industry standards like SOC 2 and GDPR to ensure your data is always safe and secure.'
  }
];

const AccordionItem: React.FC<{
  item: { question: string, answer: string };
  isOpen: boolean;
  onClick: () => void;
}> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 py-6">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left text-slate-800 dark:text-slate-100"
      >
        <span className="text-lg font-medium">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDownIcon className="w-6 h-6 text-slate-500" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-slate-600 dark:text-slate-400">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-32 bg-transparent">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Frequently Asked Questions</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>
        <div className="mt-16 max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              item={item}
              isOpen={openIndex === index}
              onClick={() => handleClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
