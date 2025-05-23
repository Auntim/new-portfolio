
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Server, Figma, LineChart } from 'lucide-react';

const skillsCategories = [
  {
    icon: <Code className="h-6 w-6" />,
    title: 'Frontend Development',
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design', 'Next.js']
  },
  {
    icon: <Server className="h-6 w-6" />,
    title: 'Backend Development',
    skills: ['Node.js', 'Express', 'RESTful APIs', 'Authentication']
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: 'Database Management',
    skills: ['MongoDB', 'Firebase', 'Git']
  },
  {
    icon: <Layout className="h-6 w-6" />,
    title: 'UI/UX Design',
    skills: ['User Research', 'Design Systems', 'User Testing']
  },
  {
    icon: <Figma className="h-6 w-6" />,
    title: 'Design Tools',
    skills: ['Figma', 'photoshop', 'Illustrator']
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 p-8 bg-card rounded-xl shadow-md border"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-4xl font-bold gradient-text mb-2">2+</h3>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold gradient-text mb-2">20+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-semibold gradient-text mb-2">Still learning Progress</h3>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-4xl font-bold gradient-text mb-2">6+</h3>
              <p className="text-muted-foreground">Technologies Mastered</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
