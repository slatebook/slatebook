import React from 'react';
import { motion } from 'framer-motion';

const FeatureWorkflow = () => {
  const workflows = [
    {
      step: "01",
      title: "Writing Experience",
      description: "Natural pen-on-paper feel with pressure-sensitive screen. Write smoothly, just like traditional notebooks.",
      features: ["Pressure Sensitivity", "Magnetic Pen", "Natural Feel", "Instant Response"],
      linear: "from-[#16a34a] to-[#22c55e]"
    },
    {
      step: "02",
      title: "Cloud Sync",
      description: "Automatic cloud backup as you write. Access your notes from any device, anywhere in the world.",
      features: ["Auto Backup", "Multi-Device Sync", "Secure Storage", "Instant Access"],
      linear: "from-[#22c55e] to-[#16a34a]"
    },
    {
      step: "03",
      title: "AI Doubt Solving",
      description: "Ask questions about your notes. AI understands your handwriting and provides instant explanations.",
      features: ["Handwriting Recognition", "Smart AI", "Instant Answers", "Learn Better"],
      linear: "from-[#16a34a] to-[#10b981]"
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 md:mb-6">
            How It Works
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#e5e5e5] max-w-3xl mx-auto">
            Experience the future of note-taking in three simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {workflows.map((workflow, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative"
            >
              <div className="relative bg-[#262626] rounded-2xl p-6 md:p-8 hover:bg-[#2d2d2d] transition-all duration-300 border border-[#333333] hover:border-[#16a34a]/50 hover:shadow-xl hover:shadow-[#16a34a]/10 h-full">
                {/* Step Number */}
                <div className={`inline-block mb-4 md:mb-6 px-4 py-2 rounded-full bg-linear-to-r ${workflow.linear} text-[#1a1a1a] font-semibold text-sm md:text-base`}>
                  {workflow.step}
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3 md:mb-4">
                  {workflow.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-[#e5e5e5] mb-4 md:mb-6 leading-relaxed">
                  {workflow.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {workflow.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-[#16a34a] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm md:text-base text-[#e5e5e5]">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Mockup Placeholder */}
                <div className="mt-6 md:mt-8 aspect-video bg-linear-to-br from-[#333333] to-[#1a1a1a] rounded-lg flex items-center justify-center border border-[#404040]">
                  <div className="text-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full bg-linear-to-br from-[#16a34a] to-[#22c55e] flex items-center justify-center mb-2">
                      <svg className="w-8 h-8 md:w-10 md:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                      </svg>
                    </div>
                    <p className="text-xs md:text-sm text-[#e5e5e5]">Coming Soon</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureWorkflow;

