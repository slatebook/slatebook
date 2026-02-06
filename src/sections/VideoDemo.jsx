import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DemoVideoSlateBook from '../assets/video/slate-book-video.mp4'

const VideoDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6">
            See SlateBook in{' '}
            <span className="text-black border-b-4 border-black">
              Action
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-serif">
            Watch how SlateBook transforms the way students take notes
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          {/* Video Wrapper with Glow Effect */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
            {/* Video/Placeholder */}
            <div className="relative aspect-video bg-gray-100">
              {/* Placeholder Content - Replace with actual video */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-12">


                <video width="100%" height="auto" controls autoPlay={true} muted={true} className="rounded-lg shadow-sm">
                  <source src={DemoVideoSlateBook} type="video/mp4" />
                </video>
              </div>

              {/* Corner Badges */}
              <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">
                Product Demo
              </div>

              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm border border-black text-black px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold">
                HD Quality
              </div>
            </div>

            {/* Video Features Bar */}
            <div className="bg-white border-t border-gray-200 px-4 md:px-8 py-4 md:py-6">
              <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
                <div className="space-y-1">
                  <div className="text-black font-bold text-lg md:text-2xl">5+</div>
                  <div className="text-gray-600 text-xs md:text-sm font-serif">Features</div>
                </div>
                <div className="space-y-1 border-x border-gray-200">
                  <div className="text-black font-bold text-lg md:text-2xl">₹999</div>
                  <div className="text-gray-600 text-xs md:text-sm font-serif">Price</div>
                </div>
                <div className="space-y-1">
                  <div className="text-black font-bold text-lg md:text-2xl">∞</div>
                  <div className="text-gray-600 text-xs md:text-sm font-serif">Reusable</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-gray-200 rounded-full blur-3xl pointer-events-none" />
        </motion.div>

        {/* Quick Features Below Video */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto"
        >
          {[
            { icon: "✍️", text: "Natural Writing" },
            { icon: "☁️", text: "Auto Cloud Sync" },
            { icon: "🤖", text: "AI Assistant" },
            { icon: "♾️", text: "Infinite Reuse" }
          ].map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3 hover:border-black transition-colors duration-300 shadow-sm"
            >
              <span className="text-2xl md:text-3xl">{feature.icon}</span>
              <span className="text-sm md:text-base text-black font-serif font-medium">{feature.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoDemo;

