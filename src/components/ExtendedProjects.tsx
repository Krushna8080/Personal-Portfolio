import React from 'react';
import { motion } from 'framer-motion';
import { Github,Code2, Bot, ShoppingCart, Database, Brain} from 'lucide-react';


const ExtendedProjects: React.FC = () => {
  
  const allProjects = [
    {
      title: "WealthRock",
      type: "Finance",
      description: "A comprehensive investment platform that helps users make informed decisions based on real-time market data, technical analysis, and Machine learning algorithms.",
      technologies: ["React", "Flask", "Python", "AI/ML"],
      status: "Public",
      links: {
        github: "https://github.com/Krushna8080",
      },
      icon: <Code2 className="w-6 h-6" />
    },
    {
      title: "InstantSolve",
      type: "Application",
      description: "An AI-powered problem-solving App/Platform that provides instant solutions and explanations for any kind of complex questions.",
      technologies: ["React_native","LLMs", "OpenRouter", "Expo", "Firebase"],
      status: "Public",
      links: {
        github: "https://github.com/Krushna8080",
      },
      icon: <Bot className="w-6 h-6" />
    },
    {
      title: "Elegance",
      type: "Clothing Website",
      description: "A modern e-commerce platform for luxury fashion, featuring real-time inventory management and personalized recommendations.",
      technologies: ["TypeScript", "Next.js", "SEO"],
      status: "Public",
      links: {
        github: "https://github.com/Krushna8080",
      },
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: "FreshMart",
      type: "E-commerce",
      description: "An online grocery delivery platform with real-time authentication, inventory management, and automated order processing.",
      technologies: ["TypeScript","Nextjs", "Tailwind", "Supabase"],
      status: "Public",
      links: {
        github: "https://github.com/Krushna8080",
      },
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: "Triphala Classification",
      type: "AI/ML",
      description: "ML model to classify Ayurvedic components (Amla, Herda, Bherda) using transfer learning and computer vision techniques.",
      technologies: ["Python", "TensorFlow", "Computer Vision", "Transfer Learning"],
      status: "Public",
      links: {
        github: "https://github.com/Krushna8080",
      },
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "QuoteX Bot",
      type: "Finance",
      description: "Automated trading bot with advanced market analysis capabilities and real-time trading execution.",
      technologies: ["Python", "Trading API", "Data Analysis", "Automation"],
      status: "Private",
      links: {
        github: "https://github.com/Krushna8080",
      },
      icon: <Bot className="w-6 h-6" />
    },
    {
      title: "IRCTC Web App",
      type: "Website",
      description: "Modern railway booking system with real-time Admin and smart booking features.",
      technologies: ["Express", "React", "Node.js", "MongoDB"],
      status: "Public",
      links: {
        github: "https://github.com/Krushna8080",
      },
      icon: <Code2 className="w-6 h-6" />
    },
    {
      title: "GatherPay",
      type: "Application",
      description: "Group payment splitting and expense management app with automated calculations.",
      technologies: ["Expo", "React Native", "Firebase", "Razzorpay"],
      status: "Public",
      links: {
        github: "https://github.com/Krushna8080",
      },
      icon: <Database className="w-6 h-6" />
    },
    {
      title: "MoneyAI",
      type: "Finance",
      description: "AI-powered personal finance management and advisory platform with smart insights.",
      technologies: ["React", "ML", "Financial APIs", "Node.js"],
      status: "Public",
      links: {
        github: "https://github.com/Krushna8080",
      },
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "Utterwise Technologies",
      type: "Website",
      description: "Corporate website with dynamic content management and modern design.",
      technologies: ["TypeScript", "Next.js", "Tailwind", "Contentful"],
      status: "Public",
      links: {
        github: "https://github.com/Krushna8080",
      },
      icon: <Code2 className="w-6 h-6" />
    },
    {
        title: "ChatApp",
        type: "WebApp",
        description: "Chat application with real-time messaging and user authentication.",
        technologies: ["React", "Django", "WebSocket.io", "Redis"],
        status: "Public",
        links: {
          github: "https://github.com/Krushna8080",
        },
        icon: <Code2 className="w-6 h-6" />
      },
      {
        title: "BookStore",
        type: "Website",
        description: "BookStore website with real-time inventory management and functionalities.",
        technologies: ["TypeScript", "Next.js", "Tailwind"],
        status: "Public",
        links: {
          github: "https://github.com/Krushna8080",
        },
        icon: <Code2 className="w-6 h-6" />
      }
  ];

  return (
    <section className="min-h-screen py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Modern grid background with improved gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/30 via-purple-50/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Back button with improved styling */}
      

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Archive Collection</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Complete Portfolio
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive collection of my work in web development, AI/ML, and innovative solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative">
                  {/* Header Section */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform shadow-sm">
                      {project.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <h3 className="text-xl font-bold text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <span className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Private' 
                            ? 'bg-gray-100 text-gray-600' 
                            : 'bg-emerald-50 text-emerald-600'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500 font-medium">{project.type}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 rounded-full bg-gray-50 text-gray-600 text-xs font-medium border border-gray-100 hover:bg-gray-100 hover:border-gray-200 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Footer Section */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex gap-3">
                      {project.links.github && (
                        <motion.a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-gray-900 to-gray-800 text-white hover:from-gray-800 hover:to-gray-700 transition-all shadow-sm"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Github size={16} />
                          <span className="text-sm font-medium">View Source</span>
                        </motion.a>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
                      <span className="text-xs text-gray-400 font-medium">
                        {project.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtendedProjects;
