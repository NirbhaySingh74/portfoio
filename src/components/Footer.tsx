import React from "react";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa"; // Social media icons

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <ul className="flex flex-col md:flex-row md:space-x-8">
              <li className="mb-2 md:mb-0">
                <a
                  href="#"
                  className="hover:text-indigo-500 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li className="mb-2 md:mb-0">
                <a
                  href="#about"
                  className="hover:text-indigo-500 transition duration-300"
                >
                  About
                </a>
              </li>
              <li className="mb-2 md:mb-0">
                <a
                  href="#projects"
                  className="hover:text-indigo-500 transition duration-300"
                >
                  Projects
                </a>
              </li>
              <li className="mb-2 md:mb-0">
                <a
                  href="#skills"
                  className="hover:text-indigo-500 transition duration-300"
                >
                  Skills
                </a>
              </li>
              <li className="mb-2 md:mb-0">
                <a
                  href="#contact"
                  className="hover:text-indigo-500 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li>
                <a
                  href="https://x.com/nirbhay_74"
                  className="hover:text-indigo-500 transition duration-300"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/NirbhaySingh74"
                  className="hover:text-indigo-500 transition duration-300"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nirbhay-singh-b8a169207/"
                  className="hover:text-indigo-500 transition duration-300"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>

          <div className="text-sm">
            <p className="mb-0">
              © {new Date().getFullYear()} Nirbhay. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
