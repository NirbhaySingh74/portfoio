// src/components/Header.tsx

import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full py-4 bg-black text-white flex justify-center items-center fixed top-0 left-0 z-10">
      <nav>
        <ul className="flex space-x-8">
          <li>
            <a
              href="#home"
              className="hover:text-indigo-500 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-indigo-500 transition duration-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="hover:text-indigo-500 transition duration-300"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-indigo-500 transition duration-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-indigo-500 transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
