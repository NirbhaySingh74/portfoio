import React from "react";
import { motion } from "framer-motion";
import projectOneImg from "../assets/project1.png";
import projectTwoImg from "../assets/projec2.png";
import projectThreeImg from "../assets/project3.png";

const projects = [
  {
    title: "Chatify",
    description:
      "Developed chat app which allows users to send messages and see users' online status.",
    techStack: "React, Tailwind, Node.js, Express, MongoDB, Socket.io",
    liveLink: "https://chatify-teal.vercel.app/",
    githubLink: "https://github.com/NirbhaySingh74/MERN-CHAT-APP",
    imageUrl: projectOneImg,
  },
  {
    title: "Shopeasy",
    description: "Developed a web app that empowers users to sell products. ",
    techStack: "React, Tailwind, Node, Express, MongoDB, JWT",
    liveLink: "https://shopeasy-mu.vercel.app/",
    githubLink: "https://github.com/NirbhaySingh74/Ecommerce-MERN",
    imageUrl: projectTwoImg,
  },
  {
    title: "Picsearch",
    description:
      "Developed Picsearch which allows users to search different types of images using the Unsplash API.",
    techStack: "React, Tailwind",
    liveLink: "https://picsearch-two.vercel.app/",
    githubLink: "https://github.com/NirbhaySingh74/unsplash",
    imageUrl: projectThreeImg,
  },
];

const Projects: React.FC = () => {
  return (
    <motion.section
      id="projects"
      className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center text-indigo-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              {/* Left Side */}
              <div className="p-6 md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4 text-indigo-400">
                  {project.title}
                </h3>
                <p className="text-lg mb-4 text-gray-300">
                  {project.description}
                </p>
                <p className="text-lg mb-4 text-gray-400">
                  <strong>Tech Stack:</strong> {project.techStack}
                </p>
              </div>
              {/* Right Side */}
              <div className="md:w-1/2 flex flex-col">
                <motion.img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full max-h-80 object-cover transition-transform duration-300 transform hover:scale-105"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                />
                {/* Links below the image */}
                <div className="flex flex-col space-y-2 p-6">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-indigo-500 text-white font-semibold px-4 py-2 rounded-full text-center hover:bg-indigo-600 transition duration-300"
                  >
                    Live Link
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white font-semibold px-4 py-2 rounded-full text-center hover:bg-gray-600 transition duration-300"
                  >
                    GitHub Link
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
