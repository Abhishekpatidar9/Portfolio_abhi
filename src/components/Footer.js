import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FiGithub />,
      name: "GitHub",
      url: "https://github.com/Abhishekpatidar9",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      icon: <FiLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abhishek-patidar2253",
      color: "hover:text-blue-600 dark:hover:text-blue-400"
    },
    {
      icon: <FiMail />,
      name: "Email",
      url: "mailto:abhipatidar2253@gmail.com",
      color: "hover:text-red-600 dark:hover:text-red-400"
    }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-dark-300 text-white py-12">
      <div className="container-custom">
        <div className="text-center">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Abhishek Patidar</h3>
            <p className="text-gray-400 max-w-md mx-auto">
              A passionate Information Technology graduate and aspiring software developer 
              creating innovative web solutions.
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-gray-800 dark:bg-gray-700 text-gray-300 transition-all duration-300 ${social.color}`}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 mb-8 text-gray-400"
          >
            {[
              { name: "About", href: "#about" },
              { name: "Skills", href: "#skills" },
              { name: "Projects", href: "#projects" },
              { name: "Experience", href: "#experience" },
              { name: "Contact", href: "#contact" }
            ].map((link, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={link.href}
                className="hover:text-white transition-colors duration-300"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="border-t border-gray-800 pt-8"
          >
            <p className="text-gray-400 text-sm">
              © {currentYear} Abhishek Patidar. All rights reserved. 
              <FiHeart className="inline text-red-500" /> 
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 