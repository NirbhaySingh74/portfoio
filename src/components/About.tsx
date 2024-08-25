import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-12 px-4 bg-[var(--background-color)] text-[var(--text-color)]"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-8 text-indigo-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg md:text-2xl mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm Nirbhay, a passionate Full Stack Developer with a strong
          background in building dynamic and responsive web applications. I
          specialize in creating full-stack applications using modern
          technologies and frameworks. I'm always eager to learn and adapt to
          new challenges. If you have an exciting project in mind, feel free to
          reach out—let's create something amazing together!
        </motion.p>
      </div>
    </section>
  );
};

export default About;
