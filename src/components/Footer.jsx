import { useState } from "react";
import { motion } from "framer-motion";
import Logo from '../assets/logos/logo.png';

const Modal = ({ isOpen, onClose, onAccept, onDecline, content }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-500/50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold mb-4">Notice</h2>
        <p className="text-sm text-gray-700 mb-6">{content}</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onDecline}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
          >
            Decline
          </button>
          <button
            onClick={onAccept}
            className="px-4 py-2 bg-[#16a34a] text-white rounded cursor-pointer"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const footerLinks = {
    product: [
      { name: "Features", href: "#solution" },
      { name: "How It Works", href: "#workflow" },
      { name: "Pricing", href: "#launching" },
      { name: "Demo", href: "#video" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Team", href: "#team" },
      { name: "Careers", href: "#careers" },
    ],
    support: [
      { name: "Contact", href: "#contact" },
      { name: "Help Center", href: "#help" },
      {
        name: "Terms and condition",
        href: "#help",
        heading: "Terms and Conditions",
        subheading: "Please read and accept our terms and conditions.",
        points: [
          {
            title: "User Agreement",
            description: "By using SlateBook, you agree to these terms.",
          },
          {
            title: "Intellectual Property",
            description: "All content is protected by copyright laws.",
          },
          {
            title: "User Responsibilities",
            description: "Users must use the service legally and ethically.",
          },
          {
            title: "Limitation of Liability",
            description:
              "We are not liable for indirect or consequential damages.",
          },
          {
            title: "Modifications",
            description: "We reserve the right to modify terms at any time.",
          },
        ],
      },
      {
        name: "Privacy Policy",
        href: "#help",
        heading: "Privacy Policy",
        subheading: "Please read and accept our privacy policy.",
        points: [
          {
            title: "Data Collection",
            description: "We collect data to improve your experience.",
          },
          {
            title: "Data Usage",
            description: "Your data is used only for service improvement.",
          },
          {
            title: "Data Protection",
            description: "We use industry-standard encryption for security.",
          },
          {
            title: "Third-party Sharing",
            description: "We never share your data with third parties.",
          },
          {
            title: "Your Rights",
            description:
              "You can request, modify, or delete your data anytime.",
          },
        ],
      },
      {
        name: "Legal",
        href: "#help",
        heading: "Legal Information",
        subheading: "Important legal details about SlateBook.",
        points: [
          {
            title: "Company Registration",
            description: "SlateBook is a registered entity in India.",
          },
          {
            title: "Compliance",
            description: "We comply with all applicable laws and regulations.",
          },
          {
            title: "Dispute Resolution",
            description:
              "Disputes will be resolved through mediation or arbitration.",
          },
          {
            title: "Governing Law",
            description: "These terms are governed by Indian law.",
          },
          {
            title: "Contact Legal Team",
            description:
              "For legal inquiries, reach out to legal@slatebook.com.",
          },
        ],
      },
    ],
  };

  const handleLinkClick = (link) => {
    if (link.heading && link.subheading && link.points) {
      const formattedContent = (
        <div>
          <h2 className="text-lg font-bold mb-2">{link.heading}</h2>
          <p className="text-sm text-gray-700 mb-4">{link.subheading}</p>
          <ul className="list-disc pl-5 space-y-2">
            {link.points.map((point, index) => (
              <li key={index}>
                <strong>{point.title}:</strong> {point.description}
              </li>
            ))}
          </ul>
        </div>
      );
      setModalContent(formattedContent);
      setModalOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const handleAccept = () => {
    console.log("Accepted");
    closeModal();
  };

  const handleDecline = () => {
    console.log("Declined");
    closeModal();
  };

  // const socialLinks = [
  //   {
  //     name: "Instagram",
  //     icon: (
  //       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  //       </svg>
  //     ),
  //     href: "https://instagram.com/slatebook",
  //   },
  //   {
  //     name: "Twitter",
  //     icon: (
  //       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  //       </svg>
  //     ),
  //     href: "https://twitter.com/slatebook",
  //   },
  //   {
  //     name: "Facebook",
  //     icon: (
  //       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  //       </svg>
  //     ),
  //     href: "https://facebook.com/slatebook",
  //   },
  //   {
  //     name: "LinkedIn",
  //     icon: (
  //       <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
  //         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  //       </svg>
  //     ),
  //     href: "https://linkedin.com/company/slatebook",
  //   },
  // ];

  return (
    <footer className="relative bg-[#f5f5f5] pt-12 md:pt-16 pb-8 overflow-hidden border-t-2 border-black">
      {/* Background linear Effects */}
      <div className="absolute inset-0 bg-[radial-linear(circle_at_top_right,#00000005_0%,transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-linear(circle_at_bottom_left,#00000005_0%,transparent_50%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Section - Logo, Slogan & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12 pb-8 md:pb-12 border-b border-black/10"
        >
          {/* Logo with linear */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
              <img src={Logo} alt="SlateBook-Logo" className="w-6 h-6 md:w-8 md:h-8" />
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-black">
              SlateBook
            </h2>
          </div>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl font-bold mb-4 text-black"
          >
            "Write Once, Reuse Forever. Learn Smarter, Not Harder."
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto leading-relaxed font-serif"
          >
            SlateBook is revolutionizing education with the world's most
            affordable AI-powered reusable digital notebook. Designed for
            students who dream big but budget smart—write naturally, sync
            instantly, and let AI be your personal tutor. Join thousands of
            students already experiencing the future of note-taking.
          </motion.p>
        </motion.div>

        {/* Middle Section - Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-black font-bold text-base md:text-lg mb-4 uppercase tracking-wider">
              Product
            </h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-700 text-sm md:text-base hover:text-black hover:underline transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-black font-bold text-base md:text-lg mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-700 text-sm md:text-base hover:text-black hover:underline transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-black font-bold text-base md:text-lg mb-4 uppercase tracking-wider">
              Support
            </h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleLinkClick(link)}
                    className="text-gray-700 text-sm md:text-base hover:text-black hover:underline transition-all duration-300 inline-block cursor-pointer text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-black font-bold text-base md:text-lg mb-4 uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-black mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:contact@slatebook.com"
                  className="text-gray-700 text-sm md:text-base hover:text-black hover:underline transition-all duration-300"
                >
                  contact@slatebook.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-black mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-gray-700 text-sm md:text-base">
                  +91 9250850307
                </span>
              </li>
              <li className="flex items-start gap-2">
                <svg
                  className="w-5 h-5 text-black mt-0.5 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-gray-700 text-sm md:text-base">
                  Delhi, India
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section - Social & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-8 border-t border-black/10"
        >
          <div className="flex justify-center">
            {/* Copyright */}
            <p className="text-gray-700 text-sm md:text-base text-center">
              © 2025{" "}
              <span className="text-black font-bold">SlateBook</span>.
              All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom linear Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black" />

      {/* Modal Component */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAccept={handleAccept}
        onDecline={handleDecline}
        content={modalContent}
      />
    </footer>
  );
};

export default Footer;
