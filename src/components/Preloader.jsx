import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Preloader.css';

const greetings = [
    "Hello",
    "Assala-Mualaikum",
    "Bonjour",
    "Hola",
    "Ciao",
    "Namaste",
    "Konnichiwa"
];

const Preloader = ({ onFinish }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {

        if (index < greetings.length - 1) {
            const timeout = setTimeout(() => {
                setIndex(index + 1);
            }, 350);

            return () => clearTimeout(timeout);
        } else {

            setTimeout(() => {
                onFinish();
            }, 800);
        }
    }, [index, onFinish]);

    return (
        <motion.div
            className="preloader-container"
            // Animation for when the preloader finally disappears
            initial={{ y: 0 }}
            exit={{ y: "-100vh", transition: { duration: 0.8, ease: "easeInOut" } }}
        >
            <div className="preloader-text-wrapper">
                {/* The dot before the text (optional, looks cool) */}
                <span className="dot"></span>
                <motion.p
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    className="preloader-text"
                >
                    {greetings[index]}
                </motion.p>
            </div>
        </motion.div>
    );
};

export default Preloader;