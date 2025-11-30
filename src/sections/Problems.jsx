import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';

const Problems = () => {
  const problems = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Rough Notebook Overload",
      description: "Students use 10–15 notebooks yearly — cluttered, unsearchable, eventually trashed."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Lost Knowledge, Lost Time",
      description: "Students forget where they wrote things during exams."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: "Zero Digital Backup",
      description: "Once written, it's gone forever."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Smart Devices = Too Expensive",
      description: "iPads & Remarkable cost ₹30,000+."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ),
      title: "No Solution Under ₹999",
      description: "No reusable + AI + cloud device exists."
    }
  ];

  return (
    <section id="problems" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 md:mb-6">
            Why SlateBook?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#e5e5e5] max-w-3xl mx-auto">
            The problems every student faces with traditional notebooks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <Card key={index} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-[#16a34a]">
                  {problem.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {problem.title}
                </h3>
                <p className="text-sm md:text-base text-[#e5e5e5] leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;

