
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Briefcase, ExternalLink } from 'lucide-react';

const experiences = [
  {
    role: "Cybersecurity Analyst",
    company: "CommonSpirit Health",
    duration: "February 2025 - Present",
    description: "Conduct audit reports on baseline builds for Window Servers, MacOS, Linux assets, and network devices. Scanned assets for vulnerabilities, verify builds are compliant based on CIS controls, Organizational standards, and industry requirements. Presented findings to upper management.",
    tech: ["Rapid7", "CrowdStrike", "Vulnerabiity Management", "Imaging"]
  },
  {
    role: "Cybersecurity Consultant",
    company: "Cyvergance.AI",
    duration: "2023 - 2025",
    description: "Spearhead risk mitigation efforts. Handle IAM and SIEM tool incident monitoring and response, JumpCloud administration and continuous monitoring. Presented on CIS Controls and Cybersecurity current events. Develop written policies and procedures based on NIST",
    tech: ["NIST", "SIEM", "Log Analysis", "Python"]
  },
  {
    role: "Sales Support",
    company: "Johnson Controls Inc.",
    duration: "2015 - 2025",
    description: "Provided teir 1 support for sales team applications, provisioned users, provide technical support to clients, and set up user workstations for end of life OS. Assist with UAT and complete SQL quieries to analyze data and update systems.",
    tech: ["User Provisioning", "UAT", "Help Desk", "Salesforce.com"]
  }
];

const Experience = ({ handleNotImplemented }) => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Professional Experience</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A timeline of my hands-on experience in the IT and cybersecurity field.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
          {experiences.map((job, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`mb-12 flex items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
            >
              <div className="w-1/2"></div>
              <div className={`w-1/2 px-8 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                <div className="glass-effect rounded-xl p-6 relative">
                  <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full" style={index % 2 === 0 ? {left: '-2rem'} : {right: '-2rem'}}></div>
                  <p className="text-cyan-400 mb-1">{job.duration}</p>
                  <h3 className="text-xl font-bold mb-1 text-white">{job.role}</h3>
                  <p className="font-semibold text-gray-400 mb-3">{job.company}</p>
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  <div className={`flex flex-wrap gap-2 mb-4 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    {job.tech.map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">{t}</span>
                    ))}
                  </div>
                  <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10" onClick={() => handleNotImplemented('Project Details')}>
                    <ExternalLink size={16} className="mr-2" />
                    Details
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
