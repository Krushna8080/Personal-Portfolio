import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Cpu, FileCheck, Briefcase, Users, Target } from 'lucide-react';

const Achievements: React.FC = () => {
  const items = [
    {
      icon: <Briefcase size={20} />,
      title: "Infosys Specialist Programmer",
      description: "Successfully selected for the prestigious Infosys Specialist Programmer (SP) Role, demonstrating strong technical and problem-solving skills by excelling through multiple evaluation stages.",
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: <Cpu size={20} />,
      title: "AI & LLM Integration Expert",
      description: "Leveraged advanced AI and LLM integration—using tools like Cursor AI—to rapidly develop intelligent bots, dynamic websites, and mobile apps, delivering innovative solutions for clients.",
      color: 'text-violet-600',
      bgColor: 'bg-violet-50'
    },
    {
      icon: <BookOpen size={20} />,
      title: "Finance Research",
      description: "Currently working on research papers in the finance domain using AI, ML, and DL, focusing on topics such as arbitrage detection, portfolio management, and predictive modeling.",
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50'
    },
    {
      icon: <FileCheck size={20} />,
      title: "IBM Full Stack Certificate",
      description: "Earned the IBM Full Stack Software Developer Professional Certificate, completing 12 courses on technologies like React, Node.js, Docker, Kubernetes, Microservices, and Serverless Computing.",
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    },
    {
      icon: <Users size={20} />,
      title: "Joint Publicity Head",
      description: "Led promotional activities for Perception during our cultural fest, managing a team of volunteers to create and distribute marketing materials across campus and social media platforms.",
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      icon: <Target size={20} />,
      title: "NSS Team Leader",
      description: "Organized and led various social impact initiatives including blood donation camps, tree plantation drives, and educational workshops for underprivileged children.",
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-50'
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Achievements & Positions
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-violet-600 to-indigo-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-white rounded-2xl p-6 h-full border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${item.bgColor} ${item.color}`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
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

export default Achievements;