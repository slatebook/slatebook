import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className={`bg-white rounded-xl p-6 hover:bg-gray-50 transition-all duration-300 shadow-md hover:shadow-xl border border-gray-200 hover:border-black ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;

