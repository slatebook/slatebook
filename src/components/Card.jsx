import React from 'react';
import { motion } from 'framer-motion';

const Card = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className={`bg-[#262626] rounded-xl p-6 hover:bg-[#2d2d2d] transition-all duration-300 hover:shadow-xl hover:shadow-[#16a34a]/10 border border-[#333333] ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;

