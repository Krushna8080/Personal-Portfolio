import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, Target, Award} from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    {
      icon: <Target className="w-5 h-5" />,
      label: "Selected",
      value: "Infosys SP",
      description: "Campus Placement Drive"
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      label: "Achievement",
      value: "Top 10",
      description: "BlackRock Hackathon"
    },
    {
      icon: <Code2 className="w-5 h-5" />,
      label: "DSA Problems",
      value: "200+",
      description: "Solved & Implemented"
    },
    {
      icon: <Award className="w-5 h-5" />,
      label: "IBM Certification",
      value: "Full Stack",
      description: "Professional Certificate"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Image Section */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/3"
            >
              <div className="relative">
                {/* Background blur effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl opacity-50" />
                
                {/* Image container */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 p-2">
                  <img
                    src="/projects/link.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content Section */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-2/3 space-y-8"
            >
              {/* Header */}
              <div>
                <motion.div 
                  className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-medium mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-4xl">About Me</span>
                </motion.div>
                <h2 className="text-4xl font-bold mb-4">
                  Transforming Ideas into{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Digital Reality
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Enthusiastic Computer Science student with extensive practical experience in building websites, apps, and bots across diverse tech stacks. I integrate advanced AI and large language models—both local and cloud-based—into digital products, enabling rapid prototyping and custom solution deployment.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                    <div className="relative bg-white rounded-lg p-4 border border-gray-100 hover:border-blue-100 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                          {stat.icon}
                        </div>
                        <span className="text-sm text-gray-500 font-medium">
                          {stat.label}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xl font-bold text-gray-900">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-500">
                          {stat.description}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Education & Expertise */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Education
                  </h3>
                  <p className="text-gray-600">
                    B.Tech in Computer Science
                    <br />
                    Vishwakarma Institute of Information Technology
                    <br />
                    <span className="text-blue-600 font-medium">CGPA: 9.1/10.00</span>
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100/50"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Expertise
                  </h3>
                  <p className="text-gray-600">
                    Full Stack Development, AI/ML Integration,Finance

                    <br />

                    <br />
                    
                    <span className="text-purple-600 font-medium">Modern Tech Stack</span>

                  </p>
                </motion.div>
              </div>

            
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;