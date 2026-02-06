import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/Button";
import MockupImage from "../assets/images/slate-book-image.png";
import CanvasPenImage from "../assets/images/canvas-hero.jpeg";
import { Canvas } from "@react-three/fiber";
import { PaperPlane } from "../components/3d/PaperPlane";

const Hero = () => {
  // Countdown Timer State (Set your launch date here)
  const [timeLeft, setTimeLeft] = useState({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 0,
  });

  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const heroImages = [MockupImage, CanvasPenImage];

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

  useEffect(() => {
    const imageTimer = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 7000);
    return () => clearInterval(imageTimer);
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-[#fafafa]">

      {/* Background 3D Elements */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <PaperPlane position={[2, 0, 0]} scale={[0.5, 0.5, 0.5]} />
          <PaperPlane position={[-2, 1, -1]} scale={[0.3, 0.3, 0.3]} rotation={[0.5, 0, 0]} />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <motion.h1
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black leading-tight tracking-tight"
            >
              SlateBook{" "}
            </motion.h1>
            <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-800">
              <span
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="font-semibold text-black border-b-2 border-black"
              >
                The Infinite Paper
              </span>
              <br />
              Notebook Reimagined.
            </motion.h2>

            <motion.p
              variants={subtitleVariants}
              initial="hidden"
              animate="visible"
              className="text-lg sm:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 font-serif"
            >
              Write, sketch, and think on a surface that feels like paper but acts like magic.
              The most affordable AI-powered reusable notebook on Earth.
            </motion.p>

            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button variant="outline" className="text-base md:text-lg border-black text-black hover:bg-black hover:text-white transition-all">
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
            <div className="relative rounded-sm overflow-hidden shadow-2xl bg-white p-4 xs:p-8 md:p-12 border-2 border-black/5 transform rotate-2 hover:rotate-0 transition-all duration-700 h-[400px] md:h-[500px] flex items-center justify-center">

              {/* Alternating Image Container */}
              <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentHeroImage}
                    src={heroImages[currentHeroImage]}
                    alt="Slatebook Hero"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-500 absolute inset-0"
                  />
                </AnimatePresence>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-4 right-4 bg-black text-white px-4 py-2 shadow-lg text-sm font-bold tracking-wider z-20"
              >
                ₹999 ONLY
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-4 left-4 bg-white border-2 border-black text-black px-4 py-2 shadow-lg text-sm font-bold z-20"
              >
                AI INSIDE
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
