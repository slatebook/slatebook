import React, { useState } from 'react';
import { motion } from 'framer-motion';
import DemoVideoSlateBook from '../assets/video/slate-book-video.mp4'

const VideoDemo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 md:mb-6">
            See SlateBook in{' '}
            <span className="bg-linear-to-r from-[#16a34a] to-[#22c55e] bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#e5e5e5] max-w-3xl mx-auto">
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
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#16a34a]/20 border border-[#333333] bg-[#262626]">
            {/* Video/Placeholder */}
            <div className="relative aspect-video bg-linear-to-br from-[#1a1a1a] via-[#262626] to-[#1a1a1a]">
              {/* Placeholder Content - Replace with actual video */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-12">


                <video width="100%" height="auto" controls autoPlay={true} muted={true}>
                  <source src={DemoVideoSlateBook} type="video/mp4" />
                </video>
              </div>

              {/* Corner Badges */}
              <div className="absolute top-4 left-4 bg-[#16a34a] text-[#1a1a1a] px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                Product Demo
              </div>

              <div className="absolute top-4 right-4 bg-[#262626]/80 backdrop-blur-sm border border-[#16a34a] text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold">
                HD Quality
              </div>
            </div>

            {/* Video Features Bar */}
            <div className="bg-[#1a1a1a] border-t border-[#333333] px-4 md:px-8 py-4 md:py-6">
              <div className="grid grid-cols-3 gap-4 md:gap-8 text-center">
                <div className="space-y-1">
                  <div className="text-[#16a34a] font-semibold text-lg md:text-2xl">5+</div>
                  <div className="text-[#e5e5e5] text-xs md:text-sm">Features</div>
                </div>
                <div className="space-y-1 border-x border-[#333333]">
                  <div className="text-[#16a34a] font-semibold text-lg md:text-2xl">₹999</div>
                  <div className="text-[#e5e5e5] text-xs md:text-sm">Price</div>
                </div>
                <div className="space-y-1">
                  <div className="text-[#16a34a] font-semibold text-lg md:text-2xl">∞</div>
                  <div className="text-[#e5e5e5] text-xs md:text-sm">Reusable</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 md:w-32 md:h-32 bg-[#16a34a]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 md:w-32 md:h-32 bg-[#22c55e]/10 rounded-full blur-3xl pointer-events-none" />
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
              className="flex items-center gap-3 bg-[#262626] border border-[#333333] rounded-lg px-4 py-3 hover:border-[#16a34a] transition-colors duration-300"
            >
              <span className="text-2xl md:text-3xl">{feature.icon}</span>
              <span className="text-sm md:text-base text-[#e5e5e5] font-medium">{feature.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VideoDemo;

