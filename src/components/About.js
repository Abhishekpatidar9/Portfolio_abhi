import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUser, FiBook, FiTarget, FiAward } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "Bachelor of Technology in Information Technology",
      institution: "Madhav Institute of Technology and Science, Gwalior",
      year: "2022 - 2026",
      description: "Information Technology graduate and aspiring Software Developer with expertise in MERN Stack development, Data Structures & Algorithms, and AI integration. Passionate about creating scalable web applications and solving real-world problems through technology."
    }
  ];

  const interests = [
    "Web Development",
    "Frontend Technologies",
    "User Experience Design",
    "Problem Solving",
    "Open Source Projects",
    "Learning New Technologies"
  ];

  const goals = [
    "Secure a full-time Software Developer position",
    "Contribute to impactful projects",
    "Continue learning and growing in the tech industry",
    "Build innovative web applications"
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-300">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm an Information Technology graduate passionate about building modern,
  scalable, and user-friendly web applications. With expertise in MERN Stack
  development, JavaScript, React.js, and AI integration, I enjoy solving
  real-world problems and creating impactful digital solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="card">
              <div className="flex items-center mb-6">
                <FiUser className="text-primary-600 dark:text-primary-400 text-2xl mr-3" />
                <h3 className="text-2xl font-semibold">Background</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                I'm an Information Technology graduate passionate about creating modern, 
                user-friendly web applications. With a strong foundation in HTML, CSS, JavaScript, 
                and React, I enjoy turning complex problems into simple, beautiful solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I recently completed a 6-month internship where I gained hands-on experience in real-world web development practices, including front-end and back-end technologies. I'm now actively seeking opportunities to contribute to impactful web projects and further grow as a web developer.
              </p>
            </div>
          </motion.div>

          {/* Education & Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Education */}
            <div className="card">
              <div className="flex items-center mb-4">
                <FiBook className="text-primary-600 dark:text-primary-400 text-xl mr-3" />
                <h4 className="text-xl font-semibold">Education</h4>
              </div>
              {education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h5 className="font-semibold text-gray-900 dark:text-gray-100">
                    {edu.degree}
                  </h5>
                  <p className="text-primary-600 dark:text-primary-400 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">
                    {edu.year}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Interests */}
            <div className="card">
              <div className="flex items-center mb-4">
                <FiAward className="text-primary-600 dark:text-primary-400 text-xl mr-3" />
                <h4 className="text-xl font-semibold">Interests</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Goals */}
            <div className="card">
              <div className="flex items-center mb-4">
                <FiTarget className="text-primary-600 dark:text-primary-400 text-xl mr-3" />
                <h4 className="text-xl font-semibold">Career Goals</h4>
              </div>
              <ul className="space-y-2">
                {goals.map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-600 dark:text-gray-400">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 