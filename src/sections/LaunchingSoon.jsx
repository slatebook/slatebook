import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const LaunchingSoon = () => {
  // Countdown Timer State (Set your launch date here)
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return {
            ...prev,
            days: prev.days - 1,
            hours: 23,
            minutes: 59,
            seconds: 59,
          };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" />

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
            <div className="relative bg-black p-0.5 rounded-2xl overflow-hidden shadow-xl">
              {/* Animated Border Glow */}
              <motion.div
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
                style={{ backgroundSize: "200% 100%" }}
              />

              <div className="relative bg-[#fafafa] rounded-2xl px-4 py-6 md:px-8 md:py-8 lg:px-12 lg:py-10">
                <div className="flex flex-col items-center justify-center gap-6 lg:gap-8">

                  <div className="text-center flex-1 flex flex-col items-center justify-center">
                    {/* Pulsing Badge */}
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="inline-flex items-center gap-2 bg-white border-2 border-black px-4 py-2 rounded-full mb-4 shadow-sm"
                    >
                      <motion.span
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="w-2 h-2 bg-black rounded-full"
                      />
                      <span className="text-black font-bold text-xs md:text-sm uppercase tracking-wider">
                        Launching Soon
                      </span>
                    </motion.div>

                    <p className="text-sm sm:text-base md:text-lg text-center text-gray-700 max-w-2xl mx-auto lg:mx-0 font-serif">
                      Be among the{" "}
                      <span className="text-black font-bold">
                        first 1,000 students
                      </span>{" "}
                      to experience the future of note-taking at an exclusive
                      launch price!
                    </p>
                  </div>

                  <div className="shrink-0">
                    <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 w-full">
                      {[
                        {
                          icon: "⚡",
                          title: "Fast Performance",
                          description:
                            "Experience blazing fast speeds with our optimized platform.",
                        },
                        {
                          icon: "🎓",
                          title: "Learn & Grow",
                          description:
                            "Access exclusive resources to enhance your skills.",
                        },
                        {
                          icon: "✨",
                          title: "AI Features",
                          description:
                            "Unlock AI features designed for productivity.",
                        },
                        {
                          icon: "🌟",
                          title: "Community Support",
                          description:
                            "Join a vibrant community of like-minded individuals.",
                        },
                      ].map((item, index) => (
                        <motion.div
                          key={item.title}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 + index * 0.1 }}
                          className="relative"
                        >
                          <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 shadow-md hover:border-black transition-all duration-300 h-full">
                            <div className="text-3xl sm:text-4xl font-black text-black text-center mb-3">
                              {item.icon}
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-black text-center mb-1">
                              {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-600 text-center font-serif">
                              {item.description}
                            </p>
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
                            className="absolute inset-0 bg-black/5 rounded-lg blur-lg -z-10"
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 pt-6 border-t border-gray-200 flex flex-wrap justify-center items-center gap-4 text-center"
                >
                  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">⚡</span>
                      <span className="text-gray-700 font-serif">
                        <span className="text-black font-bold">
                          2,847
                        </span>{" "}
                        Waitlist
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">🎓</span>
                      <span className="text-gray-700 font-serif">
                        <span className="text-black font-bold">
                          50%
                        </span>{" "}
                        Launch Discount
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">✨</span>
                      <span className="text-gray-700 font-serif">
                        Limited to{" "}
                        <span className="text-black font-bold">
                          1,000
                        </span>{" "}
                        Units
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
                ease: "easeInOut",
              }}
              className="absolute -top-10 -right-10 w-40 h-40 bg-gray-200 rounded-full blur-3xl pointer-events-none"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-gray-200 rounded-full blur-3xl pointer-events-none"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LaunchingSoon;
