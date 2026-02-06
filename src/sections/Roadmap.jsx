import React from 'react';
import { motion } from 'framer-motion';

const Roadmap = () => {
    const steps = [
        {
            phase: 'Phase 1',
            title: 'SlateBook Canvas Launch',
            date: 'Now Live',
            description: 'The foundation of our ecosystem. A powerful web-based infinite canvas for everyone to start creating and organizing digitally.',
            status: 'current'
        },
        {
            phase: 'Phase 2',
            title: 'Community & AI Growth',
            date: 'Q3 2026',
            description: 'Expanding Canvas with advanced AI tutoring features, public community sharing, and collaborative classrooms.',
            status: 'upcoming'
        },
        {
            phase: 'Phase 3',
            title: 'SlateBook Zen Pre-Orders',
            date: 'Q4 2026',
            description: 'Opening reservations for the hardware device. Early birds get exclusive pricing and founder edition benefits.',
            status: 'upcoming'
        },
        {
            phase: 'Phase 4',
            title: 'Zen Hardware Delivery',
            date: 'Q1 2027',
            description: 'Shipping the first batch of SlateBook Zen devices. The complete ecosystem comes to life.',
            status: 'upcoming'
        }
    ];

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fafafa]">
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
                        Our{' '}
                        <span className="text-black border-b-4 border-black">
                            Roadmap
                        </span>
                    </h2>
                    <p className="text-lg text-gray-700 font-serif">
                        The path to revolutionizing education
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-1/2" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-black rounded-full border-4 border-white shadow-sm transform -translate-x-1/2 z-10" />

                                {/* Content Card */}
                                <div className="ml-12 md:ml-0 md:w-1/2 flex justify-center md:block">
                                    <div className={`bg-white border border-gray-200 p-6 rounded-xl hover:shadow-lg transition-shadow max-w-md ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                                        }`}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className={`text-xs font-bold px-2 py-1 rounded uppercase tracking-wider ${step.status === 'current' ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'
                                                }`}>
                                                {step.phase}
                                            </span>
                                            <span className="text-sm font-semibold text-gray-500">{step.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                                        <p className="text-gray-700 font-serif text-sm leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Empty Space for alternate side */}
                                <div className="hidden md:block md:w-1/2" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
