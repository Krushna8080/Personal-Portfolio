import React from 'react';
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <section id="contact" className="relative bg-[#1B2430] text-white py-12">
      <div className="relative container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          {/* Left Section */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-12 w-1 bg-gradient-to-b from-violet-600 to-indigo-600 rounded-full" />
              <div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Let's Create
                </h2>
                <h2 className="text-3xl font-bold">
                  Something   
                  
                    <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
                     Extraordinary
                    </span>
                </h2>
              </div>
            </div>
            
            <motion.p 
              className="text-gray-300 mb-10 max-w-md leading-relaxed text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Have a project in mind? Let's combine your vision with my expertise to build something truly remarkable.
            </motion.p>
            
            {/* Contact Links */}
            <div className="space-y-6 mb-10">
              <motion.a 
                href="mailto:Krushnadandge8080@gmail.com"
                className="flex items-center gap-4 text-gray-300 hover:text-violet-400 transition-all group"
                whileHover={{ x: 4 }}
              >
                <div className="p-3 rounded-full bg-violet-600/10 group-hover:bg-violet-600/20 transition-colors">
                  <Mail className="w-5 h-5 text-violet-400" />
                </div>
                <span className="text-base">Krushnadandge8080@gmail.com</span>
              </motion.a>
              <motion.a 
                href="tel:+918080166050"
                className="flex items-center gap-4 text-gray-300 hover:text-violet-400 transition-all group"
                whileHover={{ x: 4 }}
              >
                <div className="p-3 rounded-full bg-violet-600/10 group-hover:bg-violet-600/20 transition-colors">
                  <Phone className="w-5 h-5 text-violet-400" />
                </div>
                <span className="text-base">+91 8080166050</span>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <motion.a 
                href="https://github.com/Krushna8080"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-violet-600/10 text-violet-400 hover:bg-violet-600/20 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/krushnadandge"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-violet-600/10 text-violet-400 hover:bg-violet-600/20 transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex flex-col md:items-end">
            <div className="flex flex-col md:items-end gap-4 mb-8">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <div className="flex flex-col md:items-end gap-4">
                {['home', 'about', 'projects', 'skills', 'contact'].map((link) => (
                  <motion.a 
                    key={link}
                    href={`#${link}`}
                    className="text-gray-300 hover:text-violet-400 transition-colors text-base capitalize"
                    whileHover={{ x: -4 }}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Scroll to Top Button */}
            <motion.button 
              onClick={scrollToTop}
              className="p-3 rounded-full bg-violet-600/10 text-violet-400 hover:bg-violet-600/20 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Copyright - Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700/50">
          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} Krushna Dandge. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;