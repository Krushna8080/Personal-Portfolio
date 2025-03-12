import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2, Bot, ShoppingCart, Briefcase } from 'lucide-react';


const Projects: React.FC = () => {
  

  const featuredProjects = [
   
    {
      title: "WealthRock",
      description: "A comprehensive investment platform that helps users make informed decisions based on capital,risk and time horizan.",
      image: "/projects/wealthrock.png",
      tags: ["React", "Flask", "Python", "Finance"],
      links: {
        github: "https://github.com/Krushna8080/WealthRock",
        live: "https://wealthrock-1.onrender.com/"
      },
      icon: <Code2 className="w-6 h-6" />
    },
    {
      title: "InstantSolve",
      description: "An AI-powered problem-solving platform that provides instant solutions and explanations for complex academic and technical questions.",
      image: "/projects/InstantSolve.png",
      tags: ["React_native", "LLMs", "OpenRouter", "Expo", "Firebase"],
      links: {
        github: "https://github.com/Krushna8080/InstantSolveApp",
        live: "https://instant-solve-bvhott926-krushna8080s-projects.vercel.app/"
      },
      icon: <Bot className="w-6 h-6" />
    },
    {
      title: "Elegance",
      description: "A modern e-commerce platform for luxury fashion, featuring real-time inventory management and personalized recommendations.",
      image: "/projects/elegance.png",
      tags: ["TypeScript", "NextJS", "SEO", "Tailwind"],
      links: {
        github: "https://github.com/Krushna8080/Elagance",
        live: "https://armoire-kappa.vercel.app/"
      },
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: "FreshMart",
      description: "An online grocery delivery platform with real-time tracking, inventory management, and automated order processing.",
      image: "/projects/freshmart.png",
      tags: ["TypeScript", "NextJS", "Tailwind", "Supabase"],
      links: {
        github: "https://github.com/Krushna8080/FreshMart",
        live: "https://freshmart-git-main-krushna8080s-projects.vercel.app/"
      },
      icon: <ShoppingCart className="w-6 h-6" />
    },
    {
      title: "HireGenius",
      description: "An intelligent recruitment platform leveraging smart resume processing and job-candidate matching to streamline the hiring process for both recruiters and job seekers.",
      image: "/projects/hiregenius.png", 
      tags: ["Next.js", "TypeScript", "Tailwind", "Prisma", "PostgreSQL"],
      links: {
        github: "https://github.com/Krushna8080/HireGenius",
        live: "https://hire-genius-eta.vercel.app/"
      },
      icon: <Briefcase className="w-6 h-6" />
    },
  ];

 

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Modern grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 via-purple-50/50 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div 
            className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-sm">Featured Projects</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Bringing Ideas to Life
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Showcasing some of my best work in web development, AI integration, and innovative solutions.
          </p>
        </motion.div>

        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur opacity-25 group-hover:opacity-100 transition duration-500" />
              <div className={`relative flex flex-col lg:flex-row ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden`}>
                {/* Image Section */}
                <div className="w-full lg:w-3/5 relative overflow-hidden">
                  <div className="relative h-full group-hover:scale-[1.02] transition-transform duration-500">
                    {/* Image Container */}
                    <div className="relative h-full rounded-2xl overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        style={{ maxHeight: '500px' }}
                      />
                      
                      {/* Subtle Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-2/5 p-8 lg:p-10 flex flex-col">
                  <div className="space-y-6">
                    {/* Project Type Badge */}
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                        {project.icon}
                      </div>
                      <div className="h-px flex-grow bg-gray-100" />
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>

                    {/* Project Description */}
                    <p className="text-gray-600 text-base">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium hover:bg-blue-100 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-4 pt-4 mt-auto border-t border-gray-100">
                      {project.links.github && (
                        <motion.a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-700 hover:bg-gray-100 transition-all"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Github size={18} />
                          <span className="text-sm font-medium">Source Code</span>
                        </motion.a>
                      )}
                      {project.links.live && (
                        <motion.a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-50 text-blue-600 hover:bg-blue-100 transition-all"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ExternalLink size={18} />
                          <span className="text-sm font-medium">Live Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
       
      </div>
    </section>
  );
};

export default Projects;