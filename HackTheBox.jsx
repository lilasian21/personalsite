import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Award, BarChart, Target, Shield, ExternalLink } from 'lucide-react';

const HackTheBox = ({ handleNotImplemented }) => {
  const htbStats = [
    { label: "Rank", value: "Hacker", icon: Award },
    { label: "Global Rank", value: "#913", icon: BarChart },
    ];

  return (
    <section id="htb" className="py-20 bg-background/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Hack The Box Profile</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Showcasing practical skills and achievements in penetration testing and ethical hacking.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8"
        >
          <div className="flex-shrink-0">
            <img  class="w-40 h-40 rounded-full border-4 border-cyan-400/50 shadow-lg shadow-cyan-500/20" alt="Hack The Box profile picture" src="https://images.unsplash.com/photo-1689608171753-44c0d5ee63d6" />
          </div>
          <div className="flex-grow text-center md:text-left">
            <h3 className="text-3xl font-bold text-white mb-2">Username: SecureDev</h3>
            <p className="text-gray-400 mb-6">Active member since 2018, consistently ranking in the top tier.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {htbStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="text-cyan-400 mx-auto mb-2" size={32} />
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
            <Button
              className="gradient-bg hover:scale-105 transition-transform duration-300 pulse-glow"
              onClick={() => handleNotImplemented('Hack The Box Profile Link')}
            >
              <ExternalLink size={18} className="mr-2"/>
              View Full Profile
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HackTheBox;