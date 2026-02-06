import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../assets/logos/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Team', href: '/team', isPage: true },
    { name: 'Careers', href: '/careers', isPage: true },
    { name: 'About', href: '/about', isPage: true }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/90 backdrop-blur-lg shadow-sm border-b border-black/5'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <Link to="/" className="text-2xl md:text-3xl font-semibold text-black">
              <div className='flex justify-center items-center'>
                <img src={Logo} alt="Logo" className="w-10 h-8 md:h-10" />
                <div className='ml-1 flex flex-col leading-tight'>
                  <span className="text-base font-bold">SlateBook</span>
                  <span className="text-[8px]">Empower Your Vision.</span>

                </div>
              </div>

            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex space-x-8"
          >
            {menuItems.map((item) => {
              const isActive = item.isPage && location.pathname === item.href;

              return item.isPage ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-5 py-3 rounded-lg transition-all duration-300 font-medium ${isActive
                    ? 'bg-black text-white shadow-md'
                    : 'text-[#1a1a1a] hover:bg-black hover:text-white'
                    }`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-[#1a1a1a] hover:bg-black hover:text-white transition-all duration-300 font-medium"
                >
                  {item.name}
                </a>
              );
            })}
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-lg hover:bg-[#262626] transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {menuItems.map((item) => {
                  const isActive = item.isPage && location.pathname === item.href;

                  return item.isPage ? (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-all duration-300 font-medium text-center ${isActive
                        ? 'bg-black text-white'
                        : 'text-[#1a1a1a] bg-[#f5f5f5] hover:bg-black hover:text-white'
                        }`}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block px-4 py-3 rounded-lg text-[#1a1a1a] bg-[#f5f5f5] hover:bg-black hover:text-white transition-all duration-300 font-medium text-center"
                    >
                      {item.name}
                    </a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;

