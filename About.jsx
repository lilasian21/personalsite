
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const stats = [
    { value: '2+', label: 'Years in IT Security' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-300 mb-8">
              A vigilant and analytical cybersecurity professional with a passion for digital defense who enjoys learner and is a quick learner. My experience is rooted in creating secure environments, responding to incidents, and staying ahead of emerging threats. I thrive on the challenge of protecting critical information and infrastructure.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="glass-effect rounded-xl p-6 floating-animation" style={{ animationDelay: `${index * 0.5}s` }}>
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
