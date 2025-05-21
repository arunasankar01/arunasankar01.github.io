import React from 'react';
import { motion } from 'framer-motion';

// Project Card Component
const ProjectCard = ({ index, title, description, tags, image, link, github }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-xl"
    >
      {/* Project Image */}
      <div className="relative h-48 md:h-56 w-full overflow-hidden">
        {/* Default gradient background if no image */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/60 to-cyan-600/60"></div>
        
        {/* Actual image - replace the conditional below with your actual image path */}
        {image && (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        )}
        
        {/* GitHub and Demo links */}
        {/* <div className="absolute bottom-0 right-0 p-4 flex gap-2">
          {github && (
            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 bg-opacity-80 p-2 rounded-full hover:bg-purple-900 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="text-white">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
          )}
          
          {link && (
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 bg-opacity-80 p-2 rounded-full hover:bg-cyan-900 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="text-white">
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
              </svg>
            </a>
          )}
        </div> */}
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
        
        <p className="text-gray-300 text-sm mb-4">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span 
              key={`${tag}-${index}`}
              className="bg-purple-900/30 text-purple-200 px-3 py-1 text-xs rounded-full border border-purple-700/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Projects Component
const Projects = () => {
  // Example projects - replace with your actual projects
  const projects = [
    {
      title: "Supply Chain Simulator (Ongoing)",
      description: "Designing and developing a game based learning simulator. Will update the progress soon!",
      tags: ["React", "Firebase", "Node.js", "DASH", "Python", "Plotly"],
      image: null, // Add your image path here
      link: "https://movie-rec-demo.com",
      github: "https://github.com/yourusername/movie-app"
    },
    {
      title: "Multi-Version Concurrency Control Implementation in BuzzDB",
      description: "Implemented MVCC using Multi-Version Timestamp Ordering protocol with append-only version storage architecture. Designed version chains, timestamp-based transaction management to improve concurrency while maintaining consistency",
      tags: [" C++", "MVTO (Multi-version timestamp ordering)"],
      image: null, // Add your image path here
      link: "https://project-demo.com",
      github: "https://github.com/yourusername/project"
    },
    {
      title: "Secure API Authentication System with JWT and RBAC",
      description: "Developed a secure REST API authentication system using Node.js, Express, and PostgreSQL with JWT token-based authentication. Implemented user registration, login flows and role-based access control ",
      tags: ["Node.js", "PostgreSQL", "Express", "JWT(JSON Web Token)"],
      image: null, // Add your image path here
      link: "https://weather-app-demo.com",
      github: "https://github.com/yourusername/weather-app"
    },
    {
      title: "Implementation for Internet Simulation",
      description: "Implemented load balancing, traffic engineering in OSPF, BGP in a virtual network of interconnected ASes, designed to imitate the working of real internet. Deployed and maintained dedicated docker containers for each network component ",
      tags: ["OSPF", "BGP", "Open vSwitch", "FRR", "Docker"],
      image: null, // Add your image path here
      link: "https://task-manager-demo.com",
      github: "https://github.com/yourusername/task-manager"
    },
    {
      title: "Farm level Crop Yield Prediction using Deep Learning",
      description: "Co-developed and trained a deep learning model to predict farm-wise crop yield using remotely sensed multitemporal multi-source satellite images, achieving an accuracy of 94.4% ",
      tags: ["Python", "DL", "Regression", "Google Earth Engine"],
      image: null, // Add your image path here
      link: "https://portfolio-demo.com",
      github: "https://github.com/yourusername/portfolio"
    },
    {
      title: "Path Finder: Mars Rover Project",
      description: "Developed a dynamic browser-based web application (using the REACT framework), employing multiple shortest path finding algorithms to find the shortest distance between two chosen points in a grid ",
      tags: ["HTML", "CSS", "React", "JavaScript"],
      image: null, // Add your image path here
      link: "https://movie-rec-demo.com",
      github: "https://github.com/yourusername/movie-app"
    }
  ];

  return (
    <section id="projects" className="relative w-full min-h-screen py-16 md:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-gray-900 to-gray-900 opacity-80 z-0"></div>
      
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
            My <span className="text-purple-500">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-400 mt-4"></div>
          <p className="mt-6 text-center text-gray-300 max-w-2xl">
            Here are some of my recent projects that showcase my skills and experience.
            Each project reflects my problem-solving approach and attention to detail.
          </p>
        </motion.div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 mb-6">
            Want to see more of my work? Visit my GitHub repository for additional projects.
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/arunasankar01" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-800 py-3 px-6 
                      rounded-full text-white font-medium shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="text-white">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;