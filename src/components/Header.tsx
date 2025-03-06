import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github size={20} />,
      url: 'https://github.com/Krushna8080'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      url: 'https://www.linkedin.com/in/krushnadandge'
    },
    {
      name: 'Email',
      icon: <Mail size={20} />,
      url: 'mailto:krushnadandge8080@gmail.com'
    }
  ];

  return (
    <header id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#F8F6FF] to-[#F0EDFF]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(74, 58, 133, 0.03) 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }} />
        
        {/* Background Shapes */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#4A3A85]/10 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#4A3A85]/10 rounded-full blur-[128px]" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 items-start pt-24">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-left relative lg:pr-8 z-20 pt-8"
            >
              {/* Welcome Badge */}
              <motion.div 
                className="inline-block mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="px-4 py-2 rounded-full bg-[#4A3A85]/10 shadow-sm border border-[#4A3A85]/20 text-[#4A3A85] font-medium inline-flex items-center gap-2 hover:bg-[#4A3A85]/15 transition-colors">
                  <Sparkles size={16} className="text-[#4A3A85]" />
                  Welcome to my portfolio
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-4"
              >
                <h1 className="text-[3.5rem] md:text-[4.5rem] lg:text-[5.5rem] font-bold tracking-tight mb-2 leading-[1.1]">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-[#4A3A85] via-[#5B4A9C] to-[#6C5AB3] bg-clip-text text-transparent">
                    Krushna
                  </span>
                </h1>
              </motion.div>

              {/* Typewriter */}
              <motion.div 
                className="text-xl md:text-2xl font-medium mb-6 text-[#4A3A85]/90 h-[40px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Typewriter
                  options={{
                    strings: [
                      'Full Stack Developer',
                      'AI/ML Enthusiast',
                      'Problem Solver',
                      'Tech Innovator'
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                    delay: 80
                  }}
                />
              </motion.div>

              {/* Description */}
              <motion.p 
                className="text-lg text-[#FFFFF]/80 mb-8 leading-relaxed max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Transforming ideas into elegant solutions through modern technology.
                Specializing in creating innovative applications that make a real difference.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-wrap gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <motion.a
                  href="#projects"
                  className="group px-6 py-3 rounded-xl bg-gradient-to-r from-[#4A3A85] via-[#5B4A9C] to-[#6C5AB3] text-white font-medium transition-all hover:shadow-lg hover:shadow-[#4A3A85]/25 flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View My Work
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </motion.a>

                <motion.a
                  href="/resume.pdf"
                  download
                  className="px-6 py-3 rounded-xl bg-white/90 backdrop-blur-sm text-[#4A3A85] font-medium border border-[#4A3A85]/20 hover:border-[#4A3A85]/30 transition-all hover:shadow-lg hover:bg-[#4A3A85]/5 flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={18} />
                  Download CV
                </motion.a>
              </motion.div>

              {/* Social Links */}
              <motion.div 
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-[#4A3A85]/5 backdrop-blur-sm text-[#4A3A85] hover:text-[#4A3A85] shadow-sm hover:shadow-md transition-all border border-[#4A3A85]/20 hover:border-[#4A3A85]/30 hover:bg-[#4A3A85]/10"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Illustration */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:block h-[calc(100vh-12rem)] min-h-[600px] lg:-mr-48 xl:-mr-64 2xl:-mr-96 overflow-visible"
            >
              {/* Background Glow */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[150%] aspect-square rounded-full bg-gradient-to-br" />

              {/* Main Image Container */}
              <motion.div
                className="relative h-full w-full flex items-center justify-center lg:-ml-8 xl:-ml-16 2xl:-ml-24"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Vector Illustration */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <img
                    src="/background.png"
                    alt="Developer Illustration"
                    className="w-auto h-[140%] max-h-[900px] object-contain select-none absolute top-[45%] -translate-y-1/2 ml-16"
                    style={{
                      filter: 'drop-shadow(0 12px 32px rgba(99, 102, 241, 0.2))'
                    }}
                    draggable="false"
                  />
                </div>

                {/* Accent Elements */}
                <div className="absolute -bottom-16 -left-16 w-[300px] h-[300px] bg-violet-400/5 rounded-full blur-[100px]" />
                <div className="absolute -top-16 -right-16 w-[300px] h-[300px] bg-indigo-400/5 rounded-full blur-[100px]" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;