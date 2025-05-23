
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projectCategories = ['All', 'Web App', 'Mobile', 'UI/UX'];

const projectsData = [
  {
    id: 1,
    title: 'Pet Adoption Platform',
    description: 'A full-featured Pet adoption platform with product management, cart functionality, and payment processing.',
    category: 'Web App',
    image: 'https://i.ibb.co/gZqLNMxc/Screenshot-2025-05-18-214531.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveLink: 'https://pet-adoption-f71aa.web.app/',
    githubLink: 'https://github.com/Auntim/pet-adoption-A12-client',
  },
  {
    id: 2,
    title: 'Lawer Management web',
    description: 'Lewio is an innovative service-sharing platform designed exclusively for lawyers and legal professionals. It empowers users to add, browse, book, and manage legal services seamlessly.',
    category: 'Web App',
    image: 'https://i.ibb.co/23BfR7FK/Screenshot-84.png',
    technologies: ['React.js', 'Firebase', 'MongoDb', 'Tailwind CSS'],
    liveLink: 'https://laywer-service.web.app/',
    githubLink: 'https://github.com/Auntim/assign-ment-11-client-side',
  },
  {
    id: 3,
    title: 'Movie Portal',
    description: 'Welcome to Movie Portal, your ultimate destination for discovering, exploring, and managing your favorite movies',
    category: 'Mobile',
    image: 'https://i.ibb.co/MTCgK3n/movie.png',
    technologies: ['React.js', 'react-router-dom', 'Redux', 'Express', 'MongoDB'],
    liveLink: 'https://movie-store-fb2c5.web.app/',
    githubLink: 'https://github.com/Auntim/assign-ment-10-client-side',
  },
  {
    id: 4,
    title: 'Gadget Heaven',
    description: 'Gadget Heaven is an interactive e-commerce website designed to offer a wide variety of tech products, from the latest gadgets to essential accessories. The project showcases a clean, user-friendly interface, dynamic data handling, and interactive features.',
    category: 'UI/UX',
    image: 'https://i.ibb.co/WWZttcDZ/gadget.png',
    technologies: ['Figma', 'Adobe XD', 'Illustrator'],
    liveLink: 'https://helpful-crumble-73f4c4.netlify.app/',
    githubLink: 'https://github.com/Auntim/Gadget-Heaven',
  },
  {
    id: 5,
    title: 'Eco-Adventure Website',
    description: 'A responsive website for an eco-adventure company, showcasing tours, booking options, and customer testimonials.',
    category: 'Web App',
    image: 'https://i.ibb.co/wRkfQNq/Screenshot-26.png',
    technologies: ['React', 'Socket.io', 'Express',],
    liveLink: 'https://eco-adventure-b6481.web.app/',
    githubLink: 'https://github.com/Auntim/assign-ment-09',
  },
  {
    id: 6,
    title: 'Player Management App',
    description: 'Welcome to the Player Management App! This application allows users to manage a roster of players, adding and removing them as needed while keeping track of their selected players and available options.',
    category: 'web app',
    image: 'https://i.ibb.co/1JQWxJFk/cricket.png',
    technologies: ['HTML/CSS', 'Firebase', 'Javascript'],
    liveLink: 'https://storied-biscuit-e04c76.netlify.app/',
    githubLink: 'https://github.com/Auntim/assignment-7-dream11',
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeCategory);

  const displayedProjects = filteredProjects.slice(0, visibleProjects);

  const loadMoreProjects = () => {
    setVisibleProjects(prev => Math.min(prev + 2, filteredProjects.length));
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full mb-4">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Explore my recent work showcasing my skills and expertise in creating innovative digital solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {projectCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={activeCategory === category ? "gradient-bg" : ""}
              onClick={() => {
                setActiveCategory(category);
                setVisibleProjects(4);
              }}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {displayedProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="bg-card rounded-xl overflow-hidden shadow-md card-hover border"
            >
              <div className="relative overflow-hidden h-64">
                <img alt={`Screenshot of ${project.title}`} className="w-full h-full object-cover p-3" src={project.image} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-6">
                    <span className="inline-block px-2 py-1 text-xs font-medium text-white bg-blue-600 rounded mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium bg-secondary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-4 w-4" /> Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {visibleProjects < filteredProjects.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center mt-12"
          >
            <Button onClick={loadMoreProjects} className="gradient-bg">
              Load More <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
