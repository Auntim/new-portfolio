
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Server, Figma, LineChart, LogIn } from 'lucide-react';

const skillsCategories = [
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Frontend Development',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design', 'Next.js']
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: 'Backend Development',
    skills: ['Node.js', 'Express', 'RESTful APIs',]
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: 'Database Management',
    skills: ['MongoDB', 'Github']
  },
  {
    icon: <LogIn className="h-6 w-6" />,
    title: 'Authentication',
    skills: ['Firebase', 'Clerk', 'User Testing']
  },

  {
    icon: <LineChart className="h-6 w-6" />,
    title: 'Other Skills',
    skills: ['Project Management', 'Analytics', 'Technical Writing']
  }
];

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full mb-4">
            My Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            A comprehensive overview of my technical skills and areas of expertise in software development and design.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillsCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-card rounded-xl p-6 shadow-md border card-hover"
            >
              <div className="p-3 w-fit rounded-lg mb-4 gradient-bg text-white">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 text-sm bg-secondary rounded-full text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default Skills;
