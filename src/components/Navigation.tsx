import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Code, Award, Mail, ChevronRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { id: 'home', label: 'Home', icon: <Home size={20} /> },
    { id: 'about', label: 'About', icon: <User size={20} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={20} /> },
    { id: 'projects', label: 'Projects', icon: <Award size={20} /> },
    { id: 'contact', label: 'Contact', icon: <Mail size={20} /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return {
            id: item.id,
            distance: Math.abs(rect.top)
          };
        }
        return { id: item.id, distance: Infinity };
      });

      const closest = sections.reduce((prev, curr) => 
        prev.distance < curr.distance ? prev : curr
      );

      setActiveSection(closest.id);
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        initial={false}
        animate={{ 
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent'
        }}
        className={`fixed top-6 right-6 z-50 p-3 rounded-full md:hidden ${
          isScrolled ? 'shadow-sm bg-white/98' : ''
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} className="text-violet-600" /> : 
                 <Menu size={24} className="text-violet-600" />}
      </motion.button>

      {/* Desktop Navigation */}
      <motion.nav
        initial={false}
        animate={{ 
          backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(12px)' : 'none',
          boxShadow: isScrolled ? '0 4px 30px rgba(0, 0, 0, 0.1)' : 'none'
        }}
        className="fixed top-0 left-0 right-0 z-40 hidden md:block transition-all duration-300"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.a 
              href="#home"
              className="text-xl font-bold  text-black px-6 py-2  rounded-full shadow-lg shadow-violet-500/25"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              KD
            </motion.a>
            
            <div className="flex items-center gap-4">
              {menuItems.map((item) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25'
                      : 'bg-white/50 text-gray-600 hover:bg-white hover:shadow-md'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  <span className="relative">
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeGlow"
                        className="absolute inset-0 rounded-full bg-white/20 blur-sm"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="fixed inset-y-0 right-0 w-72 z-40 bg-white/95 backdrop-blur-xl shadow-2xl md:hidden"
          >
            <div className="flex flex-col h-full pt-24 pb-6 px-6">
              <div className="flex-1 space-y-2">
                {menuItems.map(item => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center w-full px-4 py-3 rounded-full transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25'
                        : 'text-gray-600 hover:bg-white hover:shadow-md'
                    }`}
                    whileHover={{ x: 2, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center gap-3">
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                    </span>
                    {activeSection === item.id && (
                      <ChevronRight size={18} className="ml-auto opacity-70" />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation; 