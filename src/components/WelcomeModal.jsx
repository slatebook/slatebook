import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WelcomeModal = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleExplore = () => {
        // Redirect to the actual app URL
        window.open('https://slatebook.vercel.app/', '_blank');
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        transition={{ type: "spring", duration: 0.6 }}
                        className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-800 shadow-2xl"
                    >
                        {/* Background Decorative Elements */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                            <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[100px]" />
                            <div className="absolute top-[40%] right-[10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[100px]" />
                        </div>

                        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12 text-center md:px-12 md:py-16">
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="mb-4 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"
                            >
                                Introducing <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                                    Slatebook Canvas
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="max-w-lg mb-8 text-base text-neutral-400 md:text-lg"
                            >
                                Experience the future of digital note-taking. Infinite canvas, real-time collaboration, and powerful tools at your fingertips.
                            </motion.p>

                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="flex flex-col gap-4 sm:flex-row"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleExplore}
                                    className="px-8 py-3 text-lg font-bold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-[0_0_20px_rgba(124,58,237,0.4)] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-neutral-900 cursor-pointer"
                                >
                                    Explore Now
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsOpen(false)}
                                    className="px-8 py-3 text-lg font-medium text-neutral-300 transition-all duration-300 rounded-full border border-neutral-700 hover:border-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2 focus:ring-offset-neutral-900 cursor-pointer"
                                >
                                    Close
                                </motion.button>
                            </motion.div>
                        </div>

                        {/* Close button for accessibility/usability */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 p-2 text-neutral-500 hover:text-white transition-colors cursor-pointer"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default WelcomeModal;
