import profilePic from "../assets/profilePic.png";

import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-black text-white h-screen flex flex-col justify-center items-center text-center px-4">
      <img
        src={profilePic}
        alt="Profile"
        className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-6 border-4 border-gray-800 shadow-lg"
      />
      <h1 className="text-3xl md:text-5xl font-bold mb-2">
        Hi, I'm <span className="text-indigo-500">Nirbhay</span>
      </h1>
      <p className="text-lg md:text-2xl mb-4">
        A Passionate{" "}
        <span className="text-indigo-500">MERN Stack Developer</span>
      </p>
      <a
        href="https://drive.google.com/file/d/1rTYJhGVllAoBq5T9nYfr8ezuNveFZmpT/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-indigo-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-indigo-600 transition duration-300"
      >
        View My Resume
      </a>
    </section>
  );
};

export default Hero;
