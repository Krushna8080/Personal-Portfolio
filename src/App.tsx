import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import ExtendedProjects from './components/ExtendedProjects';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  const [showExtendedProjects, setShowExtendedProjects] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        {/* Scroll Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 h-1 z-50"
          style={{ 
            width: `${scrollProgress}%`,
            background: 'linear-gradient(90deg, #2563eb 0%, #7c3aed 50%, #db2777 100%)' 
          }}
          initial={{ width: '0%' }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
        
        <Navigation />
        
        <AnimatePresence mode="wait">
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Header />
            <About />
            <Skills />
            {!showExtendedProjects ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <Projects />
                <div className="flex justify-center my-12">
                  <motion.button 
                    onClick={() => setShowExtendedProjects(true)}
                    className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View All Projects <ChevronRight size={18} />
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <ExtendedProjects />
                <div className="flex justify-center my-12">
                  <motion.button 
                    onClick={() => setShowExtendedProjects(false)}
                    className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Show Less <ChevronRight className="rotate-180" size={18} />
                  </motion.button>
                </div>
              </motion.div>
            )}
            <Achievements />
          </motion.main>
        </AnimatePresence>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;