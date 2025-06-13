
import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';

const certifications = [
  { name: "Certified in Cybersecurity (CC)", issuer: "ISC²", icon: ShieldCheck },
  { name: "CompTIA Security+", issuer: "CompTIA", icon: Award },

];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            My professional credentials validating my skills and knowledge in cybersecurity.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="glass-effect rounded-lg p-6 flex items-center gap-6"
            >
              <cert.icon className="text-cyan-400 flex-shrink-0" size={48} />
              <div>
                <h3 className="text-lg font-semibold text-white">{cert.name}</h3>
                <p className="text-gray-400">Issued by: {cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
