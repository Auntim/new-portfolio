import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projectsData = [

  {
    id: 1,
    title: 'Ai-Fiesta(All Ai Tools In One)',
    description: 'Welcome to Ai-Fiesta, Ai-Fiesta offers a suite of powerful features powered by cutting-edge AI technologies.',
    category: 'Mobile',
    image: 'https://i.ibb.co.com/LDw5jzVn/Screenshot-2025-10-20-222548.png',
    technologies: ['Next.js', 'Clerk Auth', 'Redux', 'ShadcnUI', 'Ai APIs', 'Vercel', 'Tailwind CSS', 'Firebase'],
    liveLink: 'https://ai-fiesta-v2.vercel.app/',
    githubLink: 'https://github.com/Auntim/Ai-fiesta-v2',
  },
  {
    id: 2,
    title: 'K72',
    description: ' K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. ',
    category: 'Web App',
    image: 'https://i.ibb.co.com/PvCZ6FNN/Screenshot-2025-10-20-223546.png',
    technologies: ['React', 'Gsap', 'Express', 'Tailwind CSS', 'Node.js',],
    liveLink: 'https://k72-project-jet.vercel.app/',
    githubLink: 'https://github.com/Auntim/k72-project',
  },
  {
    id: 3,
    title: 'Pet Adoption Platform',
    description: 'A full-featured Pet adoption platform with product management, cart functionality, and payment processing.',
    category: 'Web App',
    image: 'https://i.ibb.co/gZqLNMxc/Screenshot-2025-05-18-214531.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Firebase', 'Tailwind CSS', 'Express JS'],
    liveLink: 'https://pet-adoption-f71aa.web.app/',
    githubLink: 'https://github.com/Auntim/pet-adoption-A12-client',
  },
  {
    id: 4,
    title: 'Lawer Management web',
    description: 'Lewio is an innovative service-sharing platform designed exclusively for lawyers and legal professionals. It empowers users to add, browse, book, and manage legal services seamlessly.',
    category: 'Web App',
    image: 'https://i.ibb.co/23BfR7FK/Screenshot-84.png',
    technologies: ['React.js', 'Firebase', 'MongoDb', 'Tailwind CSS', ' Express JS'],
    liveLink: 'https://laywer-service.web.app/',
    githubLink: 'https://github.com/Auntim/assign-ment-11-client-side',
  },
  {
    id: 5,
    title: 'Gadget Heaven',
    description: 'Gadget Heaven is an interactive e-commerce website designed to offer a wide variety of tech products, from the latest gadgets to essential accessories. The project showcases a clean, user-friendly interface, dynamic data handling, and interactive features.',
    category: 'UI/UX',
    image: 'https://i.ibb.co/WWZttcDZ/gadget.png',
    technologies: ['JavaScript', 'HTML', 'daisyUI', 'React'],
    liveLink: 'https://helpful-crumble-73f4c4.netlify.app/',
    githubLink: 'https://github.com/Auntim/Gadget-Heaven',
  },

  {
    id: 6,
    title: 'Player Management App',
    description: 'Welcome to the Player Management App! This application allows users to manage a roster of players, adding and removing them as needed while keeping track of their selected players and available options.',
    category: 'Web App',
    image: 'https://i.ibb.co/1JQWxJFk/cricket.png',
    technologies: ['HTML/CSS', 'Firebase', 'Javascript'],
    liveLink: 'https://storied-biscuit-e04c76.netlify.app/',
    githubLink: 'https://github.com/Auntim/assignment-7-dream11',
  },
];

const Projects = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
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
    <section id="projects" className="section-padding"
      style={{
        background: "#000000",
        backgroundImage: `
        radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)
      `,
        backgroundSize: "30px 30px",
        backgroundPosition: "0 0",
      }}
    >
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-[#ED985F]">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Explore my recent work showcasing my skills and expertise in creating innovative digital solutions.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="bg-card rounded-xl overflow-hidden shadow-md card-hover border"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  alt={`Screenshot of ${project.title}`}
                  className="w-full h-full object-cover p-3"
                  src={project.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">

                </div>
              </div>

              <div className="p-6">
                <div className="mb-2">
                  <h3 className="text-xl font-bold text-white mb-1">Name : {project.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium bg-secondary rounded border border-blue-600 hover:scale-90 transition-all">
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
      </div>
    </section>
  );
};

export default Projects;
