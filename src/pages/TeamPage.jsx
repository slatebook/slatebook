import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PranjalImage from "../assets/images/Pranjal.jpg"
import AnuragImage from "../assets/images/Anurag.jpg"
import MohitImage from "../assets/images/Mohit.jpg"
import SarvajeeetImage from "../assets/images/Sarvajeet.jpg"

const TeamPage = () => {
  const teamMembers = [
    {
      name: 'Pranjal',
      role: 'Founder & CEO',
      fullBio: 'Pranjal Maurya is a self-taught technologist and entrepreneur who started coding at 13, built complex web systems, and founded a Web3 startup early in his career. After clearing GATE and joining IIT Hyderabad, he chose to drop out to build Slatebook full-time an ultra-affordable electronic book with infinite pages and permanent memory, backed by a provisional patent and real-world testing.',
      email: 'em25mtech11004@iith.ac.in',
      linkedin: 'https://www.linkedin.com/in/0xpranjl/',
      image: PranjalImage,
      expertise: ['Web Systems', 'Blockchain', 'Product Engineering'],
      achievements: ['Founded Web3 startup UCPI', 'Received Fantom Foundation grant', 'Cleared GATE exam','Designed custom authentication protocol (dAuth)']
    },
    {
      name: 'Anurag',
      role: 'Co-Founder & COO',
      fullBio: 'Anurag Thakur Ⓥ is a student at IIT Madras (BS Data Science) and Delhi University (Psychology Honours). A psychology expert with 3+ years of experience, founder of SketchMEE, polymath with 100+ certifications, ex-Head of BIHAAN.org, and followed by 20K+ professionals on LinkedIn.',
      email: '23f2000838@ds.study.iitm.ac.in',
      linkedin: 'https://www.linkedin.com/in/siranurag/',
      image: AnuragImage,
      expertise: ['Business Strategy', 'Data Science', 'Behavioral Psychology'],
      achievements: ['Founder, SketchMEE', '5× NPTEL Star Certified (1 of 283 pan-India)', '100+ Certifications (IITs, NITTTR, NITs, AICTE)','Wadhwani Foundation – Recognized Entrepreneur (Cohort 8.3, 2025)','Business strategist At Prashant Kumar LTD UK']
    },
    {
      name: 'Sarvajeet',
      role: 'Developer',
      fullBio: 'I’m a full-stack developer building scalable web applications with Next.js, React, Node.js, and Express.js, with experience across frontend, backend, APIs, authentication, cloud services, and CI/CD to deliver production-ready solutions.',
      email: 'sarvajeetshahktn@gmail.com',
      linkedin: 'https://www.linkedin.com/in/sarvajeet-lal-shah-928280274/',
      image: SarvajeeetImage,
      expertise: ['Full-Stack Development', 'Backend APIs','Cloud Integration'],
      achievements: ['1 year of experience as an SDE', 'Backend APIs','Cloud Integration','Worked on production-grade products serving over 1 lakh users','Handled the frontend development of client projects']
    },
    {
      name: 'Mohit',
      role: 'Product Manager',
      bio: 'Strategic thinker ensuring SlateBook meets every student\'s needs. Background in education technology and user research.',
      fullBio: 'Mohit bridges the gap between technology and user needs. With his background in psychology and EdTech, he ensures SlateBook truly solves student problems.',
      email: 'Rajpootmohit1010@gmail.com',
      linkedin: 'https://www.linkedin.com/in/mohit-singh-84393b270/',
      image: MohitImage,
      expertise: ['AI Agents', 'Full-Stack Development', 'DevOps'],
      achievements: ['Demonstrated strong responsibility and professionalism', 'Delivered consistent and positive project outcomes', 'Contributed effectively to assigned projects']
    }
  ];

  const departments = [
    {
      name: 'Engineering',
      icon: '⚙️',
      description: 'Building robust, scalable technology',
      members: 8
    },
    {
      name: 'Design',
      icon: '🎨',
      description: 'Crafting beautiful user experiences',
      members: 4
    },
    {
      name: 'Marketing',
      icon: '📢',
      description: 'Spreading the word about SlateBook',
      members: 5
    },
    {
      name: 'Customer Success',
      icon: '💬',
      description: 'Ensuring every student succeeds',
      members: 6
    }
  ];

  const culture = [
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'We encourage creative thinking and bold ideas. Every team member has a voice.'
    },
    {
      icon: '🤝',
      title: 'Collaborative',
      description: 'We believe the best solutions come from diverse perspectives working together.'
    },
    {
      icon: '🎯',
      title: 'Impact Driven',
      description: 'Everything we do is focused on making a real difference in students\' lives.'
    },
    {
      icon: '🌟',
      title: 'Growth Mindset',
      description: 'We invest in our team\'s learning and development at every stage.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-[70vh] pt-24 md:pt-32 pb-12 md:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-linear-to-br from-[#16a34a]/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Meet the{' '}
              <span className="bg-linear-to-r from-[#16a34a] to-[#22c55e] bg-clip-text text-transparent">
                Dreamers & Builders
              </span>
              <br />
              Behind SlateBook
            </h1>
            <p className="text-base sm:text-lg text-[#e5e5e5] mb-8 leading-relaxed max-w-3xl mx-auto">
              We're a passionate team of educators, engineers, designers, and dreamers united by one mission: making quality education technology accessible to every student.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
              <div className="flex items-center gap-2 bg-[#262626] px-4 py-2 rounded-full">
                <span className="text-2xl">👥</span>
                <span className="text-[#e5e5e5]"><span className="text-[#16a34a] font-semibold">25+</span> Team Members</span>
              </div>
              <div className="flex items-center gap-2 bg-[#262626] px-4 py-2 rounded-full">
                <span className="text-2xl">🌍</span>
                <span className="text-[#e5e5e5]"><span className="text-[#16a34a] font-semibold">5</span> Countries</span>
              </div>
              <div className="flex items-center gap-2 bg-[#262626] px-4 py-2 rounded-full">
                <span className="text-2xl">💡</span>
                <span className="text-[#e5e5e5]"><span className="text-[#16a34a] font-semibold">1</span> Big Dream</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4">
              Leadership{' '}
              <span className="bg-linear-to-r from-[#16a34a] to-[#22c55e] bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#e5e5e5] max-w-3xl mx-auto">
              The visionaries steering SlateBook towards revolutionizing education
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-[#262626] rounded-2xl border border-[#333333] hover:border-[#16a34a] transition-all duration-300 hover:shadow-2xl hover:shadow-[#16a34a]/20 overflow-hidden">
                  <div className="p-6 md:p-8">
                    {/* Header with Image and Badge */}
                    <div className="flex items-start gap-4 md:gap-6 mb-6">
                      <div className="relative shrink-0">
                        <div className="w-20 h-20 md:w-24 md:h-24 bg-linear-to-br from-[#262626] to-[#1a1a1a] rounded-xl flex items-center justify-center text-4xl md:text-5xl border-2 border-[#333333] group-hover:border-[#16a34a] transition-all duration-300">
                          <img className="w-full h-full object-cover rounded-xl" src={member.image} alt={member.name} />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                          {member.name}
                        </h3>
                        <div className="inline-block bg-linear-to-r from-[#16a34a] to-[#22c55e] px-3 py-1 rounded-full mb-3">
                          <span className="text-xs md:text-sm font-semibold text-[#1a1a1a]">
                            {member.role}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-sm md:text-base text-[#e5e5e5] mb-4 leading-relaxed">
                      {member.fullBio}
                    </p>

                    {/* Expertise */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-[#16a34a] mb-2">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <span key={idx} className="text-xs bg-[#1a1a1a] border border-[#333333] text-[#e5e5e5] px-3 py-1 rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-[#16a34a] mb-2">Achievements:</h4>
                      <ul className="space-y-1">
                        {member.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-xs md:text-sm text-[#e5e5e5] flex items-start sm:items-center gap-2">
                            <span className="text-[#16a34a]">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex gap-3 pt-4 border-t border-[#333333]">
                      <a
                        href={`mailto:${member.email}`}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-sm text-[#e5e5e5] hover:border-[#16a34a] hover:text-[#16a34a] transition-all"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email
                      </a>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#1a1a1a] border border-[#333333] rounded-lg text-sm text-[#e5e5e5] hover:border-[#16a34a] hover:text-[#16a34a] transition-all"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
              Our{' '}
              <span className="bg-linear-to-r from-[#16a34a] to-[#22c55e] bg-clip-text text-transparent">
                Departments
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#e5e5e5] max-w-3xl mx-auto">
              Diverse teams working together to bring SlateBook to life
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#262626] border border-[#333333] rounded-xl p-6 hover:border-[#16a34a] transition-all duration-300 text-center hover:shadow-xl hover:shadow-[#16a34a]/10"
              >
                <div className="text-5xl mb-4">{dept.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                  {dept.name}
                </h3>
                <p className="text-sm md:text-base text-[#e5e5e5] mb-4">
                  {dept.description}
                </p>
                <div className="inline-block bg-[#16a34a]/20 border border-[#16a34a] px-4 py-1 rounded-full">
                  <span className="text-sm font-semibold text-[#16a34a]">{dept.members} Members</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-[#0f0f0f] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
              Our{' '}
              <span className="bg-linear-to-r from-[#16a34a] to-[#22c55e] bg-clip-text text-transparent">
                Culture
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#e5e5e5] max-w-3xl mx-auto">
              What it's like to work at SlateBook
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {culture.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#262626] border border-[#333333] rounded-xl p-6 md:p-8 hover:border-[#16a34a] transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{item.icon}</div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm md:text-base text-[#e5e5e5] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-[#262626] to-[#1a1a1a] border-2 border-[#16a34a] rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-lg md:text-xl text-[#e5e5e5] mb-8 leading-relaxed">
              We're always looking for passionate individuals who want to make a real impact in education. 
              Check out our open positions and become part of something special.
            </p>
            <div className='pb-10 font-semibold text-base'>
              Mail us at : <a href="mailto:careers@slatebook.com" className='hover:text-[#16a34a]'>careers@slatebook.com</a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/careers"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-linear-to-r from-[#16a34a] to-[#22c55e] text-[#1a1a1a] font-semibold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl hover:shadow-[#16a34a]/50 transition-all duration-300"
              >
                View Open Positions
              </motion.a>
              <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-[#262626] border-2 border-[#16a34a] text-white font-semibold py-4 px-8 rounded-lg text-lg hover:bg-[#16a34a] hover:text-[#1a1a1a] transition-all duration-300"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeamPage;

