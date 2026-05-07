
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-black/20 pb-12 border-t"

    >
      <div className="">


        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="border-t border-border pt-8 flex flex-col sm:flex-row justify-center  items-center text-sm text-muted-foreground"
        >
          <p className='bbh-regular text-center text-slate-400 text-xl'>&copy; {currentYear} .Auntim Hossen Saikat All rights reserved.</p>

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
