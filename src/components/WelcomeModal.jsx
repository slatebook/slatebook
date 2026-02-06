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
                        className="relative w-full max-w-2xl overflow-hidden rounded-sm bg-[#fafafa] border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                    >
                        {/* Background Decorative Elements - Removed for Paper Theme */}

                        <div className="relative z-10 flex flex-col items-center justify-center px-6 py-12 text-center md:px-12 md:py-16">
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                                className="mb-4 text-4xl font-extrabold tracking-tight text-black md:text-5xl lg:text-6xl"
                            >
                                Introducing <br />
                                <span className="text-black border-b-4 border-black inline-block mt-2">
                                    Slatebook Canvas
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="max-w-lg mb-8 text-base text-gray-700 md:text-lg font-serif"
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
                                    className="px-8 py-3 text-lg font-bold text-white transition-all duration-300 rounded-sm bg-black hover:bg-neutral-800 border-2 border-black focus:outline-none cursor-pointer shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none translate-x-[4px] translate-y-[4px]"
                                >
                                    Explore Now
                                </motion.button>

                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setIsOpen(false)}
                                    className="px-8 py-3 text-lg font-medium text-black transition-all duration-300 rounded-sm border-2 border-black hover:bg-neutral-100 focus:outline-none cursor-pointer"
                                >
                                    Close
                                </motion.button>
                            </motion.div>
                        </div>

                        {/* Close button for accessibility/usability */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 p-2 text-black hover:bg-black/5 transition-colors cursor-pointer rounded-full"
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
