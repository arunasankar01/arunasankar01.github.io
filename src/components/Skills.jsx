
import React from 'react';
import { motion } from 'framer-motion';

// Skill Category component
const SkillCategory = ({ title, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-lg h-full"
    >
      <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-purple-500/30">{title}</h3>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-purple-900/30 text-purple-200 px-4 py-2 rounded-full text-sm border border-purple-700/30"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Skills component
const Skills = () => {
  // Skills categories based on your resume
  const skillCategories = [
    {
      title: "Programming/Scripting Languages",
      skills: ["C++", "Python", "Go/Golang", "C#", "C", "Shell", "SQL", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "Frameworks & Tools",
      skills: ["React", "Node.js", "Jenkins(CI/CD)", "Git", "Bitbucket", "Docker", "Kubernetes", "Ansible", "Terraform", "ElasticSearch ELK", "Confluence", "JIRA", "JFrog Artifactory", "Kafka"]
    },
    {
      title: "Cloud Computing",
      skills: ["AWS (EC2, S3, DNS, Route53, DynamoDB)", "Azure", "GCP (VM, SQL, Loadbalancer, IAM, GKE, VPC)", "Linux"]
    },
    {
      title: "Certifications",
      skills: ["The Web Developer Bootcamp (Udemy)", "Google Cloud Developer - GCP Professional Certification (Udemy)", "CKA - Certified Kubernetes Administrator (Udemy)", "Operating Systems Specialization (Coursera)"]
    }
  ];

  return (
    <section id="skills" className="relative w-full min-h-screen py-16 md:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-purple-900/30 opacity-80 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-purple-500">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-400 mt-4"></div>
          <p className="mt-6 text-center text-gray-300 max-w-2xl">
            I've developed a diverse skill set throughout my education and professional experience. 
            Here's an overview of my technical expertise.
          </p>
        </motion.div>
        
        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
        
        {/* Professional Experience Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Professional Experience Highlights</h3>
          
          <div className="space-y-8">
            <div className="relative pl-6 border-l-2 border-purple-500">
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-1"></div>
              <h4 className="text-xl font-semibold text-white">Graduate Research Intern</h4>
              <p className="text-cyan-300">Georgia Institute of Technology | May 2025 – Present</p>
              <p className="text-gray-300 mt-2">
                Designing and developing a game based learning simulator to help students understand supply chain logistics configuration and physical internet concepts.
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-purple-500">
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-1"></div>
              <h4 className="text-xl font-semibold text-white">Software Engineer I - DevOps</h4>
              <p className="text-cyan-300">Increff (NextSCM Solutions Pvt. Ltd.) | Jun 2022 – Jul 2024</p>
              <p className="text-gray-300 mt-2">
                Enhanced security posture of cloud resources in GCP by 50%, compliant with ISO and CIS standards.
                Migrated legacy applications to containerized infrastructure in GKE, reducing deployment time by 80%.
              </p>
            </div>
            
            <div className="relative pl-6 border-l-2 border-purple-500">
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-1"></div>
              <h4 className="text-xl font-semibold text-white">Software Engineer Intern - DevOps</h4>
              <p className="text-cyan-300">Increff (NextSCM Solutions Pvt. Ltd.) | Feb 2022 – May 2022</p>
              <p className="text-gray-300 mt-2">
                Implemented test deployment pipeline in Jenkins, which reduced production deployment failures by around 90%.
              </p>
            </div>
            
            <div className="relative pl-6 border-l-2 border-purple-500">
              <div className="absolute w-4 h-4 bg-purple-500 rounded-full -left-[9px] top-1"></div>
              <h4 className="text-xl font-semibold text-white">Software Engineer Intern</h4>
              <p className="text-cyan-300">Microsoft India (R&D) Pvt. Ltd. | Jun 2021 - Aug 2021</p>
              <p className="text-gray-300 mt-2">
                Developed a prominent feature facilitating OS patch management, reducing patch failures for Azure Virtual Machines.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Awards & Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-700/30">
              <h4 className="text-white font-semibold">Gold medal (Highest GPA) - ECE Department</h4>
              <p className="text-purple-300 text-sm">June 2022</p>
              <p className="text-gray-300 mt-2 text-sm">
                Received a Gold Medal for securing highest GPA (first rank) in my undergrad. Graduated First Class with Distinction
              </p>
            </div>

            <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-700/30">
              <h4 className="text-white font-semibold">IvyHacks Hackathon</h4>
              <p className="text-purple-300 text-sm">Oct 2020</p>
              <p className="text-gray-300 mt-2 text-sm">
                Won the '3rd Best Overall Hack' award out of 100+ teams across the globe
              </p>
            </div>
            
            <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-700/30">
              <h4 className="text-white font-semibold">Technica 2020 Hackathon</h4>
              <p className="text-purple-300 text-sm">Oct 2020</p>
              <p className="text-gray-300 mt-2 text-sm">
                Won the 'Best Hack for Social Good - J.P.Morgan' award
              </p>
            </div>
            
            <div className="p-4 bg-purple-900/20 rounded-lg border border-purple-700/30">
              <h4 className="text-white font-semibold">Australia-India Innovation Bridge Re-hack</h4>
              <p className="text-purple-300 text-sm">Aug 2020</p>
              <p className="text-gray-300 mt-2 text-sm">
                Winner; Designed Alzheimer's patients' friendly mobile app
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;