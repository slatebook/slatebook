import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-[#16a34a] text-[#262626] hover:bg-[#15803d] shadow-lg hover:shadow-xl",
    secondary: "bg-[#262626] text-[#e5e5e5] hover:bg-[#333333] border border-[#333333]",
    outline: "bg-[#262626] text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className} cursor-pointer`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

