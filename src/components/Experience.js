import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Rishishwar Industry ,Techori",
      location: "Remote",
      duration: "6 months",
      period: "june 2025 - november 2025",
      description: "Worked on developing and maintaining web applications using modern technologies. Collaborated with senior developers to implement new features and improve existing functionality.",
      responsibilities: [
        "Developed responsive web applications using React.js and modern JavaScript",
        "Collaborated with cross-functional teams to deliver high-quality software solutions",
        "Participated in code reviews and contributed to team best practices",
        "Worked with RESTful APIs and integrated third-party services",
        "Gained experience with version control using Git and GitHub"
      ],
      technologies: ["React.js", "JavaScript", "HTML/CSS", "Git", "REST APIs"],
      achievements: [
        "Successfully delivered 3 major features ahead of schedule",
        "Received positive feedback from team lead for code quality and collaboration",
        "Learned industry best practices and agile development methodologies"
      ]
    },
    {
  title: "Post LLM Training Intern",
  company: "Ethara AI",
  location: "Gurugram, Haryana",
  duration: "3 months",
  period: "March 2026 - May 2026",
  description: "Contributed to Large Language Model (LLM) training and evaluation projects by assessing AI-generated responses, improving output quality, and ensuring alignment with project guidelines.",
  responsibilities: [
    "Evaluated AI-generated responses for accuracy, relevance, and overall quality",
    "Performed data annotation, response ranking, and quality assurance tasks for LLM training",
    "Reviewed complex prompts and identified inconsistencies in model outputs",
    "Ensured compliance with project guidelines to improve model reliability",
    "Collaborated on AI evaluation workflows and content validation processes"
  ],
  technologies: [
    "LLM Evaluation", "Prompt Engineering", "Data Annotation", "Generative AI", "AI Model Evaluation", "Quality Assurance"],
  achievements: [
    "Contributed to improving the quality and reliability of AI-generated outputs",
    "Gained hands-on experience in LLM training and evaluation workflows",
    "Developed expertise in prompt analysis, response assessment, and AI quality assurance"
  ]
}
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-dark-200">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here's a summary of my professional experience and the valuable skills I've gained.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card mb-8 relative"
            >
              {/* Timeline indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
              
              <div className="pl-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                      {experience.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <FiBriefcase size={16} />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiMapPin size={16} />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiCalendar size={16} />
                        <span>{experience.period}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                      {experience.duration}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {experience.description}
                </p>

                {/* Responsibilities */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {experience.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600 dark:text-gray-400">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center">
                    <FiAward className="mr-2 text-primary-600 dark:text-primary-400" />
                    Key Achievements:
                  </h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Future Goals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="card max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Looking Forward
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm actively seeking full-time opportunities in software development and frontend engineering roles. 
              I'm passionate about creating user-friendly applications and contributing to innovative projects 
              that make a difference.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 