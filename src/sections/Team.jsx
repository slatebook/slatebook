import React from 'react';
import { motion } from 'framer-motion';
import PranjalImage from "../assets/images/Pranjal.jpeg"
import AnuragImage from "../assets/images/Anurag.jpg"
import MohitImage from "../assets/images/Mohit.jpg"

const Team = () => {
  const teamMembers = [
    {
      name: 'Pranjal',
      role: 'Founder & CEO',
      bio: 'Technologist and entrepreneur who started coding at 13, founded Web3 ventures, and is building Slatebook an innovative electronic book with infinite pages and permanent memory.',
      email: 'em25mtech11004@iith.ac.in',
      linkedin: 'https://www.linkedin.com/in/0xpranjl/',
      image: PranjalImage
    },
    {
      name: 'Anurag',
      role: 'Head of Operations',
      bio: 'Psychology and data science professional, founder of SketchMEE, NPTEL Star achiever, entrepreneur, and strategist with strong expertise in human behavior, analytics, and business growth.',
      email: '23f2000838@ds.study.iitm.ac.in',
      linkedin: 'https://www.linkedin.com/in/siranurag/',
      image: AnuragImage
    },
    {
      name: 'Mohit',
      role: 'Head of Marketing',
      bio: 'Head of Marketing driving Slatesook’s growth strategies. Experienced in digital campaigns, brand positioning, and community building to reach students effectively.',
      email: 'Rajpootmohit1010@gmail.com',
      linkedin: 'https://www.linkedin.com/in/mohit-singh-84393b270/',
      image: MohitImage
    }
  ];

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#fafafa] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6">
            Meet Our{' '}
            <span className="text-black border-b-4 border-black">
              Team
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-serif">
            The passionate people behind SlateBook, working hard to transform education for students everywhere
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-black transition-all duration-300 hover:shadow-xl h-full flex flex-col">
                {/* Image Placeholder */}
                <div className="relative mb-4">
                  <img className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-6xl md:text-7xl border-2 border-gray-100 group-hover:border-black transition-all duration-300 object-cover grayscale group-hover:grayscale-0"
                    src={member.image} alt={member.name}
                  />
                  {/* Role Badge */}
                  <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-black px-4 py-1 rounded-full">
                    <span className="text-xs md:text-sm font-semibold text-white whitespace-nowrap">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col mt-4">
                  {/* Name */}
                  <h3 className="text-xl md:text-2xl font-bold text-black mb-3 text-center">
                    {member.name}
                  </h3>

                  {/* Bio */}
                  <p className="text-sm md:text-base text-gray-700 mb-2 text-left leading-relaxed flex-1 font-serif">
                    {member.bio}
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-2 pt-4 border-t border-gray-200">
                    {/* Email */}
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-black transition-colors group/email"
                    >
                      <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="truncate text-xs">{member.email}</span>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-700 hover:text-black transition-colors group/linkedin"
                    >
                      <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span>LinkedIn Profile</span>
                    </a>
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

export default Team;

