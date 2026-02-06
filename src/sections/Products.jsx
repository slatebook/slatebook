import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ZenImage from '../assets/images/slate-book-image.png';
import CanvasHero from '../assets/images/canvas-hero.jpeg';
import CanvasUi1 from '../assets/images/canvas-ui-1.jpeg';
import CanvasUi2 from '../assets/images/canvas-ui-2.jpeg';

const Products = () => {
    const [currentCanvasImage, setCurrentCanvasImage] = useState(0);
    const canvasImages = [CanvasHero, CanvasUi1, CanvasUi2];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentCanvasImage((prev) => (prev + 1) % canvasImages.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-gray-200">
            <div className="max-w-7xl mx-auto">
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
                            Ecosystem
                        </span>
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto font-serif">
                        Two revolutionary products designed to transform how you learn and create.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Slatebook Canvas */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col h-full bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl overflow-hidden hover:border-black transition-colors duration-300"
                    >
                        {/* Image Slider for Canvas */}
                        <div className="h-64 sm:h-80 bg-gray-200 relative overflow-hidden group">
                            <AnimatePresence mode='wait'>
                                <motion.img
                                    key={currentCanvasImage}
                                    src={canvasImages[currentCanvasImage]}
                                    alt="Slatebook Canvas Interface"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-full h-full object-cover"
                                />
                            </AnimatePresence>
                        </div>

                        <div className="p-8 md:p-12 flex-1">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="inline-block px-4 py-1 bg-green-600 text-white text-sm font-bold rounded-full">
                                    Launching First
                                </div>
                            </div>

                            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                                SlateBook Canvas
                            </h3>
                            <p className="text-lg text-gray-700 font-serif mb-8 leading-relaxed">
                                Your digital notebook. Take beautiful handwritten notes while watching lectures on an infinite canvas. A natural writing experience that feels just like paper.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Natural Writing Experience', 'Infinite Pages', 'Watch & Learn (Video Looping)', 'Cloud Sync', 'Export to PDF'].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700 font-serif">
                                        <span className="text-black text-xl">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="https://slatebook.vercel.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-black text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition-all hover:shadow-lg w-full text-center sm:w-auto"
                            >
                                Explore Now
                            </a>
                        </div>
                    </motion.div>

                    {/* Slatebook Zen */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col h-full bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="h-64 sm:h-80 bg-gray-100 relative items-center justify-center flex overflow-hidden">
                            <img src={ZenImage} alt="Slatebook Zen" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-8 md:p-12 flex-1 relative">
                            <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2 bg-yellow-400 text-black font-bold px-6 py-2 rotate-12 shadow-md">
                                Coming Soon
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
                                SlateBook Zen
                            </h3>
                            <p className="text-lg text-gray-700 font-serif mb-8 leading-relaxed">
                                The world's most affordable AI-powered LCD writing pad. Distraction-free, paper-like feel, with the power to digitize everything you write instantly.
                            </p>
                            <ul className="space-y-3 mb-8">
                                {['Paper-like Writing Feel', 'Weeks of Battery Life', 'Instant Digitization', 'Distraction Free', 'Under ₹999'].map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-700 font-serif">
                                        <span className="text-black text-xl">✓</span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Products;
