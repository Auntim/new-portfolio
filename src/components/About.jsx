
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Award, Briefcase, GraduationCap } from 'lucide-react';
import Spider from './Spider';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >

          <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-muted-foreground">
            A passionate developer with a keen eye for design and a commitment to creating exceptional user experiences.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-lg"></div>

            <Spider />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-6">
              I'm a <span className='text-cyan-400'>Frontend developer</span> with over 2 years of experience building web applications and digital products. My journey in tech began with a curiosity about how things work on the web, which led me to pursue a degree in Computer Science.
            </p>
            <p className="text-muted-foreground mb-6">
              I specialize in creating responsive, accessible, and performant web applications using modern technologies. My approach combines technical expertise with a deep understanding of user needs to deliver solutions that not only work flawlessly but also provide exceptional user experiences.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <div className="mr-3 p-2 bg-blue-100 text-blue-700 rounded-md">
                  <Award size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Experience</h4>
                  <p className="text-sm text-muted-foreground">2+ Years</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 p-2 bg-purple-100 text-purple-700 rounded-md">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Projects</h4>
                  <p className="text-sm text-muted-foreground">20+ Completed</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 p-2 bg-green-100 text-green-700 rounded-md">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="font-medium">Education</h4>
                  <p className="text-sm text-muted-foreground">B.Sc in Computer Science & Engineering</p>
                </div>
              </div>
            </div>

            <a href="/resume.pdf" download>
              <Button className="gradient-bg">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
