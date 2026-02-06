import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  const stats = [
    { number: '10K+', label: 'Students on Waitlist' },
    { number: '₹999', label: 'Affordable Price' },
    { number: '∞', label: 'Reusable Pages' },
    { number: '24/7', label: 'AI Support' }
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Innovation',
      description: 'Pushing boundaries to create revolutionary educational tools that make learning accessible to everyone.'
    },
    {
      icon: '💚',
      title: 'Affordability',
      description: 'Committed to keeping education technology affordable for every student, regardless of their background.'
    },
    {
      icon: '🌱',
      title: 'Sustainability',
      description: 'Reducing paper waste and environmental impact while empowering students with reusable technology.'
    },
    {
      icon: '🚀',
      title: 'Excellence',
      description: 'Delivering high-quality products that exceed expectations and transform the learning experience.'
    }
  ];

  const timeline = [
    {
      year: '2023',
      title: 'The Idea',
      description: 'Frustrated with costly digital notebooks and endless paper waste, our founders envisioned an affordable solution.'
    },
    {
      year: '2024',
      title: 'Development',
      description: 'Months of research, prototyping, and testing to create the perfect blend of technology and usability.'
    },
    {
      year: '2025',
      title: 'Launch',
      description: 'SlateBook is ready to revolutionize note-taking for students across India and beyond!'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[60vh] pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-gray-100 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Redefining Education,{' '}
              <span className="text-black border-b-4 border-black">
                One Note at a Time
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto font-serif">
              We believe every student deserves access to smart, affordable technology that enhances learning without breaking the bank.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-black transition-all duration-300 hover:shadow-lg"
              >
                <div className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-serif">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Mission</h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-serif">
                To democratize smart education technology by providing students with an affordable, AI-powered reusable notebook that enhances learning, reduces waste, and empowers every student to achieve their full potential.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Vision</h2>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-serif">
                To become the go-to learning companion for millions of students worldwide, creating a future where quality education technology is accessible to all, regardless of economic background.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
              Our{' '}
              <span className="text-black border-b-4 border-black">
                Story
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-serif">
              Born from frustration, built with passion
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-8 md:p-12 space-y-6"
          >
            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-serif">
              It all started in a college dorm room. Our founders, frustrated by the high cost of digital notebooks like iPads and Remarkable tablets, watched as students struggled with mountains of rough notebooks—cluttered, unsearchable, and eventually discarded.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-serif">
              The problem was clear: students needed smart technology, but existing solutions cost ₹30,000+ putting them out of reach for most Indian families. Paper notebooks were cheap but wasteful and inefficient. There had to be a better way.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-serif">
              That's when the idea for SlateBook was born. What if we could create a digital notebook that was not only smart and feature-rich but also affordable enough for every student? What if we could combine the natural feel of writing on paper with the power of AI and cloud storage?
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-serif">
              Months of research, development, and countless iterations later, SlateBook emerged—the world's most affordable AI-powered reusable digital notebook, priced under ₹999. A device that writes like paper, thinks like AI, and costs less than a month's worth of coffee.
            </p>
            <div className="pt-6 border-t border-gray-200">
              <p className="text-lg md:text-xl font-bold text-black italic font-serif">
                "Education is not a luxury—it's a right. Technology should enable learning, not limit it."
              </p>
              <p className="text-sm md:text-base text-gray-600 mt-2">— The SlateBook Team</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
              Our{' '}
              <span className="text-black border-b-4 border-black">
                Values
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-serif">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-black transition-all duration-300 hover:shadow-xl"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-black mb-3">
                  {value.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed font-serif">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
              Our{' '}
              <span className="text-black border-b-4 border-black">
                Journey
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 font-serif">
              From idea to reality
            </p>
          </motion.div>

          <div className="space-y-8 md:space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  {/* Year Badge */}
                  <div className="shrink-0 w-24 h-24 bg-black rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-black text-white">{item.year}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white border border-gray-200 rounded-xl p-6 md:p-8 hover:border-black transition-colors">
                    <h3 className="text-2xl md:text-3xl font-bold text-black mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed font-serif">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute left-12 top-24 w-0.5 h-12 bg-gray-300" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border-2 border-black rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-6">
              Join Us on This Journey
            </h2>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed font-serif">
              Be part of the education revolution. Get early access to SlateBook and help us transform learning for millions of students.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

