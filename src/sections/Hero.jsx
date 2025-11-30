import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const Hero = () => {
  // Countdown Timer State (Set your launch date here)
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background linear */}
      <div className="absolute inset-0 bg-linear-to-br from-[#16a34a]/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <motion.h1
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight"
            >
              SlateBook{' '}
              
            </motion.h1>
            <motion.h2 className='text-2xl sm:text-3xl md:text-4xl font-semibold'>
                <span variants={titleVariants} initial="hidden" animate="visible" className=" bg-linear-to-r from-[#16a34a] to-[#22c55e] bg-clip-text text-transparent">World's Most Affordable {" "}</span>
                AI-Powered Infinite Usable Notebook
              </motion.h2>

            <motion.p
              variants={subtitleVariants}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-lg text-[#e5e5e5]"
            >
              Imagine a notebook that never runs out of pages and answers your every question. Effortlessly jot, erase, search, and get AI-powered help—all packed in a sleek, reusable slate. Experience the future of smart note-taking for just.
            </motion.p>

            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* <Button variant="primary" className="text-base md:text-lg">
                Get Early Access
              </Button> */}
              <Button variant="outline" className="text-base md:text-lg">
                Watch Demo
              </Button>
            </motion.div>
          </div>

          {/* Right Image/Mockup */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#16a34a]/20 bg-linear-to-br from-[#262626] to-[#1a1a1a] p-8 md:p-12 border border-[#333333]">
              {/* Placeholder for SlateBook Mockup */}
              <div className="aspect-4/3 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full bg-linear-to-br from-[#16a34a] to-[#22c55e] flex items-center justify-center shadow-lg">
                    <svg className="w-16 h-16 md:w-24 md:h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div className="text-xl md:text-2xl font-semibold text-white">SlateBook</div>
                  <div className="text-sm md:text-base text-[#e5e5e5]">Digital Notebook Mockup</div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-4 right-4 bg-[#16a34a] text-[#1a1a1a] px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold"
              >
                Under ₹999
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute bottom-4 left-4 bg-[#262626] border border-[#16a34a] text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold"
              >
                AI Powered
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

