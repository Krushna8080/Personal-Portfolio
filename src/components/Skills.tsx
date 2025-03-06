import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Layout, Brain } from 'lucide-react';
import { techIcons } from '../utils/techIcons';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout size={24} />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React/Next.js", icon: techIcons.react },
        { name: "HTML/CSS", icon: techIcons.html },
        { name: "JavaScript/TypeScript", icon: techIcons.typescript },
        { name: "React Native/Expo", icon: techIcons.react }
      ]
    },
    {
      title: "Backend Development",
      icon: <Code2 size={24} />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Node.js", icon: techIcons.nodejs },
        { name: "Express.js", icon: techIcons.express },
        { name: "MongoDB/MySQL", icon: techIcons.mongodb },
        { name: "Django/Flask", icon: techIcons.django }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain size={24} />,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Deep Learning Models", icon: techIcons.tensorflow },
        { name: "LLMs Integration", icon: techIcons.python },
        { name: "AI APIs & Tools", icon: techIcons.pytorch },
        { name: "ML Frameworks", icon: techIcons.python }
      ]
    }
  ];

  // Updated technologies list with local icons
  const technologies = [
    // Programming Languages
    { name: "C++", icon: techIcons.cpp },
    { name: "Python", icon: techIcons.python },
    { name: "JavaScript", icon: techIcons.javascript },
    { name: "TypeScript", icon: techIcons.typescript },
    
    // Web Development
    { name: "React", icon: techIcons.react },
    { name: "Next.js", icon: techIcons.nextjs },
    { name: "Node.js", icon: techIcons.nodejs },
    { name: "Express", icon: techIcons.express },
    { name: "HTML5", icon: techIcons.html },
    { name: "CSS3", icon: techIcons.css },
    { name: "Sass", icon: techIcons.sass },
    { name: "Material UI", icon: techIcons.materialui },
    
    // Databases
    { name: "MongoDB", icon: techIcons.mongodb },
    { name: "MySQL", icon: techIcons.mysql },
    { name: "Redis", icon: techIcons.redis },
    { name: "PostgreSQL", icon: techIcons.postgresql },
    
    // DevOps & Tools
    { name: "Docker", icon: techIcons.docker },
    { name: "Kubernetes", icon: techIcons.kubernetes },
    { name: "Git", icon: techIcons.git },
    { name: "VSCode", icon: techIcons.vscode },
    
    // AI & ML
    { name: "TensorFlow", icon: techIcons.tensorflow },
    { name: "PyTorch", icon: techIcons.pytorch },
    { name: "OpenAI", icon: techIcons.openai },
    
    // Cloud & Backend
    { name: "Flask", icon: techIcons.flask },
    { name: "Django", icon: techIcons.django },
    { name: "Redux", icon: techIcons.redux },
    { name: "Tailwind", icon: techIcons.tailwind }
  ];

  const containerRef = React.useRef<HTMLDivElement>(null);
 
  React.useEffect(() => {
    if (containerRef.current) {
      const updateWidth = () => {
        // const itemWidth = 100; // Width of each item + gap
        // const totalItems = technologies.length;
      };
      
      updateWidth();
      window.addEventListener('resize', updateWidth);
      return () => window.removeEventListener('resize', updateWidth);
    }
  }, [technologies.length]);

  return (
    <section id="skills" className="py-12 relative overflow-hidden">
      {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50/50" />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-blue-100/20 to-purple-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-100/20 to-pink-100/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
        />
        </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600 font-medium inline-block mb-4">
            Skills & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Crafting Digital Excellence with
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Modern Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leveraging cutting-edge technologies to build innovative solutions that drive real-world impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0.5 bg-gradient-to-r from-white to-white rounded-2xl blur dark:from-white/25" />
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-10 text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {category.title}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                        <img src={skill.icon} alt={skill.name} className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-medium text-gray-900">{skill.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                <div className="absolute -top-2 -left-2 w-20 h-20 bg-gradient-to-tr from-purple-500/5 to-pink-500/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Updated Technologies Section with Conveyor Belt Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-8 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl" />
          <div className="relative p-8 rounded-3xl overflow-hidden">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Technologies I Worked With
            </h3>
            
            <div className="relative w-full overflow-hidden h-28" ref={containerRef}>
              {/* Gradient Overlays */}
              <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
              
              <div className="flex absolute left-0 animate-scroll">
                {/* First set */}
                {technologies.map((tech, index) => (
                  <motion.div
                    key={`${tech.name}-${index}`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex-shrink-0 group relative px-4"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative flex flex-col items-center gap-2">
                      <div className="w-14 h-14 rounded-xl bg-white shadow-lg p-3 flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                        <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                      </div>
                      <span className="text-xs font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  </motion.div>
                ))}

                {/* Second set */}
                {technologies.map((tech, index) => (
                  <motion.div
                    key={`${tech.name}-clone-${index}`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex-shrink-0 group relative px-4"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300" />
                    <div className="relative flex flex-col items-center gap-2">
                      <div className="w-14 h-14 rounded-xl bg-white shadow-lg p-3 flex items-center justify-center group-hover:shadow-xl transition-all duration-300">
                        <img src={tech.icon} alt={tech.name} className="w-8 h-8" />
                      </div>
                      <span className="text-xs font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                        {tech.name}
                  </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider Line */}
        <div className="mt-12 mb-0">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Skills;