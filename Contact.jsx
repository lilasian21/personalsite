
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = ({ handleContactClick }) => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
            Have a question or a project in mind? I'm open to discussing new opportunities and challenges in cybersecurity.
          </p>
          
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Mail, label: "Email", value: "lance.rosengarten@outlook.com" },
                { icon: Linkedin, label: "LinkedIn", value: "@lancerosengarten" },
                { icon: Github, label: "GitHub", value: "@lilasian21" }
              ].map((item, index) => (
                <motion.div whileHover={{ scale: 1.05 }} className="text-center" key={index}>
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{item.label}</h3>
                  <p className="text-gray-300 text-sm">{item.value}</p>
                </motion.div>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="gradient-bg hover:scale-105 transition-transform duration-300 pulse-glow w-full md:w-auto"
              onClick={handleContactClick}
            >
              <Mail size={20} className="mr-2" />
              Send a Secure Message
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
