import projectOneImg from "../assets/project1.png";
import React from "react";

const projects = [
  {
    title: "Project One",
    description:
      "A brief description of Project One, including key features and technologies used.",
    techStack: "React, Node.js, Express, MongoDB",
    liveLink: "https://example.com",
    githubLink: "https://github.com/NirbhaySingh74/MERN-CHAT-APP",
    imageUrl: projectOneImg,
  },
  {
    title: "Project Two",
    description:
      "A brief description of Project Two, including key features and technologies used.",
    techStack: "Vue, Laravel, MySQL",
    liveLink: "https://example.com",
    githubLink: "https://github.com/example/project-two",
    imageUrl: "https://via.placeholder.com/400",
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-gray-800 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-gray-900 rounded-lg overflow-hidden"
            >
              {/* Left Side */}
              <div className="p-6 md:w-1/2">
                <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
                <p className="text-lg mb-4">{project.description}</p>
                <p className="text-lg mb-4">
                  <strong>Tech Stack:</strong> {project.techStack}
                </p>
                <div className="flex flex-col space-y-2">
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
              {/* Right Side */}
              <div className="md:w-1/2">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
