import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full min-h-screen py-16 md:py-24">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-gray-900 to-gray-900 opacity-80 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-cyan-600 rounded-full filter blur-3xl opacity-10"></div>
      </div>
      
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
            Contact <span className="text-purple-500">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-400 mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-lg h-full">
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-purple-900/30 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-purple-400" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg text-purple-400 font-medium">Email</h4>
                    <a 
                      href="mailto:asankar38@gatech.edu"
                      className="text-white hover:text-purple-300 transition-colors"
                    >
                      asankar38@gatech.edu
                    </a>
                  </div>
                </div>
                
                {/* Phone */}
                {/* <div className="flex items-start gap-4">
                  <div className="bg-purple-900/30 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-purple-400" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg text-purple-400 font-medium">Phone</h4>
                    <a 
                      href="tel:+14704529819"
                      className="text-white hover:text-purple-300 transition-colors"
                    >
                      +1 (470) 452-9819
                    </a>
                  </div>
                </div> */}
                
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-purple-900/30 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-purple-400" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg text-purple-400 font-medium">Location</h4>
                    <p className="text-white">Atlanta, GA, USA</p>
                  </div>
                </div>
                
                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="bg-purple-900/30 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-purple-400" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg text-purple-400 font-medium">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/aruneswari-s-4048b81b1" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-purple-300 transition-colors"
                    >
                      aruneswari-s-4048b81b1
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Looking for Opportunities */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-lg h-full">
              <h3 className="text-2xl font-bold text-purple-400 mb-6">Looking for Opportunities</h3>
              
              <p className="text-white mb-6">I am currently seeking fall 2025 internships / full time opportunities(2026) in:</p>
              
              <ul className="space-y-4">
                {/* Software Engineering */}
                <li className="flex items-center gap-3">
                  <span className="text-purple-400 bg-purple-900/30 p-2 rounded-full inline-flex items-center justify-center w-8 h-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm5.5 10v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-1 0z"/>
                      <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 3a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H1z"/>
                      <path d="M6.146 4.146a.5.5 0 0 1 .708 0L8 5.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 6l1.147 1.146a.5.5 0 0 1-.708.708L8 6.707 6.854 7.854a.5.5 0 1 1-.708-.708L7.293 6 6.146 4.854a.5.5 0 0 1 0-.708z"/>
                    </svg>
                  </span>
                  <span className="text-white">Software Engineering</span>
                </li>
                
                {/* Backend Development */}
                <li className="flex items-center gap-3">
                  <span className="text-purple-400 bg-purple-900/30 p-2 rounded-full inline-flex items-center justify-center w-8 h-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4.5 1h7a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 .5-.5ZM3 2v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1Z"/>
                      <path d="M8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6.5 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1.5 2.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/>
                    </svg>
                  </span>
                  <span className="text-white">Backend Development</span>
                </li>
                
                {/* Cloud Security/Engineering */}
                <li className="flex items-center gap-3">
                  <span className="text-purple-400 bg-purple-900/30 p-2 rounded-full inline-flex items-center justify-center w-8 h-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                      <path d="M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"/>
                      <path d="M5.5 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
                    </svg>
                  </span>
                  <span className="text-white">Cloud Security/Engineering</span>
                </li>
                
                {/* DevSecOps Engineering */}
                <li className="flex items-center gap-3">
                  <span className="text-purple-400 bg-purple-900/30 p-2 rounded-full inline-flex items-center justify-center w-8 h-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                      <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"/>
                    </svg>
                  </span>
                  <span className="text-white">DevSecOps Engineering</span>
                </li>
                
                {/* Full Stack Development */}
                <li className="flex items-center gap-3">
                  <span className="text-purple-400 bg-purple-900/30 p-2 rounded-full inline-flex items-center justify-center w-8 h-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
                    </svg>
                  </span>
                  <span className="text-white">Full Stack Development</span>
                </li>
                
                {/* Site Reliability Engineering */}
                <li className="flex items-center gap-3">
                  <span className="text-purple-400 bg-purple-900/30 p-2 rounded-full inline-flex items-center justify-center w-8 h-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
                      <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                    </svg>
                  </span>
                  <span className="text-white">Site Reliability Engineering</span>
                </li>
              </ul>
              
              <div className="mt-8 text-white">
                <p>Feel free to reach out if you have any opportunities or would like to discuss potential collaborations!</p>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:asankar38@gatech.edu" 
                  className="inline-block bg-gradient-to-r from-purple-600 to-purple-800 py-3 px-6 
                            rounded-full text-white font-medium shadow-lg mt-6"
                >
                  Get In Touch
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;