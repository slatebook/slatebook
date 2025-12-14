import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PranjalImage from "../assets/images/Pranjal.jpg"
import AnuragImage from "../assets/images/Anurag.jpg"

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', 'Engineering', 'Design', 'Marketing', 'Product', 'Operations'];

  const jobs = [
    {
      title: 'Senior Frontend Engineer',
      department: 'Engineering',
      location: 'Remote / Mumbai',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Build beautiful, responsive interfaces for SlateBook using React and modern web technologies.',
      requirements: ['React.js', 'TypeScript', 'Tailwind CSS', 'REST APIs'],
      responsibilities: ['Develop user-facing features', 'Optimize application performance', 'Collaborate with design team', 'Write clean, maintainable code']
    },
    {
      title: 'AI/ML Engineer',
      department: 'Engineering',
      location: 'Bangalore / Remote',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Work on cutting-edge AI models for handwriting recognition and intelligent note-taking features.',
      requirements: ['Python', 'TensorFlow/PyTorch', 'Computer Vision', 'NLP'],
      responsibilities: ['Develop ML models', 'Optimize AI algorithms', 'Research new techniques', 'Deploy models to production']
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'Mumbai / Remote',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Design intuitive, delightful experiences that make learning easier for millions of students.',
      requirements: ['Figma', 'UI/UX Design', 'Design Systems', 'User Research'],
      responsibilities: ['Create design mockups', 'Conduct user research', 'Build design systems', 'Collaborate with engineers']
    },
    {
      title: 'Content Marketing Manager',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Tell the SlateBook story and help students discover how we can transform their learning.',
      requirements: ['Content Strategy', 'SEO', 'Social Media', 'Analytics'],
      responsibilities: ['Create content strategy', 'Write blog posts', 'Manage social media', 'Analyze performance']
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '4-6 years',
      description: 'Define product roadmap and ensure SlateBook meets every student\'s needs.',
      requirements: ['Product Strategy', 'Data Analysis', 'User Research', 'Agile'],
      responsibilities: ['Define product vision', 'Prioritize features', 'Work with stakeholders', 'Launch products']
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Bangalore / Remote',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'Build and maintain scalable infrastructure to support millions of students.',
      requirements: ['AWS/GCP', 'Docker', 'Kubernetes', 'CI/CD'],
      responsibilities: ['Manage infrastructure', 'Automate deployments', 'Monitor systems', 'Ensure uptime']
    },
    {
      title: 'UX Researcher',
      department: 'Design',
      location: 'Remote',
      type: 'Contract',
      experience: '2-4 years',
      description: 'Understand student needs through research and help shape product decisions.',
      requirements: ['User Research', 'Data Analysis', 'Prototyping', 'Communication'],
      responsibilities: ['Conduct user interviews', 'Analyze research data', 'Present insights', 'Test prototypes']
    },
    {
      title: 'Business Development Intern',
      department: 'Operations',
      location: 'Mumbai',
      type: 'Internship',
      experience: 'Fresh Graduate',
      description: 'Help us expand SlateBook to educational institutions across India.',
      requirements: ['Communication', 'Sales', 'MS Office', 'Passion for Education'],
      responsibilities: ['Reach out to schools', 'Support partnerships', 'Market research', 'Sales support']
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Salary',
      description: 'Industry-leading compensation with equity options'
    },
    {
      icon: '🏥',
      title: 'Health Insurance',
      description: 'Comprehensive health coverage for you and your family'
    },
    {
      icon: '🏠',
      title: 'Remote Work',
      description: 'Work from anywhere with flexible hours'
    },
    {
      icon: '📚',
      title: 'Learning Budget',
      description: '₹50,000 annual budget for courses and conferences'
    },
    {
      icon: '🌴',
      title: 'Unlimited PTO',
      description: 'Take time off when you need it, no questions asked'
    },
    {
      icon: '💻',
      title: 'Latest Equipment',
      description: 'MacBook Pro and choice of accessories'
    },
    {
      icon: '🎉',
      title: 'Team Events',
      description: 'Regular team outings and annual offsites'
    },
    {
      icon: '👶',
      title: 'Parental Leave',
      description: '6 months paid leave for new parents'
    }
  ];

  const perks = [
    'Stock options for all employees',
    'Annual performance bonuses',
    'Mental health support',
    'Home office setup budget',
    'Coworking space membership',
    'Gym membership reimbursement',
    'Book purchase reimbursement',
    'Quarterly team retreats'
  ];

  const hiringProcess = [
    {
      step: '01',
      title: 'Apply',
      description: 'Submit your application with resume and portfolio (if applicable)',
      duration: '5 min'
    },
    {
      step: '02',
      title: 'Initial Screening',
      description: 'Quick call with our talent team to learn about you',
      duration: '30 min'
    },
    {
      step: '03',
      title: 'Technical/Skills Assessment',
      description: 'Showcase your skills through a relevant task or interview',
      duration: '2 hours'
    },
    {
      step: '04',
      title: 'Team Interview',
      description: 'Meet the team you\'ll be working with',
      duration: '1 hour'
    },
    {
      step: '05',
      title: 'Culture Fit',
      description: 'Chat with founders about vision and values',
      duration: '45 min'
    },
    {
      step: '06',
      title: 'Offer',
      description: 'Receive your offer and join the team!',
      duration: '🎉'
    }
  ];

  const testimonials = [
    {
      name: 'Pranjal',
      role: 'Founder & CEO',
      image: PranjalImage,
      quote: 'Working at SlateBook has been incredible. The team is supportive, the mission is meaningful, and I learn something new every day.'
    },
    {
      name: 'Anurag',
      role: 'Co-Founder & COO',
      image: AnuragImage,
      quote: 'The impact we make on students\' lives is what drives me. SlateBook is more than a job it\'s a mission I believe in.'
    }
  ];

  const filteredJobs = selectedDepartment === 'All' 
    ? jobs 
    : jobs.filter(job => job.department === selectedDepartment);

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
              Build the Future of{' '}
              <span className="bg-linear-to-r from-[#16a34a] to-[#22c55e] bg-clip-text text-transparent">
                Education
              </span>
              <br />
              with Us
            </h1>
            <p className="text-base sm:text-lg text-[#e5e5e5] mb-8 leading-relaxed max-w-3xl mx-auto">
              Join a passionate team of innovators, dreamers, and problem-solvers on a mission to make quality education accessible to millions of students worldwide.
            </p>
            <motion.a
              href="#openings"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-linear-to-r from-[#16a34a] to-[#22c55e] text-[#1a1a1a] font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              View Open Positions
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
              Why Join{' '}
              <span className="bg-linear-to-r from-[#16a34a] to-[#22c55e] bg-clip-text text-transparent">
                SlateBook?
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#e5e5e5] max-w-3xl mx-auto">
              More than just a job—it's an opportunity to make real impact
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
            {[
              {
                icon: '🎯',
                title: 'Meaningful Mission',
                description: 'Work on something that matters. Every day, you\'ll be helping millions of students learn better and achieve their dreams.'
              },
              {
                icon: '🚀',
                title: 'Rapid Growth',
                description: 'We\'re scaling fast. Join early and grow with us. Your impact will be visible and your career will accelerate.'
              },
              {
                icon: '💡',
                title: 'Innovation Culture',
                description: 'Your ideas matter here. We encourage experimentation, creativity, and thinking outside the box.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#262626] border border-[#333333] rounded-xl p-6 md:p-8 hover:border-[#16a34a] transition-all duration-300 text-center"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-[#e5e5e5] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
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
              Benefits &{' '}
              <span className="bg-linear-to-r from-[#16a34a] to-[#22c55e] bg-clip-text text-transparent">
                Perks
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#e5e5e5] max-w-3xl mx-auto">
              We take care of our team so they can do their best work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-[#262626] border border-[#333333] rounded-xl p-6 hover:border-[#16a34a] transition-all duration-300 hover:shadow-xl hover:shadow-[#16a34a]/10"
              >
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-[#e5e5e5]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#262626] border border-[#333333] rounded-xl p-6 md:p-8"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">Plus More...</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {perks.map((perk, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#16a34a] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm md:text-base text-[#e5e5e5]">{perk}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-[#0f0f0f] to-[#1a1a1a]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
              Open{' '}
              <span className="bg-linear-to-r from-[#16a34a] to-[#22c55e] bg-clip-text text-transparent">
                Positions
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#e5e5e5] max-w-3xl mx-auto mb-8">
              Find your perfect role and start making an impact
            </p>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDepartment(dept)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedDepartment === dept
                      ? 'bg-linear-to-r from-[#16a34a] to-[#22c55e] text-[#1a1a1a]'
                      : 'bg-[#262626] text-[#e5e5e5] hover:bg-[#333333]'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            {filteredJobs.length > 0 ? <><h1 className='text-center font-bold text-base  sm:text-2xl'>No positions found</h1></>:
            <>{filteredJobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-[#262626] border border-[#333333] rounded-xl p-6 md:p-8 hover:border-[#16a34a] transition-all duration-300 hover:shadow-xl hover:shadow-[#16a34a]/10"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="px-3 py-1 bg-[#16a34a]/20 border border-[#16a34a] rounded-full text-xs md:text-sm text-[#16a34a] font-semibold">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-[#1a1a1a] border border-[#333333] rounded-full text-xs md:text-sm text-[#e5e5e5]">
                        📍 {job.location}
                      </span>
                      <span className="px-3 py-1 bg-[#1a1a1a] border border-[#333333] rounded-full text-xs md:text-sm text-[#e5e5e5]">
                        ⏰ {job.type}
                      </span>
                      <span className="px-3 py-1 bg-[#1a1a1a] border border-[#333333] rounded-full text-xs md:text-sm text-[#e5e5e5]">
                        💼 {job.experience}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-[#e5e5e5] mb-4">
                      {job.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-sm font-semibold text-[#16a34a] mb-2">Requirements:</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((req, idx) => (
                            <li key={idx} className="text-xs md:text-sm text-[#e5e5e5] flex items-start gap-2">
                              <span className="text-[#16a34a]">•</span>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#16a34a] mb-2">Responsibilities:</h4>
                        <ul className="space-y-1">
                          {job.responsibilities.slice(0, 4).map((resp, idx) => (
                            <li key={idx} className="text-xs md:text-sm text-[#e5e5e5] flex items-start gap-2">
                              <span className="text-[#16a34a]">•</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <motion.a
                    href="/"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="shrink-0 bg-linear-to-r from-[#16a34a] to-[#22c55e] text-[#1a1a1a] font-semibold py-3 px-6 rounded-lg text-center hover:shadow-lg transition-all duration-300"
                  >
                    Apply Now
                  </motion.a>
                </div>
              </motion.div>
            ))}</>}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-[#e5e5e5]">No positions available in this department right now.</p>
              <p className="text-base text-[#808080] mt-2">Check back soon or apply for other roles!</p>
            </div>
          )}
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
              Our Hiring{' '}
              <span className="bg-linear-to-r from-[#16a34a] to-[#22c55e] bg-clip-text text-transparent">
                Process
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#e5e5e5] max-w-3xl mx-auto">
              Simple, transparent, and respectful of your time
            </p>
          </motion.div>

          <div className="space-y-6">
            {hiringProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-start gap-4 md:gap-6 bg-[#262626] border border-[#333333] rounded-xl p-6 md:p-8 hover:border-[#16a34a] transition-all duration-300"
              >
                <div className="shrink-0 w-16 h-16 bg-linear-to-br from-[#16a34a] to-[#22c55e] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl font-black text-white">{step.step}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="text-xl md:text-2xl font-semibold text-white">
                      {step.title}
                    </h3>
                    <span className="text-sm md:text-base text-[#16a34a] font-semibold whitespace-nowrap">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-[#e5e5e5]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-[#1a1a1a] to-[#0f0f0f]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4">
              What Our Team{' '}
              <span className="bg-linear-to-r from-[#16a34a] to-[#22c55e] bg-clip-text text-transparent">
                Says
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#e5e5e5] max-w-3xl mx-auto">
              Hear from the people who work here every day
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#262626] border border-[#333333] rounded-xl p-6 md:p-8 hover:border-[#16a34a] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-linear-to-br from-[#262626] to-[#1a1a1a] rounded-full flex items-center justify-center text-3xl border-2 border-[#333333]">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-[#16a34a]">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-sm md:text-base text-[#e5e5e5] italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-linear-to-br from-[#262626] to-[#1a1a1a] border-2 border-[#16a34a] rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-lg md:text-xl text-[#e5e5e5] mb-8 leading-relaxed">
              We're always looking for talented people. Send us your resume and let's talk about how you can contribute to SlateBook's mission.
            </p>
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-linear-to-r from-[#16a34a] to-[#22c55e] text-[#1a1a1a] font-semibold py-4 px-8 rounded-lg text-lg shadow-lg hover:shadow-xl hover:shadow-[#16a34a]/50 transition-all duration-300"
            >
              Contact Us
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;

