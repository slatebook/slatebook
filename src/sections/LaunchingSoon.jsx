import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LaunchingSoon = () => {
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

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-[#1a1a1a] via-[#0f0f0f] to-[#1a1a1a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-linear(circle_at_center,_#16a34a05_0%,_transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* 🚀 LAUNCHING SOON BANNER - Eye-Catching */}
        <motion.div
          initial={{ opacity: 0, y: -30, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            {/* Main Launch Card */}
            <div className="relative bg-linear-to-r from-[#16a34a] via-[#22c55e] to-[#16a34a] p-[2px] rounded-2xl overflow-hidden">
              {/* Animated Border Glow */}
              <motion.div
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                style={{ backgroundSize: '200% 100%' }}
              />
              
              <div className="relative bg-[#1a1a1a] rounded-2xl px-4 py-6 md:px-8 md:py-8 lg:px-12 lg:py-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
                  {/* Left: Launch Text */}
                  <div className="text-center lg:text-left flex-1">
                    {/* Pulsing Badge */}
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="inline-flex items-center gap-2 bg-[#262626] border-2 border-[#16a34a] px-4 py-2 rounded-full mb-4"
                    >
                      <motion.span
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-2 h-2 bg-[#16a34a] rounded-full"
                      />
                      <span className="text-[#16a34a] font-semibold text-xs md:text-sm uppercase tracking-wider">
                        Coming Soon
                      </span>
                    </motion.div>

                    {/* Main Launch Text */}
                    <motion.h2
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-3 md:mb-4"
                      style={{
                        background: 'linear-linear(90deg, #16a34a, #22c55e, #10b981, #22c55e, #16a34a)',
                        backgroundSize: '200% 100%',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                      }}
                    >
                      LAUNCHING SOON! 🚀
                    </motion.h2>

                    <p className="text-sm sm:text-base md:text-lg text-[#e5e5e5] max-w-2xl mx-auto lg:mx-0">
                      Be among the <span className="text-[#16a34a] font-semibold">first 1,000 students</span> to experience the future of note-taking at an exclusive launch price!
                    </p>
                  </div>

                  {/* Right: Countdown Timer */}
                  <div className="shrink-0">
                    <div className="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                      {[
                        { value: timeLeft.days, label: 'Days' },
                        { value: timeLeft.hours, label: 'Hours' },
                        { value: timeLeft.minutes, label: 'Mins' },
                        { value: timeLeft.seconds, label: 'Secs' }
                      ].map((item, index) => (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          className="relative"
                        >
                          <div className="bg-linear-to-b from-[#262626] to-[#1a1a1a] border-2 border-[#333333] rounded-xl p-3 sm:p-4 min-w-[60px] sm:min-w-[70px] md:min-w-[80px] shadow-lg">
                            <motion.div
                              key={item.value}
                              initial={{ scale: 1.2, opacity: 0 }}
                              animate={{ scale: 1, opacity: 1 }}
                              transition={{ duration: 0.3 }}
                              className="text-2xl sm:text-3xl md:text-4xl font-black text-[#16a34a] text-center mb-1"
                            >
                              {String(item.value).padStart(2, '0')}
                            </motion.div>
                            <div className="text-[10px] sm:text-xs text-[#e5e5e5] uppercase tracking-wide text-center font-semibold">
                              {item.label}
                            </div>
                          </div>
                          {/* Glow Effect */}
                          <motion.div
                            animate={{
                              opacity: [0.3, 0.6, 0.3],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: index * 0.2,
                            }}
                            className="absolute inset-0 bg-[#16a34a]/20 rounded-xl blur-xl -z-10"
                          />
                        </motion.div>
                      ))}
                    </div>

                    {/* Early Access CTA */}
                    <motion.button
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full mt-4 bg-linear-to-r from-[#16a34a] to-[#22c55e] text-[#1a1a1a] font-semibold py-3 px-6 rounded-lg text-sm md:text-base shadow-lg hover:shadow-xl hover:shadow-[#16a34a]/50 transition-all duration-300"
                    >
                      🎯 Get Early Access
                    </motion.button>
                  </div>
                </div>

                {/* Bottom Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 pt-6 border-t border-[#333333] flex flex-wrap justify-center lg:justify-between items-center gap-4 text-center lg:text-left"
                >
                  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">⚡</span>
                      <span className="text-[#e5e5e5]">
                        <span className="text-[#16a34a] font-semibold">2,847</span> Waitlist
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🎓</span>
                      <span className="text-[#e5e5e5]">
                        <span className="text-[#16a34a] font-semibold">50%</span> Launch Discount
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">✨</span>
                      <span className="text-[#e5e5e5]">
                        Limited to <span className="text-[#16a34a] font-semibold">1,000</span> Units
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating Particles Effect */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-[#16a34a]/20 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#22c55e]/20 rounded-full blur-3xl pointer-events-none"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LaunchingSoon;

