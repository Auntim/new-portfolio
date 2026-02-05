
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import image1 from '@/assets/images/profile4.png';
import ThreeDCarousel from './ThreeDCarousel';
import TypingText from './TypingText';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex mx-auto items-center hero-pattern section-padding pt-24 overflow-hidden w-screen"
      style={{
        background: "#000000",
        backgroundImage: `
        radial-gradient(circle, rgba(255, 255, 255, 0.2) 1.5px, transparent 1.5px)
      `,
        backgroundSize: "30px 30px",
        backgroundPosition: "0 0",
      }}
    >
      <div className="px-4 sm:px-6 lg:px-8 w-full sm:w-11/12 lg:w-10/12 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-3xl md:text-5xl lg:text-4xl font-bold mb-6"
            >
              Hi, I'm{" "}
              <span className="gradient-text">
                <TypingText
                  texts={[
                    "Auntim Hossen Saikat",
                    "Full-Stack Enthusiast",
                    'Web Developer'
                  ]}
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg mt-8 text-justify leading-tight tracking-wider"
            >
              I create beautiful, functional, and user-friendly digital experiences. With expertise in both frontend and backend technologies, I bring ideas to life.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className=" rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none"
                onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className=" rounded-tl-xl rounded-br-xl rounded-tr-none rounded-bl-none"
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex items-center gap-4 mt-8"
            >
              <a href="https://github.com/Auntim" className="text-white hover:text-foreground transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/auntim-hossen-saikat/" className="text-white hover:text-foreground transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-white hover:text-foreground transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-75 mt-6 md:mt-0"></div>
              <div className="relative overflow-hidden rounded-xl md:rounded-full border-4 border-white shadow-lg ">
                <img alt="Professional portrait" className="w-80 h-80 md:w-[400px] md:h-[400px] object-cover" src={image1} />

              </div>
              {/* <ThreeDCarousel /> */}
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Hero;


