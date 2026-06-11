import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
  title: "Vehicle Service Booking Platform",
  description: "Developed a full-stack platform that connects users with nearby vehicle service centers, enabling service discovery, appointment booking, and service management through a responsive and user-friendly interface.",
  technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS", "Razorpay"],
  live: "https://www.fixnslot.com/",
  featured: true
},
    {
  title: "Rojgar Setu - Career & Recruitment Platform",
  description: "Built a career and recruitment platform connecting students, colleges, and companies. The platform streamlines job postings, candidate applications, and placement activities through dedicated dashboards and role-based access.",
  technologies: ["JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "JWT Authentication", "RESTful APIs", "Role-Based Access Control (RBAC)", "Tailwind CSS", "Git", "GitHub", "Postman", "Responsive Web Design"],
  github: "https://github.com/Abhishekpatidar9/Rojgar-Setu",
  featured: true
},
    {
      title: "Food Order System",
      description: "Built a platform for online food ordering with menu browsing, order placement, payment, and delivery tracking. Integrated Google Maps API for location and route optimization.",
      technologies: ["HTML", "CSS", "JavaScript", "Google Maps API", "REST APIs"],
      github: "https://github.com/Abhishekpatidar9/food-order",
      live: null,
      featured: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="section-padding bg-white dark:bg-dark-300">
      <div className="container-custom">
                 <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 50 }}
           animate={inView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8 }}
           className="text-center mb-16 relative"
         >
           {/* 3D Floating Elements around header */}
           <motion.div
             animate={{ 
               y: [0, -20, 0],
               rotateZ: [0, 10, 0],
               scale: [1, 1.1, 1]
             }}
             transition={{ 
               duration: 4, 
               repeat: Infinity, 
               ease: "easeInOut" 
             }}
             className="absolute -top-4 -left-4 w-6 h-6 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-40"
             style={{ transformStyle: 'preserve-3d' }}
           />
           
           <motion.div
             animate={{ 
               y: [0, 15, 0],
               rotateZ: [0, -15, 0],
               scale: [1, 0.8, 1]
             }}
             transition={{ 
               duration: 3, 
               repeat: Infinity, 
               ease: "easeInOut",
               delay: 1
             }}
             className="absolute -bottom-2 -right-4 w-4 h-4 bg-gradient-to-r from-primary-300 to-primary-500 rounded-full opacity-30"
             style={{ transformStyle: 'preserve-3d' }}
           />
           
           <motion.h2 
             className="text-4xl font-bold mb-4 gradient-text relative"
             whileHover={{ 
               scale: 1.02,
               rotateY: 2,
               transition: { duration: 0.3 }
             }}
             style={{ transformStyle: 'preserve-3d' }}
           >
             Featured Projects
           </motion.h2>
           <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
             Here are some of my recent projects that showcase my skills and passion for web development.
           </p>
         </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
                         <motion.div
               key={index}
               variants={itemVariants}
               className="card group overflow-hidden"
               whileHover={{ 
                 rotateY: 5,
                 rotateX: 2,
                 scale: 1.02,
                 transition: { duration: 0.3 }
               }}
               style={{
                 transformStyle: 'preserve-3d',
                 perspective: '1000px'
               }}
             >
                             {/* Project Content */}
               <div className="relative p-6">
                 {/* 3D Floating Elements */}
                 <motion.div
                   animate={{ 
                     y: [0, -10, 0],
                     rotateZ: [0, 5, 0]
                   }}
                   transition={{ 
                     duration: 4, 
                     repeat: Infinity, 
                     ease: "easeInOut",
                     delay: index * 0.5
                   }}
                   className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-60"
                   style={{ transformStyle: 'preserve-3d' }}
                 />
                 
                 <motion.div
                   animate={{ 
                     y: [0, 15, 0],
                     rotateZ: [0, -5, 0]
                   }}
                   transition={{ 
                     duration: 3, 
                     repeat: Infinity, 
                     ease: "easeInOut",
                     delay: index * 0.3
                   }}
                   className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-primary-300 to-primary-500 rounded-full opacity-40"
                   style={{ transformStyle: 'preserve-3d' }}
                 />
                 
                 {project.featured && (
                   <motion.div 
                     className="absolute top-4 right-4"
                     whileHover={{ scale: 1.1, rotateZ: 5 }}
                     style={{ transformStyle: 'preserve-3d' }}
                   >
                     <span className="px-3 py-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-xs font-semibold rounded-full shadow-lg">
                       Featured
                     </span>
                   </motion.div>
                 )}
                
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100 pr-20">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                                 {/* Technologies */}
                 <div className="flex flex-wrap gap-2 mb-4">
                   {project.technologies.map((tech, techIndex) => (
                     <motion.span
                       key={techIndex}
                       whileHover={{ 
                         scale: 1.1, 
                         rotateZ: 2,
                         y: -2,
                         transition: { duration: 0.2 }
                       }}
                       className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                       style={{ transformStyle: 'preserve-3d' }}
                     >
                       {tech}
                     </motion.span>
                   ))}
                 </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300 text-sm font-medium"
                  >
                    <FiGithub size={16} />
                    Code
                  </motion.a>
                  {project.live && (
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300 text-sm font-medium"
                    >
                      <FiExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          {/* Decorative Elements */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-white dark:bg-dark-300 px-4 text-gray-500 dark:text-gray-400">
                <FiCode size={24} className="inline-block" />
              </span>
            </div>
          </div>

                     {/* Enhanced 3D Button */}
           <motion.div
             whileHover={{ scale: 1.02 }}
             className="inline-block"
             style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
           >
             <motion.a
               whileHover={{ 
                 scale: 1.05,
                 rotateY: 10,
                 rotateX: 5,
                 y: -5,
                 transition: { duration: 0.3 }
               }}
               whileTap={{ scale: 0.95 }}
               href="https://github.com/Abhishekpatidar9"
               target="_blank"
               rel="noopener noreferrer"
               className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
               style={{ transformStyle: 'preserve-3d' }}
             >
               {/* 3D Animated Background */}
               <motion.div 
                 className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                 animate={{ 
                   rotateY: [0, 180, 360],
                   scale: [1, 1.1, 1]
                 }}
                 transition={{ 
                   duration: 3, 
                   repeat: Infinity, 
                   ease: "linear" 
                 }}
               />
               
               {/* 3D GitHub Icon */}
               <motion.div
                 animate={{ 
                   rotate: [0, 10, -10, 0],
                   rotateY: [0, 15, 0],
                   y: [0, -2, 0]
                 }}
                 transition={{ 
                   duration: 2, 
                   repeat: Infinity, 
                   ease: "easeInOut" 
                 }}
                 style={{ transformStyle: 'preserve-3d' }}
               >
                 <FiGithub size={24} />
               </motion.div>
               
               {/* Text with 3D effect */}
               <span className="relative z-10" style={{ transformStyle: 'preserve-3d' }}>
                 Explore More Projects
               </span>
               
               {/* 3D Arrow Icon */}
               <motion.div
                 initial={{ x: 0, rotateY: 0 }}
                 whileHover={{ x: 8, rotateY: 15 }}
                 transition={{ duration: 0.3 }}
                 className="relative z-10"
                 style={{ transformStyle: 'preserve-3d' }}
               >
                 <FiExternalLink size={20} />
               </motion.div>
             </motion.a>
           </motion.div>

          {/* Additional Decorative Elements */}
          <div className="mt-8 flex justify-center space-x-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
              className="w-2 h-2 bg-primary-500 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              className="w-2 h-2 bg-primary-400 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
              className="w-2 h-2 bg-primary-300 rounded-full"
            ></motion.div>
          </div>

          {/* Subtle Text */}
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Discover more of my work and contributions
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 