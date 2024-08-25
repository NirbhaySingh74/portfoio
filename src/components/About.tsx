import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 bg-[var(--background-color)] text-[var(--text-color)]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm Nirbhay, a passionate Full Stack Developer with a strong
          background in building dynamic and responsive web applications. I have
          experience in creating full-stack applications using modern
          technologies and frameworks, and I'm always eager to learn and adopt
          to new challenges. So, if you have something cool to build feel free
          to reach out!!
        </motion.p>
      </div>
    </section>
  );
};

export default About;
