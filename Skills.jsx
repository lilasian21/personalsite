
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Network, Terminal, Lock, AlertTriangle, Database } from 'lucide-react';

const skills = [
  { name: "Network Security", icon: Network, level: 95 },
  { name: "Threat Intelligence", icon: AlertTriangle, level: 90 },
  { name: "Penetration Testing", icon: Terminal, level: 88 },
  { name: "Cryptography", icon: Lock, level: 82 },
  { name: "Incident Response", icon: Shield, level: 92 },
  { name: "Database Security", icon: Database, level: 85 }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Core Competencies</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A collection of my key technical skills and expertise in the cybersecurity domain.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-xl p-6 hover:border-cyan-400/50 transition-colors duration-300"
            >
              <div className="flex items-center mb-4">
                <skill.icon className="text-cyan-400 mr-3" size={28} />
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="gradient-bg h-3 rounded-full"
                ></motion.div>
              </div>
              <div className="text-right text-gray-300">{skill.level}% Proficiency</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
